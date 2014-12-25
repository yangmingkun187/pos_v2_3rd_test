jest.dontMock('../src/model/cart_item');
jest.dontMock('../src/model/promotion');
jest.dontMock('../src/model/item');
jest.dontMock('lodash');

describe('CartItem', function() {
  describe('#getPromotionType();', function() {
    it('should return correct type', function() {
      var CartItem = require('../src/model/cart_item');
      item = {
        barcode:'ITEM000001',
      };
      var cartItem = new CartItem(item, 5);

      var type = cartItem.getPromotionType();

      expect(type).toBe('BUY_TWO_GET_ONE_FREE');
    });
  });

  describe('#getPromotionCount', function() {
    it('should return correct promotionCount', function() {
      var CartItem = require('../src/model/cart_item');

      item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      };
      var cartItem = new CartItem(item, 5);

      cartItem.getPromotionType = jest.genMockFn();

      cartItem.getPromotionType.mockReturnValue('BUY_TWO_GET_ONE_FREE');

      var result = cartItem.getPromotionCount();

      expect(result).toBe(1);
    });
  });

  describe('#toInventoryText', function() {
    it('should return correct string', function() {
      var CartItem = require('../src/model/cart_item');

      item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      };
      var cartItem = new CartItem(item, 5);

      cartItem.getSubtotal = jest.genMockFn();
      cartItem.getSubtotal.mockReturnValue(12);

      var expectOutput = '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n';
      var result = cartItem.toInventoryText();
      expect(result).toBe(expectOutput);
    });
  });

  describe('#getSubtotal', function() {
    it('should return correct string', function() {
      var CartItem = require('../src/model/cart_item');

      item = {
        barcode:'ITEM000001',
        name : '雪碧',
        unit : '瓶',
        price : 3.00
      };
      var cartItem = new CartItem(item, 5);

      cartItem.getPromotionCount = jest.genMockFn();

      cartItem.getPromotionCount.mockReturnValue(1);

      var subtotal = cartItem.getSubtotal();

      expect(subtotal).toBe(12);
    });
  });


});
