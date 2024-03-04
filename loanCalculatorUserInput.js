// user input version


function calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears){

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const loanTermMonths = loanTermYears * 12
  
    // calculate monthly payment
    const monthlyPayment = principleLoan * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, - loanTermMonths))
  
    return {
      principleLoan: principleLoan,
      annualInterestRate: annualInterestRate,
      monthlyPayment: monthlyPayment.toFixed(2),
      totalAmountPayable:(monthlyPayment * loanTermMonths).toFixed(2),
      totalInterestPayable:((monthlyPayment * loanTermMonths) - principleLoan).toFixed(2),
  }
  }
  
  
  
const readline = require('readline-sync');

const principleLoan = parseFloat(readline.question("Please enter the amount you wish to borrow: "));
const annualInterestRate = parseFloat(readline.question("Please enter the APR %: "));
const loanTermYears = parseFloat(readline.question("Please enter the loan term in full years: "));

const { monthlyPayment, totalAmountPayable, totalInterestPayable } = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears);

console.log("Principle Loan: £" + principleLoan);
console.log("APR: " + annualInterestRate + "%");
console.log("Monthly Payment: £" + monthlyPayment);
console.log("Total Amount Payable: £" + totalAmountPayable);
console.log("Total Interest Payable: £" + totalInterestPayable);
  
  
  
  