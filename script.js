//your code here
const images = document.querySelectorAll(".image");
let draggedElement = null;

// When drag starts
images.forEach(img => {
  img.addEventListener("dragstart", function () {
    draggedElement = this;
  });
});

// Allow drop
images.forEach(img => {
  img.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
});

// Swap background images or text
images.forEach(img => {
  img.addEventListener("drop", function () {
    if (draggedElement === this) return;

    // swap inner content (or use background-image if you applied one)
    let temp = draggedElement.innerHTML;
    draggedElement.innerHTML = this.innerHTML;
    this.innerHTML = temp;
  });
});
