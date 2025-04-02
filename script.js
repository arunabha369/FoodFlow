console.log("hellllo")
const nav_popup = document.querySelector('.nav-popup');
const menuicn = document.querySelector('.menuicn');
var flag = 0;
menuicn.addEventListener("click",function(){
   if(flag==0){
    nav_popup.style.top = "0px"
    nav_popup.style.display = 'flex'
    users_sec.style.display = 'none'
    flag = 1;
   }
   else{
    nav_popup.style.top = "300px"
    nav_popup.style.display = 'none'
    flag = 0;
   }
})

var btns_u = 0;

const users_sec = document.querySelector('.users-sec');
const user_img = document.querySelector('.user-img');
var user_flag = 0
function Userclick(){
  user_img.addEventListener("click",function(){
    if(user_flag==0){
        users_sec.style.display = 'flex'
        nav_popup.style.display = 'none'
        user_flag = 1;
    }
    else{
        users_sec.style.display = 'none'
        user_flag = 0;
    }
    
})
}

Userclick()
const username_inpt = document.querySelector('.username-inpt');
const userpsw_inpt = document.querySelector('.userpsw-inpt');
const Sign_btn = document.querySelector('.Sign-btn');
const log_btn = document.querySelector('.log-btn');
const user_inpt = document.querySelector('.user-inpt');
const submit_btn = document.querySelector('.Submit');
const comp = document.querySelector('.comp');
const Name_show = document.querySelector('.Name-show');
Sign_btn.addEventListener("click",function(){
user_inpt.style.display = 'flex';
Sign_btn.style.display = 'none';
log_btn.style.display = 'none';
var nameinpt
var pswinpt
username_inpt.addEventListener("input",function(){
    nameinpt = username_inpt.value;
})
userpsw_inpt.addEventListener("input",function(){
   pswinpt = userpsw_inpt.value;
})
submit_btn.addEventListener("click",function(){
 if(nameinpt && pswinpt){
    localStorage.setItem('username', nameinpt);
    localStorage.setItem('password', pswinpt);
    comp.style.opacity = 1;
    setTimeout(function(){
        alert('Signed In Kindly Refresh and Log in')
    },1000)
 }
 else{
    alert('Enter Valid Details!')
 }
})
})

log_btn.addEventListener("click",function(){
    var inpt2 = document.querySelector(".inpt2")
    Sign_btn.style.display = 'none';
    log_btn.style.display = 'none';
inpt2.innerHTML = ` <input class=" md:w-[225px] md:text-lg username-inpt2 px-2 placeholder-orange-400 bg-black rounded-xl w-[130px] text-sm" type="text" placeholder="Enter Username..">
<input class=" md:w-[225px] md:text-lg userpsw-inpt2 px-2 placeholder-orange-400 bg-black rounded-xl w-[130px] text-sm" type="text" placeholder="Enter Password..">
<button class="Submit2 hover:bg-orange-800 Entr px-2 py-1 bg-orange-400 rounded-xl">
            Enter
        </button>`  
const username_inpt = document.querySelector('.username-inpt2');
const userpsw_inpt = document.querySelector('.userpsw-inpt2');
const submit_btn = document.querySelector('.Submit2');
        username_inpt.addEventListener("input",function(){
            console.log(username_inpt.value)
            nameinpt = username_inpt.value;
        })
        userpsw_inpt.addEventListener("input",function(){
           pswinpt = userpsw_inpt.value;
        })

        submit_btn.addEventListener("click",function(){
            log_btn.style.display = 'none'
            var storedUsername = localStorage.getItem('username');
            var storedPassword = localStorage.getItem('password');
        if(storedUsername==nameinpt && storedPassword==pswinpt){
            console.log("yes")
            alert('Logged In')
            Name_show.innerHTML = `Welcome ${storedUsername}`
            username_inpt.style.display = 'none'
            userpsw_inpt.style.display = 'none'
            submit_btn.style.display = 'none'
            user_img.innerHTML = `  <img class="cursor-pointer h-10 w-10 rounded-[50%] user-img" src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?size=338&ext=jpg&ga=GA1.1.1633054541.1695419442&semt=sph" alt="">`
        }
        else{
            console.log("Incorrect");
            alert('Invalid Details');
        }
        })
})

var cart_icon = document.querySelector(".bagOpen")
cart_icon.addEventListener("click",function(){
  window.location.href = `cart.html`
})


// ********* Main *************

