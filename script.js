class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      formula: '',
      number: 0
    }
    this.inputtedNum = this.inputtedNum.bind(this)
    this.clear = this.clear.bind(this)
    this.maxDigit = this.maxDigit.bind(this)
    this.calculate = this.calculate.bind(this)
  }
  decimalTest() {
    if(input == "." && formula.charAt(formula.length-1) == ".") {
      formula: prevState 
      return true
    }
    else {
      return false
    }
  }

  inputtedNum(e) {
    const input = e.target.value;
    const formula = this.state.formula
    const prevState = this.state.formula
    const operatorTest = /[*+‑/]$/
    const operators = ["/","*","+","-"]
    const operators2 = ["/","*","+"]
    const formulaArr = [...formula]
    function doubleDecimalTest() {
      for(let i =0; i<formulaArr.length; i++){
        var decimalCount = 0
        if(formulaArr[i] == "."){
          decimalCount++
        }
        else if(formulaArr[i] == operatorTest.test) {
          decimalCount = 0
        }
        if(decimalCount >= 2){
          return true
        }
        else {
          return false
        }
      }
    }
    if(this.state.formula.length > 21){
      this.maxDigit()
    }
    else{
    if(this.state.formula === "max digit length") {
      this.setState({
        formula: ''
      })
    }
    else
    if(input == "." && formula.charAt(formula.length-1) == ".") {
      formula: prevState 
    }
    else if(input =="." && doubleDecimalTest() == true) {
      formula: prevState
    }
    else {
      if(this.state.formula === '' && input === '0')
       {
        this.setState({
          number: 0,
          formula: ''
        });
      }
      else if(operatorTest.test(formula) && operators2.includes(input)) {
          let withoutOperator = prevState.substring(0,prevState.length-1)
          this.setState({
            formula: withoutOperator + input
          })
      }
      else{
      this.setState(function(prevState, num) {
        return{
          formula: formula.slice(0) + input,
        }
      })
  }
  }
  }
  }
  clear() {
    this.setState({
      number: 0,
      formula: ''
    })
  }
  maxDigit(){
      this.setState({
        formula: "max digit length",
        number: 0
      }) 
  }
  calculate() {
    const formula = this.state.formula
    const secondFormula = formula.slice(0,formula.length-1);
    if(formula.charAt(formula.length-1) === "*") {
      /*this.setState({
        number: (eval(this.state.formula)),
        formula: ''
      }) */
        this.setState({
        number: (eval(secondFormula)),
        formula: ''
      })
    }
    else if(formula.charAt(formula.length-1) === "/") {
        this.setState({
        number: (eval(secondFormula)),
        formula: ''
      })
    }
    else if(formula.charAt(formula.length-1) === "+") {
        this.setState({
        number: (eval(secondFormula)),
        formula: ''
      })
    }
    else if(formula.charAt(formula.length-1) === "-") {
        this.setState({
        number: (eval(secondFormula)),
        formula: ''
      })
    }
    else {
     this.setState({
        number: (eval(this.state.formula)),
        formula: ''
      })
    }
  }
  render() {
    return(
      <div id="calculator">
      <h1 id="display">{this.state.formula}</h1>
      <h1 id="number">{this.state.number}</h1>
      <div id="buttons">
      <button value="1" id="one"onClick={this.inputtedNum}>1</button>
      <button id="two" value="2" onClick={this.inputtedNum}>2</button>
      <button id="three" value="3"onClick={this.inputtedNum}>3</button>
      <button id="divide" value="/" onClick={this.inputtedNum}>/</button>
      <button id="four" value="4"onClick={this.inputtedNum}>4</button>
      <button id="five" value="5"onClick={this.inputtedNum}>5</button>
      <button id="six" value="6"onClick={this.inputtedNum}>6</button>
      <button id="multiply" value="*" onClick={this.inputtedNum}>X</button>
      <button id="seven" value="7" onClick={this.inputtedNum}>7</button>
      <button id="eight" value="8" onClick={this.inputtedNum}>8</button>
      <button id="nine" value="9"onClick={this.inputtedNum}>9</button>
      <button id="subtract" value="-" onClick={this.inputtedNum}>-</button>
      <button value="0" id="zero"onClick={ this.inputtedNum}>0</button>
      <button id="decimal" value="." onClick={this.inputtedNum}>.</button>
      <button id="equals" onClick={this.calculate}>=</button>
      <button id="add" value="+" onClick={this.inputtedNum}>+</button>
      <button id="clear" onClick={this.clear}>AC</button>
      </div>
      </div>
    )
  }
}
class App extends React.Component {
  render() {
  return(
    <Buttons />
  )
  }
}


ReactDOM.render(<Calculator />,document.getElementById('root'))
