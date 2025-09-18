const menuItems = [
    {
        imageURL: 'images/angry_pickle.jpeg',
        name: 'Angry Pickle Platter',
        description: 'Try out extra hot pickle that will have your eyes and mouth watering. Served with a side of our house Cole Slaw and baked beans.',
        price: 12.99,
    },
    {
        imageURL: 'images/pirate_pickle.jpeg',
        name: 'Pirates Plunder',
        description: 'A more robust flavor, these pickles are brined in caribbean rum. Served with a side shrimp, seasoned mango, and cheese cubes.',
        price: 10.99,
    },
    {
        imageURL: 'images/double_stuff_pickle.jpeg',
        name: 'Double Stuffed',
        description: 'Have a pickle, stuffed with pickled crab with gravy. Try some mashed potatoes and corn on the side.',
        price: 8.99,
    },
    {
        imageURL: 'images/shake_and_bake_pickle.jpeg',
        name: 'Shake and Bake',
        description: 'Everybody loves a fried pickle, so try ours! Served with marinara and lime.',
        price: 6.99,
    },
    {
        imageURL: 'images/pre-pickle.jpeg',
        name: 'Pre-Pickle',
        description: "How about a pickle that hasn't been brined yet? Enjoy a sliced and seasoned cucumber served with crab on a bed of house salad.",
        price: 6.99,
    }
];

let currentIndex = 0;
function updateMenu() {
    const item = menuItems[currentIndex];
    document.getElementById('menuImage').src = item.imageURL;
    document.getElementById('menuName').innerText = item.name;
    document.getElementById('menuDescription').innerText = item.description;
    document.getElementById('menuPrice').innerText = `$${item.price.toFixed(2)}`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    updateMenu();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % menuItems.length;
    updateMenu();
}

// Event listeners
document.getElementById('btnPrev').addEventListener('click', prevImage);
document.getElementById('btnNext').addEventListener('click', nextImage);

// Initialize the menu display
updateMenu();