let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heart = document.getElementById('heart-count')
const coin = document.getElementById('coin-count')
const navCopyButton = document.getElementById('nav-copy-btn')


const allHeart = document.querySelectorAll('.fa-heart');
for(const hearts of allHeart){
    hearts.addEventListener('click', function(){
        heartCount++;
        heart.innerText = heartCount;

        hearts.classList.toggle('fa-solid');
        hearts.classList.toggle('fa-regular');
        hearts.classList.toggle('text-red-500');
    })
}

















const callButtons = document.querySelectorAll(".call-btn");
const historyList = document.getElementById("call-history");
for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h3").innerText;
    const serviceNumber = card.querySelector("p.text-2xl").innerText;

    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    coinCount -= 20;
    coin.innerText = coinCount;

    alert("Calling " + serviceName + " (" + serviceNumber + ")");

    // history এ add করা
    const time = new Date().toLocaleTimeString();
    const li = document.createElement("li");
    li.innerText = serviceName + " - " + serviceNumber + " (" + time + ")";
    historyList.appendChild(li);
  });
}


document.getElementById("clear-history").addEventListener("click", function () {
  historyList.innerHTML = "";
});
