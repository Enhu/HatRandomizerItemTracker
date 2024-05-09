const trackingData = require('./trackingData');
const state = trackingData.state;

function processData(data) {
    //const parts = data.split(':');

    const parts = data.split('\r\n');
    console.log(parts);
    parts.forEach((part) => {
        const trimmedPart = part.trim();

        if (!trimmedPart) {
            return;
        }

        const countValue = trimmedPart.split(':');
        if (countValue.length > 1) {
            const key = countValue[0].trim();
            const value = parseInt(countValue[1].trim(), 10);

            switch (key) {
                case 'timepieces':
                case 'yarns':
                case 'deathwishes':
                case 'badgePins': //for when you click the image
                    state[key] = value;
                    break;
                default:
                    console.warn(`Unknown key received: ${key}`);
                    break;
            }
        } else {
            const standaloneKey = countValue[0].trim();

            switch (standaloneKey) {
                case 'umbrella':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'badgePin': //for getting the value from the auto tracker
                    state.badgePins += 1;
                    break;
                case 'hookshotBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'sprintHat':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'brewerHat':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'iceHat':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'dwellerMask':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'timeStopHat':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'contractMDS':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'contractToilet':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'contractManor':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'contractWell':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'yellowPaintings':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'bluePaintings':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'greenPaintings':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'birdhousePath':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'lavaCakePath':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'windmillPath':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'tbellPath':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'yellowMetro':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'greenMetro':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'blueMetro':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'pinkMetro':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'baseballBat':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'magnetBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'noBonkBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'scooterBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'fastHatterBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'projectileBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'oneHitHeroBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'cameraBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'hoverBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'compassBadge':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'burgerPatty':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'burgerCushion':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'train':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'trainTracks':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'crayonBox':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'redCrayon':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'blueCrayon':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'greenCrayon':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'ufo':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'cow':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'sunglassesCow':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'tinFoilCow':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'necklace':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'necklaceBust':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'cakeStand':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'cake':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'cakeSlice':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                case 'shortCake':
                    state[standaloneKey] = !state[standaloneKey];
                    break;
                default:
                    console.warn(`Unknown standaloneKey received: ${standaloneKey}`);
            }
        }
    })

    return state;
}

module.exports = { processData };