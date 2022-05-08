import React from 'react';
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import MAC_CONTROLLER from '../Controllers/DStock.Controller';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';


class StockExpense extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        StockExpense: [],
      }
  }
  
  async componentDidMount() {
      const res = await MAC_CONTROLLER.getAllDStock();
      this.setState({
        StockExpense: res
      });
  }
  pdfGenarator = () => {
    
    var doc = new jsPDF();
    doc.text(10, 10, 'VESLOO HOLDINGS');
  
    doc.autoTable({html: "#dstock-table"})
    doc.save("Damaged stock.pdf")
    
  }


  render(){
      const {StockExpense} = this.state;
  return (
    <div className="app" >
    <Sidebar activemenu={'DSTOCK'} submenu={'STOCKEXPENSE'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h2 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Damaged Stock Expenses</h2>
                <button type="submit" onClick={this.pdfGenarator} className="btn btn-success rounded-0">Generate Report</button><h6></h6>
                <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <table class="table borderless customtable" id="stock-table">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">Item Code</th>
                        <th className="font-08 text-dark2 ">Description</th>
                        <th className="font-08 text-dark2 ">Price</th>
                        <th className="font-08 text-dark2 ">Month</th>
                        <div>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </div>
                        </tr>
                    </thead>
                    <tbody >
                        {StockExpense && StockExpense.map((value , i) => this.renderTable(value , i))}
                      
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}

  renderTable = (dstock , index) => {
      console.log(dstock);
    return (
                        <tr key={dstock._id}>
                            <td>{dstock.ItemCode}</td>
                            <td>{dstock.Description}</td>
                            <td>{dstock.Price}</td>
                            <td>{dstock.Month}</td>
                            
                            <td><Link to={"/DStock/edit/" + dstock._id}><span className="btn rounded-0 btn-danger margin-left">Edit</span></Link>
                            <Link to={"/DStock/delete/" + dstock._id}><span className="btn rounded-0 btn-warning">Delete</span></Link>
                            </td>
                        </tr>
    )
  }
}

export default StockExpense;