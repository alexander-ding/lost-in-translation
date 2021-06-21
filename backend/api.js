const express = require('express');
const router = express.Router();
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate();

const DEFAULT_HOPS = 6;

const languages = new Object();

translate.getLanguages().then(res => {
  // remove duplicate entries
  const allLanguages = res[0].filter(entry => !['he', 'zh'].includes(entry.code));
  languages.all = allLanguages;
  languages.codes = allLanguages.map(entry => entry.code);
  languages.length = languages.codes.length;
  languages.map = Object.fromEntries(allLanguages.map(entry => [entry.code, entry.name]));
  languages.fromCode = (code) => languages.map[code];
})

const translateHops = async (text, hops) => {
  if (hops.length < 2) {
    return text;
  }
  let latestText = text;
  for (let i = 1; i < hops.length; i++) {
    const from = hops[i - 1];
    const to = hops[i];
    [latestText] = await translate.translate(latestText, {
      from,
      to,
    });
  }
  return latestText
}

const getRandomHops = (hopCount = DEFAULT_HOPS) => {
  let hops = new Array(hopCount); for (let i = 0; i < hopCount; ++i) hops[i] = languages.codes[Math.floor(Math.random() * languages.length)];
  return hops;
}

const validateHops = (hops, res) => {
  // validate hops
  for (const language of hops) {
    if (!languages.codes.includes(language)) {
      res.status(400);
      res.send(language + ' is not a supported language.');
      return false;
    }
  }

  for (let i = 1; i < hops.length; i++) {
    const prevLanguage = hops[i - 1];
    const currLanguage = hops[i];
    if (prevLanguage === currLanguage) {
      res.status(400);
      res.send('Cannot have the same language back to back.');
      return false;
    }
  }

  return true;
}

router.post('/translate', (req, res) => {
  const fromLanguage = req.query.from ? req.query.from : 'en';
  const hops = req.query.hops ? req.query.hops.split(',') : [fromLanguage, ...getRandomHops(), fromLanguage];

  if (!validateHops(hops, res)) return;

  const text = req.body.text;
  if (!text) {
    res.status(400);
    res.send('Must supply non-empty text to translate.');
    return;
  }

  translateHops(text, hops).then(translated => {
    res.send({
      originalText: text,
      translatedText: translated,
      hops: hops.map(code => ({
        name: languages.fromCode(code),
        code,
      })),
    });
  }).catch(err => {
    console.error(err)
    res.status(500);
    res.send(err);
  })
});

router.get('/languages', (req, res) => {
  res.send(languages.all);
})

module.exports = router;