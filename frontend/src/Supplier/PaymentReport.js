import React from 'react';
import Sidebar from '../Components/Sidebar'
import {FormInput , FormSelect , MultiFormSelect} from '../Components/Form'
import moment from 'moment';
import { omit } from 'lodash'
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";

import EX_CONTROLLER from '../Controllers/Payment.Controller';
import CONFIG from '../Controllers/Config.Controller';
let totle = 0;

class PaymentReport extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paymentList: [],
           
            
        };
    }

    pdfGenarator = () => {
    
        var doc = new jsPDF();
        doc.text(10, 10, 'Payment Reoprt');
      
        doc.autoTable({html: "#payment-table"})
        doc.save("Payment.pdf")
        
    }

    getTotle(Pamount) {
        totle = totle + parseInt(Pamount);
        return(totle);

        console.log(totle);
    }

    async componentDidMount() {
        
        const res = await EX_CONTROLLER.getByDate(this.props.match.params.Pdate);

        this.setState({
            paymentList: res
            
        });
        
    }

    


    render(){
        const {paymentList} = this.state;
        console.log("sum: ", totle);
    return (
      <div className="app" >
      <Sidebar activemenu={'SUPPLIER'} submenu={'PAYMENT_REPORT'} />
      <main>
          <div className="container-fluid" >
          <div className="row" >
              <div className="col-12 shadow-sm rounded bg-white mt-1" >
                  <h2 className="text-header py-3 mb-0 font-weight-bold line-hight-1"> Supplier Payment Report for {this.props.match.params.Pdate}</h2>
                  <button type="submit" onClick={this.pdfGenarator} className="btn btn-success rounded-0">Get PDF</button><h6></h6>
                  
                  <div className="col-12 shadow-sm rounded bg-white mt-3" > 
                  <table class="table borderless customtable" id="payment-table">
                      <thead>
                          <tr>
                          <th className="font-08 text-dark2 ">Supplier ID</th>
                          <th className="font-08 text-dark2 ">Amount</th>
                          <th className="font-08 text-dark2 ">Date</th>
                          </tr>
                      </thead>
                      <tbody >
                          {paymentList && this.state.paymentList.map((value , i) => this.renderTable(value , i))}

                          <br></br><br></br>
                          <h2 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Totle Rs. {totle}</h2>
                        
                      </tbody>
                  </table>

              </div>
              </div>
          </div>
          </div>
      </main>
    </div>
    );}
  
  
    renderTable = (payment , index) => {
        this.getTotle(payment.paymentAmount);
      console.log(payment);
        return (
                          <tr key={payment._id}>
                              <td>{payment.PsupplierID}</td>
                              <td>{payment.Pamount}</td>
                              <td>{payment.Pdate}</td>
                          </tr>
      )
    }
  }
export default PaymentReport;
