const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const cards = document.querySelectorAll(".card");
const cardWidth = cards[0].offsetWidth + 30;

let index = 0;

/* CLONE for infinite loop */
cards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

function updateSlider() {
  track.style.transform = `translateX(-${index * cardWidth}px)`;

  dots.forEach(d => d.classList.remove("active"));
  dots[index % 4].classList.add("active");
}

next.onclick = () => {
  index++;
  if (index >= 4) {
    setTimeout(() => {
      track.style.transition = "none";
      index = 0;
      updateSlider();
      track.offsetHeight;
      track.style.transition = "transform 0.6s ease";
    }, 600);
  }
  updateSlider();
};

prev.onclick = () => {
  if (index === 0) {
    track.style.transition = "none";
    index = 4;
    updateSlider();
    track.offsetHeight;
    track.style.transition = "transform 0.6s ease";
  }
  index--;
  updateSlider();
};
