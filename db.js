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
    return conta;
}
export const render =()=>{
    return anshey_Kesher.map(createContactElement);
};


