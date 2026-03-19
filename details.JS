// 1. שלב ה"חילוץ": מוציאים את ה-ID מהכתובת של הדפדפן
const urlParams = new URLSearchParams(window.location.search);
const contactId = urlParams.get('id'); // זה מחלץ את המספר שמופיע אחרי ה- ?id=

// 2. שלב ה"חיפוש": הולכים למחסן (LocalStorage) ומביאים את כל האנשים
const allContacts = JSON.parse(localStorage.getItem('myContacts')) || [];

// 3. מוצאים את האיש הספציפי ברשימה לפי ה-ID שלו
// שימי לב: אני משתמש ב- == כי בכתובת ה-ID הוא טקסט ובמערך הוא מספר
const person = allContacts.find(c => c.id == contactId);

// 4. שלב ה"הצגה": אם מצאנו את האיש, נשתול את הפרטים שלו ב-HTML
if (person) {
    document.getElementById('contact-name').textContent = person.name;
    document.getElementById('contact-phone').textContent = "טלפון: " + person.phone;
    
    // אם יש קטגוריה נציג אותה, אם לא - נכתוב "כללי"
    const categoryText = person.category ? person.category : "טרם נבחרה קטגוריה";
    document.getElementById('contact-category').textContent = "קטגוריה: " + categoryText;
} else {
    // ליתר ביטחון, אם ה-ID לא קיים
    document.getElementById('contact-name').textContent = "איש קשר לא נמצא";
}