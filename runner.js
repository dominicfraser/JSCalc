const cal = new Calculator()

document.getElementById("6-btn").onclick = () => {
  cal.selectNumber("6")
}
document.getElementById("+-btn").onclick = () => {
  cal.selectOperand("+")
}
document.getElementById("=-btn").onclick = () => {
  cal.selectOperand("=")
}
