import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import Userinput from "./components/Userinput"

const initialInvest = {
  initInvest: 10000,
  anualInvest: 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [investmentRecords, setInvestmentRecords] = useState([]);
  const [userInputs, setUserInputs] = useState(initialInvest)
  function onChangeHandler(type, event) {
    setUserInputs((prev) => {
      return {
        ...prev,
        [type]: +event.target.value
      }
    })
  }

  const isValidDuration = userInputs.duration >= 1;

  return (
    <>
      <Header />
      <Userinput userInputs={userInputs} onValueChange={onChangeHandler}></Userinput>
      {!isValidDuration && <p className="center">Please enter a duration greater than 0</p>}
      {isValidDuration && <Result userInputs={userInputs}></Result>}
    </>
  )
}

export default App
