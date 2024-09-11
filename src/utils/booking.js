const seededRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = (formData) => {
    return true;
};

export const initializeTimes = () => {
    return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
    switch(action.type) {
        case "UPDATE_TIMES":
            return fetchAPI(action.date);
        default: 
            return state;
    }
};

export const getCurrentFormattedDate = () => {
    let currentDate = new Date();
    currentDate = `${currentDate.getFullYear()}-${currentDate.getMonth() > 9 ? currentDate.getMonth() : '0' + currentDate.getMonth()}-${currentDate.getDate()}`;
    return currentDate
};