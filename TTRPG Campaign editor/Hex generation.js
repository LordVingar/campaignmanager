// JavaScript source code
const canvas = document.getElementById('canvas');
const categoryForm = document.getElementById('categoryForm');
const categoriesContainer = document.getElementById('categories');

let categories = [];

categoryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const categoryName = document.getElementById('categoryName').value;
    const categoryColors = document.getElementById('categoryColors').value.split(',');
    categories.push({ name: categoryName, colors: categoryColors });
    updateCategoriesUI();
    categoryForm.reset();
});

function updateCategoriesUI() {
    categoriesContainer.innerHTML = '';
    categories.forEach((category) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
      <h3>${category.name}</h3>
      <p>${category.colors.join(', ')}</p>
    `;
        categoriesContainer.appendChild(categoryDiv);
    });
}

// Generate hexagons
for (let i = 0; i < 9; i++) {
    const hexagon = document.createElement('div');
    hexagon.classList.add('hexagon');

    hexagon.addEventListener('click', () => {
        if (categories.length > 0) {
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            const randomColor = randomCategory.colors[Math.floor(Math.random() * randomCategory.colors.length)];
            hexagon.style.backgroundColor = randomColor;
        }
    });

    canvas.appendChild(hexagon);
}
