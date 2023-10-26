export class CSSLoader {
  static loadedFiles = [];
  constructor() {}

  load(filePath) {
    if (this.alreadyLoaded(filePath)) {
      throw 'Already loaded.';
    }
    CSSLoader.loadedFiles.push(filePath);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = filePath;
    document.head.appendChild(link);
  }

  alreadyLoaded(filePath) {
    return CSSLoader.loadedFiles.includes(filePath);
  }
}
