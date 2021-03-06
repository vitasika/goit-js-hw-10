// путь к API - эндпоинт, базовый URL, точка входа в API.
const BASE_URL = 'https://restcountries.com/v3.1/name'
// параметры настроек (выборки) запроса
const searchParams = 'capital,flags,languages,name,population';

// Ф-ция для составления запросов к серверу API, принимает параметр name (строка - ресурс, к которому мы обращаемся в API), возвращает результат вызова метода fetch() - промис, который
//    передает результат промиса (fulfilled) данные - в параметр (response) метода then(), который:
//             - если response не оk, принудительно вызывает ошибку (throw new Error(response.status)) - error, т.е. формирует результат rejected;
//             - иначе возвращает полученные данные (из JSON формата) response.json()
function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?fields=${searchParams}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};
// именованный экспорт ф-ции fetchCountries
export { fetchCountries };






/*    
function fetchCountries(name) {
    console.log('https://restcountries.com/v3.1/')
}

//нужны только следующие свойства:

name.official - полное имя страны
capital - столица
population - население
flags.svg - ссылка на изображение флага
languages - массив языков
*/