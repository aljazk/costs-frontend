import { Router } from './global/router.js';
import { Menu } from './menu.js';

export class MainRouter extends Router {
  constructor(container) {
    super([
      {
        path: '',
        activate: (appendTo, path) => {
          const menu = new Menu(appendTo.element);
          new Router([
            {
              path: 'costs',
              activate: (appendTo, path) => {
                import('./costs/costs.routing.js').then((m) => {
                  new m.CostsRouting().activate(appendTo, path);
                });
              },
            },
            {
              path: 'types',
              activate: (appendTo, path) => {
                import('./types/types.routing.js').then((m) => {
                  new m.TypesRouting().activate(appendTo, path);
                });
              },
            },
            {
              path: '',
              activate: (appendTo, path) => {
                if (path === '') {
                  //   anchorEvent('/costs')();
                } else {
                  new ErrorView(appendTo.element);
                }
              },
            },
          ]).activate(menu, path);
        },
      },
    ]);
    this.container = container;
    this.listenToWindowPathChange();
  }

  activate(path) {
    super.activate(this.container, path);
  }

  listenToWindowPathChange() {
    window.addEventListener(
      'popstate',
      function (event) {
        const currentURL = window.location.pathname;
        this.activate(currentURL);
      }.bind(this)
    );
  }
}
