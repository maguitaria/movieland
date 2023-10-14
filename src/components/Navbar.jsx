import React from "react";
import {  Link } from "react-router-dom";
import  Logout  from "../pages/Logout"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
const Navbar = () => {
   return (
     <CDBSidebar
       textColor="#333"
       backgroundColor="#f0f0f0"
       className={""}
       breakpoint={0}
       toggled={false}
       minWidth={""}
       maxWidth={""}
     >
       <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        
       </CDBSidebarHeader>
       <CDBSidebarContent>
         <CDBSidebarMenu>
           <CDBSidebarMenuItem icon="th-large">
             <Link to="/"> Home </Link>
           </CDBSidebarMenuItem>
           <CDBSidebarMenuItem icon="sticky-note">
             {" "}
             <Link to="/signup">Register</Link>
           </CDBSidebarMenuItem>
           <CDBSidebarMenuItem icon="chart-line" iconType="solid">
             {" "}
             <Link to="/login">Login</Link>
           </CDBSidebarMenuItem>
           <CDBSidebarMenuItem icon="chart-line" iconType="solid" >
             {" "}
             <Link to="/logout" ><Logout/></Link>
           </CDBSidebarMenuItem>
         </CDBSidebarMenu>
       </CDBSidebarContent>

       <CDBSidebarFooter style={{ textAlign: "center" }}>
       
       </CDBSidebarFooter>
     </CDBSidebar>
   );
};
export default Navbar;