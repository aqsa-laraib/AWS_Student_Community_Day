// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const cards = document.querySelectorAll(".speaker-card");

  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add("show");
    } else {
      card.classList.remove("show");
    }
  });
}

// Attach an event listener for the scroll event
window.addEventListener("scroll", handleScroll);

// Initially check the elements in view on page load
document.addEventListener("DOMContentLoaded", handleScroll);

// Smart Search - Task C
document.getElementById('speakerSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  const cards = document.querySelectorAll('.speaker-card');

  cards.forEach(card => {
    const details = card.querySelector('.speaker-details');
    const allText = details ? details.innerText.toLowerCase() : '';

    if (allText.includes(query)) {
      card.style.display = 'block';
      card.classList.add('show');
    } else {
      card.style.display = 'none';
      card.classList.remove('show');
    }
  });
});
