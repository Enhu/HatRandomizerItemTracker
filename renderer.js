const rowContainers = [
    document.getElementById('first-row'),
    document.getElementById('second-row'),
    document.getElementById('third-row'),
    document.getElementById('fourth-row'),
    document.getElementById('fifth-row'),
    document.getElementById('sixth-row'),
];

const firstRowImages = [
    { path: './assets/images/timepiece/timepiece.png', text: "x0", textAlignment: "right", counter: true },
    { path: './assets/images/yarn/defaultyarn.png', text: "x0", textAlignment: "right", counter: true },
    { path: './assets/images/umbrella/umbrella.png' },
    { path: './assets/images/hats/sprinthat.png' },
    { path: './assets/images/hats/brewerhat.png' },
    { path: './assets/images/hats/dwellermask.png' },
    { path: './assets/images/hats/icehat.png' },
    { path: './assets/images/hats/timestophat.png' },
];

const secondRowImages = [
    { path: './assets/images/subcon_paintings/yellowpainting.png' },
    { path: './assets/images/subcon_paintings/bluepainting.png' },
    { path: './assets/images/subcon_paintings/greenpainting.png' },
    { path: './assets/images/snatcher_contracts/contract.png', text: "Toilet", textAlignment: "bottom" },
    { path: './assets/images/snatcher_contracts/contract.png', text: "MDS", textAlignment: "bottom" },
    { path: './assets/images/snatcher_contracts/contract.png', text: "Manor", textAlignment: "bottom" },
    { path: './assets/images/snatcher_contracts/contract.png', text: "Well", textAlignment: "bottom" },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Birdhouse", textAlignment: "bottom" },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Windmill", textAlignment: "bottom" },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Lava Cake", textAlignment: "bottom" },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Twilight Bell", textAlignment: "bottom" },
];

const thirdRowImages = [
    { path: './assets/images/badges/badgepin.png', text: "x0", textAlignment: "right", counter: true },
    { path: './assets/images/badges/hookshotbadge.png' },
    { path: './assets/images/badges/magnetbadge.png' },
    { path: './assets/images/badges/nobonkbadge.png' },
    { path: './assets/images/badges/scooterbadge.png' },
    { path: './assets/images/badges/fasthatterbadge.png' },
    { path: './assets/images/badges/projectilebadge.png' },
    { path: './assets/images/badges/1hhbadge.png' },
    { path: './assets/images/badges/camerabadge.png' },
];

const fourthRowImages = [
    { path: './assets/images/badges/hoverbadge.png' },
    { path: './assets/images/badges/compassbadge.png' },
    { path: './assets/images/badges/mumblebadge.png' },
    { path: './assets/images/badges/mirrorbadge.png' },
    { path: './assets/images/badges/nostalgiabadge.png' },
    { path: './assets/images/badges/peacefulbadge.png' },
    { path: './assets/images/badges/retrobadge.png' },
    { path: './assets/images/badges/redtrovrbadge.png' },
];

const fifthRowImages = [
    { path: './assets/images/relics/burgerpatty.png' },
    { path: './assets/images/relics/burgercushion.png' },
    { path: './assets/images/relics/mountainset.png' },
    { path: './assets/images/relics/train.png' },
    { path: './assets/images/relics/crayonbox.png' },
    { path: './assets/images/relics/redcrayon.png' },
    { path: './assets/images/relics/bluecrayon.png' },
    { path: './assets/images/relics/greencrayon.png' },
];

const sixthRowImages = [
    { path: './assets/images/relics/necklacebust.png' },
    { path: './assets/images/relics/necklace.png' },
    { path: './assets/images/relics/cakestand.png' },
    { path: './assets/images/relics/cake.png' },
    { path: './assets/images/relics/cakeslice.png' },
    { path: './assets/images/relics/shortcake.png' },
];


const imageSets = [
    firstRowImages,
    secondRowImages,
    thirdRowImages,
    fourthRowImages,
    fifthRowImages,
    sixthRowImages,
];

function updateTextValue(span, increment) {
    let currentValue = parseInt(span.innerText.replace("x", ""), 10); // Get the current number
    if (increment) {
        currentValue += 1; // Increment the value
    } else {
        currentValue -= 1; // Decrement the value
        if (currentValue < 0) currentValue = 0; // Ensure it doesn't go below zero
    }
    span.innerText = `x${currentValue}`; // Update the text with the new value
}

imageSets.forEach((images, index) => {
    const rowContainer = rowContainers[index];

    images.forEach((image) => {
        const container = document.createElement('div');

        const img = document.createElement('img');
        img.src = image.path;
        img.width = 50;
        img.height = 50;

        if (!image.counter) {
            img.classList.add('grayscale');

            img.addEventListener('click', () => {
                img.classList.toggle('grayscale'); // Toggle grayscale class
            });
        }

        container.appendChild(img);

        if (image.text) {
            const text = document.createElement('span');

            if (image.counter) {
                text.className = 'text-bottom-right';
                img.addEventListener('click', () => {
                    updateTextValue(text, true); // Increment the text value
                });

                // Right-click to decrement
                img.addEventListener('contextmenu', (event) => {
                    event.preventDefault(); // Prevent default context menu
                    updateTextValue(text, false); // Decrement the text value
                });
            }

            text.innerText = image.text;

            if (image.textAlignment === 'right') {
                container.className = 'img-text-right';
            } else {
                container.className = 'img-text-bottom';
            }

            container.appendChild(text);
        }

        rowContainer.appendChild(container);
    });
});