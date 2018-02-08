import re from "./randomElement";

const imageGenerator = (state, type) => {
  const urls = state.TMP_URLS;
  const cat = type ? type : re(urls);
  const imgUrl = re(urls[cat]);
  const result = {cat, imgUrl};

  return result;
};

export default imageGenerator;
