/**
 * Created by Petr on 4/7/2016.
 */

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

module.exports = function(number,locale){
    return number.toLocaleString(locale);
}

var navic = {}
