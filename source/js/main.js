import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';
import {cityMenu} from './modules/city-menu';
import {navMenu} from './modules/nav-menu';

import {franchiseOpeningSlider} from './modules/franchise-opening-slider';
import {shopSlider} from './modules/shop-slider';
import {reviewsSlider} from './modules/reviews-slider';
import {productionCycleSlider} from './modules/production-cycle-slider';
import {certificationSlider} from './modules/certification-slider';
import {accordionFaq} from './modules/accordion-faq';
import {discountsSlider} from './modules/discounts-slider';

import {catalogDropdown} from './modules/catalog-dropdown';
import {animationMain} from './modules/animation-main';





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
certificationSlider();
accordionFaq();
discountsSlider();
catalogDropdown();
animationMain();
