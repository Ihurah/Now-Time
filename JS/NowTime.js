function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');

  document.querySelector('.clock-times-hour').textContent = h;
  document.querySelector('.clock-times-minute').textContent = m;
  document.querySelector('.clock-times-second').textContent = s;
}

setInterval(updateClock, 1000);
updateClock(); // 初回実行

function disableScroll(event) {
    event.preventDefault();
  }
  
  // イベントと関数を紐付け
document.addEventListener('touchmove', disableScroll, { passive: false });