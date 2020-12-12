//Base URL
const baseUrl = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;
    return month;
};

const getCurrentDay = () => {
    const day = new Date().getDay() + 1;
    if (day < 10) return `0${day}`;
    return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
