window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000);
};

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const loveBtn = document.getElementById("loveBtn");
const finalBtn = document.getElementById("finalBtn");
const musicBtn = document.getElementById("musicBtn");

const hero = document.querySelector(".hero");
const giftSection = document.getElementById("giftSection");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const final = document.getElementById("final");

startBtn.onclick = () => {
  hero.classList.add("hidden");
  giftSection.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

nextBtn.onclick = () => {
  giftSection.classList.add("hidden");
  gallery.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

loveBtn.onclick = () => {
  gallery.classList.add("hidden");
  letter.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

finalBtn.onclick = () => {
  letter.classList.add("hidden");
  final.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

musicBtn.onclick = () => {
  const song = document.getElementById("song");

  if (song.paused) {
    song.play();
    musicBtn.innerText = "Pause Music ⏸";
  } else {
    song.pause();
    musicBtn.innerText = "Play Music 🎵";
  window.onload = function () {
  document.getElementById("loader").style.display = "none";
};

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const loveBtn = document.getElementById("loveBtn");
const finalBtn = document.getElementById("finalBtn");
const musicBtn = document.getElementById("musicBtn");

const hero = document.querySelector(".hero");
const gift = document.getElementById("giftSection");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const final = document.getElementById("final");

startBtn.onclick = () => {
  hero.classList.add("hidden");
  gift.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

nextBtn.onclick = () => {
  gift.classList.add("hidden");
  gallery.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

loveBtn.onclick = () => {
  gallery.classList.add("hidden");
  letter.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

finalBtn.onclick = () => {
  letter.classList.add("hidden");
  final.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

musicBtn.onclick = () => {
  const song = document.getElementById("song");
  song.play();

