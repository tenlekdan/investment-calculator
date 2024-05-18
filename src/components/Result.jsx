import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ userInputs }) => {

    const input = {
        initialInvestment: userInputs.initInvest,
        annualInvestment: userInputs.anualInvest,
        expectedReturn: userInputs.expectedReturn,
        duration: userInputs.duration
    }
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <td>Year</td>
                        <td>Investment Value</td>
                        <td>Interest (Year)</td>
                        <td>Total Interest</td>
                        <td>Invested Capital</td>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map(row => {
                        const totalInterest = row.valueEndOfYear - (row.annualInvestment * row.year) - initialInvestment;
                        const totalAmountInvested = row.valueEndOfYear - totalInterest;
                        return (<tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Result;