import React from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'; //(1)

import ShopPage from '././pages/shop/shop.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}
/*
in line 16 path='/' means that the homepage is the url without any
additional words after the '/'
.
Word "exact" means that when I type the url then / then the name 
of any other page (hats for example)=>
it gives me the other page in separate new page,,
without it , it will give me the other page in the same homepage.
*/

/*
Switch component => we wrap our components with it 
It works if we deleted the word "exact", it not give me the 
other page in my homepage, it just render the homepage only
*/
export default App;
