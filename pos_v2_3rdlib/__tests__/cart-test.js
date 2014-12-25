jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/cart_item');
jest.dontMock('../src/model/promotion_item');
jest.dontMock('../src/model/promotion');
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
    it('should return correct', function() {
      var Cart = require('../src/model/cart');
      var CartItem = require('../src/model/cart_item');

      var cart = new Cart();
      var cartItem = new CartItem({
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      }, 1);

      cart.cartItems = [cartItem];
      var cartItemsText = cart.getCartItemsText();
      expect(cartItemsText).toBe('名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n');
    });
  });

  describe('#getPromotionTotalPrice', function() {
     it('should return correct acount', function() {
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
       var promotionTotalPrice = cart.getPromotionTotalPrice();
       expect(promotionTotalPrice).toBe(3);
     });
  });

  describe('#getPromotionsText', function() {
    it('should return correct promotionText', function() {
      var Cart = require('../src/model/cart');
      var cart = new Cart();
      var cartItem = {
            item : {
              barcode:'ITEM000001',
              name : '雪碧',
              unit : '瓶',
              price : 3.00
            },
            count : 5
         };

      cart.cartItems = [cartItem];
      var PromotionsText = cart.getPromotionsText();
      expect(PromotionsText).toBe('名称：雪碧，数量：1瓶\n');
    });
  });

  describe('#getTotalPrices', function() {
    it('should return correct totalPrices', function() {
      var Cart = require('../src/model/cart');
      var cart = new Cart();
      var cartItem = {
        item : {
          barcode:'ITEM000001',
          name : '雪碧',
          unit : '瓶',
          price : 3.00
        },
        count : 1
      };
      cart.cartItems = [cartItem];
      var totalPrices = cart.getTotalPrices();
      expect(totalPrices).toBe(3);
    });
  });







});
