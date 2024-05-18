

const Userinput = ({userInputs, onValueChange}) => {
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name="initial-investment" value={userInputs.initInvest} onChange={(e) => (onValueChange('initInvest', e))} />

                </p>
                <p>
                    <label htmlFor="anual-investment">Anual Investment</label>
                    <input type="text" name="anual-investment" value={userInputs.anualInvest} onChange={(e) => (onValueChange('anualInvest', e))} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="text" name="expected-return" value={userInputs.expectedReturn} onChange={(e) => (onValueChange('expectedReturn', e))} />

                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name="duration" value={userInputs.duration} onChange={(e) => (onValueChange('duration', e))} />
                </p>
            </div>
        </section>
    )
}

export default Userinput;