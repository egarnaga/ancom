import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {cityMenu} from './modules/city-menu';
import {navMenu} from './modules/nav-menu';
import {franchiseOpeningSlider} from './modules/franchise-opening-slider';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
cityMenu();
navMenu();

franchiseOpeningSlider();
