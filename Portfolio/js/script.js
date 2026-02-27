document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});


const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".cert-img");
const close = document.querySelector(".close");

images.forEach(img => {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

close.onclick = function() {
  modal.style.display = "none";
}


window.onload = function() {
  window.scrollTo(0,0);
};