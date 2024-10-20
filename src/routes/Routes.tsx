import Bingo from "../views/Bingo/Bingo";
import Jackpots from "../views/Jackpots/Jackpots";
import Live from "../views/Live/Live";
import New from "../views/New/New";
import Others from "../views/Others/Others";
import Slots from "../views/Slots/Slots";
import TableGames from "../views/TableGames/TableGames";
import Games from "../views/Games/Games";
import Favorites from "../views/Favorites/Favorites";

const coreRoutes = [
    {
        path: '/',
        title: 'home',
        component: Games
    },
    {
        path: '/new',
        title: 'new',
        component: New
    },
    {
        path: '/slots',
        title: 'slots',
        component: Slots
    },
    {
        path: '/live',
        title: 'live',
        component: Live
    },
    {
        path: '/jackpots',
        title: 'jackpots',
        component: Jackpots
    },
    {
        path: '/table-games',
        title: 'table-games',
        component: TableGames
    },
    {
        path: '/bingo',
        title: 'bingo',
        component: Bingo
    },
    {
        path: '/others',
        title: 'others',
        component: Others
    },
    {
        path: '/favorites',
        title: 'favorites',
        component: Favorites
    },
]

const mainroutes = [...coreRoutes]
export default mainroutes;