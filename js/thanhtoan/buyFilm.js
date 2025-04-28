let selectedMovie = "";
let selectedTime = "";

const movieOptions = document.getElementById('movieOptions').children;
const timeOptions = document.getElementById('timeOptions').children;
for (let movie of movieOptions) {
  movie.addEventListener('click', function() {
    for (let m of movieOptions) m.classList.remove('active');
    this.classList.add('active');
    selectedMovie = this.getAttribute('data-name');
  });
}

for (let time of timeOptions) {
  time.addEventListener('click', function() {
    for (let t of timeOptions) t.classList.remove('active');
    this.classList.add('active');
    selectedTime = this.getAttribute('data-time');
  });
}

function submitPayment() {
  const cardCode = document.getElementById('cardCode').value.trim();
  const result = document.getElementById('result');

  if (!selectedMovie) {
    alert('Vui lòng chọn phim!');
    return;
  }
  if (!selectedTime) {
    alert('Vui lòng chọn giờ chiếu!');
    return;
  }
  if (!cardCode) {
    alert('Vui lòng nhập mã thẻ!');
    return;
  }

  // Xử lý thanh toán giả lập
  result.innerHTML = `
    Thanh toán thành công! <br>
    Phim: <strong>${selectedMovie}</strong> <br>
    Giờ chiếu phim: <strong>${selectedTime}</strong> <br>
    Mã phim: <strong>${cardCode}</strong> <br>
    Chúc bạn xem phim vui vẻ!
  `;
}



document
.getElementById("back-button")
.addEventListener("click", function () {
  
  // Chuyển hướng về trang index
  window.location.href = "../index.html";
});