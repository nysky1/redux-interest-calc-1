import React from 'react';
import {connect} from 'react-redux';

// Connect this component
export class InterestCalculator extends React.Component {

    render() {
        return (<form className="interest-calculator"
            onSubmit={e => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="principal">Principal ($)</label>
                <input type="number" id="principal" value={this.props.principal}
                    min="0" />
            </div>
            <div className="form-group">
                <label htmlFor="interest">Interest rate (%)</label>
                <input type="number" id="interest" value={this.props.interest}
                    min="0" max="100" step="0.1" />
            </div>
            <div className="form-group">
                <label htmlFor="years">Years</label>
                <input type="number" id="years" value={this.props.years}
                    min="0" max="100" />
            </div>
            <div className="form-group">
                <label htmlFor="total">Total</label>
                <output type="number" id="total">${this.props.total.toFixed(2)}</output>
            </div>
        </form>)
    }
}

InterestCalculator.defaultProps = {
    principal: 0,
    interest: 0,
    years: 0,
    total: 0
};

const mapStateToProps = state => ({
    principal: state.principal,
    interest: state.interest,
    years: state.years,
    total: state.principal * Math.pow(1 + state.interest / 100, state.years)
})

export default connect(mapStateToProps)(InterestCalculator);