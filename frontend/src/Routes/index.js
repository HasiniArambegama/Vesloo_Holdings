import Dashboard from '../Dashboard';
import AddMachine from '../Machine/AddMachine';
import MachineList from '../Machine/MachineList';
import DeleteMachine from '../Machine/DeleteMachine';
import EditMachine   from '../Machine/EditMachine';
import AddEmployee from '../Employee/AddEmployee';
import ManageEmployee from '../Employee/ManageEmployees';
import AddExpense from '../Expense/AddExpense';
import ExpenseList from '../Expense/ExpenseList';
import DeleteExpense from '../Expense/DeleteExpense';
import ExpenseReport from '../Expense/ExpenseReport';
import  SelectDate from '../Expense/SelectDate';
let routes = [

  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },

  {
    path: "/Expense/add",
    name: "Add Expense",
    component: AddExpense,
    exact: true,
  },

  {
    path: "/Expense/list",
    name: "Expense",
    component: ExpenseList,
    exact: true,
  },
  
  {
    path: "/Expense/report/:date",
    name: "Expense Report",
    component: ExpenseReport,
    exact: true,
  },

  {
    path: "/Expense/selectDate",
    name: "Expense Select Date",
    component: SelectDate,
    exact: true,
  },

  {
    path: "/Expense/delete/:id",
    name: "Delete Expense",
    component: DeleteExpense,
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
