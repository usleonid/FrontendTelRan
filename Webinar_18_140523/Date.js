new date = new Date()

date.getDate() // число дня

date.getFullYear() // год

const timestamp = 1000 * 3600 * 24 * 365 // число миллисекунд в году

let date2 = new Date(timestamp) //дата 1 января 1973 года

date.getTimezoneOffset() //разница в минутах с UTC

date.setDate(17)