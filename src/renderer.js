let state = {};

window.electronAPI.on('auto-tracker-data', (event, data) => {
    state = data;
    updateUI();
});

window.electronAPI.on('auto-tracker-data', (event) => {
    updateUI();
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-frameless');
    const resetButton = document.getElementById('reset-button');

    toggleButton.addEventListener('click', () => {
        window.electronAPI.toggleFrameless();
    });

    resetButton.addEventListener('click', () => {
        window.electronAPI.resetState();
    });

    window.electronAPI.on('set-background-color', (event, bgColor, textColor) => {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
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
    document.getElementById('row-eleven')
];

const rowOneImages = [
    { id: "timepieces", path: './assets/images/timepiece/timepiece.png', text: "0", textAlignment: "right", counter: true },
    { id: "yarns", path: './assets/images/yarn/defaultyarn.png', text: "0", textAlignment: "right", counter: true },
    { id: "umbrella", path: './assets/images/weapons/umbrella.png' },
    { id: "hookshotBadge", path: './assets/images/badges/hookshotbadge.png' },
    { id: "deathwishes", path: './assets/images/deathwish/deathwish.png', text: "0", textAlignment: "right", counter: true },
];

const rowTwoImages = [
    { id: "sprintHat", path: './assets/images/hats/sprinthat.png' },
    { id: "brewerHat", path: './assets/images/hats/brewerhat.png' },
    { id: "iceHat", path: './assets/images/hats/icehat.png' },
    { id: "dwellerMask", path: './assets/images/hats/dwellermask.png' },
    { id: "timeStopHat", path: './assets/images/hats/timestophat.png' },
];

const rowThreeImages = [
    { id: "contractToilet", path: './assets/images/snatcher_contracts/contract.png', text: "Toilet", textAlignment: "bottom" },
    { id: "contractMDS", path: './assets/images/snatcher_contracts/contract.png', text: "MDS", textAlignment: "bottom" },
    { id: "contractManor", path: './assets/images/snatcher_contracts/contract.png', text: "Manor", textAlignment: "bottom" },
    { id: "contractWell", path: './assets/images/snatcher_contracts/contract.png', text: "Well", textAlignment: "bottom" },
    { id: "yellowPaintings", path: './assets/images/subcon_paintings/yellowpainting.png' },


];

const rowFourImages = [
    { id: "birdhousePath", path: './assets/images/alpine_ziplines/horn.png', text: "Birdhouse", textAlignment: "bottom" },
    { id: "lavaCakePath", path: './assets/images/alpine_ziplines/horn.png', text: "LavaCake", textAlignment: "bottom" },
    { id: "windmillPath", path: './assets/images/alpine_ziplines/horn.png', text: "Windmill", textAlignment: "bottom" },
    { id: "tbellPath", path: './assets/images/alpine_ziplines/horn.png', text: "Twilight", textAlignment: "bottom" },
    { id: "bluePaintings", path: './assets/images/subcon_paintings/bluepainting.png' },
];

const rowFiveImages = [
    { id: "yellowMetro", path: './assets/images/metro_passes/yellowpass.png' },
    { id: "blueMetro", path: './assets/images/metro_passes/bluepass.png' },
    { id: "greenMetro", path: './assets/images/metro_passes/greenpass.png' },
    { id: "pinkMetro", path: './assets/images/metro_passes/pinkpass.png' },
    { id: "greenPaintings", path: './assets/images/subcon_paintings/greenpainting.png' },

]

const rowSixImages = [
    { id: "baseballBat", path: './assets/images/weapons/baseballBat.png' },
    { id: "magnetBadge", path: './assets/images/badges/magnetbadge.png' },
    { id: "noBonkBadge", path: './assets/images/badges/nobonkbadge.png' },
    { id: "scooterBadge", path: './assets/images/badges/scooterbadge.png' },
    { id: "fastHatterBadge", path: './assets/images/badges/fasthatterbadge.png' },
];

const rowSevenImages = [
    { id: "projectileBadge", path: './assets/images/badges/projectilebadge.png' },
    { id: "oneHitHeroBadge", path: './assets/images/badges/1hhbadge.png' },
    { id: "cameraBadge", path: './assets/images/badges/camerabadge.png' },
    { id: "hoverBadge", path: './assets/images/badges/hoverbadge.png' },
    { id: "compassBadge", path: './assets/images/badges/compassbadge.png' },
];

const rowEightImages = [
    { id: "burgerPatty", path: './assets/images/relics/burgerpatty.png' },
    { id: "burgerCushion", path: './assets/images/relics/burgercushion.png' },
    { id: "trainTracks", path: './assets/images/relics/mountainset.png' },
    { id: "train", path: './assets/images/relics/train.png' },
    { id: "badgePins", path: './assets/images/badges/badgepin.png', text: "0", textAlignment: "right", counter: true },
];

const rowNineImages = [
    { id: "crayonBox", path: './assets/images/relics/crayonbox.png' },
    { id: "redCrayon", path: './assets/images/relics/redcrayon.png' },
    { id: "blueCrayon", path: './assets/images/relics/bluecrayon.png' },
    { id: "greenCrayon", path: './assets/images/relics/greencrayon.png' },
    { id: "necklaceBust", path: './assets/images/relics/necklacebust.png' },

]

const rowTenImages = [
    { id: "ufo", path: './assets/images/relics/ufo.png' },
    { id: "cow", path: './assets/images/relics/cow.png' },
    { id: "sunglassesCow", path: './assets/images/relics/sunglassescow.png' },
    { id: "tinFoilCow", path: './assets/images/relics/tinfoilhatcow.png' },
    { id: "necklace", path: './assets/images/relics/necklace.png' },
]

const rowElevenImages = [
    { id: "cakeStand", path: './assets/images/relics/cakestand.png' },
    { id: "cake", path: './assets/images/relics/cake.png' },
    { id: "cakeSlice", path: './assets/images/relics/cakeslice.png' },
    { id: "shortCake", path: './assets/images/relics/shortcake.png' },
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
    rowTenImages,
    rowElevenImages,
];

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
                window.electronAPI.updateTrackerState(image.id);
            });
        }

        container.appendChild(img);

        if (image.text) {
            const text = document.createElement('span');

            if (image.counter) {
                text.className = 'text-top-right';
                img.addEventListener('click', () => {
                    window.electronAPI.updateTrackerState(`${image.id}:${updateTextValue(text, true)}`);
                });

                img.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    window.electronAPI.updateTrackerState(`${image.id}:${updateTextValue(text, false)}`);
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

function updateUI() {
    rowContainers.forEach((rowContainer, index) => {
        const images = imageSets[index];
        images.forEach((image, imgIndex) => {
            const imgElement = rowContainer.children[imgIndex].querySelector('img');
            const textElement = rowContainer.children[imgIndex].querySelector('span');

            const stateKey = image.id;
            if (stateKey) {
                if (typeof state[stateKey] === 'number') {
                    textElement.innerText = state[stateKey];
                } else if (typeof state[stateKey] === 'boolean') {
                    imgElement.classList.toggle('grayscale', !state[stateKey]);
                }
            }
        });
    });
}

function updateTextValue(span, increment) {
    let currentValue = parseInt(span.innerText, 10);
    if (increment) {
        currentValue += 1;
    } else {
        currentValue -= 1;
        if (currentValue < 0) currentValue = 0;
    }
    span.innerText = currentValue;
    return currentValue;
}