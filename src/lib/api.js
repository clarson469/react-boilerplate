/**
 * @typedef {object} HttpResponse
 */

/**
 * get helper function
 * @param {string} url
 * as target for GET http request
 * @return {HttpResponse}
 */
const get = (url) => fetch(url, {
  headers: new Headers(),
  method: 'GET',
});

/**
 * uses get helper function to send a GET request to
 * an open api
 * @return {HttpResponse}
 */
export const getMessage = () =>
  get('https://jsonplaceholder.typicode.com/posts/1');
