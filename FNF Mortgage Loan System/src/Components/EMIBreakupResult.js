import React from "react";

function EMIBreakupTable({ emi, data }) {
  const { loanAmount, loanTerm, interestRate } = data;

  // Convert interest rate to monthly rate
  const monthlyRate = interestRate / 100 / 12;

  // Calculate the total amount payable
  const totalAmountPayable = emi * loanTerm * 12;

  return (
    <div> 
      <div>
    <table style={{ border: "1px solid blue"  }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid blue" }}>Month</th>
          <th style={{ border: "1px solid blue" }}>EMI</th>
          <th style={{ border: "1px solid blue" }}>Interest</th>
          <th style={{ border: "1px solid blue" }}>Principal</th>
          <th style={{ border: "1px solid blue" }}>Balance</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: loanTerm * 12 }, (_, i) => (
          <tr key={i}>
            <td style={{ border: "1px solid blue" }}>{i + 1}</td>
            <td style={{ border: "1px solid blue" }}>{emi.toFixed(2)}</td>
            <td style={{ border: "1px solid blue" }}>
              {(emi - loanAmount / (loanTerm * 12)).toFixed(2)}
            </td>
            <td style={{ border: "1px solid blue" }}>
              {(loanAmount / (loanTerm * 12)).toFixed(2)}
            </td>
            <td style={{ border: "1px solid blue" }}>
              {(totalAmountPayable - emi * (i + 1)).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

function EMIBreakupResult({ data }) {
  const [emi, setEMI] = React.useState(0);
  let dataFromParent = data;

  const calculateEMI = (dataArg) => {
    const { loanAmount, loanTerm, interestRate } = dataArg;
    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;

    // Calculate EMI using the formula
    const EMI =
      (loanAmount *
        interestPerMonth *
        (1 + interestPerMonth) ** totalLoanMonths) /
      ((1 + interestPerMonth) ** totalLoanMonths - 1);

    setEMI(EMI);
  };

  React.useEffect(() => {
    calculateEMI(dataFromParent);
  }, [dataFromParent]);

  return (
    <div>
      <h2>EMI Calculator</h2>
      {/* <button onClick={() => calculateEMI(dataFromParent)}>Calculate EMI</button> */}
      <p>EMI: {emi.toFixed(2)}</p>
      <EMIBreakupTable emi={emi} data={dataFromParent} />
    </div>
  );
}

export default EMIBreakupResult;
