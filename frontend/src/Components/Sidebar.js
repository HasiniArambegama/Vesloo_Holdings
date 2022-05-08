import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTable, faPlusSquare, faAddressBook, faAtom, faTachometerAlt, faGlobe, faHome, faChalkboard, faAd, faChartBar, faCheckSquare, faRecycle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = ({ activemenu, submenu }) => {
  return (
    <ProSidebar breakPoint={'md'} >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          VESLOO HOLDINGS
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="round">

          <MenuItem
            active={activemenu === 'DASHBOARD'}
            icon={<FontAwesomeIcon icon={faHome} />}>
            Home<Link to="/" />
          </MenuItem>

          <SubMenu title="Machine" defaultOpen={activemenu === 'MACHINE'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'MACHINE_LIST'}>Manage Machine <Link to="/Machine/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_MACHINE'}>Add Machine<Link to="/Machine/add" /></MenuItem>
            
            <MenuItem active={submenu === 'EXPENSE_LIST'}>Manage Expense <Link to="/Expense/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_EXPENSE'}>Add Expense<Link to="/Expense/add" /></MenuItem>
            <MenuItem active={submenu === 'EXPENSE_REOPRT'}>Expense Report<Link to="/Expense/selectDate" /></MenuItem>

          <SubMenu title="Stock" defaultOpen={activemenu === 'Stock'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'STOCK_LIST'}>Manage Stock <Link to="/Stock/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_STOCK'}>Add Stock<Link to="/Stock/add" /></MenuItem>
            <MenuItem active={submenu === 'ADD_DSTOCK'}>Add Damaged Stock<Link to="/DStock/add" /></MenuItem>
            <MenuItem active={submenu === 'EXPENSE'}>Expense<Link to="/DStock/Expense" /></MenuItem>
          </SubMenu>
          <SubMenu title="Machine" defaultOpen={activemenu === 'MACHINE'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'MACHINE_LIST'}>Manage Machine <Link to="/Machine/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_MACHINE'}>Add Machine<Link to="/Machine/add" /></MenuItem>
          </SubMenu>
          <SubMenu title="Employee" defaultOpen={activemenu === 'EMPLOYEE'} icon={<FontAwesomeIcon icon={faAtom} />}>
            <MenuItem active={submenu === 'EMPLOYEE_LIST'}>Manage Machine <Link to="/Employee/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_EMPLOYEE'}>Add Machine<Link to="/Employee/add" /></MenuItem>
          </SubMenu>
          <SubMenu title="Supplier" defaultOpen={activemenu === 'EMPLOYEE'} icon={<FontAwesomeIcon icon={faAtom} />}>
            <MenuItem active={submenu === 'EMPLOYEE_LIST'}>Manage Machine <Link to="/Employee/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_EMPLOYEE'}>Add Machine<Link to="/Employee/add" /></MenuItem>

          </SubMenu>
        </Menu>
      </SidebarContent>
    
    </ProSidebar>
  );
}

export default Sidebar;
