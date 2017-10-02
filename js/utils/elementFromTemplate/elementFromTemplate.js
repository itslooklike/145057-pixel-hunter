const elementFromTemplate = stringTemplate => {
  const div = document.createElement(`div`);

  div.innerHTML = stringTemplate;

  return div;
};

export default elementFromTemplate;