const arr = [
    {
      name: "Pizza",
      price: 299,
      imageUrl: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1709665594~exp=1709669194~hmac=bb738008f2a7e6657f34f6f1d9e4609bbd85c6cda10d9b5a375a1c52de5b1caf&w=740",
      quantity: 1,
      id: 0
    },
    {
      name: "Burger",
      price: 79,
      imageUrl: "https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg?t=st=1709669174~exp=1709672774~hmac=e883ca7f672e5dcb0e344e59bec3c70adbc4dd8d574e2c2050dc034a70ebb3b6&w=740",
      quantity: 1,
      id:1
    },
    {
      name: "Pasta",
      price: 179,
      imageUrl: "https://img.freepik.com/premium-photo/classic-italian-pasta-penne-alla-arrabiata-with-freshly-cheese-dark-table-top-view-generative-ai_47243-2129.jpg?w=740",
      quantity: 1,
      id:2
    },
    {
      name: "Sandwich",
      price: 99,
      imageUrl: "https://img.freepik.com/premium-photo/grilled-sandwich-served-with-red-sauce-green-chutney_759100-1.jpg?w=740",
      quantity: 1,
      id:3
    },
    {
      name: "Pastry",
      price: 49,
      imageUrl: "https://img.freepik.com/free-photo/piece-cake-with-strawberry-crumbs-cup-tea-plate_176474-2975.jpg?t=st=1709669450~exp=1709673050~hmac=539e97e4d80a97430b08bc41a2d997acb40bf58e7b3d76af2ba83434af615cd9&w=740",
      quantity: 1,
      id:4
    },
    {
      name: "Samosa",
      price: 25,
      imageUrl: "https://img.freepik.com/premium-photo/veg-samosa-is-indian-popular-snack-junk-food-served-with-fried-green-chilly-onion-chutney-ketchup_466689-13445.jpg?w=740",
      quantity: 1,
      id:5
    },
    {
      name: "Paneer Masala",
      price: 199,
      imageUrl: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1709669589~exp=1709673189~hmac=72f124457290f0aceae5665952075f84fa1107d62564755b50e041d0ee37585f&w=740",
      quantity: 1,
      id:6
    },
    {
      name: "French Fries",
      price: 79,
      imageUrl: "https://img.freepik.com/free-photo/top-view-delicious-fries-sauce_23-2149235944.jpg?w=360",
      quantity: 1,
      id:7
    },
    {
      name: "Ice Cream",
      price: 99,
      imageUrl: "https://img.freepik.com/free-photo/sweet-ice-cream-cone-with-strawberry-generative-ai_188544-12340.jpg?t=st=1709669720~exp=1709673320~hmac=14351cb2b02ef967426d026f69b01d4843e5f816b43dc9a8db47ad9c694a51b8&w=740",
      quantity: 1,
      id:8
    },
    {
      name: "Cold Coffee",
      price: 99,
      imageUrl: "https://img.freepik.com/free-photo/aromatic-frappuccino-table_23-2148900668.jpg?w=360",
      quantity: 1,
      id:9
    },
    {
      name: "Fried Rice",
      price: 79,
      imageUrl: "https://img.freepik.com/free-photo/front-view-minced-vegetables-rice-colored-bright-surface_140725-14450.jpg?w=900&t=st=1709885855~exp=1709886455~hmac=ec96140ad0e732a8f0ebb459fc382516315688394f6cd57206900b8221c529a3",
      quantity: 1,
      id:10
    },
    {
      name: "Spring Rolls",
      price: 89,
      imageUrl: "https://img.freepik.com/free-photo/asian-food-board-top-view_23-2148771228.jpg?t=st=1709822168~exp=1709825768~hmac=cdf7e27613657c1021b90e74ad4a29d9622bd7b44c1cb618968eaf892f5349a3&w=740",
      quantity: 1,
      id:11
    },
    {
      name: "Milkshake",
      price: 79,
      imageUrl: "https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?t=st=1709822245~exp=1709825845~hmac=49e55e494332de60db6d94fc234e701d638c9bbf6d7d4948d43a2e131fb7937b&w=360",
      quantity: 1,
      id:12
    },
    {
      name: "Salad",
      price: 49,
      imageUrl: "https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay_2829-6482.jpg?t=st=1709822292~exp=1709825892~hmac=b81a7219e4c9b7516d3542d7cab8c046539dfecee6bac1828d8c9cd6ec3e5fdd&w=1060",
      quantity: 1,
      id:13
    },
    {
      name: "Fruit Bowl",
      price: 99,
      imageUrl: "https://img.freepik.com/free-photo/top-view-delicious-fruit-composition-fresh-sliced-mellow-fruits-dark-background-ripe-fresh-mellow-health-diet_140725-116255.jpg?t=st=1709822325~exp=1709825925~hmac=f1e7bbbfccd0c5fbd88d0cf53823fc310c6f136474c67031d7b914bd05397c24&w=360",
      quantity: 1,
      id:14
    },
    {
      name: "Vegetable Soup",
      price: 99,
      imageUrl: "https://img.freepik.com/free-photo/red-lentil-soup-dark-surface-healthy-eating-concept-vegan-food_2829-6071.jpg?t=st=1709822364~exp=1709825964~hmac=97c7f9069421260c7148aa0b5230343dda4da36bbd6139dd95f4b079b4c44900&w=1060",
      quantity: 1,
      id:15
    },
    {
      name: "Kaju Katli",
      price: 99,
      imageUrl: "https://img.freepik.com/premium-photo/kaju-katli_57665-206.jpg?w=1060",
      quantity: 1,
      id:16
    },
    {
      name: "Dal Tadka",
      price: 109,
      imageUrl: "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?t=st=1709822474~exp=1709826074~hmac=6b4985fffb59a544944f42697a2527ded92e8d1e4e86d5fe9875ae230a01c0fb&w=1060",
      quantity: 1,
      id:17
    }
  ];

  var cart = [];
 var addBtn = document.querySelectorAll(".ri-add-circle-fill");
 addBtn.forEach(function (button,index) {
addBtn[index].addEventListener( "click",function(dets){
console.log(dets.target.dataset.number)
addBtn[index].classList.remove('ri-add-circle-fill');
addBtn[index].classList.add('ri-check-fill');
addBtn[index].style.color = `green`;
addBtn[index].style.fontSize = `28px`;
AddItems(dets.target.dataset.number)
})
})

