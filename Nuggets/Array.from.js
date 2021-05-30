/**
 * Array.from --> NOT ON PROTOTYPE
 *
 * from returns array object from object with a length property or an iterable
 * object --> turns array-ish like into array --> String, nodelist, set
 */

const udemy = 'udemy'

console.log(Array.from(udemy))

const text = document.querySelectorAll('.text')

const newText = Array.from(text)

console.log(newText.find((item) => item.textContent === 'Hola'))

/**
 * general idea of Pagination
 */

const items = Array.from({ length: 120 }, (_, index) => index)

const itemsPerPage = 14
const pages = Math.ceil(items.length / itemsPerPage)

const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage
    const tempItems = items.slice(start, start + itemsPerPage)
    return tempItems
})
console.log(newItems)
