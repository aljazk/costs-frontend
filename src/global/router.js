export class Router {
  constructor(routes) {
    this.routes = routes;
  }

  activate(appendTo, path) {
    appendTo.removeAllChildNodes();
    for (const route of this.routes) {
      if (path.startsWith(route.path)) {
        const cutPath = this.cutPath(path, route.path);
        route.activate(appendTo, cutPath);
        return;
      }
    }
  }

  cutPath(path, routingToPath) {
    const pattern = new RegExp(routingToPath);
    path = path.replace(pattern, '');
    if (path.startsWith('/')) {
      path = path.slice(1, path.lenght);
    }
    return path ?? '';
  }
}
