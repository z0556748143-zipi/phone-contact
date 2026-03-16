const anshey_Kesher=[
    {
        id: Date.now(),
        name: "Chaim Cohen",
        phone: "050-1234567"
    },
    {
        id: Date.now(),
        name: "Sara Levi",
        phone: "052-7654321"
    },
    {
        id: Date.now(),
        name: "David Katz",
        phone: "054-9876543"
    }
]
export const createObjectAnsheyKesher=(name, phone)=>{
anshey_Kesher.push({ id: Date.now(),name: name, phone: phone });
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

    // 5. הלולאה שמכניסה את האופציות לתוך ה-Select
    for (const item of categories) {
        const opt = document.createElement("option");
        opt.value = item.emoji;
        opt.textContent = item.text;
        select.append(opt); // פה האופציה נכנסת לתוך ה-select
    }
    // עכשיו conta מכיל גם את הטקסט וגם את התיבה
    conta.append(select);   
    return conta;
};

export const render =()=>{
    return anshey_Kesher.map(createContactElement);
};


