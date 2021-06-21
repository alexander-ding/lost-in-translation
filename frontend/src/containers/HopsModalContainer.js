import React, { useState } from 'react';
import ErrorMessage from '../components/ErrorMessage';
import HopsModal from '../components/HopsModal';
import { getRandomHop, MAX_HOPS, validateHops } from '../utils';

const HopsModalContainer = ({ currentLanguage, languages, hops, updateHops, isOpen, setIsOpen }) => {
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [proposedLanguage, setProposedLanguage] = useState('');
  const [blockingLanguage, setBlockingLanguage] = useState('');

  const showMessage = (language, otherLanguage) => {
    setProposedLanguage(languages[language].name);
    setBlockingLanguage(languages[otherLanguage].name);
    setIsShowMessage(true);
    setTimeout(() => {
      setIsShowMessage(false);
    }, 4000);
  }

  const updateLanguage = (index, value) => {
    updateHops(hops.map((hop, i) => index === i ? value : hop));
  }
  const deleteLanguage = (index) => {
    const prevLanguage = index === 0 ? currentLanguage : hops[index - 1];
    const nextLanguage = index === (hops.length - 1) ? currentLanguage : hops[index + 1];
    if (prevLanguage === nextLanguage) {
      showMessage(hops[index], prevLanguage);
      return;
    }
    updateHops(hops.filter((hop, i) => index !== i));
  }
  const addRandomLanguage = () => {
    if (hops.length >= MAX_HOPS) {
      return;
    }
    while (true) {
      const proposedLanguage = getRandomHop(languages, hops[hops.length - 1]);
      if (proposedLanguage !== currentLanguage) {
        updateHops([...hops, proposedLanguage]);
        return;
      }
    }
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleOnDragEnd = result => {
    if (!result.destination) return;

    const newHops = reorder(hops, result.source.index, result.destination.index);

    // validate proposed new order
    const [isOk, problemHop] = validateHops(newHops);
    if (isOk) {
      updateHops(newHops);
    } else {
      showMessage(hops[result.source.index], problemHop)
    }
  }
  return <>
    {isShowMessage ? <ErrorMessage setShow={setIsShowMessage} language={proposedLanguage} otherLanguage={blockingLanguage} /> : null}
    <HopsModal isOpen={isOpen} setIsOpen={setIsOpen} hops={hops} currentLanguage={currentLanguage} languages={languages} updateLanguage={updateLanguage} deleteLanguage={deleteLanguage} addRandomLanguage={addRandomLanguage} handleOnDragEnd={handleOnDragEnd} />
  </>;
}

export default HopsModalContainer;