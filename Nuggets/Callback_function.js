/**
 * Callback functions are functions that we pass in as arguments
 * and execute it later
 */

function makeUpperCase(value) {
    console.log(value.toUpperCase())
}

/**
 * cb is our callback function
 */
function handleName(name, cb) {
    const fullName = `${name} chauhan`

    cb(fullName)
}

/**
 * makeUpperCase is just referenced here,
 * if we had done something like makeUpperCase(), then we would
 * have called the function thereitself, which is not we want
 */
handleName('Naveen', makeUpperCase)
handleName('Naveen', (value) => console.log(value))

/**
 * usage:>
 * array methods (eg: map, filter, etc)
 * setTimeout, setInterval
 * event listeners,
 * etc
 */
