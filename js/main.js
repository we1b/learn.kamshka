/*
السكربت الأساسي اللي بيشتغل في كل صفحات الموقع
مسؤول عن القوائم والتحديثات العامة
*/

document.addEventListener('DOMContentLoaded', () => {
    // تحديث سنة حقوق النشر في الفوتر
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // تفعيل وتحديث أزرار تسجيل الدخول بناء على حالة اليوزر
    updateAuthUI();
});

// دالة لفتح وقفل قائمة الموبايل
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// تحديث واجهة المستخدم (الزراير) لو مسجل دخول أو لأ
function updateAuthUI() {
    const isLoggedIn = localStorage.getItem('kameshkah_auth') === 'true';
    const desktopBtn = document.getElementById('loginBtn');
    const mobileBtn = document.getElementById('mobileLoginBtn');
    
    if (isLoggedIn) {
        if(desktopBtn) { 
            desktopBtn.innerText = 'تسجيل الخروج'; 
            desktopBtn.classList.add('border-red-500', 'text-red-500', 'hover:bg-red-50');
            desktopBtn.classList.remove('border-brand-primary', 'text-brand-primary', 'hover:bg-brand-secondary');
            desktopBtn.onclick = () => { localStorage.setItem('kameshkah_auth', 'false'); window.location.reload(); };
        }
        if(mobileBtn) { 
            mobileBtn.innerText = 'تسجيل الخروج'; 
            mobileBtn.classList.add('border-red-500', 'text-red-500', 'hover:bg-red-50');
            mobileBtn.classList.remove('border-brand-primary', 'text-brand-primary', 'hover:bg-brand-secondary');
            mobileBtn.onclick = () => { localStorage.setItem('kameshkah_auth', 'false'); window.location.reload(); };
        }
    }
}