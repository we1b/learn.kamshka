/*
منطق لوحة التحكم (الداشبورد)
مسؤول عن متتبع العادات وحساب التقدم
*/

document.addEventListener('DOMContentLoaded', () => {
    // تشغيل الحماية أولا
    if(typeof requireAuth === 'function') requireAuth();

    // تحميل العادات المحفوظة
    loadHabits();

    // إضافة مستمعات الأحداث لعلامات الصح (العادات)
    const habitCheckboxes = document.querySelectorAll('.habit-checkbox');
    habitCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener('change', (e) => {
            saveHabitState(index, e.target.checked);
            updateHabitStyle(e.target);
        });
    });
});

// حفظ حالة العادة في المتصفح
function saveHabitState(index, isChecked) {
    let habits = JSON.parse(localStorage.getItem('kameshkah_habits') || '{}');
    habits[index] = isChecked;
    localStorage.setItem('kameshkah_habits', JSON.stringify(habits));
}

// تحميل حالات العادات عند فتح الصفحة
function loadHabits() {
    let habits = JSON.parse(localStorage.getItem('kameshkah_habits') || '{}');
    const habitCheckboxes = document.querySelectorAll('.habit-checkbox');
    
    habitCheckboxes.forEach((checkbox, index) => {
        if (habits[index] === true) {
            checkbox.checked = true;
            updateHabitStyle(checkbox);
        }
    });
}

// تغيير شكل النص لما العادة تخلص
function updateHabitStyle(checkbox) {
    const span = checkbox.nextElementSibling;
    if (checkbox.checked) {
        span.classList.add('line-through', 'opacity-70');
    } else {
        span.classList.remove('line-through', 'opacity-70');
    }
}