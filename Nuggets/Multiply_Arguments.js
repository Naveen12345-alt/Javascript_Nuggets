/**
 * arguments inside function collects all arguments passed to a function
 * but it's arraylike and not truely array, so to make it array, use spread
 * operator
 */
function multiply1() {
    const args = [...arguments]

    console.log(args.reduce((acc, item) => (item ? item * acc : item + acc), 1))
}

/**
 * we can use rest operator to grab all arguments and pass them to an array.
 */
function multiply2(...args) {
    console.log(args.reduce((acc, item) => (item ? item * acc : item + acc), 1))
}

multiply1(1, 2, 3, 4)
multiply2(1, 2, 3, 0)
