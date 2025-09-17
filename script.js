// Sections navigation
function nextSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Start celebration
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("message").classList.remove("hidden");
  document.getElementById("bgMusic").play();
});

// Slideshow
let slideIndex = 0;
setInterval(() => {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);

// Countdown
function updateCountdown() {
  let birthday = new Date("2025-09-20 00:00:00").getTime();
  let now = new Date().getTime();
  let diff = birthday - now;

  if (diff < 0) {
    document.getElementById("timer").innerHTML = "🎉 It's Today! 🎂";
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let mins = Math.floor((diff / (1000 * 60)) % 60);
  let secs = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(updateCountdown, 1000);

// Candle blow
function blowCandle() {
  document.getElementById("candle").style.background = "gray";
  alert("🕯️ Candle Blown! Make a wish ✨");
}

// Fireworks
document.getElementById("celebrateBtn").addEventListener("click", () => {
  let canvas = document.getElementById("fireworksCanvas");
  let ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function random(num) { return Math.random() * num; }

  setInterval(() => {
    let x = random(canvas.width);
    let y = random(canvas.height/2);
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = `hsl(${random(360)},100%,50%)`;
      ctx.beginPath();
      ctx.arc(x, y, random(3), 0, Math.PI * 2);
      ctx.fill();
    }
  }, 500);
});

// Music toggle
document.getElementById("musicBtn").addEventListener("click", () => {
  let music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
});
