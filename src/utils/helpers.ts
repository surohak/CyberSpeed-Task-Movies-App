export const isElectron = () => {
  // Renderer process
  // @ts-ignore
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
    return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to true
  return (
    typeof navigator === 'object' &&
    typeof navigator.userAgent === 'string' &&
    navigator.userAgent.indexOf('Electron') >= 0
  );
};

export const getRandomCharacter = () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
};
