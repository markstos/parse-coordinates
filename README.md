#to-coordinates

Parse coordinate strings.

##Synopsis

```js
var latLng = require('to-coordinates');

var coords = latLng('-100.21, 21.32');
// => [-100.21, 21.32]

var box = latLng.box('(-100.21, 21.32), (88.31, -32.11)');
// => [[-100.21, 21.32], [88.31, -32.11]]
```

##Description

## main function

```javascript
  var coords = latLng('-100.21, 21.32');
  // => [-100.21, 21.32]
```

The function returned parses one or numbers out of a string and returns the numbers in an array in the same order.

Any non-numbers or separator between the numbers are tolerated. If no numbers
are found in the input for any reason, then an empty array is returned.

Finding a single number or more than two numbers is considered valid and will be returned in the array accordingly.

## box

```javascript
    var box = latLng.box('(-100.21, 21.32), (88.31, -32.11)');
    // => [[-100.21, 21.32], [88.31, -32.11]]
```

The box function looks for comma separated numbers contained in parens. Each
time one is found, the main coordinate parsing function is applied. The result is an array of nested arrays containing
coordinates.

##Author

  Eivind Fjeldstad \<eivind.fjeldstad@gmail.com\>

##Contributors

  Mark Stosberg \<mark@rideamigos.com`>

##Licence
MIT
