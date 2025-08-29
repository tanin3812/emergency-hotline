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


let coinCount = 100;
const coin = document.getElementById('coin-count')

const callButtons = document.querySelectorAll('.call-btn');
const historyList = document.getElementById('call-history');
for(const button of callButtons){
  button.addEventListener('click', function(){
    const card = button.closest('.card');
    const serviceName = card.querySelector('h3').innerText
    const serviceNum = card.querySelector('p.text-2xl').innerText

    if(coinCount < 20){
      alert('Insufficient Coins!');
      return;
    }
    coinCount = coinCount - 20;
    coin.innerText = coinCount;
    alert('Calling ' + serviceName + ' (' + serviceNum + ')')

    const time = new Date().toLocaleTimeString();
    const list = document.createElement('li');
    list.innerText = serviceName + '-' + serviceNum + '     -     (' + time + ')';
    historyList.appendChild(list);
  })
}

















