document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-frameless');

    toggleButton.addEventListener('click', () => {
        window.electronAPI.toggleFrameless();
    });
});

const rowContainers = [
    document.getElementById('row-one'),
    document.getElementById('row-two'),
    document.getElementById('row-three'),
    document.getElementById('row-four'),
    document.getElementById('row-five'),
    document.getElementById('row-six'),
    document.getElementById('row-seven'),
    document.getElementById('row-eight'),
    document.getElementById('row-nine'),
    document.getElementById('row-ten'),
];

const rowOneImages = [
    { path: './assets/images/timepiece/timepiece.png', text: "0", textAlignment: "right", counter: true },
    { path: './assets/images/yarn/defaultyarn.png', text: "0", textAlignment: "right", counter: true },
    { path: './assets/images/umbrella/umbrella.png' },
    { path: './assets/images/badges/hookshotbadge.png' },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Birdhouse", textAlignment: "bottom" },
];

const rowTwoImages = [
    { path: './assets/images/snatcher_contracts/contract.png', text: "Toilet", textAlignment: "bottom" },
    { path: './assets/images/snatcher_contracts/contract.png', text: "MDS", textAlignment: "bottom" },
    { path: './assets/images/subcon_paintings/yellowpainting.png' },
    { path: './assets/images/deathwish/deathwish.png', text: "0", textAlignment: "right", counter: true },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Windmill", textAlignment: "bottom" },
];

const rowThreeImages = [

    { path: './assets/images/snatcher_contracts/contract.png', text: "Manor", textAlignment: "bottom" },
    { path: './assets/images/snatcher_contracts/contract.png', text: "Well", textAlignment: "bottom" },
    { path: './assets/images/subcon_paintings/bluepainting.png' },
    { path: './assets/images/subcon_paintings/greenpainting.png' },
    { path: './assets/images/alpine_ziplines/horn.png', text: "Twilight", textAlignment: "bottom" },
];

const rowFourImages = [
    { path: './assets/images/hats/sprinthat.png' },
    { path: './assets/images/hats/brewerhat.png' },
    { path: './assets/images/hats/dwellermask.png' },
    { path: './assets/images/hats/icehat.png' },
    { path: './assets/images/hats/timestophat.png' },
];

const rowFiveImages = [
    { path: './assets/images/badges/magnetbadge.png' },
    { path: './assets/images/badges/nobonkbadge.png' },
    { path: './assets/images/badges/scooterbadge.png' },
    { path: './assets/images/badges/fasthatterbadge.png' },
    { path: './assets/images/badges/projectilebadge.png' },
];

const rowSixImages = [
    { path: './assets/images/badges/1hhbadge.png' },
    { path: './assets/images/badges/camerabadge.png' },
    { path: './assets/images/badges/hoverbadge.png' },
    { path: './assets/images/badges/compassbadge.png' },
    { path: './assets/images/badges/mumblebadge.png' },
];

const rowSevenImages = [
    { path: './assets/images/badges/mirrorbadge.png' },
    { path: './assets/images/badges/nostalgiabadge.png' },
    { path: './assets/images/badges/peacefulbadge.png' },
    { path: './assets/images/badges/retrobadge.png' },
    { path: './assets/images/badges/redtrovrbadge.png' },
];

const rowEightImages = [
    { path: './assets/images/relics/burgerpatty.png' },
    { path: './assets/images/relics/burgercushion.png' },
    { path: './assets/images/relics/mountainset.png' },
    { path: './assets/images/relics/train.png' },
    { path: './assets/images/badges/badgepin.png', text: "0", textAlignment: "right", counter: true },
];

const rowNineImages = [
    { path: './assets/images/relics/crayonbox.png' },
    { path: './assets/images/relics/redcrayon.png' },
    { path: './assets/images/relics/bluecrayon.png' },
    { path: './assets/images/relics/greencrayon.png' },
    { path: './assets/images/relics/necklacebust.png' },

]

const rowTenImages = [
    { path: './assets/images/relics/cakestand.png' },
    { path: './assets/images/relics/cake.png' },
    { path: './assets/images/relics/cakeslice.png' },
    { path: './assets/images/relics/shortcake.png' },
    { path: './assets/images/relics/necklace.png' },
]



const imageSets = [
    rowOneImages,
    rowTwoImages,
    rowThreeImages,
    rowFourImages,
    rowFiveImages,
    rowSixImages,
    rowSevenImages,
    rowEightImages,
    rowNineImages,
    rowTenImages
];

function updateTextValue(span, increment) {
    let currentValue = parseInt(span.innerText, 10);
    if (increment) {
        currentValue += 1;
    } else {
        currentValue -= 1;
        if (currentValue < 0) currentValue = 0;
    }
    span.innerText = currentValue;
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
                img.classList.toggle('grayscale');
            });
        }

        container.appendChild(img);

        if (image.text) {
            const text = document.createElement('span');

            if (image.counter) {
                text.className = 'text-bottom-right';
                img.addEventListener('click', () => {
                    updateTextValue(text, true);
                });

                img.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    updateTextValue(text, false);
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