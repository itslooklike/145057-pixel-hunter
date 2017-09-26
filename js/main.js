import onlyFooterLayout from './layout/onlyFooterLayout.js';
import headerAndFooterLayout from './layout/headerAndFooterLayout.js';

import intro from './pages/intro.js';
import greeting from './pages/greeting.js';
import rules from './pages/rules.js';
import game1 from './pages/game1.js';
import game2 from './pages/game2.js';
import game3 from './pages/game3.js';
import result from './pages/result.js';

const app = document.querySelector(`#mainApp`);

app.innerHTML = onlyFooterLayout(intro());
// app.innerHTML = onlyFooterLayout(greeting());
// app.innerHTML = headerAndFooterLayout(rules());
// app.innerHTML = headerAndFooterLayout(game1());
// app.innerHTML = headerAndFooterLayout(game2());
// app.innerHTML = headerAndFooterLayout(game3());
// app.innerHTML = headerAndFooterLayout(result());
