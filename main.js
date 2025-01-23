// Sign In & Sign Up
document.addEventListener("DOMContentLoaded", function () {
  const signInBox = document.getElementById("signInBox");
  const signUpBox = document.getElementById("signUpBox");
  const userIcon = document.getElementById("user-icon");

  // Toggle Sign in box when clicking user icon
  userIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    signInBox.classList.toggle("hidden");
    signUpBox.classList.add("hidden");
  });

  // toggle between sign-in and sign-up button
  const signUpLink = document.getElementById("signUpLink");
  signUpLink.addEventListener("click", function (event) {
    event.preventDefault();
    signInBox.classList.add("hidden");
    signUpBox.classList.remove("hidden");
  });

  const signInLink = document.getElementById("signInLink");
  signInLink.addEventListener("click", function (event) {
    event.preventDefault();
    signUpBox.classList.add("hidden");
    signInBox.classList.remove("hidden");
  });

  // when user click outside of Sign In box then its disappeared
  document.addEventListener("click", function (event) {
    if (
      !signInBox.contains(event.target) &&
      !signUpBox.contains(event.target) &&
      event.target !== userIcon
    ) {
      signInBox.classList.add("hidden");
      signUpBox.classList.add("hidden");
    }
  });
});

// Side bar
const navDialogue = document.getElementById("nav-dialogue");
function handleMenuBar() {
  navDialogue.classList.toggle("translate-x-full");
}
function closeMenu() {
  navDialogue.classList.add("translate-x-full");
}

// Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll to the section smoothly
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Home Page DOM
const imageContainer = document.querySelectorAll(".card");
const hiddenContents = document.querySelectorAll(".hidden-content");
const cardTitles = document.querySelectorAll(".card-title");

imageContainer.forEach((imageContainer, index) => {
  const hiddenContent = hiddenContents[index];
  const cardTitle = cardTitles[index];

  imageContainer.addEventListener("click", () => {
    hiddenContents.forEach((content, i) => {
      if (i !== index) {
        content.classList.add("hidden");
        cardTitles[i].style.display = "block";
      }
    });
    if (hiddenContent.classList.contains("hidden")) {
      hiddenContent.classList.remove("hidden");
      cardTitle.style.display = "none";
    } else {
      hiddenContent.classList.add("hidden");
      cardTitles.style.display = "block";
    }
  });

  hiddenContent.addEventListener("click", (e) => {
    hiddenContent.classList.add("hidden");
    cardTitle.style.display = "block";
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".card")) {
    hiddenContents.forEach((content, i) => {
      content.classList.add("hidden");
      cardTitles[i].style.display = "block";
    });
  }
});

// select card and hidden buttons
// Popular section DOM
const cardBtns = document.querySelectorAll(".card-btn");
const hiddenBtns = document.querySelectorAll(".hidden-button");
const modals = document.querySelectorAll(".modal");

// loop for each card buttons
cardBtns.forEach((cardBtn, index) => {
  const hiddenBtn = hiddenBtns[index];

  // show read more button when img is clicked
  cardBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    // Hide all hidden buttons
    hiddenBtns.forEach((content) => {
      content.classList.add("hidden");
    });

    // show the selected hidden buttons for the clicked cards
    hiddenBtn.classList.remove("hidden");
  });

  // show modal when read more button is clicked
  hiddenBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const modal = document.getElementById(`modal-${index + 1}`);
    if (modal) {
      modal.classList.remove("hidden");
    }
    hiddenBtn.classList.add("hidden");
  });
});

// hide modal and read more btn when click outside of its range
document.addEventListener("click", () => {
  hiddenBtns.forEach((content) => {
    content.classList.add("hidden");
  });
  modals.forEach((modal) => {
    modal.classList.add("hidden");
  });
});

// close modal when click the close btn
modals.forEach((modal) => {
  const closeBtn = modal.querySelector("span");
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.add("hidden");
  });
});
