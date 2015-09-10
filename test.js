var assert = require('assert');
var geo = require('./');

describe('to-coordinates', function () {
  it('should parse a coordinate pair seperated by a comma and space', function () {
    var latLng = geo('-100.21, 21.32');
    assert(latLng.length == 2);
    assert(latLng[0] === -100.21);
    assert(latLng[1] === 21.32);
  })

  it('should tolerate space on the outside of the numbers', function () {
    var latLng = geo(' -100.21, 21.32 ');
    assert(latLng.length == 2);
    assert(latLng[0] === -100.21);
    assert(latLng[1] === 21.32);
  })

  it('should tolerate no space between numbers', function () {
    var latLng = geo(' -100.21,21.32 ');
    assert(latLng.length == 2);
    assert(latLng[0] === -100.21);
    assert(latLng[1] === 21.32);
  })

  it('should parse 3 numbers', function () {
    var latLng = geo('1,2,3');
    assert(latLng[0] === 1);
    assert(latLng[1] === 2);
    assert(latLng[2] === 3);
  })

  it('should parse one number' , function () {
    var latLng = geo('42');
    assert(latLng[0] === 42);
  })

  it('should tolerate any characters before after or in between the numbers.' , function () {
    var latLng = geo('JUNK -100.21 TRASH 21.32 GARBAGE');
    assert(latLng.length == 2);
    assert(latLng[0] === -100.21);
    assert(latLng[1] === 21.32);
  })
  
  it('should return an empty array when given "abc, def"', function () {
   var latLng = geo('abc, def');
   assert(latLng.length == 0);
  })
 
  it("should return empty array when given 'BOOM'", function () {
   assert(geo("BOOM"),[]);
  })
  it("should return empty array when given null", function () {
   assert(geo(null),[]);
  });
  it("should return empty array when given undefined", function () {
    assert(geo(undefined),[]);
  });
  it("should return empty array when given  empty string", function () {
    assert(geo(''),[]);
  });

  
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
