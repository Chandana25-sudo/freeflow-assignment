// import logo from './logo.svg';
import './App.css';
import Icons from './components/icons';
import Scroll from './components/scroll';
import Aboutus from './components/about-us';
import {Container,Row,Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="desktop">
        <table >
          <div className="row">
            {/* <Col md={2}> */}
                <div className="col-1">
                  <Icons/>
                </div>
              {/* </Col> */}
              {/* <Col md={6}>   */}
                <div className="col-7">
                  <Scroll/>
                </div>
              {/* </Col> */}
              {/* <Col md={4}>   */}
                <div className="col-4">
                  <Aboutus/>
                </div>
              {/* </Col> */}
            </div>
          </table> 
        </div>   
        <div className="mobile">
        <table >
          <div className="row">
            {/* <Col md={2}> */}
                <div className="col-sm-2">
                  <Icons/>
                </div>
              {/* </Col> */}
              {/* <Col md={6}>   */}
                <div className="col-sm-10">
                  <Scroll/>
                </div>
              {/* </Col> */}
             
            </div>
          </table> 

        </div>
    </div>
  );
}

export default App;
