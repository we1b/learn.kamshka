/*
محرك الاختبارات (قريبا)
مسؤول عن عرض الأسئلة وحساب النتيجة
*/

class QuizEngine {
    constructor(quizData, containerId) {
        this.quizData = quizData;
        this.container = document.getElementById(containerId);
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    start() {
        console.log("تم بدء الاختبار المخصص لكمشكاة");
        this.showQuestion();
    }

    showQuestion() {
        // سيتم بناء واجهة الاختبارات لاحقا
        console.log("عرض السؤال الحالي...");
    }

    submitAnswer(answerId) {
        // التحقق من الإجابة
        console.log("تم استلام الإجابة");
        this.nextQuestion();
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.quizData.length) {
            this.showQuestion();
        } else {
            this.finishQuiz();
        }
    }

    finishQuiz() {
        console.log("انتهى الاختبار، نتيجتك: " + this.score);
        // عرض النتيجة للمستخدم
    }
}