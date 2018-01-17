class Calculator {
  constructor() {
    this.displayedTotal = 0 //main display
    // this.fullOperationDisplay = 0 //second smaller display
    this.runningTotal = 0
    this.pendingOperator = false
    this.firstEntry = true
    this.currentEntry = ""
  }

  selectNumber(key) {
    this.currentEntry += key //concats it to string for multiple numbers
    console.log("currentEntry", this.currentEntry)

    let el = document.getElementById("display");
    el.innerText = this.currentEntry;
  }

  selectOperand(op) {
    if (this.firstEntry === true) {
      //if its the first number then once a operator is pressed it automatically becomes the running total once an operand press signals that the number entry is complete
      this.pendingOperator = op
      this.runningTotal += parseFloat(this.currentEntry) //we've been concatenating strings
      this.currentEntry = "" //ready for number two
      this.firstEntry = false //only to reset on CE or AC(?)
      console.log("runningTotal", this.runningTotal)
      console.log("currentEntry", this.currentEntry)

      let el = document.getElementById("display");
      el.innerText = this.currentEntry;
    } else {
      if (op !== "=") {
        // if its the not the first time the operand has been pressed then start the operation, unless it is = in which case update the display
        this.performOperation()
        this.pendingOperator = op
        let el = document.getElementById("display");
        el.innerText = this.runningTotal;
      } else {
        //this.displayedTotal = this.runningTotal += parseFloat(this.currentEntry)
        this.performOperation()
        this.displayedTotal = this.runningTotal
        console.log("displayedTotal", this.displayedTotal)
        let el = document.getElementById("display");
        el.innerText = this.displayedTotal;
      }
    }
  }

  selectCancel(c) {
    if (c === "AC") {
      this.runningTotal = 0
      this.pendingOperator = ""
      this.currentEntry = ""
      this.displayedTotal = 0
      this.firstEntry = true
      let el = document.getElementById("display");
      el.innerText = this.displayedTotal;
    } else if (c === "CE") {
      if (this.currentEntry === "") {
        this.pendingOperator = ""
        let el = document.getElementById("display");
        el.innerText = this.currentEntry;
      } else {
        this.currentEntry = ""
      }
    }
  }

  performOperation() {
    switch (this.pendingOperator) {
      case "+":
        this.runningTotal += parseFloat(this.currentEntry)
        this.currentEntry = ""
        console.log("runningTotal", this.runningTotal)
        console.log("currentEntry", this.currentEntry)
        break
      case "-":
        this.runningTotal -= parseFloat(this.currentEntry)
        this.currentEntry = ""
        console.log("runningTotal", this.runningTotal)
        console.log("currentEntry", this.currentEntry)
        break
      case "*":
        this.runningTotal *= parseFloat(this.currentEntry)
        this.currentEntry = ""
        console.log("runningTotal", this.runningTotal)
        console.log("currentEntry", this.currentEntry)
        break
      case "/":
        this.runningTotal /= parseFloat(this.currentEntry)
        this.currentEntry = ""
        console.log("runningTotal", this.runningTotal)
        console.log("currentEntry", this.currentEntry)
        break
    }
  }
}
