//Base URL
const baseUrl = 'https://api.rawg.io/api/';

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) return `0${month}`;
    return month;
};

const getCurrentDay = () => {
    const day = new Date().getDate();
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
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
export const upcomingGamesURL = () => `${baseUrl}${upcomingGames}`;
export const newGamesURL = () => `${baseUrl}${newGames}`;

//GAME DETAILS

export const gameDetailsURL = (gameId: string) => `${baseUrl}games/${gameId}`;

//GAME SCREENSHOTS

export const gameScreenshotsURL = (gameId: string) =>
    `${baseUrl}games/${gameId}/screenshots`;

//SEARCHED GAME
export const searchGameURL = (gameName: string) =>
    `${baseUrl}games?search=${gameName}&page_size=9`;
