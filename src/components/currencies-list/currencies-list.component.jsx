import React,{useState,useEffect} from 'react';
import GridLayout from 'react-grid-layout';
import '../../gridcss/grid-layout.css';
import '../../gridcss/resizable.css';
import './currencies-list.styles.css';

export const CurrenciesList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [defaultCurrencies, setDefaultCurrencies] = useState([]);
  const [searchedCurrency, setSearchCurrency] = useState('');
  
  useEffect(()=>{
    const apiCurrencyURL = "https://api.pro.coinbase.com/currencies";
    fetch(apiCurrencyURL)
    .then(data=>data.json())
    .then(data=>{
      data =  data.filter(data=>data.details.type==="crypto")
      setCurrencies(data);
      setDefaultCurrencies(data);
    })
  },[])

  const onChangeSearchHandler = (event) =>{
    event.preventDefault();
    setSearchCurrency(event.target.value);
    let actualData = currencies;

    if(!event.target.value){
      setCurrencies(defaultCurrencies);
    }else{
      actualData = defaultCurrencies.filter(data=>(data.id.toUpperCase().indexOf(event.target.value.toUpperCase())>=0 || data.name.toUpperCase().indexOf(event.target.value.toUpperCase())>=0))
      setCurrencies(actualData);
    }
  }
  
  return (
      <div id="currencyList">
      <div className="searchCurrency">
        <label htmlFor="inputCurrencies">Filter by currency: </label>
        <input className="inputSearch" type="text" value={searchedCurrency} id="inputCurrencies" onChange={onChangeSearchHandler}></input>
      </div>
      <GridLayout className="layout" cols={1} rowHeight={15} width={300}>
        {currencies.map(data=>(
          <div key={data.id} data-grid={{x: 0, y: 0, w: 1, h: 2}}>
            {data.name + ' - ' + data.id + ' ' + data.details.symbol}
          </div>
        ))}
      </GridLayout>
      </div>
  )
}
export default React.memo(CurrenciesList);