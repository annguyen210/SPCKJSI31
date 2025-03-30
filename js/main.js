        // kiem tra neu chua co nguoi dung thi chuyen huong ve trang login.html
// document.addEventListener("DOMContentLoaded", function () {
// const username = localStorage.getItem("loginEmail");
//  const password = localStorage.getItem("loginPassword");

//  const userInfoDiv = document.getElementById("user-info");

//  if (username) {
//    userInfoDiv.innerHTML = `  
//        <p>Chào mừng: <strong>${loginEmail}</strong></p>  
//        <p>Mật khẩu của bạn là: <strong>${loginPassword}</strong></p>  
//    `;
//  } else {
//    userInfoDiv.innerHTML = "<p>Vui lòng đăng nhập để truy cập trang này.</p>";
//    window.location.href = "login.html";                  // Nếu không đăng nhập, chuyển hướng về trang đăng nhập
//  }



document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // Xóa thông tin người dùng
      localStorage.removeItem("loginEmail");
      localStorage.removeItem("loginPassword");
      // Chuyển hướng về trang đăng ký
      window.location.href = "signup.html";
    });

 
