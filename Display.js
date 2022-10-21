class Display {
    constructor(showPreviousValue, showCurrentValue) {
        this.showCurrentValue = showCurrentValue;
        this.showPreviousValue = showPreviousValue;
        this.calculator = new Calculator();
        this.typeOfOperation = undefined;
        this.previousValue = "";
        this.currentValue = "";
        this.signs = {
            addition: "+",
            subtraction: "-",
            multiplication: "x",
            division: "/",
        }
    }

    erase() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    eraseEverything() {
        this.currentValue = '';
        this.previousValue = '';
        this.typeOfOperation = undefined;
        this.printValues();
    }

    compute(type) {
        this.typeOfOperation !== "equal" && this.calculate();
        this.typeOfOperation = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.showCurrentValue.textContent = this.currentValue;
        this.showPreviousValue.textContent = `${this.previousValue} ${this.signs[this.typeOfOperation] || ""}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);
        if (isNaN(currentValue) || isNaN(previousValue) ) return;
        this.currentValue = this.calculator[this.typeOfOperation](previousValue, currentValue);
    }
}






