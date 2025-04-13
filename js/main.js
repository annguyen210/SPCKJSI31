// kiem tra neu chua co nguoi dung thi chuyen huong ve trang login.html
 document.addEventListener("DOMContentLoaded", function () {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const userInfoDiv = document.getElementById("user-info");

 /* if (username) {
    userInfoDiv.innerHTML = `  
        <p>Chào mừng: <strong>${username}</strong></p>  
        <p>Mật khẩu của bạn là: <strong>${password}</strong></p>  
    `;
  } else {
    userInfoDiv.innerHTML = "<p>Vui lòng đăng nhập để truy cập trang này.</p>";
    window.location.href = "login.html"; // Nếu không đăng nhập, chuyển hướng về trang đăng nhập
  } */

  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // Xóa thông tin người dùng
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      // Chuyển hướng về trang đăng ký
      window.location.href = "signup.html";
    });
});









 
