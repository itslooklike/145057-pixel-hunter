import header from '../components/header.js';
import footer from '../components/footer.js';

const mainLayout = content =>
  `
<main class="central">

  ${header()}

  ${content}

  ${footer()}

</main>
`;

export default mainLayout;
