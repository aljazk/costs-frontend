import { ErrorView } from './error/error.view.js';
import { Display } from './global/displays/display.js';
import { Router } from './global/router.js';

const content = new Display('div', document.body);
const mainRouting = [
  {
    path: '/costs',
    activate: (appendTo, path) => {
      import('./costs/costs.routing.js').then((m) => {
        new m.CostsRouting().activate(appendTo, path);
      });
    },
  },
  {
    path: '',
    activate: (appendTo, path) => {
      if (path === '') {
        anchorEvent('/costs')();
      } else {
        new ErrorView(appendTo.element);
      }
    },
  },
];

const router = new Router(mainRouting);

window.anchorEvent = (href) => ($event) => {
  $event?.preventDefault();
  window.history.pushState({}, '', href);
  router.activate(content, window.location.pathname);
};

router.activate(content, window.location.pathname);

const elements = document.getElementsByTagName('a');
for (const element of elements) {
  element.addEventListener('click', anchorEvent(element.href));
}
