let anshey_Kesher = JSON.parse(localStorage.getItem('myContacts')) || [];
// פונקציה לשמירת הנתונים ב-Local Storage
const saveToStorage = () => {
    localStorage.setItem('myContacts', JSON.stringify(anshey_Kesher));
};

export const createObjectAnsheyKesher=(name, phone)=>{
anshey_Kesher.push({ id: Date.now(),name: name, phone: phone });
saveToStorage();
}

const createContactElement = (someOne) => {
    const conta = document.createElement("div");
    conta.textContent=`name: ${someOne.name}  phone: ${someOne.phone}`;

const select = document.createElement("select");
const categories = [
        { text: "משפחה", emoji: "🏠" },
        { text: "עבודה", emoji: "👨‍💻" },
        { text: "חברים", emoji: "🎉" }
    ];

    //  הלולאה שמכניסה את האופציות לתוך ה-Select
    for (const item of categories) {
        const opt = document.createElement("option");
        opt.value = item.emoji;
        opt.textContent = item.text;
        select.append(opt); // פה האופציה נכנסת לתוך ה-select
    }
select.addEventListener('change', () => {
    someOne.category = select.value;
    console.log("המערך המעודכן:", anshey_Kesher);
});

    // עכשיו conta מכיל גם את הטקסט וגם את התיבה
    conta.append(select); 

    return conta;
};

export const render =()=>{
    return anshey_Kesher.map(createContactElement) || [];
};


