let cartprice = 0;

function cart1(){
    let display_price = document.getElementsByClassName("span")[0].innerHTML;
    let name = document.getElementsByClassName("h3")[0].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);

    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;   
    
    cartprice += 31400;
};

function cart2(){
    let display_price = document.getElementsByClassName("span")[1].innerHTML;
    let name = document.getElementsByClassName("h3")[1].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);

    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;    

    cartprice += 38495;
};

function cart3(){
    let display_price = document.getElementsByClassName("span")[2].innerHTML;
    let name = document.getElementsByClassName("h3")[2].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);

    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;

    cartprice += 59595;
};

function cart4(){
    let display_price = document.getElementsByClassName("span")[3].innerHTML;
    let name = document.getElementsByClassName("h3")[3].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);
  
    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;

    cartprice += 96666;
};

function cart5(){
    let display_price = document.getElementsByClassName("span")[4].innerHTML;
    let name = document.getElementsByClassName("h3")[4].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);
    
    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;

    cartprice += 61590;
};

function cart6(){
    let display_price = document.getElementsByClassName("span")[5].innerHTML;
    let name = document.getElementsByClassName("h3")[5].innerHTML;

    alert(" Car added to cart! \n Car Name: " + name + "\n Car Price: " + display_price);

    let cart = document.getElementById("cart");
    cart.innerHTML += "<br><br>Name: " + name + "<br>";
    cart.innerHTML += "Price " + display_price;

    cartprice += 71895;
};

function checkout(){
    alert("Checkout Time \nYour total bill: $ " + cartprice);
    alert("Congratulations");
    let cart = document.getElementById("cart");
    cart.innerHTML = "<h3>Cart:</h3>";
    cartprice = 0;
    
};