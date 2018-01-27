const app = document.querySelector(`#mainApp`);

const renderContent = (content, {node} = {node: app}) => {
  node.innerHTML = ``;
  node.appendChild(content);
};

export default renderContent;
