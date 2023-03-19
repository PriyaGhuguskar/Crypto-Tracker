import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import NavCompo from './Component/NavCompo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <NavCompo />
          <Route exact path="/" component={Homepage}></Route>
          {/* <Route path="/coins/:id" component={CoinPage}></Route> */}

        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
