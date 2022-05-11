import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import DetailsView from './components/detailsView';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import {Row,Col,Container} from 'react-bootstrap';
//import { ColumnDirective, ColumnsDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';


registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJW3xMYVF2R2FJfl96cFRMZF5BNQtUQF1hS35WdkNiWHtcdHVVRGBU')

ReactDOM.render(
  <React.StrictMode>
     <div>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Col xs={6}><App/></Col> 
        </Row>
     </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
