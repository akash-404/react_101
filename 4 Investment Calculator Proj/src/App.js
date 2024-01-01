import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
import { useState } from "react";

function App() {

  const [results, setResults] = useState([]);
  
  // -------- using seperate useState for each input field --------
  // const calculateHandler = (userInput) => {
  //   // Should be triggered when form is submitted
  //   // You might not directly want to bind it to the submit event on the form though...

  //   const yearlyData = []; // per-year results

  //   let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
  //   const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
  //   const expectedReturn = +userInput['expected-return'] / 100;
  //   const duration = +userInput['duration'];

  //   // The below code calculates yearly results (total savings, interest etc)
  //   for (let i = 0; i < duration; i++) {
  //     const yearlyInterest = currentSavings * expectedReturn;
  //     currentSavings += yearlyInterest + yearlyContribution;
  //     yearlyData.push({
  //       // feel free to change the shape of the data pushed to the array!
  //       year: i + 1,
  //       yearlyInterest: yearlyInterest,
  //       savingsEndOfYear: currentSavings,
  //       yearlyContribution: yearlyContribution,
  //     });
  //   }

  //   // do something with yearlyData ...
  //   setResults(yearlyData);
  // };




  // -------- using single useState for all input fields --------
  const calculateHandler = (userInput) => {
    const yearlyData = []; 
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setResults(yearlyData);
  };

  return (
    <div>
      <Header />
    
      <UserInput onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsTable />
    </div>
  );
}

export default App;
