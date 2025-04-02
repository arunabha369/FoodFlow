var clutter = "";
var cart = JSON.parse(localStorage.getItem('myArray'));
cart.forEach(function(dets){
    console.log(dets.price)
    clutter += `      <div class="card mb-8 flex flex-row justify-between items-center bg-[#181818] shadow-lg shadow-[ 7px 7px 8px #0a0a0a,
        -7px -7px 8px #262626;] shadow-black rounded-xl w-[95%] px-1 md:mb-10 md:hover:shadow-gray-700">
        <div class="img-card flex flex-row gap-4 ">
<img class="h-36 w-32 rounded-xl md:w-44 md:h-40" src="${dets.imageUrl}" alt="">

<div class="flex flex-col gap-16 md:gap-20 py-1">
<h1 class="text-white text-lg font-semibold item_name md:text-2xl">${dets.name}</h1>
<div class="icons-cont flex flex-row gap-2">
<div class="h-8 w-8 shadow-xl rounded-[50%] bg-black flex justify-center items-center md:h-10 md:w-10 minus cursor-pointer">
    <i class="ri-subtract-fill text-white"></i>
</div>
<h1 class="text-white quantity_show md:text-xl">${dets.quantity}</h1>
<div class="h-8 w-8 shadow-xl rounded-[50%] bg-black flex justify-center items-center md:h-10 md:w-10 plus cursor-pointer">
    <i class="ri-add-line text-white"></i>
</div>
</div>
</div>
        </div>
<div class="cart-card-r flex flex-col items-center gap-16">
<i class="ri-delete-bin-5-line text-red-500 text-xl cursor-pointer md:text-3xl" data-ItemName="${dets.name}"></i>
    <div class="flex flex-row justify-center">
        <h1 class="text-white font-semibold amount_show md:text-xl">&#x20B9;${dets.price*dets.quantity}</h1>
    </div>

</div>
    </div>`
})



var cart_show = document.querySelector(".cart_container")
cart_show.innerHTML = clutter


document.querySelector(".ri-arrow-left-s-line").addEventListener("click",function(){
    window.location.href = `index.html`
})
document.querySelector(".removAll").addEventListener("click",function(){
    cart = [];
    localStorage.setItem('myArray', JSON.stringify(cart));
    location.reload();
})

var total_amount = document.querySelector(".total_amount");
var  totalPrice = 0;
cart.forEach(function(dets){
    totalPrice = totalPrice + (dets.price * dets.quantity)
})
total_amount.innerHTML = `<h1 calss="text-xl font-semibold"><span class="text-orange-500 font-semibold text-xl md:text-2xl">&#x20B9;${totalPrice}</span></h1>`

var  Decrement = document.querySelectorAll(".minus");
var Incrmnt=document.querySelectorAll(".plus")
var quantity_show=document.querySelectorAll(".quantity_show")
var amount_show=document.querySelectorAll(".amount_show")
var remove_btn=document.querySelectorAll(".ri-delete-bin-5-line")
var cart=document.querySelectorAll(".cart")
// var item_name=document.querySelectorAll(".item_name")

var cart = JSON.parse(localStorage.getItem('myArray'));



function Decrease(index,quantity,price){
    console.log("decr")
    console.log("quantity is",quantity)
    if (quantity > 1){
        quantity = parseInt(quantity) - 1;
        console.log("Now quantity Is :-",quantity)
        quantity_show[index].innerHTML = `<h1 class="text-white quantity_show">${quantity}</h1>`
        console.log(cart)
        cart[index].quantity = quantity;
        localStorage.setItem('myArray', JSON.stringify(cart));
        let amount = Calculate_Amount(quantity,price)
        amount_show[index].innerHTML = `<h1 class="text-white font-semibold amount_show ">&#x20B9;${amount}</h1>`
        totalPrice=0;
        cart.forEach(function(dets){
            totalPrice = totalPrice + (dets.price * dets.quantity)
        })
        total_amount.innerHTML = `<h1 calss="text-xl font-semibold"><span class="text-orange-500 font-semibold text-xl md:text-2xl">&#x20B9;${totalPrice}</span></h1>`
    }    
    else{
        alert('Minimum One Quantity Is Required!')
    }

}

function Increase(index,quantity,price){
    console.log("incr")
    console.log("quantity is",quantity)
        quantity = parseInt(quantity) + 1;
        console.log("Now quantity Is :-",quantity)
        quantity_show[index].innerHTML = `<h1 class="text-white quantity_show">${quantity}</h1>`
        console.log(cart)
        cart[index].quantity = quantity;
        localStorage.setItem('myArray', JSON.stringify(cart));
        let amount = Calculate_Amount(quantity,price)
        amount_show[index].innerHTML = `<h1 class="text-white font-semibold amount_show ">&#x20B9;${amount}</h1>`
        totalPrice=0;
        cart.forEach(function(dets){
            totalPrice = totalPrice + (dets.price * dets.quantity)
        })
        total_amount.innerHTML = `<h1 calss="text-xl font-semibold"><span class="text-orange-500 font-semibold text-xl md:text-2xl">&#x20B9;${totalPrice}</span></h1>`
}

   cart.forEach(function(dets,index){
    Decrement[index].addEventListener("click",function(){
        Decrease(index,(dets.quantity),(dets.price))
    })
   })

   cart.forEach(function(dets,index){
    Incrmnt[index].addEventListener("click",function(){
        Increase(index,(dets.quantity),(dets.price))
    })
   })


function Calculate_Amount(quantity,price) {
let  amount = quantity * price;
return amount;
}
console.log(cart)
cart.forEach(function(num,index){
remove_btn[index].addEventListener("click",function(dets){
    var itemName = (remove_btn[index].dataset.itemname)
   var elementToRemove  = dets.target.closest('.card')
   console.log(elementToRemove)
   var itemIndex = cart.findIndex(function(item){
    return item.name === itemName
   })

   if (itemIndex !== -1)
    console.log(itemName);

    // Remove the item from the cart
    cart.splice(itemIndex, 1);

//    elementToRemove.remove();
localStorage.setItem('myArray', JSON.stringify(cart));
elementToRemove.remove();
totalPrice=0;
cart.forEach(function(dets){
    totalPrice = totalPrice + (dets.price * dets.quantity)
})
total_amount.innerHTML = `<h1 calss="text-xl font-semibold"><span class="text-orange-500 font-semibold text-xl md:text-2xl">&#x20B9;${totalPrice}</span></h1>`
})
})



