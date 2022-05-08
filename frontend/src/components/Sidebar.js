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
          <SubMenu title="Employee" defaultOpen={activemenu === 'EMPLOYEE'} icon={<FontAwesomeIcon icon={faAddressBook} />}>
            <MenuItem active={submenu === 'EMPLOYEE_LIST'}>Manage Machine <Link to="/Employee/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_EMPLOYEE'}>Add Machine<Link to="/Employee/add" /></MenuItem>
          </SubMenu>
          <SubMenu title="Machine" defaultOpen={activemenu === 'Machine'} icon={<FontAwesomeIcon icon={faChalkboard} />}>
            <MenuItem active={submenu === 'MACHINE_LIST'}>Manage Machine <Link to="/Machine/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_MACHINE'}>Add Machine<Link to="/Machine/add" /></MenuItem>
          </SubMenu>
          <SubMenu title="Stock" defaultOpen={activemenu === 'Stock'} icon={<FontAwesomeIcon icon={faTable} />}>
            <MenuItem active={submenu === 'MACHINE_LIST'}>Manage Machine <Link to="/Machine/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_MACHINE'}>Add Machine<Link to="/Machine/add" /></MenuItem>
            
          </SubMenu>
          <SubMenu title="Supplier" defaultOpen={activemenu === 'SUPPLIER'} icon={<FontAwesomeIcon icon={faCheckSquare} />}>
            <MenuItem active={submenu === 'SUPPLIER_LIST'}>Manage Supplier <Link to="/Supplier/list" /></MenuItem>
            <MenuItem active={submenu === 'ADD_SUPPLIER'}>Add Supplier<Link to="/Supplier/add" /></MenuItem>
            <MenuItem active={submenu === 'ADD_PAYMENT'}>Add Payment<Link to="/Payment/add" /></MenuItem>
            <MenuItem active={submenu === 'PAYMENT_LIST'}>Payment<Link to="/Payment" /></MenuItem>
            <MenuItem active={submenu === 'PAYMENT_REPORT'}>Payment Report<Link to="/Supplier/selectDate" /></MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    
    </ProSidebar>
  );
}

export default Sidebar;