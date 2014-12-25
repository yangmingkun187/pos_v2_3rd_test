jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/cart_item');
jest.dontMock('lodash');

describe('Cart', function() {
  describe('addCartItem', function() {
    it('should add cartItem into the cartItems', function() {
      var Cart = require('../src/model/cart');

      var cartItem = {
        item : {
          barcode:'ITEM000001',
          name : '雪碧',
          unit : '瓶',
          price : 3.00
        },
        count : 1
      };
      var cart = new Cart();

      cart.addCartItem(cartItem);
      expect(cart.cartItems).toEqual([cartItem]);
    });
  });
});
