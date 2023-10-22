export class FileDirectory {
  /**
   * Removes all text behind last '/' (slash)
   * @param {string} url
   * @returns string cut off after last '/' (slash)
   */
  get(url) {
    const index = url.lastIndexOf('/');
    return url.substring(0, index + 1);
  }
}
