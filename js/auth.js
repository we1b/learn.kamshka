/*
نظام تسجيل الدخول والتوثيق الوهمي (Local Auth)
بيعتمد على مساحة التخزين في المتصفح عشان يدي اليوزر تجربة حقيقية
*/

const AUTH_KEY = 'kameshkah_auth';
const USER_KEY = 'kameshkah_user';

// التحقق من حالة تسجيل الدخول
function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === 'true';
}

// دالة تسجيل الدخول
function login(email, password) {
    if (email && password) {
        localStorage.setItem(AUTH_KEY, 'true');
        localStorage.setItem(USER_KEY, JSON.stringify({ name: "مصطفى عبد الناصر", email: email }));
        return true;
    }
    return false;
}

// دالة إنشاء حساب
function signup(name, email, password) {
    if (name && email && password) {
        localStorage.setItem(AUTH_KEY, 'true');
        localStorage.setItem(USER_KEY, JSON.stringify({ name: name, email: email }));
        return true;
    }
    return false;
}

// دالة تسجيل الخروج
function logout() {
    localStorage.setItem(AUTH_KEY, 'false');
    localStorage.removeItem(USER_KEY);
    window.location.href = 'index.html';
}

// حماية الصفحات (Auth Guard)
function requireAuth() {
    if (!isAuthenticated()) {
        const lockScreen = document.getElementById('authLock');
        if (lockScreen) {
            lockScreen.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        } else {
            window.location.href = 'login.html';
        }
    }
}