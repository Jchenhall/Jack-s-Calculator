class Calculator {
    constructor(topLineTextElement, bottomLineTextElement) {
        this.topLineTextElement = topLineTextElement
        this.bottomLineTextElement = bottomLineTextElement
        this.clear()
    }

    clear() {
        this.bottomLine =''
        this.topLine =''
        this.operation = undefined
    }

    delete() {
        this.bottomLine = this.bottomLine.toString().slice(0, -1)
    }

    //the return function is a check to stop multiple ..... from being placed
    appendNumber(number) {
        if (number === '.' && this.bottomLine.includes('.')) return 
        this.bottomLine = this.bottomLine.toString() + number.toString()
    }

    //the return function is a check to stop operations happeneing unless numbers are in slot
    chooseOperation(operation){
        if (this.bottomLine === '') return 
        if (this.topLine !== '') {
            this.compute()
        }
        this.operation = operation
        this.topLine = this.bottomLine
        this.bottomLine = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.topLine)
        const current = parseFloat(this.bottomLine)
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
            default:
                return
        }
        this.bottomLine = computation
        this.operation = undefined
        this.topLine = ''
    }



getDisplayNumber(number) {
    return number
}

    updateDisplay () {
        this.bottomLineTextElement.innerText = 
        this.getDisplayNumber(this.bottomLine)
        if (this.operation != null) {
            this.topLineTextElement.innerText = 
            `${this.getDisplayNumber(this.topLine)} ${this.operation}`
        } else {
            this.topLineTextElement.innerText = ''
        }
    }
}

//list of constant variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const delButton = document.querySelector('[data-del]')
const topLineTextElement = document.querySelector('[data-previous-operand]')
const bottomLineTextElement = document.querySelector('[data-current-operand]')
const darkmodeButton = document.querySelector('[data-darkmode]')

const calculator = new Calculator(topLineTextElement, bottomLineTextElement)

//tied all computations to corrisponding html buttons
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


//allows background to change

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

//allows for darkmode
darkmodeButton.addEventListener("click", button => {
document.querySelectorAll('.nightmode').forEach(ele=>{
    ele.classList.toggle('night');
})

});