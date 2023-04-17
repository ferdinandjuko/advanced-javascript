const display = document.querySelector('.calculator__display')
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        // ...
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action

        } else if(action === 'decimal' && !displayedNum.includes('.')) {

            display.textContent = displayedNum + '.'

        } else if(action === 'clear') {

            console.log('clear key')

        } else if(action === 'calculate') {

            const secondValue = displayedNum
            const stValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const ndValue = displayedNum

            display.textContent = calculate(stValue, operator, ndValue)

        } 
        const previousKeyType = calculator.dataset.previousKeyType
        if(!action) {
            if(displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
 
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
    }
})

const calculate = (n1, operator, n2) => {
    // Perform calculation and return calculated value
    let result = ''

    if(operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if(operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if(operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if(operator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }

    return result
}
























