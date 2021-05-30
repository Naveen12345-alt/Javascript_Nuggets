function multiply1() {
    const args = [...arguments]

    console.log(args.reduce((acc, item) => (item ? item * acc : item + acc), 1))
}

function multiply2(...args) {
    console.log(args.reduce((acc, item) => (item ? item * acc : item + acc), 1))
}

multiply1(1, 2, 3, 4)
multiply2(1, 2, 3, 0)
