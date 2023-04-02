// ToptobottomPart

var backToTopBtn = document.querySelector("#back-to-topbtn");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// loginRedirection

const logbtn = document.getElementById("logbtn");

logbtn.addEventListener("click", function () {
    window.location.href = "login.html";
});


const heartbtn = document.getElementById("heartbtn");

heartbtn.addEventListener("click", function () {
    window.location.href = "MainLogin.html";
});


//   firstSlider

let firstMenuImage = [
    "https://images.bewakoof.com/uploads/grid/app/static-1x1-NoFadeTee-Common-V3-1679941555.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-revmped-theultimatejoggers-1679389276.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-airy-sleeveless-vests-1679846245.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-bday-banner--1--1680247501.jpg",
    "https://images.bewakoof.com/uploads/grid/app/1x1-pyjamas-m-1680028589.jpg",
    "https://images.bewakoof.com/uploads/grid/app/static-1x1-NoFadeTee-Men-V3-1679941555.jpg"
];

const windowSize = 3;
let startIndex = 0;

function slideDivs7(startIndex) {
    let first = document.getElementById("first");
    first.innerHTML = '';
    for (let i = startIndex; i < startIndex + windowSize && i < firstMenuImage.length; i++) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = firstMenuImage[i];
        div.append(image);
        first.appendChild(div);
    }
}

slideDivs7(startIndex);

function next7() {
    console.log("next");
    startIndex += 1;
    if (startIndex >= firstMenuImage.length - 2) {
        startIndex = 0;
    }
    slideDivs7(startIndex);
}

function prev7() {
    console.log("prev");
    startIndex -= 1;
    if (startIndex < 0) {
        startIndex = 0;
    }
    slideDivs7(startIndex);
}

document.getElementById('rightArrow7').addEventListener('click', next7);
document.getElementById('leftArrow7').addEventListener('click', prev7);


// PRODUCTPAGE

const products1 = document.getElementById("products1");

products1.addEventListener("click", function () {
    event.preventDefault()
    window.location.href = "product.html";
});



const products2 = document.getElementById("products2");

products2.addEventListener("click", function () {
    event.preventDefault()
    window.location.href = "product.html";
});




let SignOut=document.getElementById("SignOut")
SignOut.onclick=()=>{
    localStorage.removeItem("logged")
    window.location.reload()
    location="login.html"
}


/* CartRedirection */

const CartRedirection = document.getElementById("CartRedirection");

CartRedirection.addEventListener("click", function () {
    window.location.href = "cart.html";
});