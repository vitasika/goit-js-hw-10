import './css/styles.css';
import debounce from 'lodash.debounce'; // импорт библиотеки lodash.debounce
import Notiflix from 'notiflix'; // импорт библиотеки всплывающих окон Notiflix
import { fetchCountries } from "./fetchCountries.js"; // импорт библиотек fetchCountries по нужным параметрам name,capital,population,flags,languages

const DEBOUNCE_DELAY = 300; // время через которое будет делаться запрос после вводы текста в input для debounce()

// Выбираем элементы input#search-box, div.country-info, ul.country-list
const inputEl = document.querySelector('input#search-box'); //поле ввода текста для поиска
const divCardEl = document.querySelector('.country-info');
const ulCardsEl = document.querySelector('.country-list');

//console.log(fetchCountries);
console.log(inputEl); 
console.log(divCardEl);
console.log(ulCardsEl);