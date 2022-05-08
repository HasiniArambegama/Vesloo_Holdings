import React from 'react';
import Sidebar from '../Components/Sidebar'
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import 'jspdf-autotable';
import MAC_CONTROLLER from '../Controllers/Stock.Controller';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';


class StockList extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          stockList: [],
      }
  }
  
  async componentDidMount() {
      const res = await MAC_CONTROLLER.getAllStock();
      this.setState({
        stockList: res
      });
  }
  pdfGenarator = () => {
    
    var doc = new jsPDF();
    doc.text(10, 10, 'VESLOO HOLDINGS');
  
    doc.autoTable({html: "#stock-table"})
    doc.save("stock.pdf")
    
  }


  render(){
      const {stockList} = this.state;
  return (
    <div className="app" >
    <Sidebar activemenu={'STOCK'} submenu={'STOCK_LIST'} />
    <main>
        <div className="container-fluid" >
        <div className="row" >
            <div className="col-12 shadow-sm rounded bg-white mt-1" >
                <h2 className="text-header py-3 mb-0 font-weight-bold line-hight-1 ">Stock List</h2>
                <button type="submit" onClick={this.pdfGenarator} className="btn btn-success rounded-0">Generate Report</button><h6></h6>
                <div className="col-12 shadow-sm rounded bg-white mt-3" >
                <table class="table borderless customtable" id="stock-table">
                    <thead>
                        <tr>
                        <th className="font-08 text-dark2 ">Item Code</th>
                        <th className="font-08 text-dark2 ">Item Name</th>
                        <th className="font-08 text-dark2 ">Garment Quantity</th>
                        <th className="font-08 text-dark2 ">Month</th>
                        <th className="font-08 text-dark2 ">Garment Status</th>
                        <th className="font-08 text-dark2 ">Each Price </th>
                        <div>
                        <th className="font-08 text-dark2 ">Actions</th>
                        </div>
                        </tr>
                    </thead>
                    <tbody >
                        {stockList && stockList.map((value , i) => this.renderTable(value , i))}
                      
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </main>
  </div>
  );}

 
  renderTable = (stock , index) => {
      console.log(stock);
    return (
                        <tr key={stock._id}>
                            <td>{stock.itemCode}</td>
                            <td>{stock.itemName}</td>
                            <td>{stock.garmentQuantity}</td>
                            <td>{stock.month}</td>
                            <td>{stock.garmentStatus}</td>
                            <td>{stock.priceEach}</td>
                            <td><Link to={"/Stock/edit/" + stock._id}><span className="btn rounded-0 btn-danger margin-left">Edit</span></Link>
                            <Link to={"/Stock/delete/" + stock._id}><span className="btn rounded-0 btn-warning">Delete</span></Link>
                            </td>
                        </tr>
    )
  }
}

export default StockList;
