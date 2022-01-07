import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BNavbar from './components/BNavbar';
import BLeftBar from './components/BLeftBar';
import BRightBar from './components/BRightBar';
import BInsertForm from './components/BInsertForm';


function App() {
  return (
    <div className="App main-body">
      <BNavbar/>
      <div className='container pt-5'>
      <div className='row'>
        <div className='col-lg-3 mobile-order-1'>
            <BLeftBar/>
        </div>
        <div className='col-lg-6'>
          <BInsertForm/>
        </div>
        <div className='col-lg-3'>
          <BRightBar/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
