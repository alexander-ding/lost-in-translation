export const DEFAULT_HOPS = 8;
export const MAX_HOPS = 20;
export const getRandomHop = (languages, prevLanguage = null) => {
  const keys = Object.keys(languages);
  if (keys.length === 0 || (keys.length === 1 && keys[0] === prevLanguage)) throw new Error('Invalid input');
  while (true) {
    const proposedLanguage = keys[Math.floor(Math.random() * keys.length)];
    if (proposedLanguage !== prevLanguage) return proposedLanguage;
  }
}
export const getRandomHops = (languages, startLanguage = null, hopCount = DEFAULT_HOPS) => {
  if (hopCount < 1) return [];
  let hops = new Array(hopCount);
  for (let i = 0; i < hopCount - 1; i++) {
    const prevLanguage = i === 0 ? startLanguage : hops[i - 1];
    hops[i] = getRandomHop(languages, prevLanguage);
  }
  // last hop must not be equal to start language or the previous hop
  while (true) {
    const proposedLanguage = hopCount === 1 ? getRandomHop(languages, startLanguage) : getRandomHop(languages, hops[hopCount - 2]);
    if (proposedLanguage !== startLanguage) {
      hops[hopCount - 1] = proposedLanguage;
      return hops;
    }
  }
}
export const languagesToOptions = (languages) => {
  return Object.keys(languages).map(key => ({
    key,
    value: key,
    text: languages[key].name
  }));
}

export const validateHops = (hops) => {
  for (let i = 1; i < hops.length; i++) {
    const prevLanguage = hops[i - 1];
    const currLanguage = hops[i];
    if (prevLanguage === currLanguage) {
      return [false, prevLanguage];
    }
  }

  return [true, null];
}