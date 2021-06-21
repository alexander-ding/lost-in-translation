import React, { useCallback, useEffect, useState } from 'react';
import HomePage from '../components/HomePage';
import { DEFAULT_HOPS, getRandomHops } from '../utils';
import { getLanguages, postTranslate } from '../utils/API';

const HomePageContainer = () => {
  const [fromLanguage, setFromLanguage] = useState('en');
  const [allLanguages, setAllLanguages] = useState({});
  const [hops, setHops] = useState([]);
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getLanguages().then(languages => {
      setAllLanguages(languages);
      setHops(getRandomHops(languages, 'en'));
    })
  }, []);

  // regenerate hops every time fromLanguage is changed
  const updateFromLanguage = (newFromLanguage) => {
    if (fromLanguage === newFromLanguage) return;
    setFromLanguage(newFromLanguage);
    if (Object.keys(allLanguages).length === 0) return;
    setHops(getRandomHops(allLanguages, fromLanguage, hops.length ? hops.length : DEFAULT_HOPS))
  }

  const translate = useCallback(() => {
    if (!inputText) {
      setTranslatedText('');
      return;
    }

    setIsLoading(true);
    postTranslate(inputText, fromLanguage, hops).then(data => {
      setIsLoading(false);
      setTranslatedText(data.translatedText);
    }).catch(e => {
      setIsLoading(false);
      setTranslatedText('Error: failed to translate');
    })
  }, [inputText, fromLanguage, hops, setTranslatedText]);

  const copyText = () => {
    navigator.clipboard.writeText(translatedText);
  }

  return <HomePage translate={translate} inputText={inputText} updateText={setInputText} translatedText={translatedText} languages={allLanguages} currentLanguage={fromLanguage} updateLanguage={updateFromLanguage} hops={hops} updateHops={setHops} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isLoading={isLoading} copy={copyText} />;
}

export default HomePageContainer;