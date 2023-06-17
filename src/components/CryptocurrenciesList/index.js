// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currenciesList} = props

  return (
    <ul className="crypto-currencies-container">
      <div className="table-top-container">
        <p className="coin-type">Coin Type</p>
        <div className="coin-type-container">
          <p className="usd">USD</p>
          <p className="euro">EURO</p>
        </div>
      </div>
      {currenciesList.map(eachCurrencies => (
        <CryptocurrencyItem details={eachCurrencies} key={eachCurrencies.id} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
