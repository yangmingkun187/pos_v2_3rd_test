jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/cart_item');
jest.dontMock('lodash');

describe('Cart', function() {
  describe('#addCartItem', function() {
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
    it('should cartItem count add 1', function() {
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
      cart.cartItems = [cartItem];
      cart.addCartItem(cartItem);
      expect(cartItem.count).toBe(2);
    });
  });

  describe('#getCartItemsText', function() {
    var Cart = require('../src/model/cart');
    var CartItem = require('../src/model/cart_item');

    var cart = new Cart();
    var cartItem = new CartItem({
      barcode:'ITEM000001',
      name : '雪碧',
      unit : '瓶',
      price : 3.00
    },
    5);

    cart.cartItems = [cartItem];
    var cartItemsText = cart.getCartItemsText();
    expect(cartItemsText).toBe('名称：雪碧，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n');
  });
});
