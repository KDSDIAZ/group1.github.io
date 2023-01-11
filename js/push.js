let cart = [];
let items = [];
const cartContent = document.querySelector("#cart-content");

function addToCart(){
    items = document.getElementById('firstItem').querySelectorAll('h5,img,span');
    itemsName = items[0].innerText;
    itemImage = items[1].getAttribute("src");
    itemsPrice = items[2].innerText;

    cart.push(items);

    let productMarkup = 
        `
          <tr>
          <td>
            <img src="${itemImage}" alt="${itemsName}" width="120">
          </td>
          <td>
            ${itemsName}
          </td>
          <td>${itemsPrice}</td>
          </tr>
        `;

    cartContent.querySelector("tbody").innerHTML = productMarkup;
    alert('item added to cart');

    console.log(itemImage);

}

