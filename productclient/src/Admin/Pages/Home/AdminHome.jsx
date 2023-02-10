// import Sidebar from "../../components/sidebar/Sidebar";


import Chart from "../../Components/chart/Chart";
import Featured from "../../Components/featured/Featured";
import AdminNavbar from "../../Components/navbar/AdminNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Latestlist from "../../Components/table/Table";
import Widget from "../../Components/widget/Widget";
import "./home.scss";

// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";


const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        
        <AdminNavbar/>
        <div className="widgets">
         <Widget type="user" />
         <Widget type="order" />
         <Widget type="earning" />
         <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
          
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Latestlist/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
