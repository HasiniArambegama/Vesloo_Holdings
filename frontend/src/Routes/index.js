import Dashboard from '../Dashboard';
<<<<<<< HEAD
import AddMachine from '../Machine/AddMachine';
import MachineList from '../Machine/MachineList';
import DeleteMachine from '../Machine/DeleteMachine';
import EditMachine   from '../Machine/EditMachine';
import AddEmployee from '../Employee/AddEmployee';
import ManageEmployee from '../Employee/ManageEmployees';
import EditEmployee from '../Employee/EditEmployee';
import AddAttendance from '../Employee/AddAttendance';
import DeleteEmployee from '../Employee/DeleteEmployee';
import BasicInformation from '../Employee/BasicInformation';
import SalaryReport from '../Employee/SalaryReport';
import AttendanceDetails from '../Employee/AttendanceDetails'
import view from '../Employee/view'
=======
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

>>>>>>> master

let routes = [

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },

  {
<<<<<<< HEAD
    path: "/Machine/list",
    name: "Machine",
    component: MachineList,
=======
    path: "/Supplier/list",
    name: "Supplier",
    component: SupplierList,
>>>>>>> master
    exact: true,
  },

  {
<<<<<<< HEAD
    path: "/Machine/add",
    name: "Add Machine",
    component: AddMachine,
=======
    path: "/Supplier/add",
    name: "Add Supplier",
    component: AddSupplier,
>>>>>>> master
    exact: true,
  },

  {
<<<<<<< HEAD
    path: "/Machine/delete/:id",
    name: "Delete Machine",
    component: DeleteMachine,
=======
    path: "/Payment/add",
    name: "Add Payment",
    component: addPayment ,
>>>>>>> master
    exact: true,
  },
  
  {
<<<<<<< HEAD
    path: "/Machine/edit/:id",
    name: "Edit Machine",
    component: EditMachine,
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

  {
    path: "/Employee/update/:id",
    name: "Edit Employee",
    component: EditEmployee,
    exact: true,
  },

  {
    path: "/Employee/att/:id",
    name: "Add Attendance",
    component: AddAttendance,
    exact: true,
  },

  
  {
    path: "/Employee/delete/:id",
    name: "Delete Employee",
    component: DeleteEmployee,
    exact: true,
  },

  {
    path: "/Employee/blist",
    name: "Employee Basic Information",
    component: BasicInformation,
    exact: true,
  },

  {
    path: "/Employee/salaryreport",
    name: "Employee Salary Details",
    component: SalaryReport,
=======
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
>>>>>>> master
    exact: true,
  },

  {
<<<<<<< HEAD
    path: "/Employee/attD",
    name: "Employee Attendace Details",
    component: AttendanceDetails,
=======
    path: "/Employee/add",
    name: "Add Employee",
    component: AddEmployee,
>>>>>>> master
    exact: true,
  },

  {
<<<<<<< HEAD
    path: "/Employee/view",
    name: "View",
    component: view,
    exact: true,
  },
 
 
=======
    path: "/Employee/list",
    name: "Manage Employee",
    component: ManageEmployee,
    exact: true,
  },
 
>>>>>>> master
];

export default routes;
