// heart count functionality
let heartCount = 0;

const heart = document.getElementById('heart-count')
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


// call and history functionality
let coinCount = 100;

const coin = document.getElementById('coin-count')
const callButtons = document.querySelectorAll('.call-btn');
const historyList = document.getElementById('call-history');
for(const button of callButtons){
  button.addEventListener('click', function(){
    const card = button.closest('.card');
    const serviceName = card.querySelector('p.category').innerText
    const serviceNum = card.querySelector('p.service-num').innerText

    if(coinCount < 20){
      alert('দুঃখিত! আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০টি কয়েন লাগবে।');
      return;
    }
    coinCount = coinCount - 20;
    coin.innerText = coinCount;
    alert('Calling ' + serviceName + ' ' + serviceNum + '...')

    const time = new Date().toLocaleTimeString();
    const list = document.createElement('li');
    const serviceTitle = card.querySelector('h3').innerText
    list.className = "flex justify-between items-center  bg-gray-100 p-3 rounded-lg";
    list.innerHTML = 
      `<div>
        <p class="font-medium">${serviceTitle}</p>
        <p class="text-gray-500">${serviceNum}</p>
      </div>
      <span class="text-gray-500">${time}</span>`
      historyList.prepend(list);
  })
}


// copy functionality
let copyCount = 0;

const navCopyButton = document.getElementById('nav-copy-btn')
const copyButtons = document.querySelectorAll('.copy-btn');
for(const btn of copyButtons){
    btn.addEventListener('click', function () {
    const number = btn.parentElement.parentElement.querySelector('p.text-2xl').innerText;
    copyCount++;
    navCopyButton.innerText = copyCount + ' Copy';
    navigator.clipboard.writeText(number).then(() => {
      alert('নম্বর কপি হয়েছেঃ ' + number)
    })
  });
}


// clear history
document.getElementById('clear-history-btn').addEventListener('click', function(){
  historyList.innerHTML = " ";
})
