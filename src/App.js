//import {Client} from 'coinbase';
import  Menu from './components/menu/menu.component';

import Sellprices from './components/sellprices/sellprices.component';
import CurrenciesList from './components/currencies-list/currencies-list.component';
import Login from './components/login/login.component';

function App() {
  /*const client = Client(
    {
      'apiKey': 'h6yRzZRosR3X5CI3', 
      'apiSecret': 'TEEF0xMRjNJ8Mrc0r7STIjV0NwxjbgQj',
      'strictSSL': false
    }
  );*/
  
  return (
    <>
       
       <Menu />
    {/* <!-- Welcome   --> https://html5-templates.com/preview/bootstrap-scrolling-sticky-menu.html */}
    <section id="welcome" className="welcome-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Crypto Prices 💰</h1>
                    <p>This is a responsive one-page scrolling that show you the current sell prices of CryptoCurrencies 💱.</p>
                    <p>This webpage was created by <a href="https://samilabud.netlify.com" target="_blank" rel="noreferrer"> Samil Abud</a>.</p>
					          <p>&nbsp;</p>
                    <a className="btn btn-primary page-scroll" href="#prices">Click To See Prices!</a>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Prices --> */}
    <section id="prices" className="sellprice-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Sell Prices</h1>
                    <Sellprices />
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Currencies --> */}
    <section id="currencies" className="currencies-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Currencies List</h1>
                    { <CurrenciesList /> }
                </div>
            </div>
        </div>
    </section>

    {/* Login Section  */}
    <section id="login" className="login-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Login />
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default App;
