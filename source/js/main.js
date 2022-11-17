import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {cityMenu} from './modules/city-menu';
import {navMenu} from './modules/nav-menu';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
cityMenu();
navMenu();
