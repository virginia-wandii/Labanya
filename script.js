const menuItems = [
{
    name: "pepperoni Pizza",
    price: 850,
    image: "pepperoni.jpeg(1)"
},
{
    name: "chicken pizza",
    price: 950,
    image: "Chicken Pizza.jpeg"
},
{
    name: "chicken white",
    price: 750,
    image: "Chicken White Pizza .jpeg"
},
{
    name: "Double cheese",
    price: 850,
    image: "Double cheese pizza.jpeg"
},
{
    name: "Meat Lovers",
    price: 450,
    image: "meat lovers.jpeg(5)"
},
{
    name: "beef pizza",
    price: 699,
    image: "beef pizza.jpeg"
}
];
const menuContainer = document.querySelector("#menu-cards");

if (menuContainer) {
    menuItems.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("menu-card");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const name = document.createElement("h3");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = `Price: KSh ${item.price}`;

        card.append(image, name, price);
        menuContainer.appendChild(card);
    });
}
