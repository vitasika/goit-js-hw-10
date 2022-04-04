// путь к API - эндпоинт, базовый URL, точка входа в API.
const BASE_URL = 'https://restcountries.com/v3.1/name/';
const requestParameters = 'name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?fields=${requestParameters}`).then(response => response.json(),)    
};


// именованный экспорт ф-ции fetchCountries
export default { fetchCountries };

[
// // путь к API - эндпоинт, базовый URL, точка входа в API.
// const BASE_URL = 'https://restcountries.com/v3.1'

// // параметры настроек (выбор нужных значений в capital,flags,languages,name,population запросе) запроса
// const searchParams = new URLSearchParams({
//     fields: "capital,flags,languages,name,population",
// });

// // Ф-ция для составления запросов к серверу API, принимает параметр name (строка - ресурс, к которому мы обращаемся в API), 
// // возвращает результат вызова метода fetch() - промис, который
// function fetchCountries(name) {
//     return fetch(`${BASE_URL}/name/${name}?${searchParams}`) //    передает результат промиса (fulfilled) данные - в параметр (response) метода then(), который:
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status); //- если response не оk, принудительно вызывает ошибку (throw new Error(response.status)) - error, т.е. формирует результат rejected;
//         }
//         return response.json(); // - иначе возвращает полученные данные (из JSON формата) response.json()
//     });
// };
// // именованный экспорт ф-ции fetchCountries
// export { fetchCountries };
]




/*    
function fetchCountries(name) {
    console.log('https://restcountries.com/v3.1/')
}




нужны только следующие свойства:

name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков
*/