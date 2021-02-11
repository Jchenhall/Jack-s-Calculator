class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand =''
        this.previousOperand =''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return //is a check to stop multiple ..... from being placed
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOperand === '') return //Is a check to stop operations happeneing unless numbers are in slot
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case 'x':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            // case '%':
            //     computation = current * 0.01 
            //     break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }



getDisplayNumber(number) {
    return number
}

    updateDisplay () {
        this.currentOperandTextElement.innerText = 
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const delButton = document.querySelector('[data-del]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const darkmodeButton = document.querySelector('[data-darkmode]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

// const day = document.querySelector('.output')
// const night = document.querySelector('.outputnight')

let isdarkmode = false;
darkmodeButton.addEventListener("click", button => {
if (isdarkmode) {
    document.body.style.backgroundImage="url('assets/images/forest1.jpg')";


    isdarkmode = false;
} else {
    document.body.style.backgroundImage="url('assets/images/abstract1.jpg')";
    isdarkmode = true;
}
});


darkmodeButton.addEventListener("click", button => {
document.querySelectorAll('.nightmode').forEach(ele=>{
    ele.classList.toggle('night');
})

});