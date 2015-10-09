module.exports = toLatLng;

/**
 * Parse a string containing a latitude, longitude pair and return them as an array.
 *
 * @param {String} Str
 * @return {Array}
 * @api public
 */

function toLatLng (str) {
  var match = /^\s*?(-?[0-9]+\.?[0-9]+?)\s*,\s*(-?[0-9]+\.?[0-9]+?)\s*$/.exec(str);

//  console.log("FOUND MATCH %j",match);

  if (match && match.length === 3) {
    var lat = parseFloat(match[1]);
    var lng = parseFloat(match[2]);

    if (  (lat >= -90)
       && (lat <= 90)
       && (lng >= -180)
       && (lng <= 180)
      ) {
      return [lat, lng];
    }
    else {
 //     console.log("Numbers failed validation");
      return null;
    }
  }

// console.log("Didn't find exactly 2 numbers in input %s %j",str,match);
 return null;
}
