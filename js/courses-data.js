/*
قاعدة بيانات وهمية للكورسات
عشان نقدر نبني منها الكروت ديناميكيا لو حبينا بعدين
*/

const KAMESHKAH_COURSES = [
    {
        id: "design-basics",
        title: "أساسيات التصميم الجرافيكي",
        category: "تصميم",
        level: "مبتدئ",
        progress: 45,
        link: "course-design-basics.html",
        icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
        colorClass: "text-teal-500",
        bgClass: "bg-teal-50"
    },
    {
        id: "social-media",
        title: "تصميمات السوشيال ميديا",
        category: "تسويق وتصميم",
        level: "متوسط",
        progress: 15,
        link: "course-social-media.html",
        icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
        colorClass: "text-brand-accent",
        bgClass: "bg-orange-50"
    },
    {
        id: "branding",
        title: "كورس البراندينج والهوية",
        category: "هوية بصرية",
        level: "متقدم",
        progress: 0,
        link: "course-branding.html",
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        colorClass: "text-brand-primary",
        bgClass: "bg-slate-100"
    }
];

// دالة لجلب الكورسات
function getCourses() {
    return KAMESHKAH_COURSES;
}