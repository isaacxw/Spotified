// Format milliseconds into MM:SS
export const formatDuration = millis => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

// Get year from YYYY-MM-DD
export const getYear = date => date.split('-')[0];

// Get the query params off the window's URL
export const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const query = window.location.hash.substring(1);
    while ((e = r.exec(query))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
};

// Transform Pitch Class Notation to string
export const parsePitchClass = note => {
    let key = note;

    switch (note) {
        case 0:
            key = 'C';
            break;
        case 1:
            key = 'C♯';
            break;
        case 2:
            key = 'D';
            break;
        case 3:
            key = 'D♯';
            break;
        case 4:
            key = 'E';
            break;
        case 5:
            key = 'F';
            break;
        case 6:
            key = 'F♯';
            break;
        case 7:
            key = 'G';
            break;
        case 8:
            key = 'G♯';
            break;
        case 9:
            key = 'A';
            break;
        case 10:
            key = 'A♯';
            break;
        case 11:
            key = 'B';
            break;
        default:
            return null;
    }

    return key;
};

export const formatWithCommas = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Higher-order function for async/await error handling
export const catchErrors = fn => {
    return function(...args) {
        return fn(...args).catch(err => {
            console.error(err);
        });
    };
};