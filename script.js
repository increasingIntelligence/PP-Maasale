      // Calculate total price for product 1
      function calculatePrice1() {
        var quantity = document.getElementById("quantity1").value;
        var totalPrice = 110 * quantity;
        document.getElementById("totalPrice1").innerHTML = totalPrice;
      }

      // Add product 1 to cart
      function addToCart1() {
        var quantity = document.getElementById("quantity1").value;
        var totalPrice = 110 * quantity;
        var table = document.getElementById("cart-items");
        var row = table.insertRow();
        var productNameCell = row.insertCell(0);
        var priceCell = row.insertCell(1);
        var quantityCell = row.insertCell(2);
        var totalPriceCell = row.insertCell(3);
        productNameCell.innerHTML = "Product 1";
        priceCell.innerHTML = "110";
        quantityCell.innerHTML = quantity;
        totalPriceCell.innerHTML = totalPrice;
      }
    </script>


var contactButton = document.querySelector('#contact h2');
var form = document.querySelector('#contact form');

contactButton.addEventListener('click', function() {
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

