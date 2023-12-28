import SideBar from "./component/SideBar";
import "./component/Style.css";
import TabelDashboard from "./tabelTransaksi/TabelDashboard";
import TabelUser from "./tabelUser/TabelUser";

function DashboardAdmin() {
  return (
    <>
      <SideBar />
      <TabelDashboard />
      <TabelUser/>
    </>
  );
}

export default DashboardAdmin;
