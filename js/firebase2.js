import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// Cấu hình Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAL55gOaE5Vm4Oit39eKyokn3UPExj4KDA",
    authDomain: "jsi31-19351.firebaseapp.com",
    databaseURL: "https://jsi31-19351-default-rtdb.firebaseio.com",
    projectId: "jsi31-19351",
    storageBucket: "jsi31-19351.firebasestorage.app",
    messagingSenderId: "522525831589",
    appId: "1:522525831589:web:9a878305707d5a13aaf84c",
    measurementId: "G-HB66MS1MVV"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Xử lý đăng nhập
document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Đăng nhập thành công:", userCredential.user);
        alert("🎉 Đăng nhập thành công!");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } catch (error) {
        console.error("❌ Lỗi đăng nhập:", error);

        let errorMessage;
        switch (error.code) {
            case "auth/user-not-found":
                errorMessage = "❌ Tài khoản không tồn tại!";
                break;
            case "auth/wrong-password":
                errorMessage = "❌ Sai mật khẩu, vui lòng thử lại!";
                break;
            case "auth/invalid-email":
                errorMessage = "❌ Email không hợp lệ!";
                break;
            case "auth/too-many-requests":
                errorMessage = "🚫 Bạn nhập sai quá nhiều lần, hãy thử lại sau!";
                break;
            default:
                errorMessage = "⚠️ Lỗi không xác định: " + error.message;
                break;
        }

        alert(errorMessage);
    }
});

