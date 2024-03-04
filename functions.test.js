import { calculateMonthlyPayment } from "./functions";



describe('calculateMonthlyPayment', () => {
  let result;
  const principleLoan = 10000;
  const annualInterestRate = 5.8;
  const loanTermYears = 5;
  beforeEach(() => { 
    result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears)
  })
  it('should be able to get principleLoan amount', () => {  
  expect(result.principleLoan).toBe(10000)
  })

  it('should be able get the annual interest rate', () => {
    expect(result.annualInterestRate).toBe(5.8)
  })

  it('should be able to calculate the loan term in months', () => {
    const expectedLoanTermMonths = loanTermYears * 12;  
    expect(result.loanTermMonths).toBe(expectedLoanTermMonths);

  })

  it('should be able to work out the monthly interest', () => {

    const expectedMonthlyInterestRate = annualInterestRate / 12 / 100;
    expect(result.monthlyInterestRate).toBe(expectedMonthlyInterestRate)
  })

  it('should be able to work out the monthly payment', () => {
    const principleLoan = 1000;
    const annualInterestRate = 10;
    const loanTermYears = 1; 
    const result = calculateMonthlyPayment(principleLoan, annualInterestRate, loanTermYears);
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const loanTermMonths = loanTermYears * 12;
    const expectedMonthlyPayment = principleLoan * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, - loanTermMonths));
    expect(result.monthlyPayment).toBe(expectedMonthlyPayment.toFixed(2))
  })

  it('should be able to work out the total anount payable after interest', () => {  
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const loanTermMonths = loanTermYears * 12;
    const monthlyPayment = principleLoan * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, - loanTermMonths));
    const expectedTotalAmountPayable = monthlyPayment * loanTermMonths
    expect(result.totalAmountPayable).toBe(expectedTotalAmountPayable.toFixed(2))
  })
})


