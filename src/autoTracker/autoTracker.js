const trackingData = require('./trackingData');
const state = trackingData.state;

function processData(data) {
    const parts = data.split(':');
    const key = parts[0].trim();
    const value = parts.length > 1 ? parts[1].trim() : null;

    switch (key) {
        case 'timepieces':
            state[key] = parseInt(value, 10);
            break;
        case 'yarns':
            state[key] = parseInt(value, 10);
            break;
        case 'deathwishes':
            state[key] = parseInt(value, 10);
            break;
        case 'badgePin':
            state.badgePins += 1;
            break;
        case 'umbrella':
            state[key] = !state[key];
            break;
        case 'hookshotBadge':
            state[key] = !state[key];
            break;
        case 'sprintHat':
            state[key] = !state[key];
            break;
        case 'brewerHat':
            state[key] = !state[key];
            break;
        case 'iceHat':
            state[key] = !state[key];
            break;
        case 'dwellerMask':
            state[key] = !state[key];
            break;
        case 'timeStopHat':
            state[key] = !state[key];
            break;
        case 'contractMDS':
            state[key] = !state[key];
            break;
        case 'contractToilet':
            state[key] = !state[key];
            break;
        case 'contractManor':
            state[key] = !state[key];
            break;
        case 'contractWell':
            state[key] = !state[key];
            break;
        case 'yellowPaintings':
            state[key] = !state[key];
            break;
        case 'bluePaintings':
            state[key] = !state[key];
            break;
        case 'greenPaintings':
            state[key] = !state[key];
            break;
        case 'birdhousePath':
            state[key] = !state[key];
            break;
        case 'lavaCakePath':
            state[key] = !state[key];
            break;
        case 'windmillPath':
            state[key] = !state[key];
            break;
        case 'tbellPath':
            state[key] = !state[key];
            break;
        case 'yellowMetro':
            state[key] = !state[key];
            break;
        case 'greenMetro':
            state[key] = !state[key];
            break;
        case 'blueMetro':
            state[key] = !state[key];
            break;
        case 'pinkMetro':
            state[key] = !state[key];
            break;
        case 'baseballBat':
            state[key] = !state[key];
            break;
        case 'magnetBadge':
            state[key] = !state[key];
            break;
        case 'noBonkBadge':
            state[key] = !state[key];
            break;
        case 'scooterBadge':
            state[key] = !state[key];
            break;
        case 'fastHatterBadge':
            state[key] = !state[key];
            break;
        case 'projectileBadge':
            state[key] = !state[key];
            break;
        case 'oneHitHeroBadge':
            state[key] = !state[key];
            break;
        case 'cameraBadge':
            state[key] = !state[key];
            break;
        case 'hoverBadge':
            state[key] = !state[key];
            break;
        case 'compassBadge':
            state[key] = !state[key];
            break;
        case 'burgerPatty':
            state[key] = !state[key];
            break;
        case 'burgerCushion':
            state[key] = !state[key];
            break;
        case 'train':
            state[key] = !state[key];
            break;
        case 'trainTracks':
            state[key] = !state[key];
            break;
        case 'crayonBox':
            state[key] = !state[key];
            break;
        case 'redCrayon':
            state[key] = !state[key];
            break;
        case 'blueCrayon':
            state[key] = !state[key];
            break;
        case 'greenCrayon':
            state[key] = !state[key];
            break;
        case 'ufo':
            state[key] = !state[key];
            break;
        case 'cow':
            state[key] = !state[key];
            break;
        case 'sunglassesCow':
            state[key] = !state[key];
            break;
        case 'tinFoilCow':
            state[key] = !state[key];
            break;
        case 'necklace':
            state[key] = !state[key];
            break;
        case 'necklaceBust':
            state[key] = !state[key];
            break;
        case 'cakeStand':
            state[key] = !state[key];
            break;
        case 'cake':
            state[key] = !state[key];
            break;
        case 'cakeSlice':
            state[key] = !state[key];
            break;
        case 'shortCake':
            state[key] = !state[key];
            break;
        default:
            console.warn(`Unknown key received: ${key}`);
    }

    return state;
}

module.exports = { processData };