function AddItems(num){
    console.log(arr[num].name)
    var itemExists = cart.some(function (item) {
        return item.name === arr[num].name;
    });
console.log(itemExists)
    if (!itemExists) {
        cart.push(arr[num]);
        localStorage.setItem('myArray', JSON.stringify(cart));
    }
    else{
        alert('Already Added To Cart')
      }
}
var cate = document.querySelector(".categories")
var bstSellers = document.querySelector(".Best_sellers");
var Hot_deals = document.querySelector(".Hot_deals");
var Popular = document.querySelector(".Popular");

const hotDealsMenu = document.querySelector(".hot-deals-menu");
const defaultMenu = document.querySelector(".default-menu");
const popularmenu = document.querySelector(".popular-menu");

// Initially hide the Hot Deals menu
hotDealsMenu.classList.add("hidden");
popularmenu.classList.add("hidden");

// bestSellersButton.addEventListener("click", function() {
//   // Show default menu and hide Hot Deals menu

// });

Hot_deals.addEventListener("click", function() {
  const buttons = document.querySelectorAll(".buttons_filter > div");
  buttons.forEach(button => {
      button.classList.remove("bg-orange-600");
  });
  Hot_deals.classList.add("bg-orange-600");

  hotDealsMenu.classList.remove("hidden");
  defaultMenu.classList.add("hidden");
  popularmenu.classList.add("hidden");
  search_show.innerHTML = "";
});
Popular.addEventListener("click", function() {
  const buttons = document.querySelectorAll(".buttons_filter > div");
  buttons.forEach(button => {
      button.classList.remove("bg-orange-600");
  });
  Popular.classList.add("bg-orange-600");
  popularmenu.classList.remove("hidden");
  hotDealsMenu.classList.add("hidden");
  defaultMenu.classList.add("hidden");
  search_show.innerHTML = "";
});

bstSellers.addEventListener("click", function() {
  const buttons = document.querySelectorAll(".buttons_filter > div");
  buttons.forEach(button => {
      button.classList.remove("bg-orange-600");
  });
  bstSellers.classList.add("bg-orange-600");

  defaultMenu.classList.remove("hidden");
  hotDealsMenu.classList.add("hidden");
  popularmenu.classList.add("hidden");
  search_show.innerHTML = "";
});

const inpt_srch = document.querySelector(".inpt_srch");
var search_show = document.querySelector(".searched_results")

