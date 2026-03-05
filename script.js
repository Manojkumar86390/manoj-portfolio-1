// particles background

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#3b82f6" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: { speed: 2 }
  }
});


// scroll animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add("show");
}

});

});


// skill animation

window.onload = () => {

document.querySelectorAll(".fill").forEach(bar => {

bar.style.width = bar.getAttribute("style").split(":")[1];

});

};
