import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Khởi tạo Firebase  
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

// Chỉ khởi tạo Firebase một lần
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Hàm kiểm tra mật khẩu  
function isValidPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= 6 && hasUpperCase && hasLowerCase && hasNumber;
}

// Xử lý đăng ký  
document.getElementById('signupForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    if (!isValidPassword(password)) {
        alert("Mật khẩu phải có ít nhất 6 ký tự, bao gồm chữ hoa, chữ thường và số!");
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created successfully:", userCredential.user);
        alert("Đăng ký thành công! Vui lòng đăng nhập.");

        // Đợi 1 giây trước khi chuyển hướng để tránh lỗi
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);

    } catch (error) {
        console.error("Lỗi đăng ký:", error);
        alert("Lỗi đăng ký: " + error.message);
    }
});

// Initialize Firebase
export const firebaseApp = await initializeApp(firebaseConfig);
export const firestore = await getFirestore(firebaseApp);