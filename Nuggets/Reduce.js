import fetch from 'node-fetch'

const cart = [
    { title: 'Samsung Galaxy S7', price: 599.99, amount: 1 },
    { title: 'google pixel', price: 499.99, amount: 2 },
    { title: 'Xiaomi Redmi Note 2', price: 699.99, amount: 4 },
    { title: 'Xiaomi Redmi Note 5', price: 399.99, amount: 3 },
]

/**
 * iterating thru an array of objects using reduce
 */
const { totalItem, cartTotal } = cart.reduce(
    (total, cartItem) => {
        // console.log(cartItem)
        const { amount, price } = cartItem
        // count items
        total.totalItem += amount
        // count price
        total.cartTotal += amount * price

        return total
    },
    {
        totalItem: 0,
        cartTotal: 0,
    }
)

/**
 * sometimes you may want to limit number of digits after decimal like in
 * cartTotal, for that we can use toFixed, but it will return a string, so
 * to convert it into a number, use parseFloat, if float or use parseInt, if
 * integer
 */
console.log(totalItem, parseFloat(cartTotal.toFixed(2)))

const url = 'https://api.github.com/users/Naveen12345-alt/repos?per_page=100'

const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()

    const newData = data.reduce((acc, repo) => {
        const { language } = repo

        if (language) {
            acc[language] = acc[language] + 1 || 1
        }

        return acc
    }, {})

    // repos language used data
    console.log(newData)
}

fetchRepos()
