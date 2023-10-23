export class Repository {
  /**
   *
   * @param {string} rootUrl
   */
  constructor(rootUrl) {
    this.rootUrl = rootUrl;
  }

  /**
   * Makes an HTTP GET request.
   * @param {string} suffix String to append after rootUrl
   * @returns Promise that can resolve into data or error recived from backend.
   */
  get(suffix = '') {
    return new Promise((resolve, reject) => {
      fetch(this.rootUrl + suffix)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  /**
   * Makes an HTTP POST request.
   * @param {object} body The data to send in the request body.
   * @param {string} suffix String to append after rootUrl
   * @returns {Promise} A promise that can resolve into data or an error received from the backend.
   */
  post(body, suffix = '') {
    return new Promise((resolve, reject) => {
      fetch(this.rootUrl + suffix, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  /**
   * Makes an HTTP PUT request.
   * @param {number} id Cost id
   * @param {object} body The data to send in the request body.
   * @param {string} suffix String to append after rootUrl
   * @returns {Promise} A promise that can resolve into data or an error received from the backend.
   */
  put(id, body, suffix = '') {
    return new Promise((resolve, reject) => {
      fetch(this.rootUrl + suffix + '/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
