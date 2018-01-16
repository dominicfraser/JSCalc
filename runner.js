const cal = new Calculator()

document.getElementById("0-btn").onclick = () => {
  cal.selectNumber("0")
}
document.getElementById("1-btn").onclick = () => {
  cal.selectNumber("1")
}
document.getElementById("2-btn").onclick = () => {
  cal.selectNumber("2")
}
document.getElementById("3-btn").onclick = () => {
  cal.selectNumber("3")
}
document.getElementById("4-btn").onclick = () => {
  cal.selectNumber("4")
}
document.getElementById("5-btn").onclick = () => {
  cal.selectNumber("5")
}
document.getElementById("6-btn").onclick = () => {
  cal.selectNumber("6")
}
document.getElementById("7-btn").onclick = () => {
  cal.selectNumber("7")
}
document.getElementById("8-btn").onclick = () => {
  cal.selectNumber("8")
}
document.getElementById("9-btn").onclick = () => {
  cal.selectNumber("9")
}
document.getElementById("add-btn").onclick = () => {
  cal.selectOperand("+")
}
document.getElementById("min-btn").onclick = () => {
  cal.selectOperand("-")
}
document.getElementById("mul-btn").onclick = () => {
  cal.selectOperand("*")
}
document.getElementById("div-btn").onclick = () => {
  cal.selectOperand("/")
}
document.getElementById("eq-btn").onclick = () => {
  cal.selectOperand("=")
}
document.getElementById("ac-btn").onclick = () => {
  cal.selectCancel("AC")
}
document.getElementById("ce-btn").onclick = () => {
  cal.selectCancel("CE")
}
