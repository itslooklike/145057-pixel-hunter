const elementFromTemplate = (stringTemplate) => {
  const div = document.createElement(`div`);

  div.innerHTML = stringTemplate;

  return div.children[0];
};

export default elementFromTemplate;
