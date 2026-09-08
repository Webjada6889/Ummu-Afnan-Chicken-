const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappNumber = "234 8038286299";

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    const message = encodeURIComponent(
      `Hello UMMU AFNAN Chicken, I would like to order: ${item}. Please send me the details.`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  });
});



const advertisementSound = document.getElementById("advertisementSound");
const soundButton = document.getElementById("soundButton");

let soundStarted = false;

// Start advertisement sound after visitor interaction
function startAdvertisementSound() {
  if (soundStarted) return;

  advertisementSound.volume = 0.7;

  advertisementSound.play()
    .then(() => {
      soundStarted = true;
      soundButton.textContent = "🔊";
    })
    .catch(() => {
      // Browser still blocked playback
    });
}

// Visitor interactions
document.addEventListener("click", startAdvertisementSound, { once: true });
document.addEventListener("touchstart", startAdvertisementSound, { once: true });
document.addEventListener("scroll", startAdvertisementSound, { once: true });
document.addEventListener("keydown", startAdvertisementSound, { once: true });

// Mute / unmute button
soundButton.addEventListener("click", function (event) {
  event.stopPropagation();

  if (advertisementSound.muted) {
    advertisementSound.muted = false;
    soundButton.textContent = "🔊";
  } else {
    advertisementSound.muted = true;
    soundButton.textContent = "🔇";
  }
});