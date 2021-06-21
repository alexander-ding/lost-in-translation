const BASE_URL = 'https://lost-in-translation-gh.herokuapp.com'

export const getLanguages = () => {
  return fetch(BASE_URL + '/api/languages', {
    method: 'GET',
  }).then(r => {
    if (!r.ok) {
      throw r;
    }
    return r.json();
  }).then(data => {
    return Object.fromEntries(data.map(datum => [datum.code, datum]));
  });
}

export const postTranslate = (text, fromLanguage, hops) => {
  const allHops = [fromLanguage, ...hops, fromLanguage];
  const params = new URLSearchParams({
    hops: allHops.join(','),
    from: fromLanguage,
  });
  return fetch(BASE_URL + '/api/translate?' + params.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text,
    }),
  }).then(r => {
    if (!r.ok) {
      throw r;
    }
    return r.json();
  });
}