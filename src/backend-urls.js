export class BackendUrls {
  constructor() {
    this.root =
      window.location.protocol + '//' + window.location.hostname + ':3000';
    this.costs = this.root + '/costs';
  }
}
