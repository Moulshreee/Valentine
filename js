document.addEventListener("DOMContentLoaded", function() {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const container = document.querySelector(".container");
  const celebration = document.getElementById("celebration");

  // Function to handle mouse movement
  function handleMouseMove(event) {
    const x = event.clientX;
    const y = event.clientY;
    const yesRect = yesButton.getBoundingClientRect();
    const noRect = noButton.getBoundingClientRect();

    const yesDistance = Math.sqrt(Math.pow(x - (yesRect.left + yesRect.width / 2), 2) + Math.pow(y - (yesRect.top + yesRect.height / 2), 2));
    const noDistance = Math.sqrt(Math.pow(x - (noRect.left + noRect.width / 2), 2) + Math.pow(y - (noRect.top + noRect.height / 2), 2));

    // If cursor is close to the "Yes" button, move it towards the button
    if (yesDistance < 10) {
      yesButton.style.transform = "scale(1.1)";
      yesButton.style.transition = "transform 0.1s";
    } else {
      yesButton.style.transform = "scale(1)";
      yesButton.style.transition = "transform 0.2s";
    }

    // If cursor is close to the "No" button, push it away
    if (noDistance < 250) {
      noButton.style.transform = "translate(" + (noRect.left - x) / 1 + "px, " + (noRect.top - y) / 1 + "px)";
    }
  }

  // Function to handle button clicks
  function handleButtonClick(event) {
  if (event.target.id === "yesButton") {
    
    container.innerHTML = `<h1>LET'S FUCKING GGGOOOOOO! <3</h1>`; // Change text
    container.appendChild(celebration); // Display celebration div
  }
}

  // Add mousemove event listener to the document
  document.addEventListener("mousemove", handleMouseMove);

  // Add click event listener to the buttons
  document.addEventListener("click", handleButtonClick);
});
