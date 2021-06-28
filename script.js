let searchBox = document.getElementById("searchbox");
let searchBut = document.getElementsByClassName('fa')[0];
function searchboxcss(){
    let displayValue = window.getComputedStyle(searchBox).display;
    if (displayValue=='none'){
    searchBox.style.display = 'inline-block';
    document.getElementsByClassName('fa')[0].style.transform = 'translate(0, 0)';
    }
    else{
        searchBox.style.display = "none";
        document.getElementsByClassName('fa')[0].style.transform = 'translate(225px, 0)';
    }
    
}
searchBut.addEventListener('click', searchboxcss);
let foodBut1 = document.getElementsByClassName('food-type')[0];
let foodBut2 = document.getElementsByClassName('food-type')[1];
function foodVisual1(){
    foodBut1.style.borderStyle = "solid"
    foodBut1.style.borderBottomWidth = '3px';
    foodBut1.style.borderBottomColor = "rgb(247, 97, 71)";
    foodBut2.style.borderBottomColor = "transparent";   }
function foodVisual2(){
    foodBut2.style.borderStyle = "solid"
    foodBut2.style.borderBottomWidth = '3px';
    foodBut2.style.borderBottomColor = "rgb(247, 97, 71)"
    foodBut1.style.borderBottomColor = "transparent";
}
foodBut1.addEventListener('click', foodVisual1);
foodBut2.addEventListener('click', foodVisual2);
function loginfun(){
    var loginContainer = document.createElement('div')
    document.body.appendChild(loginContainer)
    loginContainer.setAttribute('class', 'login-container');
    var loginBox = document.createElement('div');
    document.getElementsByClassName('login-container')[0].appendChild(loginBox);
    loginBox.classList.add('login-box');
    var logspan = document.createElement('span');
    logspan.innerHTML = "Log in";
    document.getElementsByClassName('login-box')[0].appendChild(logspan);
    var userName = document.createElement('input');
    userName.setAttribute('type', 'text');
    userName.setAttribute('id', 'username')
    userName.setAttribute('placeholder', 'User Name');
    document.getElementsByClassName('login-box')[0].appendChild(userName);
    document.body.style.overflow = "hidden";
    var password = document.createElement('input')
    password.setAttribute('type', 'password');
    password.setAttribute('id', 'password');
    password.setAttribute('placeholder', 'Password')
    document.getElementsByClassName('login-box')[0].appendChild(password);
    var logButton = document.createElement('button');
    logButton.setAttribute('class', 'login-form');
    logButton.innerHTML = "Log in";
    document.getElementsByClassName('login-box')[0].appendChild(logButton);
    document.addEventListener('mouseup', function(e) {
        var container = document.getElementsByClassName('login-box')[0];
        var containerbox = document.getElementsByClassName('login-container')[0];
        if (!container.contains(e.target)) {
            containerbox.remove();
            document.body.style.overflow = "visible";
        }
    });
}
let loginBut = document.getElementById('log-in');
loginBut.addEventListener('click', loginfun);
function signupfun(){
    let signupcontainer = document.createElement('div');
    alert("Hello World")
}
function viewCard(){
    let foodContent = document.createElement('div');
    foodContent.setAttribute('class', 'food-content');
    document.getElementsByClassName('container-content')[0].appendChild(foodContent);
    let img = document.createElement('img')
    img.src = "./images/burger_kings.png"
    document.getElementsByClassName('food-content')[0].appendChild(img);
    let foodDetails = document.createElement('div');
    foodDetails.setAttribute('class', 'food-details');
    document.getElementsByClassName('food-content')[0].appendChild(foodDetails);
    var foodName = document.createElement('span');
    foodName.setAttribute('class', 'food-name');
    foodName.innerHTML = "McDonald's";
    document.getElementsByClassName('food-details')[0].appendChild(foodName);
    var foodPrice = document.createElement('span');
    foodPrice.setAttribute('class', 'food-price');
    document.getElementsByClassName('food-details')[0].appendChild(foodPrice);
    foodPrice.innerHTML = "150 for one";
    var buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'button1');
    document.getElementsByClassName('food-details')[0].appendChild(buttonDiv);
    let button1 = document.createElement('button');
    document.getElementsByClassName('button1')[0].appendChild(button1);
    button1.innerHTML = "Buy";
    
}
function newtest(name){
    var foodContent = document.createElement('div');
    foodContent.setAttribute('class', 'food-content');
    foodContent.innerHTML = `<img src=\"./images/burger_kings.png\" alt=\"burger\"><div class=\"food-details\"><span class=\"food-name\">${name}</span><span class=\"food-price\">&#8377; 150 for one</span><div class=\"button1\"><button>Buy</button></div></div>`;
    document.getElementsByClassName('container-content')[0].appendChild(foodContent);
}
for (let index = 0; index < 4; index++) {
    newtest("McDonald");
    
}

