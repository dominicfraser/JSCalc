class Calculator {
    constructor() {
        this.runningTotal = 0;
    }

    add() {
        this.runningTotal += 10;
        console.log(this.runningTotal);
    }
}

const cal = new Calculator 
document.getElementById('test').onclick = () => {cal.add()}
// ()=>{} anonoymous function / next we add the function from the new instance of the calculator class.  if we add it without putting it in, it breaks... :(
