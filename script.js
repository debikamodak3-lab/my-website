let total = 0;

/* ACCORDION SYSTEM */
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function () {
    const content = this.nextElementSibling;

    // Close other sections
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) {
        c.style.display = "none";
      }
    });

    // Toggle current section
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});


/* ADD TO CART FUNCTION */
function addToCart(name, price) {

  const cart = document.getElementById("cart");

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${name} - ₹${price}</span>
    <button class="delete-btn">❌</button>
  `;

  cart.appendChild(li);

  total += price;
  updateTotal();

  // DELETE BUTTON FUNCTION
  li.querySelector(".delete-btn").addEventListener("click", function () {
    total -= price;
    li.remove();
    updateTotal();
  });
}


/* UPDATE TOTAL */
function updateTotal() {
  document.getElementById("total").textContent = total;
}


/* PLACE ORDER */
function placeOrder() {
  if (total === 0) {
    alert("Cart is empty!");
  } else {
    alert("Order Placed Successfully! Thank You ❤️");
    
    // Clear cart after order
    document.getElementById("cart").innerHTML = "";
    total = 0;
    updateTotal();
  }
}
