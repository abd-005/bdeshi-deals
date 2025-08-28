function getElement(id) {
  const element = document.getElementById(id);
  return element;
}




const cardbtns = document.getElementsByClassName("card-btn");

// console.log(cardbtns)

getElement("product-box").addEventListener("click", function(e){
    if(e.target.className.includes("card-btn")){
    const cardButton = e.target;
    const productImg =
      cardButton.parentNode.parentNode.children[0].children[0].src;
    const productTitle =
      cardButton.parentNode.parentNode.children[1].children[0].innerText;
    const productPrice =
      cardButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = getElement("total-price").innerText;

    let currentTotal = Number(productPrice) + Number(totalPrice);

    getElement("total-price").innerText = currentTotal.toFixed(2);

    const cartContainer = getElement("cart-container");
    const newCart = document.createElement('div');
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between p-4">
                  <img src="${productImg}" alt="" class="w-10" />
                  <div class="">
                    <h2 id="" class="font-bold text-xl">${productTitle}</h2>
                    <p class="text-gray-500">${productPrice} TK</p>
                  </div>
                </div>
    `;
    cartContainer.append(newCart);

    const quantity = getElement("total-quantity").innerText;
    console.log(quantity);
    const currentQuantity = Number(quantity) + 1;

    getElement("total-quantity").innerText = currentQuantity;

    const clearCart = getElement("btn-clear");
    clearCart.addEventListener("click", function(){
      cartContainer.innerHTML = ``
      getElement("total-price").innerText = '0';
      getElement("total-quantity").innerText = '0';
    })
  }})

   




// for (let cardButton of cardbtns) {
//   cardButton.addEventListener("click", function () {
//     const productImg =
//       cardButton.parentNode.parentNode.children[0].children[0].src;
//     const productTitle =
//       cardButton.parentNode.parentNode.children[1].children[0].innerText;
//     const productPrice =
//       cardButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     let currentTotal = Number(productPrice) + Number(totalPrice);

//     getElement("total-price").innerText = currentTotal.toFixed(2);

//     const cartContainer = getElement("cart-container");
//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 id="" class="font-bold text-xl">${productTitle}</h2>
//                     <p class="text-gray-500">${productPrice} TK</p>
//                   </div>
//                 </div>
//     `;
//     cartContainer.append(newCart);
//   });
// }

// document.getElementById("cart-btn-1").addEventListener("click", function(){
// const title = getElement("card-title-1").innerText;
// const price = getElement("card-price-1").innerText;

// console.log(title+ ', ' + price)

// const totalPrice = getElement("total-price").innerText;

// let currentTotal = Number(price) + Number(totalPrice)

// getElement("total-price").innerText= currentTotal;
// })
// const cartContainer = getElement("cart-container");
//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="./assets/kitchen-3.png" alt="" class="w-10" />
//                   <div class="">
//                     <h2 id="" class="font-bold text-xl">${title}</h2>
//                     <p class="text-gray-500">${price} TK</p>
//                   </div>
//                 </div>
//     `;
//     cartContainer.append(newCart);


// getElement("product-box").addEventListener("click", function(e){
//     if(e.target.className.includes("card-btn")){
//         alert("card clicked")
//     }})