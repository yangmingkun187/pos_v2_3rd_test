var Scanner = require("./scanner");
var Cart = require("./cart");
var _ = require("lodash");
var Printer = require("./printer");

function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();

  _.forEach(tags, function(tag) {
    cart.addCartItem(scanner.scan(tag));
  });
  var inventory = new Printer();

  console.log(inventory.toString(cart));
}
