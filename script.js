let searchBox = document.getElementById("searchbox");
let searchBut = document.getElementsByClassName("fa")[0];
let loggedin = false;
let usernamebuy;
function searchboxcss() {
  let displayValue = window.getComputedStyle(searchBox).display;
  if (displayValue == "none") {
    searchBox.style.display = "inline-block";
    document.getElementsByClassName("fa")[0].style.transform =
      "translate(0, 0)";
  } else {
    searchBox.style.display = "none";
    document.getElementsByClassName("fa")[0].style.transform =
      "translate(225px, 0)";
  }
}
searchBut.addEventListener("click", searchboxcss);
let foodBut1 = document.getElementsByClassName("food-type")[0];
let foodBut2 = document.getElementsByClassName("food-type")[1];
function foodVisual1() {
  foodBut1.style.borderStyle = "solid";
  foodBut1.style.borderBottomWidth = "3px";
  foodBut1.style.borderBottomColor = "rgb(247, 97, 71)";
  foodBut2.style.borderBottomColor = "transparent";
}
function foodVisual2() {
  foodBut2.style.borderStyle = "solid";
  foodBut2.style.borderBottomWidth = "3px";
  foodBut2.style.borderBottomColor = "rgb(247, 97, 71)";
  foodBut1.style.borderBottomColor = "transparent";
}
foodBut1.addEventListener("click", foodVisual1);
foodBut2.addEventListener("click", foodVisual2);
function loginfun() {
  var loginContainer = document.createElement("div");
  document.body.appendChild(loginContainer);
  loginContainer.setAttribute("class", "login-container");
  var loginBox = document.createElement("div");
  document.getElementsByClassName("login-container")[0].appendChild(loginBox);
  loginBox.classList.add("login-box");
  var logspan = document.createElement("span");
  logspan.innerHTML = "Log in";
  document.getElementsByClassName("login-box")[0].appendChild(logspan);
  var userName = document.createElement("input");
  userName.setAttribute("type", "text");
  userName.setAttribute("id", "username");
  userName.setAttribute("placeholder", "User Name");
  document.getElementsByClassName("login-box")[0].appendChild(userName);
  document.body.style.overflow = "hidden";
  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.setAttribute("id", "password");
  password.setAttribute("placeholder", "Password");
  document.getElementsByClassName("login-box")[0].appendChild(password);
  var logButton = document.createElement("button");
  logButton.setAttribute("class", "login-form");
  logButton.innerHTML = "Log in";
  document.getElementsByClassName("login-box")[0].appendChild(logButton);
  let scrollpost = document.body.scrollTop;
  document.getElementsByClassName("login-container")[0].style.top =
    scrollpost + "px";
  function loginoutside(e) {}
  document.addEventListener("mouseup", function (e) {
    var container = document.getElementsByClassName("login-box")[0];
    var containerbox = document.getElementsByClassName("login-container")[0];
    if (!container.contains(e.target)) {
      containerbox.remove();
      document.body.style.overflow = "visible";
    }
  });
  document
    .getElementsByClassName("login-form")[0]
    .addEventListener("click", function () {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;
      var server_data = { username: username, password: password };
      var request = $.ajax({
        type: "POST",
        url: "https://upper-eh-24269.herokuapp.com/login/",
        data: JSON.stringify(server_data),
        contentType: "application/json",
      });
      request.done(function (data) {
        if (data["status"] == true) {
          var containerbox =
            document.getElementsByClassName("login-container")[0];
          containerbox.remove();
          document.body.style.overflow = "visible";
          loggedin = true;
          alert("You are logged in successfully");
          document.getElementById("log-in").style.display = "none";
          document.getElementById("sign-up").style.display = "none";
          let buttoncontainer = document.getElementsByClassName("button")[0];
          let namecard = document.createElement("span");
          namecard.setAttribute("class", "name-card");
          namecard.innerHTML = data["user"].charAt(0).toUpperCase();
          buttoncontainer.appendChild(namecard);
          usernamebuy = data["user"];
          console.log(usernamebuy);
        } else {
          alert("Enter correct username and password");
        }
      });
    });
}
let loginBut = document.getElementById("log-in");
loginBut.addEventListener("click", loginfun);
function signupfun() {
  var signupContainer = document.createElement("div");
  document.body.appendChild(signupContainer);
  signupContainer.setAttribute("class", "signup-container");
  var signupBox = document.createElement("div");
  document.getElementsByClassName("signup-container")[0].appendChild(signupBox);
  signupBox.classList.add("signup-box");
  var signupspan = document.createElement("span");
  signupspan.innerHTML = "Sign up";
  document.getElementsByClassName("signup-box")[0].appendChild(signupspan);
  var fullName = document.createElement("input");
  fullName.setAttribute("type", "text");
  fullName.setAttribute("id", "fullname");
  fullName.setAttribute("placeholder", "Full Name");
  document.getElementsByClassName("signup-box")[0].appendChild(fullName);
  var emailId = document.createElement("input");
  emailId.setAttribute("type", "text");
  emailId.setAttribute("placeholder", "Email id");
  emailId.setAttribute("class", "emailid");
  document.getElementsByClassName("signup-box")[0].appendChild(emailId);
  document.body.style.overflow = "hidden";
  var password = document.createElement("input");
  password.setAttribute("type", "password");
  password.setAttribute("id", "password");
  password.setAttribute("placeholder", "Password");
  document.getElementsByClassName("signup-box")[0].appendChild(password);
  var signupButton = document.createElement("button");
  signupButton.setAttribute("class", "signup-form");
  signupButton.innerHTML = "Create a account";
  document.getElementsByClassName("signup-box")[0].appendChild(signupButton);
  let scrollpost = document.body.scrollTop;
  document.getElementsByClassName("signup-container")[0].style.top =
    scrollpost + "px";
  document.addEventListener("mouseup", function (e) {
    var container = document.getElementsByClassName("signup-box")[0];
    var containerbox = document.getElementsByClassName("signup-container")[0];
    if (!container.contains(e.target)) {
      containerbox.remove();
      document.body.style.overflow = "visible";
    }
  });
  document
    .getElementsByClassName("signup-form")[0]
    .addEventListener("click", function () {
      let fullname = document.getElementById("fullname").value;
      let emailid = document.getElementsByClassName("emailid")[0].value;
      let password = document.getElementById("password").value;
      var server_data = {
        fullname: fullname,
        email: emailid,
        password: password,
      };
      var request = $.ajax({
        type: "POST",
        url: "https://upper-eh-24269.herokuapp.com/signup/",
        data: JSON.stringify(server_data),
        contentType: "application/json",
      });
      request.done(function (data) {
        if (data["status"] == "200") {
          var containerbox =
            document.getElementsByClassName("signup-container")[0];
          containerbox.remove();
          alert("Account created successfully");
          document.body.style.overflow = "visible";
        } else {
          alert("Email already exist");
        }
      });
    });
}

