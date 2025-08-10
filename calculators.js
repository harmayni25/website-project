// Loan EMI Calculator
function calculateEMI(loanId, tenureId, rateId, resultId) {
    let P = parseFloat(document.getElementById(loanId).value);
    let years = parseInt(document.getElementById(tenureId).value);
    let annualRate = parseFloat(document.getElementById(rateId).value);

    if (isNaN(P) || isNaN(years) || isNaN(annualRate)) {
        alert("Please enter valid numbers");
        return;
    }

    let N = years * 12; // total months
    let R = annualRate / 12 / 100; // monthly rate

    let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    document.getElementById(resultId).innerText = `EMI: ₹${emi.toFixed(2)}`;
}

// Trade Finance Quick Quote
function calculateTradeFinance(amountId, tenorId, ratePerYear = 8) {
    let amount = parseFloat(document.getElementById(amountId).value);
    let tenorDays = parseInt(document.getElementById(tenorId).value);

    if (isNaN(amount) || isNaN(tenorDays)) {
        alert("Please enter valid numbers");
        return;
    }

    let interest = (amount * ratePerYear * tenorDays) / (365 * 100);
    alert(`Estimated Interest: ₹${interest.toFixed(2)}`);
}

// SIP Calculator
function calculateSIP(monthlyId, rateId, tenureId, resultId) {
    let monthly = parseFloat(document.getElementById(monthlyId).value);
    let annualRate = parseFloat(document.getElementById(rateId).value);
    let years = parseInt(document.getElementById(tenureId).value);

    if (isNaN(monthly) || isNaN(annualRate) || isNaN(years)) {
        alert("Please enter valid numbers");
        return;
    }

    let months = years * 12;
    let monthlyRate = annualRate / 12 / 100;
    let maturityValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    let totalInvested = monthly * months;

    document.getElementById(resultId).innerText = 
        `Total Invested: ₹${totalInvested.toFixed(2)}, Maturity Value: ₹${maturityValue.toFixed(2)}`;
}
