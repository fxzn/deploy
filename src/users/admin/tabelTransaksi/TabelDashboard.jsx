import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardInfo from "../component/CardInfo";
import NavAdmin from "../component/NavAdmin";
import "../component/Style.css";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function TabelDashboard() {
  const [transaksi, setTransaksi] = useState();

  useEffect(() => {
    async function getTranskasiAll() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/order/getAllOrderTransactions`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setTransaksi(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getTranskasiAll();
  }, []);

  return (
    <>
      <div className="content">
        <NavAdmin />
        <CardInfo />
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Status Pembayaran Course</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <button type="button" className="btn btn-tambahclass mb-3">
                    Filter
                    <FontAwesomeIcon icon={faFilter} className="ms-2" />
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tanggal Bayar</th>
                        <th scope="col">Payment Method</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {transaksi && transaksi.length > 0 ? (
                        transaksi.map((data, index) =>
                          data.orderResponses.map((order, orderIndex) => (
                            <tr key={orderIndex}>
                              {orderIndex === 0 && <td rowSpan={data.orderResponses.length}>{data.id}</td>}
                              <td>{order.time}</td>
                              <td>{order.paymentMethod}</td>
                              <td>{order.completed ? "Completed" : "Pending"}</td>
                            </tr>
                          ))
                        )
                      ) : (
                        <tr>
                          <td colSpan="4">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TabelDashboard;
