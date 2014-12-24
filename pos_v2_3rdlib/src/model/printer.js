function Printer() {

}

Printer.prototype.toString = function(cart) {

  inventoryText = '***<没钱赚商店>购物清单***\n' +
           '打印时间：' + '\n' +
           '----------------------\n' +
           cart.getCartItemsText() +
           '----------------------\n' +
           '挥泪赠送商品：\n' +
           cart.getPromotionsText() +
           '----------------------\n' +
           '总计：' + cart.getPayThePrice().toFixed(2) + '(元)\n' +
           '节省：' + cart.getPromotionTotalPrice().toFixed(2) + '(元)\n' +
           '**********************';

  return inventoryText;
};
module.exports = Printer;
