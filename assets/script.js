const now = dayjs(); 
const customDate = dayjs('2023-06-22'); 
const fromJSDate = dayjs(new Date()); 
let localStorageArr = [] 

let cardBlock = document.getElementById("cardBlock")
let searchForm = document.getElementById("searchForm")
let findCity = document.getElementById("findCity");
let pastSearches = document.getElementById("pastSearches");
let cityDetails = document.getElementById("cityDetails");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

const currentDate = dayjs().format('DD-MM-YYYY');
console.log(currentDate);

let date1 = dayjs().add(1, 'day').format('DD-MM-YYYY');
let date2 = dayjs().add(2, 'day').format('DD-MM-YYYY');
let date3 = dayjs().add(3, 'day').format('DD-MM-YYYY');
const date4 = dayjs().add(4, 'day').format('DD-MM-YYYY');
const date5 = dayjs().add(5, 'day').format('DD-MM-YYYY');

window.onload = () => {
