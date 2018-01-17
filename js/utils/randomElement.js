const randomElement = (elem = []) => {
  if (Array.isArray(elem) && elem.length > 1) {
    const result = elem[Math.floor(Math.random() * elem.length)];
    return result;
  }

  if (Object.keys(elem).length > 1) {
    const keys = Object.keys(elem);
    const result = keys[Math.floor(Math.random() * keys.length)];
    return result;
  }

  console.error(`слишком мало элементов в массиве`);
  return -1;
};

export default randomElement;
