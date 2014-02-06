#to-coordinates
Parse coordinate strings.

##Example
```js
var latLng = require('to-coordinates');

var coords = latLng('-100.21, 21.32');
// => [-100.21, 21.32]

var box = latLng.box('(-100.21, 21.32), (88.31, -32.11)');
// => [[-100.21, 21.32], [88.31, -32.11]]
```

##Licence
MIT