import { firestore } from "../home/firebase.js";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore-lite.js";

// User constructor
export default function User(email, username, history = []) {
  this.email = email;
  this.username = username;
  this.history = history; // [{ filmId: string, boughtDate: string }]
  return this;
}

// Local cache
let users = [];

// Lấy danh sách người dùng
export async function getUserList() {
  const usersRef = collection(firestore, "users");
  const querySnapshot = await getDocs(usersRef);
  users = []; // clear previous cache
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const userObject = new User(
      data.email,
      data.username,
      data.history || []
    );
    users.push(userObject);
  });
  console.log(users);
}

// Thêm người dùng mới
export async function addUser(email, username) {
  const usersRef = collection(firestore, "users");
  const userData = {
    email,
    username,
    history: [],
    createdAt: new Date().toISOString(), // 👈 Use ISO string
  };
  try {
    await addDoc(usersRef, userData);
    console.log(`User ${email} created.`);
  } catch (error) {
    console.error("Error adding user: ", error);
  }
}

// Lấy user theo email (và trả cả docId để update)
export async function getUserByEmail(email) {
  const q = query(collection(firestore, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const docSnap = querySnapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such user!");
    return null;
  }
}

// Cập nhật lịch sử mua phim của người dùng
export async function updateUserHistory(email, newHistory) {
  const q = query(collection(firestore, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const userDoc = querySnapshot.docs[0];
    const userRef = userDoc.ref;

    try {
      await setDoc(userRef, { history: newHistory }, { merge: true });
      console.log(`History updated for user ${email}.`);
    } catch (error) {
      console.error("Error updating history: ", error);
    }
  } else {
    console.error(`User with email ${email} not found.`);
  }
}

// Thêm một giao dịch mới vào lịch sử
export async function addHistoryEntry(email, filmId) {
  const user = await getUserByEmail(email);
  if (!user) {
    console.error(`User with email ${email} not found.`);
    return;
  }

  const currentHistory = user.history || [];
  const newEntry = {
    filmId,
    boughtDate: new Date().toISOString(), // 👈 Simple client date
  };

  const updatedHistory = [...currentHistory, newEntry];
  await updateUserHistory(email, updatedHistory);
}
