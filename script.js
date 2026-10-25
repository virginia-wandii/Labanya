const menuItems = [
{
    name: "pepperoni Pizaa",
    price: 850,
    image: "pepperoni.jpeg(1)"
},
{
    name: "chicken pizza",
    price: "950",
    image: "Chicken Pizza.jpeg"
},
{
    name: "chicken white",
    price: "750",
    image: "Chicken White Pizza .jpeg"
},
{
    name: "Double cheese",
    price: "850",
    image: "Double cheese pizza.jpeg"
},
{
    name: "hawaiian pizza",
    price: "450",
    image: "meat lovers.jpeg(5)"
},
{
    name: "beef pizza",
    price:"699",
    image: "beef pizza.jpeg"
}
];
const menuContainer = document.querySelector("#menu-cards");

menuItems.forEach((item) => {
    const card =
    document.createElement("div");
    card.classList.add("menu-card");

    card.innerHTML = `
    <h3>${item.name}</h3>
    <p>price: KSh $}{item.price}</p>`;

    menuContainer.appendChild(card)

});

