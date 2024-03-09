import { useState, useEffect } from "react";
import NavBar from "../components/Fragments/NavBar";
import { Button } from "flowbite-react";
import { deleteHistory, getHistory } from "../services/history.service";
import moment from "moment/moment";
import "moment/locale/id";
import { ConfirmModal } from "../components/Fragments/ConfirmModal";
import { useLogin } from "../hooks/useLogin";

const HistoryPage = () => {
  const [histories, setHistories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { fullName, email } = useLogin();

  useEffect(() => {
    if (fullName) {
      getHistory((status, res) => {
        if (status) {
          setHistories(res.data);
        } else {
          console.log(res);
        }
      });
    }
  }, [fullName]);

  const handleDeleteHistory = () => {
    deleteHistory((status, res) => {
      if (status) {
        setOpenModal(false);
        setHistories([])
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
          {histories.length > 0 && (
            <>
              <div className="flex justify-end max-w-4xl">
                <Button
                  size={"sm"}
                  color="failure"
                  onClick={() => setOpenModal(true)}
                >
                  Hapus Riwayat
                </Button>
              </div>
              <div className="mt-4">
                {histories.map((history) => (
                  <div
                    className="flex justify-between border-b p-2"
                    key={history.search_id}
                  >
                    <p>
                      {moment(history.search_date)
                        .locale("id")
                        .format("HH.mm - D MMMM YYYY")}
                    </p>
                    <p>{history.keyword}</p>
                  </div>
                ))}
              </div>
            </>
          )}
          {histories.length == 0 && <p>Belum ada Riwayat Pencarian</p>}
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