inpt_srch.addEventListener("input", function() {
  if(inpt_srch.value){
    const inputValue = inpt_srch.value.toLowerCase(); 
  
  let clutter = ""; // Declare clutter variable outside the loop

  arr.forEach(function(item) {
      if (item.name.toLowerCase().startsWith(inputValue)) {
        console.log(item)
        popularmenu.classList.add("hidden");
        hotDealsMenu.classList.add("hidden");
        defaultMenu.classList.add("hidden");
        Hot_deals.classList.remove("bg-orange-600");
        bstSellers.classList.remove("bg-orange-600");
        Popular.classList.remove("bg-orange-600");

          clutter += `
              <div>
                  <div class="card h-36 w-32 flex flex-col justify-center items-center gap-1 py-1">
                      <img class="border-[2px] border-orange-700 h-[70%] w-[80%] rounded-[50%]" src="${item.imageUrl}" alt="">
                      <div class="tittle h-[35%] w-[100%] rounded-md text-center">
                          <h1 class="tittle-text text-white font-semibold">${item.name}</h1>
                          <div class="text-left px-2 flex flex-row justify-between items-center">
                              <h1 class="text-white text-[12px] font-semibold">&#x20B9;${item.price}</h1>
                              <i class="hover:text-orange-800 cursor-pointer ri-add-circle-fill text-orange-600 text-lg" data-number="${item.id}"></i>
                          </div>
                      </div>
                  </div>
              </div>`;
      }
  });



  search_show.innerHTML = clutter;
  addBtn = document.querySelectorAll(".ri-add-circle-fill");
  addBtn.forEach(function (button,index) {
    addBtn[index].addEventListener( "click",function(dets){
    console.log(dets.target.dataset.number)
    addBtn[index].classList.remove('ri-add-circle-fill');
    addBtn[index].classList.add('ri-check-fill');
    addBtn[index].style.color = `green`;
    addBtn[index].style.fontSize = `28px`;
    AddItems(dets.target.dataset.number)
    })
    })
}
});

function updateResults(filteredItems) {
  var cltr = ""

  // Render filtered items
  filteredItems.forEach(item => {
      console.log(item);;
      if (item){
        popularmenu.classList.add("hidden");
        hotDealsMenu.classList.add("hidden");
        defaultMenu.classList.add("hidden");
        Hot_deals.classList.remove("bg-orange-600");
        bstSellers.classList.remove("bg-orange-600");
        Popular.classList.remove("bg-orange-600");

          cltr += `
              <div>
                  <div class="card h-36 w-32 flex flex-col justify-center items-center gap-1 py-1">
                      <img class="border-[2px] border-orange-700 h-[70%] w-[80%] rounded-[50%]" src="${item.imageUrl}" alt="">
                      <div class="tittle h-[35%] w-[100%] rounded-md text-center">
                          <h1 class="tittle-text text-white font-semibold">${item.name}</h1>
                          <div class="text-left px-2 flex flex-row justify-between items-center">
                              <h1 class="text-white text-[12px] font-semibold">&#x20B9;${item.price}</h1>
                              <i class="hover:text-orange-800 cursor-pointer ri-add-circle-fill text-orange-600 text-lg" data-number="${item.id}"></i>
                          </div>
                      </div>
                  </div>
              </div>`;
      }

  });
  search_show.innerHTML = cltr;
  addBtn = document.querySelectorAll(".ri-add-circle-fill");
  addBtn.forEach(function (button,index) {
    addBtn[index].addEventListener( "click",function(dets){
    console.log(dets.target.dataset.number)
    addBtn[index].classList.remove('ri-add-circle-fill');
    addBtn[index].classList.add('ri-check-fill');
    addBtn[index].style.color = `green`;
    addBtn[index].style.fontSize = `28px`;
    AddItems(dets.target.dataset.number)
    })
    })
}

var f_flag=0;
var fltr = document.querySelector(".FiltrKaro");
var fltr_popup = document.querySelector(".fltr_popup");
fltr.addEventListener("click",function(dets){
  const LtoH_text = document.querySelector(".lToh");
const HtoL_text = document.querySelector(".hTol");
  console.log("filter it");
  fltr_popup.classList.toggle("hidden");
  LtoH_text.addEventListener("click", function() {
    console.log("Price Low To High clicked");
    const filteredItems = arr.slice().sort((a, b) => a.price - b.price);
    updateResults(filteredItems);
  });


// Event listener for 'Price High To Low' option
HtoL_text.addEventListener("click", function() {
  console.log("Price High To Low clicked");
  const filteredItems = arr.slice().sort((a, b) => b.price - a.price);
  updateResults(filteredItems);
});

})

