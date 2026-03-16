import { createObjectAnsheyKesher, render } from './db.js';
const selectors={
    form: document.querySelector('#add-contact-form'),
    nameInput: document.querySelector('#name-input'),
    phoneInput: document.querySelector('#phone-input'),
    contactsContainer: document.querySelector('#contacts')
};
selectors.phoneInput.addEventListener('keydown', (event) => {
    const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
    const functionalKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];

    if (!allowedChars.includes(event.key) && !functionalKeys.includes(event.key)) {
        event.preventDefault();//מונע את ההצגה של התו על המסך, כי בעקרון אינפוט גורם לי שאני יראה מה שכותיבם 
    }
});


selectors.form.addEventListener('submit', (event) => {   
     event.preventDefault();
     if (selectors.nameInput.value.trim() === '' || selectors.phoneInput.value.trim() === '') {
        alert("נא למלא שם וטלפון");
        return;
    }
     createObjectAnsheyKesher(selectors.nameInput.value, selectors.phoneInput.value);
     const allContacts = render(); // מקבלים את רשימת כל האלמנטים
    const newList = document.createElement('div'); // יוצרים קופסה חדשה
    newList.id = 'contactsss'; // נותנים לה את אותו מזהה
    newList.append(...allContacts); //  שופכים את כל אנשי הקשר פנימה כביכול כדי למנוע כפילויות 
    selectors.contactsContainer.replaceWith(newList);// היא לא יודעת לקבל מערך 
   selectors.contactsContainer = newList;//מעדכנת את הזיכרון של הקוד

     selectors.nameInput.value = '';
        selectors.phoneInput.value = '';

});