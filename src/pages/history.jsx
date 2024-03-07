import { useState, useEffect } from "react";
import NavBar from "../components/Fragments/NavBar";
import { Button } from "flowbite-react";
import { deleteHistory, getHistory } from "../services/history.service";
import moment from "moment/moment";
import "moment/locale/id";
import { ConfirmModal } from "../components/Fragments/ConfirmModal";

const HistoryPage = () => {
  const [histories, setHistories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    getHistory(token, (status, res) => {
      if (status) {
        setHistories(res.data);
      } else {
        console.log(res);
      }
    });
  }, []);

  const handleDeleteHistory = () => {
    deleteHistory(token, (status, res) => {
      if (status) {
        console.log(res);
      } else {
        console.log(res);
      }
    });
  };
  return (
    <>
      <NavBar />
      <ConfirmModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        desc="Apa kamu yakin menghapus semua Riwayat?"
        trueAction={handleDeleteHistory}
      />
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-4xl">
          <div className="flex justify-end max-w-4xl">
            <Button
              size={"sm"}
              color="failure"
              onClick={() => setOpenModal(true)}
            >
              Hapus Riwayat
            </Button>
          </div>
          <div className="mt-2">
            {histories.length > 0 &&
              histories.map((history) => (
                <div
                  className="flex justify-between border-b p-2"
                  key={history.search_id}
                >
                  <p>{history.keyword}</p>
                  <p>
                    {moment(history.search_date)
                      .locale("id")
                      .format("D MMMM YYYY")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
