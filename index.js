module.exports = toLatLng;

/**
 * Parse latLng coordinates
 *
 * @param {String} Str
 * @return {Array}
 * @api public
 */

function toLatLng (str) {
  var reg = /(-?[0-9]+\.?[0-9]*)/g;
  var ret = [];
  var match;
  
  while (match = reg.exec(str)) {
    var coord = parseFloat(match[1]);
    ret.push(coord);
  }
  
  return ret;
}

/**
 * Parse bounding box
 *
 * @param {String} box
 * @return {Array}
 * @api public
 */

toLatLng.box = function (box) {
  var reg = /(-?[0-9]+\.?[0-9]*,\s?-?[0-9]+\.?[0-9]*)/g;
  var ret = [];
  var match;
  
  while (match = reg.exec(box)) {
    var boundry = toLatLng(match[1]);
    ret.push(boundry);
  }
  
  return ret;
};