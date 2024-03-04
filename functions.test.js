import { calculateMonthlyPayment } from "./functions";

describe('calculateMonthlyPayment', () => {
  it('should be able to get principleLoan amount', () => {
    const principleLoan = 10000;
    const annualInterestRate = 5.8;
    const loanTermYears = 5;
    const result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears)
    expect(result.principleLoan).toBe(10000)
  })

  it('should be able get the annual interest rate', () => {
    const principleLoan = 10000;
    const annualInterestRate = 5.8;
    const loanTermYears = 5;    
    const result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears)
    expect(result.annualInterestRate).toBe(5.8)
  })

  it('should be able to calculate the loan term in months', () => {
    const principleLoan = 10000;
    const annualInterestRate = 5.8;
    const loanTermYears = 5; 
    const result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears);
    const expectedLoanTermMonths = loanTermYears * 12;  
    expect(result.loanTermMonths).toBe(expectedLoanTermMonths);

  })

  it('should be able to work out the monthly interest', () => {
    const principleLoan = 10000;
    const annualInterestRate = 5.8;
    const loanTermYears = 5; 
    const result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears);
    const expectedMonthlyInterestRate = annualInterestRate / 12 / 100;
    expect(result.monthlyInterestRate).toBe(expectedMonthlyInterestRate)
  })




  

})


