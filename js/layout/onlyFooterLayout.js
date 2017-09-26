import footer from '../components/footer.js';

const mainLayout = content =>
  `
<main class="central">

  ${content}

  ${footer()}

</main>
`;

export default mainLayout;
