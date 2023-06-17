// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = details
  return (
    <li className="cryptocurrency-item">
      <div className="currency-container">
        <img src={currencyLogo} alt={currencyName} className="currency-log" />
        <p>{currencyName}</p>
      </div>
      <div className="values-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
