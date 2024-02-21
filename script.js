document.addEventListener("DOMContentLoaded", function() {
  // Set the date for the start of the FC season
  const startDate = new Date("2024-02-29T16:30:00");

  // Update the countdown every second
  const interval = setInterval(function() {
    const now = new Date().getTime();
    const distance = startDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = "FC season has started!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
});
