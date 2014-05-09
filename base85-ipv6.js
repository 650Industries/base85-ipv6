// Generated by CoffeeScript 1.7.1
(function() {
  var ALPHABET, bigInt;

  bigInt = require('big-integer');

  ALPHABET = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '#', '$', '%', '&', '(', ')', '*', '+', '-', ';', '<', '=', '>', '?', '@', '^', '_', '`', '{', '|', '}', '~'];

  module.exports = {
    encode: function(buf) {
      "Encodes a buffer of data as a base85 string in ipv6 format";
      var c, chars, n, quotient, remainder, x, _i, _j, _len, _ref;
      if (!Buffer.isBuffer(buf)) {
        buf = new Buffer(buf);
      }
      n = new bigInt;
      for (_i = 0, _len = buf.length; _i < _len; _i++) {
        x = buf[_i];
        n = n.multiply(256).add(x);
      }
      chars = [];
      for (c = _j = 0; _j < 20; c = ++_j) {
        _ref = n.divmod(85), quotient = _ref.quotient, remainder = _ref.remainder;
        n = quotient;
        chars.push(ALPHABET[remainder]);
      }
      return chars.reverse().join('');
    }
  };

}).call(this);