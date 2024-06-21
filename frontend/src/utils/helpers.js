// helpers.js

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} - The capitalized string.
 */
export function capitalizeFirstLetter(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * Formats a date to a readable string.
   * @param {Date|string} date - The date object or date string.
   * @returns {string} - The formatted date string.
   */
  export function formatDate(date) {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  /**
   * Truncates a string to the specified length and adds ellipsis if necessary.
   * @param {string} str - The string to be truncated.
   * @param {number} length - The maximum length of the truncated string.
   * @returns {string} - The truncated string with ellipsis.
   */
  export function truncateString(str, length) {
    if (!str || str.length <= length) return str;
    return str.substring(0, length) + '...';
  }
  
  /**
   * Checks if the user is authenticated.
   * @returns {boolean} - True if the user is authenticated, false otherwise.
   */
  export function isAuthenticated() {
    // This function should be updated based on how authentication is managed in the application.
    return !!localStorage.getItem('token');
  }
  
  /**
   * Gets a query parameter value by name.
   * @param {string} name - The name of the query parameter.
   * @returns {string|null} - The value of the query parameter or null if not found.
   */
  export function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }
  
  /**
   * Converts a base64 string to a Blob object.
   * @param {string} base64 - The base64 string.
   * @param {string} contentType - The content type of the Blob.
   * @returns {Blob} - The resulting Blob object.
   */
  export function base64ToBlob(base64, contentType = '') {
    const byteCharacters = atob(base64);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
  
    return new Blob(byteArrays, { type: contentType });
  }
  