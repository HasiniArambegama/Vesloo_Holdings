import Dashboard from '../Dashboard';
import AddMachine from '../Machine/AddMachine';
import MachineList from '../Machine/MachineList';
import DeleteMachine from '../Machine/DeleteMachine';
import EditMachine   from '../Machine/EditMachine';
import AddEmployee from '../Employee/AddEmployee';
import ManageEmployee from '../Employee/ManageEmployees';
import AddStock from '../Stock/AddStock';
import StockList from '../Stock/StockList';
import AddDStock from '../Stock/AddDStock';
import StockExpense from '../Stock/StockExpense';
import EditStock from '../Stock/EditStock';
import DeleteStock from '../Stock/DeleteStock';
import EditDStock from '../Stock/EditDStock'

import AddSupplier from '../Supplier/AddSupplier';
import addPayment from '../Supplier/addPayment';
import SupplierList from '../Supplier/SupplierList';
import PaymentList from '../Supplier/PaymentList';
import DeleteSupplier   from '../Supplier/DeleteSupplier';
import DeletePayment   from '../Supplier/DeletePayment';
import EditSupplier   from '../Supplier/EditSupplier';
import EditPayment   from '../Supplier/EditPayment';
import AddEmployee from '../Employee/AddEmployee';
import ManageEmployee from '../Employee/ManageEmployees';
import PaymentReport from '../Supplier/PaymentReport';
import  SelectDate from '../Supplier/SelectDate';



let routes = [

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },



  {
    path: "/Stock/list",
    name: "Stock",
    component: StockList,
  },
  {
    path: "/Supplier/list",
    name: "Supplier",
    component: SupplierList,

    exact: true,
  },

  {

    path: "/Stock/add",
    name: "Add Stock",
    component: AddStock,
    exact: true,
  },

   {
    path: "/Stock/delete/:id",
     name: "Delete Stock",
     component: DeleteStock,
     exact: true,
   },
  
   {
     path: "/Stock/edit/:id",
     name: "Edit Stock",
     component: EditStock,
     exact: true,
   },

  {
    path: "/DStock/StockExpense",
    name: "DStock",
    component: StockExpense,
    exact: true,
  },

  {
    path: "/DStock/add",
    name: "Add DStock",
    component: AddDStock,
    exact: true,
  },
  {
    path: "/DStock/edit/:id",
    name: "Edit Stock",
    component: EditDStock,
    exact: true,
  },






  {
    path: "/Machine/list",
    name: "Machine",
    component: MachineList,
    exact: true,
  },

  {
    path: "/Machine/add",
    name: "Add Machine",
    component: AddMachine,
    exact: true,
  },

  {
    path: "/Machine/delete/:id",
    name: "Delete Machine",
    component: DeleteMachine,
    exact: true,
  },
  
  {
    path: "/Machine/edit/:id",
    name: "Edit Machine",
    component: EditMachine,
    exact: true,
  },





{
    path: "/Supplier/add",
    name: "Add Supplier",
    component: AddSupplier,
    exact: true,
  },

  {
    path: "/Payment/add",
    name: "Add Payment",
    component: addPayment ,
    exact: true,
  },
  
  {
    path: "/Payment",
    name: "Payment",
    component: PaymentList,
    exact: true,
  },
  {
    path: "/Supplier/delete/:id",
    name: "Delete Supplier",
    component: DeleteSupplier,
    exact: true,
  },
  {
    path: "/Payment/delete/:id",
    name: "Delete Payment",
    component: DeletePayment,
    exact: true,
  },
  {
    path: "/Supplier/edit/:id",
    name: "Edit Supplier",
    component: EditSupplier,
    exact: true,
  },
  {
    path: "/Payment/edit/:id",
    name: "Edit Payment",
    component: EditPayment,
    exact: true,
  },
  {
    path: "/Supplier/report/:date",
    name: "Payment Report",
    component: PaymentReport,
    exact: true,
  },
  {
    path: "/Supplier/selectDate",
    name: "Payment Select Date",
    component: SelectDate,
    exact: true,
  },


  {
    path: "/Employee/add",
    name: "Add Employee",
    component: AddEmployee,
    exact: true,
  },

  {
    path: "/Employee/list",
    name: "Manage Employee",
    component: ManageEmployee,
    exact: true,
  },
 
];


export default routes;



