export default class LocalStorage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static set(key: string, data: unknown) {
    const value = JSON.stringify(data);
    localStorage.setItem(key, value);
  }

  static get(key: string) {
    try {
      const response = localStorage.getItem(key);
      return response ? JSON.parse(response) : null;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err);
      return null;
    }
  }

  static remove(key: string) {
    localStorage.removeItem(key);
  }

  static clear() {
    localStorage.clear();
  }
}
