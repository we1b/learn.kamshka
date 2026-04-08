/*
نظام الملاحظات الخاص بالمتعلمين
لحفظ ملاحظاتهم في المتصفح وعرضها
*/

const NOTES_KEY = 'kameshkah_saved_notes';

// جلب كل الملاحظات
function getAllNotes() {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || '[]');
}

// حفظ ملاحظة جديدة
function saveNote(title, content, category) {
    const notes = getAllNotes();
    const newNote = {
        id: Date.now(),
        title: title,
        content: content,
        category: category,
        date: new Date().toLocaleDateString('ar-EG')
    };
    notes.push(newNote);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return true;
}

// حذف ملاحظة
function deleteNote(noteId) {
    let notes = getAllNotes();
    notes = notes.filter(note => note.id !== noteId);
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return true;
}

// دالة مساعدة لصفحة المحرر
function handleSaveNoteForm(event) {
    event.preventDefault();
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    const category = document.getElementById('noteCategory').value;
    
    if(title && content) {
        saveNote(title, content, category);
        alert('تم حفظ الملاحظة بنجاح!');
        window.location.href = 'notes.html';
    } else {
        alert('يرجى كتابة عنوان ومحتوى للملاحظة');
    }
}