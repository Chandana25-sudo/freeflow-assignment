// import logo from './logo.svg';
import './App.css';
import Icons from './icons';
import Scroll from './scroll';
import Aboutus from './about-us';
import {Container,Row,Col} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
