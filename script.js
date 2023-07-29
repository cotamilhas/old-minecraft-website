document.addEventListener("DOMContentLoaded", function() {
    const peopleElement = document.getElementById("peopleCount");
    const boughtElement = document.getElementById("boughtCount");
  
    let peopleCount = parseInt(localStorage.getItem("savedPeopleCount")) || 0;
    let boughtCount = parseInt(localStorage.getItem("savedBoughtCount")) || 0;
  
    let peopleInterval, boughtInterval;
  
    function updateCounter() {
      clearInterval(peopleInterval);
      clearInterval(boughtInterval);
  
      peopleInterval = setInterval(() => {
        peopleCount++;
        peopleElement.innerText = formatNumberWithCommas(peopleCount);
        localStorage.setItem("savedPeopleCount", peopleCount);
      }, 3000);
  
      boughtInterval = setInterval(() => {
        boughtCount++;
        boughtElement.innerText = formatNumberWithCommas(boughtCount);
        localStorage.setItem("savedBoughtCount", boughtCount);
      }, 11000);
    }
  
    function formatNumberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
    updateCounter();
  });
  