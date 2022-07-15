import queryString from 'query-string';
import config from './../config';
/**
 * @param {object} options
 * @param {number} options.results 
 * @param {number} options.page
 * @param {string} options.seed
 * @param {string} options.nat
 * @param {string} options.inc

 * @returns {Promise}
 */
export const getUsers = (options = {}) => {
  const defaulOptions = {
    results: config.DEFAULT_AMOUNT,
    page: config.DEFAULT_PAGE,
    seed: config.DEFAULT_SEED,
    nat: config.DEFAULT_NAT,
    inc: 'login,gender,name,nat'
  }
  const finallyOptions = {
    ...defaulOptions,
    ...options
  }
  return fetch(`${config.BASE_URL}?${queryString.stringify(finallyOptions)}`)
    .then(response => response.json())
}