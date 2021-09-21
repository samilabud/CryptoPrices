import React,{useEffect,useState} from 'react';

import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow,PagingPanel,TableFilterRow } from '@devexpress/dx-react-grid-material-ui';
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  FilteringState,
  IntegratedFiltering,
  IntegratedPaging
} from '@devexpress/dx-react-grid';
import './sellprices.styles.css';

export const Sellprices = () =>{
    const [dataSellPrices, setDataSellPrices] = useState([{currencyID:'Loading', currencyName:'Loading', sellPrice:"Loading"}]);

   
  useEffect(()=>{
    
    const apiCurrencyURL = "https://api.pro.coinbase.com/currencies";
    const getCurrencies = async () =>{
      let fetchData = await fetch(apiCurrencyURL)
      fetchData = await fetchData.json()
      fetchData = await fetchData.filter(data=>data.details.type==="crypto");
      fetchData = await relateCurrencyPrice(fetchData);
      setDataSellPrices(fetchData);
    }

    
    const relateCurrencyPrice = async (currencies) => 
    {
      let arrayDataResult = [];
      arrayDataResult = Promise.all(currencies.filter(datacurrency=>(datacurrency.id.toUpperCase().indexOf("")>=0)).map(datacurrency=>{ //filter(data=>(data.id.toUpperCase().indexOf("")>=0))
          
          let innerArrayDataResult = [];
          return fetch('https://api.coinbase.com/v2/prices/'+datacurrency.id +'-USD/sell')
          .then(data=>data.json())
          .then(data =>{
            let fetchData = data.data;
            try{
              if(typeof(fetchData.amount)!==undefined)
                innerArrayDataResult = {currencyID:datacurrency.id, currencyName:datacurrency.name, sellPrice:'$'+fetchData.amount};
              else{
                innerArrayDataResult = {currencyID:datacurrency.id, currencyName:datacurrency.name, sellPrice:"Not Found"};
              }
            }catch(err){
              innerArrayDataResult = {currencyID:datacurrency.id, currencyName:datacurrency.name, sellPrice:"Not Found"};
              //console.log(err,"Error not handled");
            }
            return innerArrayDataResult;
          })
          .catch(()=>{
            console.log("Error not handled");
          });
          
          /*await client.getSellPrice({'currencyPair': data.id +'-USD'}, async function(err, price) {
            let innerArrayDataResult = [];
            try{
              if(err!=="NotFound: Invalid base currency")
                innerArrayDataResult ={currencyID:data.id, currencyName:data.name, sellPrice:price.data.amount};//
              else{
                innerArrayDataResult = {currencyID:data.id, currencyName:data.name, sellPrice:"Not Found"};
              }
            }catch(err){
              console.log(err,"Error not handled");
            }
            arrayDataResult.push(innerArrayDataResult);
          });*/
          
        }))
          
       return arrayDataResult;
      
    }
    getCurrencies();
  },[])
  const columns = [
    { name: 'currencyID', title: 'Currency ID' },
    { name: 'currencyName', title: 'Currency Name' },
    { name: 'sellPrice', title: 'Dollar Sell Price' }
  ];
  const [filteringStateColumnExtensions] = useState([
    { columnName: 'sellPrice', filteringEnabled: false }
  ]);

  try{
  dataSellPrices.done(function(){
    console.log("finished")
  })
}catch(err){}

    return (
    <div>
      <Paper>
        <Grid
          rows={dataSellPrices}
          columns={columns}
         
        >
        <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
        <SortingState
          defaultSorting={[{ columnName: 'currencyID', direction: 'asc' }]}
         
        />
          <IntegratedSorting />
          <FilteringState defaultFilters={[]} columnExtensions={filteringStateColumnExtensions} />
          <IntegratedFiltering />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow  showSortingControls/>
          <TableFilterRow />
          <PagingPanel />
        </Grid>
      </Paper>
    </div>
   
  )
}

export default Sellprices;