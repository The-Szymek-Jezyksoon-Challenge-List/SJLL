import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import Packs from './pages/packs.js';
import Level from './pages/Level.js'; // ⬅ NOWE

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/packs', component: Packs },
    { path: '/level/:id', component: Level, props: true }, // ⬅ NOWE
];
