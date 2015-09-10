var assert = require('assert');
var geo = require('./');

describe('to-coordinates', function () {
  it('should return an array of coordinates', function () {
    var latLng = geo('-100.21, 21.32');
    assert(latLng.length == 2);
    assert(latLng[0] === -100.21);
    assert(latLng[1] === 21.32);
  })
  
  describe('when given invalid coordinates', function () {
    it('should return an empty array', function () {
      var latLng = geo('abc, def');
      assert(latLng.length == 0);
    })
  })
  
  describe('.box()', function () {
    it('should return an array of boundries', function () {
      var box = geo.box('(-100.21, 21.32), (88.31, -32.11)');
      assert(box.length == 2);
      assert(box[0][0] === -100.21);
      assert(box[0][1] === 21.32);
      assert(box[1][0] === 88.31);
      assert(box[1][1] === -32.11);
    })
    
    describe('when given an invalid box', function () {
      it('should return an empty array', function () {
        var box = geo.box('abc, def');
        assert(box.length == 0);
      })
    })
  })
})
