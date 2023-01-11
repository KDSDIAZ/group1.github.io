
let Items = [];
let cart = [];
const addtocartbtnDom = document.querySelectorAll('[data-action="addtoCart"]');
addtocartbtnDom.forEach(addtocartbtnDom => {
  addtocartbtnDom.addEventListener("click", () => {
    const productDom = addtocartbtnDom.parentNode.parentNode;
    const product = {
      img: productDom.querySelector(".card-img-top").getAttribute("src"),
      name: productDom.querySelector("#item-name").innerText,
      price: productDom.querySelector("#item-price").innerText,
      quantity: 1
   };
  });
});
  

// function addtoCart() {
//  Items = document.getElementById("item").querySelectorAll("h5, span, img");
//  cart.push (Items);
//  console.log(cart);
// //   cartItems.push(item1);
// //   console.log(cartItems);
// }
// addtoCart();



// function saveProduct(clickedBtn) {
//   // save selected product in local storage and display it in the cart together

//   // vars
//   const productId = clickedBtn.getAttribute("data-id");
//   const card = clickedBtn.parentElement.parentElement;
//   const cardInfo = clickedBtn.parentElement;
//   const prodImage = card.querySelector("img").src;
//   const prodName = card.querySelector("h4").textContent;
//   const prodPrice = card.querySelector("#itemprice").textContent;

//   let isProductInCart = false;

//   // get local storage array
//   const lsContent = getLSContent();

//   // to avoid user adds the same course twice, check
//   // the product is not in LS already before adding it
//   lsContent.forEach(function (product) {
//     if (product.id === productId) {
//       alert("This course is already in your cart.");
//       isProductInCart = true;
//     }
//   });

//   // only if the product is not already in the cart,
//   // create an object representing selected product info
//   // and push it into local storage array
//   if (!isProductInCart) {
//     lsContent.push({
//       id: productId,
//       image: prodImage,
//       name: prodName,
//       price: prodPrice,
//     });

//     // add product into into local storage
//     setLSContent(lsContent);
//     // update the display of courses in the shopping cart
//     displayProducts();
//   }
// }

