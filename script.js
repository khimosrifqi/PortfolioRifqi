let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*='" + id + "']")
          .classList.add("active");
      });
    }
  });
};
menuIcon.onclick = () => {
  console.log("menu Icon clicked!");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
function sendEmail(event) {
  event.preventDefault(); // Mencegah form dari reload halaman

  emailjs.sendForm("service_p29c745", "template_dpp4lnr", "#contact-form").then(
    function (response) {
      alert("Email berhasil terkirim!", response.status, response.text);
    },
    function (error) {
      alert("Gagal mengirim email...", error);
    }
  );
  // Setelah mengirim email, form akan direset
  document.getElementById("contact-form").reset();
}
