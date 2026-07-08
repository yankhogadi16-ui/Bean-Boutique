 const eventDate = new Date("July 10, 2026 10:00:00").getTime();
    const timer = document.getElementById("timer");

    setInterval(function() {
      let now = new Date().getTime();
      let distance = eventDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        timer.innerHTML = "Event Started!";
      }
    }, 1000);
  document.getElementById("searchInput").addEventListener("keyup", function() {
      let filter = this.value.toLowerCase();
      let cards = document.querySelectorAll(".coffee-card");
      cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if(text.includes(filter)) {
          card.style.display = "";
          card.classList.add("highlight");
        } else {
          card.style.display = "none";
          card.classList.remove("highlight");
        }
      });
    });
     let cart = [];
  function addToCart(item) {
    cart.push(item);
    document.getElementById("cartItems").innerHTML = cart.join("<br>");
  }