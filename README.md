# parse-coordinates

Parse coordinate strings.

## Synopsis

```javascript
var latLng = require('parse-coordinates');

var coords = latLng('-80.21, 21.32');
// => [-80.21, 21.32]
```

## Description

```javascript
  var coords = latLng('-80.21, 21.32');
  // => [-80.21, 21.32]
```

The function returned parses a comma separated latitude and longitude pair and returns them as an array.

Latitude is validated to range from -90 to 90.  Longitude value is validated to range from
-180 to 180.

Leading and trailing space are tolerated in the string, as well as around the comma.

If the parsing fails for any reason, null is returned instead of the array.

**Lets try an example, check if coordinates are valid**

```javascript
  var LatLng = require('parse-coordinates');
  
  var coords = '-80.21, 21.32;
  
  if (LatLon(coords)) {
    // do something when coordinates are valid
  } else {
    //do something when coordinates are invalid
  }
  
```

## Author

 Mark Stosberg \<mark@rideamigos.com>

## Credit

 Forked from
 [to-coordinates](https://github.com/eivindfjeldstad/to-coordinates), which
 lacked validation of the number coordinates as well as the valid lat/lng value ranges.

## Licence

 MIT
