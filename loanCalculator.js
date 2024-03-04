/*

******* console logging version ******

M = monthly payment
P = principle loan amount
r = monthly interest  apr / 12
n = loan term in months(exponent)

interest = P x r

monInterest = apr / 12
base = 1 + monthly interest
exponent = term
futureValue = base ** exponent

monthlyPayment = principleLoan x monInterest
exponentalResult = 



1. convert apr to monthly (apr / 12)
2.calculate monthly payments:
  3. calculate exponentialResult 
  4. principleLoan * monthlyInterest  * exponentialResult
  5. divide result by exponentialResult -1
  6. 

*/
// const principleLoan = 10000
// const mont hlyInterest = 0.005
// const loanTerm = 60

// let exponentialResult = Math.pow(1 + monthlyInterest, loanTerm)
// console.log({exponentialResult});

// let monthlyPayment = principleLoan * (monthlyInterest * Math.pow(1 + monthlyInterest, loanTerm)) / 
// (Math.pow(1 + monthlyInterest, loanTerm) - 1);
// console.log({monthlyPayment})

function calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears){

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const loanTermMonths = loanTermYears * 12
  
    // calculate monthly payment
    const monthlyPayment = principleLoan * monthlyInterestRate / (1 - Math.pow(1 +monthlyInterestRate, - loanTermMonths))
  
    return {
      principleLoan: principleLoan,
      annualInterestRate: annualInterestRate,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmountPayable:(monthlyPayment * loanTermMonths).toFixed(2),
      totalInterestPayable:((monthlyPayment * loanTermMonths) - principleLoan).toFixed(2)
  }
  }
  
  const principleLoan = 10000
  const annualInterestRate = 5.8
  const loanTermYears = 5
  
  const { monthlyPayment, totalAmountPayable, totalInterestPayable } = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears)
  
  
  console.log("Principle Loan: £", principleLoan);
  console.log("APR:", annualInterestRate + "%");
  console.log("Monthly Payment:", monthlyPayment);
  console.log("Total Amount Payable:", totalAmountPayable)
  console.log("Total Interest Payable", totalInterestPayable)
  
  
  
  