import Footerr from "../../components/footer/Footerr"
import Akun from "../../pages/akun/Akun"
import ChangePass from "../../pages/akun/ChangePass"
import History from "../../pages/akun/History"


function User() {
  return (
    <>
    <Akun/>
    <History/>
    <ChangePass/>
    <Footerr/>
    </>
  )
}

export default User