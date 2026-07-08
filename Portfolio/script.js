// Typing Effect

const text = [
"IT Student",
"Web Developer",
"Java Programmer",
"Frontend Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

current = text[i];

document.getElementById("typing").textContent =
current.substring(0, j);

if (!isDeleting) {
j++;
if (j > current.length) {
isDeleting = true;
setTimeout(type, 1000);
return;
}
} else {
j--;
if (j < 0) {
isDeleting = false;
i = (i + 1) % text.length;
}
}

setTimeout(type, isDeleting ? 60 : 120);
}

type();

// Scroll To Top

const btn = document.getElementById("topBtn");

window.onscroll = function () {

if (document.documentElement.scrollTop > 300)
btn.style.display = "block";
else
btn.style.display = "none";

};

btn.onclick = function () {

window.scrollTo({
top: 0,
behavior: "smooth"
});

};
