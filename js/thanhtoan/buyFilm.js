function selectValue(value) {  
    document.querySelectorAll('.value-option').forEach(option => {  
        option.classList.remove('selected');  
    });  
    
    event.target.classList.add('selected');  
    document.getElementById('card-value').value = value.toLocaleString('vi-VN') + ' VND';  
  
   
  }  
  
  function selectName(name) {  
    document.querySelectorAll('.name-option').forEach(option => {  
        option.classList.remove('selected');  
    });  
    
    event.target.classList.add('selected');  
    document.getElementById('card-name').name = name.toLocaleString('vi-VN') + ' VND';  
  
   
  }  
  
  function chargeCard() {  
    const cardType = document.getElementById('card-type').value;  
    const cardNumber = document.getElementById('card-number').value;  
    const cardPin = document.getElementById('card-pin').value;  
    const cardValue = document.getElementById('card-value').value;  
    const cardName = document.getElementById('card-name').value;
    if (!cardType) {  
        alert('Vui lòng chọn loại thẻ!');  
        return;  
    }  
    
    if (!cardNumber || !cardPin ) {  
        alert('Vui lòng nhập đầy đủ số seri và mã thẻ!');  
        return;  
    }  
    
    if (!cardValue) {  
        alert('Vui lòng chọn mệnh giá thẻ!');  
        return;  
    }  
  
    if (!cardName) {  
        alert('Vui lòng chọn tên phim!');  
        return;  
    }  
    
    alert(`Nạp thẻ thành công!\nLoại thẻ: ${cardType}\nMệnh giá: ${cardValue}\nTên phim: ${cardName} \nMã thẻ: ${cardPin.substring(0, 4)}****`);  
  }  
  
  document
  .getElementById("back-button")
  .addEventListener("click", function () {
    
    // Chuyển hướng về trang index
    window.location.href = "../index.html";
  });