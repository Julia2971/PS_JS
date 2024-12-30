let lang = prompt('').toLowerCase();

switch(lang) {
  case 'ru' :
    console.log("Добрый день!")
    break
  case "en" :
    console.log("Hello!")
    break
  case "de" :
    console.log("Getten tag")
    break
  default:
    console.log("Извните, я не знаю ваш язык:(")
}
