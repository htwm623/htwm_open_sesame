// Exercises: Level 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
var firstName = 'xiaoming'
var lastName = 'wang'
var country = 'CHN'
var city = 'changsha'
var age = 13
var isMarried = false

// Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10)

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10)

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3 
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python and jargon'.length === 1)

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12 : 
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?
const now = new Date()
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth() + 1)
// What is the date today?

console.log(now.getDate())

// What is the hours now?
console.log(now.getHours())

// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime())

// Exercises: Level 2
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)