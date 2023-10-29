import { Display } from './global/displays/display.js';
import { MainRouter } from './main-router.js';

const content = new Display('div', document.body);

window.mainRouter = new MainRouter(content);
window.mainRouter.activate(window.location.pathname);
