/*
مكونات واجهة المستخدم
مسؤولة عن التنبيهات المخصصة والنوافذ المنبثقة عشان مانستخدمش أداة الـ alert العادية
*/

function showNotification(message, type = 'success') {
    // إنشاء عنصر التنبيه
    const notification = document.createElement('div');
    
    // تحديد اللون بناء على النوع
    const bgColor = type === 'success' ? 'bg-brand-primary' : (type === 'error' ? 'bg-red-500' : 'bg-brand-accent');
    
    notification.className = `fixed bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full text-white font-bold shadow-xl z-[100] slide-up ${bgColor}`;
    notification.innerText = message;
    
    // إضافته للصفحة
    document.body.appendChild(notification);
    
    // حذفه بعد 3 ثواني
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// دالة لنسخ الكوبونات
function copyCoupon(couponCode) {
    navigator.clipboard.writeText(couponCode).then(() => {
        showNotification('تم نسخ الكوبون بنجاح: ' + couponCode);
    }).catch(err => {
        console.error('فشل النسخ', err);
        // طريقة بديلة للنسخ لو الأولى مانفعتش
        const tempInput = document.createElement('input');
        tempInput.value = couponCode;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showNotification('تم نسخ الكوبون بنجاح: ' + couponCode);
    });
}