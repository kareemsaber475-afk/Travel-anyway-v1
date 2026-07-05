const heroImage = document.getElementById("heroImage");

const images = [
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg",
    "hero4.jpg"
];

let currentImage = 0;

setInterval(function () {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    heroImage.src = images[currentImage];

}, 3000);

const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

const hiddenElements = document.querySelectorAll(
".card, .feature, .review, .gallery-item"
);

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(function(element){

observer.observe(element);

});

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", function(){

    nav.classList.toggle("active");

});

const links = document.querySelectorAll(".nav a");

links.forEach(function(link){

    link.addEventListener("click", function(){

        nav.classList.remove("active");

    });

});

const loader = document.getElementById("loader");

window.addEventListener("load", function () {

    setTimeout(function () {

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    }, 2000);

});

const successMessage = document.getElementById("successMessage");

if(successMessage){

    // هنستخدمه بعدين عند إرسال الفورم

}

setTimeout(function(){

successMessage.classList.remove("show");

},3000);

const text="Discover Your Next Adventure";

const title=document.querySelector(".hero-text h2");

let index=0;

title.innerHTML="";

function typing(){

if(index<text.length){

title.innerHTML+=text.charAt(index);

index++;

setTimeout(typing,80);

}

}

typing();

const buttons=document.querySelectorAll("button");

buttons.forEach(function(btn){

btn.addEventListener("click",function(){

btn.style.background="green";

setTimeout(function(){

btn.style.background="";

},300);

});

});

const logo=document.querySelector(".logo");

logo.addEventListener("mouseover",function(){

logo.style.transform="rotate(5deg) scale(1.1)";

});

logo.addEventListener("mouseout",function(){

logo.style.transform="rotate(0deg) scale(1)";

});

function counter(id,end){

let count=0;

let item=document.getElementById(id);

let interval=setInterval(function(){

count++;

item.innerHTML=count;

if(count==end){

clearInterval(interval);

}

},20);

}

counter("num1",500);

counter("num2",120);

counter("num3",80);
