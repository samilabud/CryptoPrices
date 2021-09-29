import React,{useState,useEffect} from 'react';
import GridLayout from 'react-grid-layout';
import './gridcss/grid-layout.css';
import './gridcss/resizable.css';
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

  const generateRows = () => {
    let xPos = 0;
    let yPos = 0;
    return currencies.map(data=>{
      if(xPos>=3){
        xPos=0;
        yPos++;
      }else{
        xPos++;
      }
      return (<div key={data.id} data-grid={{x: xPos,y: yPos, w: 1,h: 1}}> 
        {data.name + ' - ' + data.id + ' ' + data.details.symbol}
      </div>)
      
      })
  }

  return (
    <div>
      <div className="searchCurrency">
        <label htmlFor="inputCurrencies">Filter by currency: </label>
        <input className="inputSearch" type="text" value={searchedCurrency} id="inputCurrencies" onChange={onChangeSearchHandler}></input>
      </div>
      <div id="currencyList">
        <GridLayout className="layout" cols= {4} rowHeight={45} width={1000} compactType="horizontal" draggableCancel>

        {generateRows()}
          
        </GridLayout>
      </div>
    </div>
  )
}
export default React.memo(CurrenciesList);