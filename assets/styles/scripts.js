const numberButtons = document.querySelectorAll('[data-number]')                    //<<< global list of variables
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-all-clear]')
const delButton = document.querySelector('[data-del]')
const topLineTextElement = document.querySelector('[data-top-line]')
const bottomLineTextElement = document.querySelector('[data-bottom-line]')
const darkmodeButton = document.querySelector('[data-darkmode]')

class Calculator {
    constructor(topLineTextElement, bottomLineTextElement) {
        this.topLineTextElement = topLineTextElement
        this.bottomLineTextElement = bottomLineTextElement                          //<<< sets text element inside calc class
        this.clear()
    }

    clear() {
        this.bottomLine =''                                                         //<<< clears all variables from display
        this.topLine =''
        this.operation = undefined
    }

    delete() {
        this.bottomLine = this.bottomLine.toString().slice(0, -1)                   //<<< removes numbers 1 at a time from right side
    }

    
    addNumber(number) {                                                             //<<< adds a number to the display
        if (number === '.' && this.bottomLine.includes('.')) return                 //if already got . then return func stops multiple . from being placed
        this.bottomLine = this.bottomLine.toString() + number.toString()            //converts numbers to a string so 1+1 =11 NOT 2!
    }

    
    chooseOperation(operation){                                                     //<<< adds an operation to display
        if (this.bottomLine === '') return                                          //checks to see if there is are numbers in bottom line. if not then stops op from working 
        if (this.topLine !== '') {                                                  //if top line is not an empty string then compute it all as one. 
            this.compute()
        }
        this.operation = operation                                                  //allows calc to know the buttons we used i.e x is *
        this.topLine = this.bottomLine                                              //pushes the operation and number to top line
        this.bottomLine = ''                                                        //clears bottom line for next number (2nd half of calc)
    }

    compute() {                                                                     //<<< computes number and operation
        let computation         
        const topL = parseFloat(this.topLine)                                       //converts top and bottom line from a string to a number  
        const bottomL = parseFloat(this.bottomLine)                             
        if (isNaN(topL) || isNaN(bottomL)) return                                   //prevents equal function running if no numbers are typed
        switch (this.operation) {                                             
            case '+':
                computation = topL + bottomL                                        //<<< switch statements to calc code:
                break
            case '-':
                computation = topL - bottomL
                break
            case 'x':
                computation = topL * bottomL
                break
            case '/':
                computation = topL / bottomL
                break
            default:                                                                // if symbol doesnt match computable symbol, function doesnt run.
                return
        }
        this.bottomLine = computation
        this.operation = undefined
        this.topLine = ''
    }



getDisplayNumber(number) {                                                          //<<< Allows bottom variable to pass to top and keep value to be calculated.               
    return number
}

    updateDisplay () {                                                              //<<< updates the display
        this.bottomLineTextElement.innerText = 
        this.getDisplayNumber(this.bottomLine)
        if (this.operation != null) {                                               //if operation is used +-*/ then move to top line
            this.topLineTextElement.innerText = 
            `${this.getDisplayNumber(this.topLine)} ${this.operation}`              //a concatenation alowing the number and operation to be seen on top line.
        } else {
            this.topLineTextElement.innerText = ''                                  //if no operation is used OR equals is clicked, top line is empty
        }
    }
}

const calculator = new Calculator(topLineTextElement, bottomLineTextElement)        //<<< creates calculator object to hook up the buttons to. 

                                                                                    //<<< tied all computations to corrisponding html buttons

clearButton.addEventListener('click', button => {                                    //<<< removes all variables from display on click
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', button => {                                     //<<< removes a number from display on click
    calculator.delete()
    calculator.updateDisplay()
})


numberButtons.forEach(button => {
    button.addEventListener('click', () => {                                        //<<< adds a number on click to the display
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {                                                //<<< adds an operation on click to the display
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {                                  //<<< calls compute function to show on the display
    calculator.compute()
    calculator.updateDisplay()
})


                                                                                    //<<< allows background to change on darkmode switch

let isdarkmode = false;                                                             //darkmode by default is false.
darkmodeButton.addEventListener("click", button => {
if (isdarkmode) {
    document.body.style.backgroundImage="url('assets/images/forest1.jpg')";         // if "isdarkmode = false" is true (dark mode is off), use forest wallpaper


    isdarkmode = false;                                                             // if "isdarkmode = false" is false (dark mode is on), use abstract wallpaper
} else {
    document.body.style.backgroundImage="url('assets/images/abstract1.jpg')";
    isdarkmode = true;
}
});

                                                                                    //<<< allows for darkmode in css (toggle class)
darkmodeButton.addEventListener("click", button => {                                // on button click, class ".night" is toggled on to classes with ".nightmode"
document.querySelectorAll('.nightmode').forEach(ele=>{
    ele.classList.toggle('night');
})

});