let signBut = document.getElementById("sign-up");
signBut.addEventListener("click", signupfun);
function viewCard() {
  let foodContent = document.createElement("div");
  foodContent.setAttribute("class", "food-content");
  document
    .getElementsByClassName("container-content")[0]
    .appendChild(foodContent);
  let img = document.createElement("img");
  img.src = "./images/burger_kings.png";
  document.getElementsByClassName("food-content")[0].appendChild(img);
  let foodDetails = document.createElement("div");
  foodDetails.setAttribute("class", "food-details");
  document.getElementsByClassName("food-content")[0].appendChild(foodDetails);
  var foodName = document.createElement("span");
  foodName.setAttribute("class", "food-name");
  foodName.innerHTML = "McDonald's";
  document.getElementsByClassName("food-details")[0].appendChild(foodName);
  var foodPrice = document.createElement("span");
  foodPrice.setAttribute("class", "food-price");
  document.getElementsByClassName("food-details")[0].appendChild(foodPrice);
  foodPrice.innerHTML = "150 for one";
  var buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "button1");
  document.getElementsByClassName("food-details")[0].appendChild(buttonDiv);
  let button1 = document.createElement("button");
  document.getElementsByClassName("button1")[0].appendChild(button1);
  button1.innerHTML = "Buy";
}
function buybutton(name) {
  if (!loggedin) {
    alert("Hello from button");
    console.log(name);
  }
}
function newtest(name, imagesrc, price, index) {
  var foodContent = document.createElement("div");
  foodContent.setAttribute("class", "food-content");
  foodContent.innerHTML = `<img src=\"${imagesrc}\" alt=\"burger\" class=\"my-img\"><div class=\"food-details\"><span class=\"food-name\">${name}</span><span class=\"food-price\">&#8377;${price} for one</span><div class=\"button1\"><button class=\"buybut\">Buy</button></div></div>`;
  document
    .getElementsByClassName("container-content")[0]
    .appendChild(foodContent);
  document
    .getElementsByClassName("buybut")
    [index].addEventListener("click", function () {
      if (!loggedin) {
        loginfun();
      } else {
        let orderContainer = document.createElement("div");
        orderContainer.setAttribute("class", "order-container");
        orderContainer.style.display = "flex";
        document.body.appendChild(orderContainer);
        document.body.style.overflow = "hidden";
        let userbuy =
          usernamebuy.charAt(0).toUpperCase() +
          usernamebuy.substr(1, usernamebuy.length + 1);
        let orderBoxcontent = `        <div class="order-box">
            <span>Hey ${userbuy}! Your ${name} is waiting in the basket</span>
            <input type="text" name="fulladdress" id="address" placeholder="Enter your Address">

            <span class="payment-method">Payment Method:</span>
            <div class="payment-method-container">
                <input type="radio" id="payment-cod" name="payment-cod" value="cod" checked>
                <label for="payment-cod" class="labelcod">COD (Cash on delivery)</label>
            </div>
            <button class="payment-button">Next</button>
        </div>`;
        orderContainer.innerHTML = orderBoxcontent;
        let scrollpost = document.body.scrollTop;
        document.getElementsByClassName("order-container")[0].style.top =
          scrollpost + "px";

        document.addEventListener("mouseup", function (e) {
          var container = document.getElementsByClassName("order-box")[0];
          var containerbox =
            document.getElementsByClassName("order-container")[0];
          if (!container.contains(e.target)) {
            containerbox.remove();
            document.body.style.overflow = "visible";
          }
        });
        let orderBuyBut = document.getElementsByClassName("payment-button")[0];
        document
          .getElementById("address")
          .addEventListener("keyup", function (e) {
            if (e.keyCode == 13) {
              orderBuyBut.click();
            }
          });
        orderBuyBut.addEventListener("click", function () {
          let fulladdress = document.getElementById("address").value;
          let paymentmode = document.getElementById("payment-cod").value;
          var server_data = {
            name: userbuy,
            price: price,
            address: fulladdress,
            payment: paymentmode,
            date: new Date().toLocaleDateString(),
          };
          var request = $.ajax({
            type: "POST",
            url: "https://upper-eh-24269.herokuapp.com/order/",
            data: JSON.stringify(server_data),
            beforeSend: function () {
              document.body.style.overflow = "visible";
            },
            contentType: "application/json",
            complete: function () {
              document.body.style.overflow = "hidden";
            },
          });
          request.done(function (data) {
            let ordercompleteBox = `<div class="order-complete-box">
                    <img src="./images/order.gif" alt="" class="img-order-complete">
                    <span class="order-complete">Hey, foody! your food is getting ready for the delivery</span>
                    <div class="order-no-container">
                        <span class="order-no">Order No: ${data["status"]}</span>
                    </div>
                </div>`;
            orderContainer.innerHTML = ordercompleteBox;
            document.addEventListener("mouseup", function (e) {
              var container =
                document.getElementsByClassName("order-complete-box")[0];
              var containerbox =
                document.getElementsByClassName("order-container")[0];
              if (!container.contains(e.target)) {
                containerbox.remove();
                document.body.style.overflow = "visible";
              }
            });
          });
        });
      }
    });
}
$(document).ready(function () {
  var server_data = { email: "hey@mail.com", password: "101010" };
  var request = $.ajax({
    type: "GET",
    url: "https://upper-eh-24269.herokuapp.com/",
    data: JSON.stringify(server_data),

    contentType: "application/json",
  });
  request.done(function (data) {
    console.log(data);
    for (let index = 0; index < data["length"]; index++) {
      newtest(
        data["status"][index][1],
        data["status"][index][0],
        data["status"][index][2],
        index
      );
    }
  });
});
