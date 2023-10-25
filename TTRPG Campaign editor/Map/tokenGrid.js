// JavaScript source code
const normalTiles = [
    'Tiles/normalTiles/mountainToken.jpg',
    'Tiles/normalTiles/forestRiverToken.jpg',
    'Tiles/normalTiles/treeToken.jpg',
];

const gridItemElements = document.querySelectorAll('.grid-item'); // Selecting all grids
const tileFileNames = [...normalTiles]; // Create a copy of normalTiles to avoid modifying it directly

for (const gridItem of gridItemElements) {
    if (tileFileNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * tileFileNames.length);
        const randomTile = tileFileNames[randomIndex];

        // Set the background image of the grid item
        gridItem.style.backgroundImage = `url('${randomTile}')`;
        gridItem.style.backgroundSize = 'cover'; // Ensure the image scales

    } else {
        // Handle the case where there are no more tiles to apply
        break;
    }
}