/*
ملف إعدادات الفايربيز
مجهز للعمل لما نقرر نربط المنصة بقاعدة بيانات حقيقية
حاليا إحنا بنستخدم الـ LocalStorage عشان نسهل عليك المعاينة والتجربة
*/

// إعدادات فايربيز (هتتغير بالبيانات الحقيقية للمشروع بتاعك بعدين)
const firebaseConfig = {
    apiKey: "AIzaSy_YOUR_API_KEY_HERE",
    authDomain: "kameshkah-learn.firebaseapp.com",
    projectId: "kameshkah-learn",
    storageBucket: "kameshkah-learn.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

// الدالة دي مسؤولة عن تهيئة الفايربيز في الموقع كله
function initFirebase() {
    console.log("Firebase initialized (Placeholder)");
    // const app = firebase.initializeApp(firebaseConfig);
    // const db = firebase.firestore();
    // const auth = firebase.auth();
    // return { app, db, auth };
}

// initFirebase();