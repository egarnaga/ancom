import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {cityMenu} from './modules/city-menu';
import {navMenu} from './modules/nav-menu';

import {franchiseOpeningSlider} from './modules/franchise-opening-slider';
import {shopSlider} from './modules/shop-slider';
import {reviewsSlider} from './modules/reviews-slider';
import {productionCycleSlider} from './modules/production-cycle-slider';


//import {franchiseMap} from './modules/franchise-map';


// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
cityMenu();
navMenu();

franchiseOpeningSlider();
shopSlider();
reviewsSlider();
productionCycleSlider();

//franchiseMap();
