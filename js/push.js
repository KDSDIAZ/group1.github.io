let cart = [];
let items = [];
const cartContent = document.querySelector("#cart-content");

function addToCart(e){ 
  id = e.id;
    items = document.getElementById(id+'card').querySelectorAll('h5,img,span');
    itemsName = items[0].innerText;
    itemImage = items[1].getAttribute("src");
    itemsPrice = items[2].innerText; 
    productMarkup = ''
    cart.push( id);
    total = 0;


    for (let id of cart){
      items = document.getElementById(id+'card').querySelectorAll('h5,img,span');
      itemsName = document.getElementById(id+'title').innerHTML;
      itemImage = items[1].getAttribute("src");
      itemsPrice = items[2].innerText; 
      total+=parseFloat(itemsPrice);

      productMarkup +=
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

}
productMarkup+= `
<tr>
<td colspan="2">
  Total
</td>

<td>${parseFloat(total,2)}</td>
</tr>
`;
cartContent.querySelector("tbody").innerHTML = productMarkup;
alert('item added to cart');
}

