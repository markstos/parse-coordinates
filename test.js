var assert = require('assert');
var parseCoords = require('./');

describe('parse-coordinates', function () {
  it('should parse a coordinate pair seperated by a comma and space', function () {
    var latLng = parseCoords('-80.21, 21.32');
    assert.strictEqual(latLng.length,2);
    assert.strictEqual(latLng[0], -80.21);
    assert.strictEqual(latLng[1], 21.32);
  })

  it('should tolerate space on the outside of the numbers', function () {
    var latLng = parseCoords(' -80.21, 21.32 ');
    assert.strictEqual(latLng.length, 2);
    assert.strictEqual(latLng[0], -80.21);
    assert.strictEqual(latLng[1], 21.32);
  })

  it('should tolerate no space between numbers', function () {
    var latLng = parseCoords(' -80.21,21.32 ');
    assert.strictEqual(latLng.length, 2);
    assert.strictEqual(latLng[0], -80.21);
    assert.strictEqual(latLng[1], 21.32);
  })

  it('should not parse 3 numbers', function () {
    var latLng = parseCoords('1,2,3');
    assert.strictEqual(latLng, null);
  })

  it('should not parse one number' , function () {
    var latLng = parseCoords('42');
    assert.strictEqual(latLng, null);
  })

  it('should return null when given "abc, def"', function () {
   var latLng = parseCoords('abc, def');
   assert.strictEqual(latLng, null);
  })
 
  it("should return null when given 'BOOM'", function () {
   assert.strictEqual(parseCoords("BOOM"),null);
  })
  it("should return null when given null", function () {
   assert.strictEqual(parseCoords(null),null);
  });
  it("should return null when given undefined", function () {
    assert.strictEqual(parseCoords(undefined),null);
  });
  it("should return null when given  empty string", function () {
    assert.strictEqual(parseCoords(''),null);
  });
  
 })
