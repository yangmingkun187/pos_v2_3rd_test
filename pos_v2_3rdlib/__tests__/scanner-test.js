jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cart_item');
jest.dontMock('lodash');
jest.dontMock('../src/model/scanner');

describe('Scanner', function () {
  describe('#scan', function() {
    it('should return correct cartItem', function() {
      var Scanner = require('../src/model/scanner');

      var scanner = new Scanner();
      var tag = 'ITEM000003-2';

      var cartItem = scanner.scan(tag);

      expect(cartItem.item.barcode).toBe('ITEM000003');
      expect(cartItem.count).toBe(2);
    });
  });
});
