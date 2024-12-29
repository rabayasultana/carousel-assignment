const carouselTrack = document.getElementById("carousel-track");
const leftButton = document.getElementById("left-btn");
const rightButton = document.getElementById("right-btn");
const pagination = document.getElementById("pagination");

// fetch book data
fetch("/book-description.json")
  .then((res) => res.json())
  .then((data) => {
    const books = data;
    books.map((book) => {
      const card = document.createElement("div");
      card.classList.add("carousel-card");
      card.innerHTML = `
            <img src=${book.photo}>
            <div class="card-text">
            <h5>${book.title}</h5>
            <p>${book.description}.</p>
            </div>
          `;
      carouselTrack.appendChild(card);
    });

    const cards = document.querySelectorAll(".carousel-card");
    let currentIndex = 0;

    // dots for each book
    books.map((_, index) => {
      const dot = document.createElement("span");
      dot.classList.add("pagination-dot");
      if (index === 0) dot.classList.add("active");
      pagination.appendChild(dot);
    });

    const dots = document.querySelectorAll(".pagination-dot");

    // function for updating carousel
    function updateCarousel() {
      const cardWidth = carouselTrack.children[0].getBoundingClientRect().width;
      const offset = (carouselTrack.offsetWidth - cardWidth) / 2;
      carouselTrack.style.transform = `translateX(${
        -currentIndex * cardWidth + offset
      }px)`;
    }

    // function for updating class
    function updateClasses() {
      cards.forEach((card, index) => {
        card.classList.remove("center", "side", "far-side");
        if (index === currentIndex) {
          card.classList.add("center");
        } else if (Math.abs(index - currentIndex) === 1) {
          card.classList.add("side");
        } else {
          card.classList.add("far-side");
        }
      });
      dots.forEach((dot, index) => {
        dot.classList.remove("active");
        if (index === currentIndex) {
          dot.classList.add("active");
        }
      });
    }

    // Eventlistener in dots
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateClasses();
        updateCarousel();
      });
    });

    // Keyboard Navigation
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        rightButton.click();
      } else if (event.key === "ArrowLeft") {
        leftButton.click();
      }
    });

    rightButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateClasses();
      updateCarousel();
    });

    leftButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateClasses();
      updateCarousel();
    });

    //Auto-rotation
    setInterval(() => {
      rightButton.click();
    }, 5000);

    updateCarousel();
    updateClasses();
  });
