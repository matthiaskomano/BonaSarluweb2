// Navbar toggle for mobile
function toggleMenu() {
  const navLinks = document.querySelector("nav ul");
  navLinks.classList.toggle("show");
}

// Projects filter
function filterProjects(category) {
  let projects = document.querySelectorAll(".project-card");
  let buttons = document.querySelectorAll(".filter-btns button");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        messageBox.textContent = "⚠ Please fill in all required fields.";
        messageBox.style.color = "red";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        messageBox.textContent = "⚠ Please enter a valid email address.";
        messageBox.style.color = "red";
      } else {
        messageBox.textContent = "✅ Thank you! Your message has been sent.";
        messageBox.style.color = "green";
        form.reset();
      }
    });
  }
});

// ===== Scroll Reveal for Sections =====
const scrollElements = document.querySelectorAll('.scroll-reveal');

const elementInView = (el, offset = 150) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', () => { 
  handleScrollAnimation();
});

// Initial call to reveal elements already in view
handleScrollAnimation();
