// именованный экспорт ф-ции fetchCountries
export { fetchCountries };
    
// путь к API - эндпоинт, базовый URL, точка входа в API.
const BASE_URL = 'https://restcountries.com/v3.1'

const fetchCountries = fetch(BASE_URL).then(response => {
    console.log(response.json());
});





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