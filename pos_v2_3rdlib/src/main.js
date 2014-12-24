var Scanner = require("./model/scanner");
var Cart = require("./model/cart");
var _ = require("lodash");
var Printer = require("./model/printer");

function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();

  _.forEach(tags, function(tag) {
    cart.addCartItem(scanner.scan(tag));
  });
  var inventory = new Printer();

  console.log(inventory.toString(cart));
}

module.exports = printInventory;
