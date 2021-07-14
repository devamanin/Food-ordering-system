$(document).ready(function () {
  let searchBox = document.getElementById("searchbox");
  let searchBut = document.getElementsByClassName("fa")[0];
  let loggedin = false;
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
  let usernamebuy;
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
    let errorLog = document.createElement('div');
    errorLog.setAttribute('class', 'error-log');
    document.getElementsByClassName("login-box")[0].appendChild(errorLog);
    var userName = document.createElement("input");
    userName.setAttribute("type", "text");
    userName.setAttribute("id", "username");
    userName.setAttribute("placeholder", "User Name");
    userName.setAttribute('required', '');
    document.getElementsByClassName("login-box")[0].appendChild(userName);
    document.body.style.overflow = "hidden";
    var password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("id", "password");
    password.setAttribute('required', '');
    password.setAttribute("placeholder", "Password");
    document.getElementsByClassName("login-box")[0].appendChild(password);
    var logButton = document.createElement("button");
    logButton.setAttribute("class", "login-form");
    logButton.innerHTML = `<span class="button__text">Log in</span>`;
    document.getElementsByClassName("login-box")[0].appendChild(logButton);
    let scrollpost = document.body.scrollTop;
    document.getElementsByClassName("login-container")[0].style.top =
      scrollpost + "px";
    function loginoutside(e) { }
    document.addEventListener("mouseup", function (e) {
      var container = document.getElementsByClassName("login-box")[0];
      var containerbox = document.getElementsByClassName("login-container")[0];
      if (!container.contains(e.target)) {
        containerbox.remove();
        document.body.style.overflow = "visible";
      }
    });
    let usernamevalidity = false;
    let usernamefield = document.getElementById("username");
    usernamefield.addEventListener("input", function () {
      if (!usernamefield.checkValidity()) {
        usernamefield.style.borderColor = "red";

        usernamevalidity = false;
      } else {
        usernamefield.style.borderColor = "green";
        usernamevalidity = true;
      }
    });
    let passwordvalidity = false;
    let passwordField = document.getElementById("password");
    passwordField.addEventListener("input", function () {
      if (!passwordField.checkValidity()) {
        passwordField.style.borderColor = "red";

        passwordvalidity = false;
      } else {
        passwordField.style.borderColor = "green";
        passwordvalidity = true;
      }
    });
    document
      .getElementsByClassName("login-form")[0]
      .addEventListener("click", function () {
        document.getElementsByClassName("error-log")[0].innerHTML =
          "";
        document.getElementsByClassName("error-log")[0].style.backgroundColor =
          "transparent";
        if (usernamevalidity == true && passwordvalidity == true) {
          let username = document.getElementById("username").value;
          let password = document.getElementById("password").value;
          var server_data = { username: username, password: password };
          var request = $.ajax({
            type: "POST",
            url: "https://upper-eh-24269.herokuapp.com/login/",
            data: JSON.stringify(server_data),
            beforeSend: function () {
              logButton.classList.add('button--loading');
              logButton.style.backgroundColor = "rgb(247, 97, 71)"
            },
            contentType: "application/json",
            complete: function () {
              logButton.classList.remove('button--loading')
              logButton.style.background = "#EFEFEF"
            }
            // dataType: 'json'
          });
          request.done(function (data) {
            if (data["status"] == true) {
              errorLog.innerHTML = "<span>Logged in successfully</span>";
              errorLog.style.backgroundColor = "rgb(119, 252, 119)";
              setTimeout(function () {
                var containerbox =
                  document.getElementsByClassName("login-container")[0];
                containerbox.remove();
                document.body.style.overflow = "visible";
                loggedin = true;
                document.getElementById("log-in").style.display = "none";
                document.getElementById("sign-up").style.display = "none";
                let buttoncontainer = document.getElementsByClassName("button")[0];
                let namecard = document.createElement("span");
                namecard.setAttribute("class", "name-card");
                namecard.innerHTML = data["user"].charAt(0).toUpperCase();
                buttoncontainer.appendChild(namecard);
                usernamebuy = data["user"];
              }, 3000);

            } else {
              errorLog.innerHTML = "<span>username and password is incorrect</span>";
              errorLog.style.backgroundColor = "rgb(253, 87, 87)";
            }
          });
        }
        else {
          document.getElementsByClassName("error-log")[0].innerHTML =
            "<span>Sorry, Validation failed!</span>";
          document.getElementsByClassName("error-log")[0].style.backgroundColor =
            "rgb(253, 87, 87)";
        }
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
    var errorlog = document.createElement("div");
    errorlog.setAttribute("class", "error-log");
    document.getElementsByClassName("signup-box")[0].appendChild(errorlog);

    var fullName = document.createElement("input");
    fullName.setAttribute("type", "text");
    fullName.setAttribute("id", "fullname");
    fullName.setAttribute("placeholder", "Full Name");
    fullName.setAttribute("required", "");
    document.getElementsByClassName("signup-box")[0].appendChild(fullName);
    var emailId = document.createElement("input");
    emailId.setAttribute("type", "email");
    emailId.setAttribute("placeholder", "Email id");
    emailId.setAttribute("class", "emailid");
    emailId.setAttribute("required", "");
    document.getElementsByClassName("signup-box")[0].appendChild(emailId);
    document.body.style.overflow = "hidden";
    var password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("id", "password");
    password.setAttribute("placeholder", "Password");
    password.setAttribute("minlength", "8");
    password.setAttribute("required", "");
    document.getElementsByClassName("signup-box")[0].appendChild(password);
    var signupButton = document.createElement("button");
    signupButton.setAttribute("class", "signup-form");
    signupButton.innerHTML = `<span class="button__text">Create a account</span>`;
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
    let passwordvalidity = false;
    let passwordField = document.getElementById("password");
    passwordField.addEventListener("input", function () {
      if (!passwordField.checkValidity()) {
        passwordField.style.borderColor = "red";
        passwordvalidity = false;
      } else {
        passwordField.style.borderColor = "green";
        passwordvalidity = true;
      }
    });
    let namevalidity = false;
    let namefield = document.getElementById("fullname");
    namefield.addEventListener("input", function () {
      if (!namefield.checkValidity()) {
        namefield.style.borderColor = "red";
        namevalidity = false;
      } else {
        namefield.style.borderColor = "green";
        namevalidity = true;
      }
    });
    let emailvalidity = false;
    let emailfield = document.getElementsByClassName("emailid")[0];
    emailfield.addEventListener("input", function () {
      if (!emailfield.checkValidity()) {
        emailfield.style.borderColor = "red";
        emailvalidity = false;
      } else {
        emailfield.style.borderColor = "green";
        emailvalidity = true;
      }
    });
    document
      .getElementsByClassName("signup-form")[0]
      .addEventListener("click", function () {

        if ((namevalidity === true) && (passwordvalidity === true) && (emailvalidity === true)) {
          document.getElementsByClassName("error-log")[0].innerHTML = "";
          document.getElementsByClassName("error-log")[0].style.backgroundColor =
            "transparent";
          let fullname = document.getElementById("fullname").value;
          let emailid = document.getElementsByClassName("emailid")[0].value;
          let password = document.getElementById("password").value;
          var server_data = {
            fullname: fullname,
            email: emailid,
            password: password,
          };
          // 
          var request = $.ajax({
            type: "POST",
            url: "https://upper-eh-24269.herokuapp.com/signup/",
            data: JSON.stringify(server_data),
            beforeSend: function () {
              signupButton.classList.add('button--loading');
              signupButton.style.backgroundColor = "rgb(247, 97, 71)"
            },
            contentType: "application/json",
            complete: function () {
              signupButton.classList.remove('button--loading')
              signupButton.style.background = "#EFEFEF"
            }
            // dataType: 'json'
          });
          request.done(function (data) {
            if (data["status"] == "200") {
              setTimeout(function () {
                var containerbox = document.getElementsByClassName("signup-container")[0];
                containerbox.remove();
                document.body.style.overflow = "visible";
              }, 3000);
              document.getElementsByClassName("error-log")[0].innerHTML =
                "<span>Account created successfully</span>";
              document.getElementsByClassName("error-log")[0].style.backgroundColor =
                "rgb(119, 252, 119)";
              // rgb(119, 252, 119);
            } else {
              document.getElementsByClassName("error-log")[0].innerHTML =
                "<span>Email already exist</span>";
              document.getElementsByClassName("error-log")[0].style.backgroundColor =
                "rgb(253, 87, 87)";
            }
          });
        }
        else {
          document.getElementsByClassName("error-log")[0].innerHTML =
            "<span>Sorry, Validation failed!</span>";
          document.getElementsByClassName("error-log")[0].style.backgroundColor =
            "rgb(253, 87, 87)";
          // namefield.style.borderColor = "red";
          // emailfield.style.borderColor = "red";
          // passwordField.style.borderColor = "red";
        }
      });
  }
  let signBut = document.getElementById("sign-up");
  signBut.addEventListener("click", signupfun);
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
            <button class="payment-button"><span class="button__text">Next</span></button>
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
              let paymentButton = document.getElementsByClassName('payment-button')[0];
              paymentButton.classList.add('button--loading')
              paymentButton.style.backgroundColor = "rgb(247, 97, 71)"
            },
            contentType: "application/json",
            complete: function () {
              // document.body.style.overflow = "hidden";
              paymentButton.classList.remove('button-loading');
              paymentButton.style.backgroundColor = "#EFEFEF"
            },
            // dataType: 'json'
          });
          request.done(function (data) {
            // 
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
  function elementshide() {
    document.getElementsByClassName("nav-bar")[0].style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("food-category").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  function elementsunhide() {
    document.getElementsByClassName("nav-bar")[0].style.display = "flex";
    document.getElementById("main").style.display = "block";
    document.getElementById("food-category").style.display = "block";
    document.getElementById("footer").style.display = "block";
  }
//   var server_data = { email: "hey@mail.com", password: "101010" };
  var request = $.ajax({
    type: "GET",
    url: "https://upper-eh-24269.herokuapp.com/",
//     data: JSON.stringify(server_data),
    beforeSend: function () {
      document.body.scrollTop = "0px";
      let loader = document.createElement("div");
      loader.setAttribute("class", "loader");
      loader.innerHTML = `<div class="loader-container"><div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;
      document.body.appendChild(loader);
      elementshide();
      document.body.style.overflowY = "hidden";
    },
    complete: function () {
      document.getElementsByClassName("loader")[0].remove();
      document.body.style.overflowY = "scroll";
      elementsunhide();
    },
    contentType: "application/json",
    // dataType: 'json'
  });
  request.done(function (data) {

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
