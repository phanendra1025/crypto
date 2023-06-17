// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    currenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheCurrenciesList()
  }

  getTheCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatedData = data.map(eachObject => ({
      id: eachObject.id,
      currencyName: eachObject.currency_name,
      usdValue: eachObject.usd_value,
      euroValue: eachObject.euro_value,
      currencyLogo: eachObject.currency_logo,
    }))

    this.setState({currenciesList: formatedData, isLoading: false})
  }

  render() {
    const {isLoading, currenciesList} = this.state
    console.log(currenciesList)
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrency-container">
            <h1 className="app-name">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="app-image"
            />
            <CryptocurrenciesList currenciesList={currenciesList} />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
