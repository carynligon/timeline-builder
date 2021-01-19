const storage = (storageFn) => ({
  getItem(key) {
    const item = storageFn.getItem(key);
    try {
      return JSON.parse(item);
    } catch {
      return item;
    }
  },
  removeItem(key) {
    return storageFn.removeItem(key);
  },
  setItem(key, item) {
    return storageFn.setItem(key, JSON.stringify(item));
  },
  updateItem(key, item) {
    const existingData = this.getItem(key);
    const newData = {
      ...existingData,
      ...item,
    };
    return this.setItem(key, newData);
  },
});

export default {
  local: storage(global.localStorage),
  session: storage(global.sessionStorage),
};
