import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/NavCompo';
// import CoinPage from './pages/CoinPage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Homepage}></Route>
          {/* <Route path="/coins/:id" component={CoinPage}></Route> */}

        </div>


      </BrowserRouter>
    </div>
  );
}

export default App;
