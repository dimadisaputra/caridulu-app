"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const ConfirmModal = (props) => {
  const { openModal, setOpenModal, desc, trueAction } = props;

  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {desc}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => trueAction()}>
                {"Iya, yakin"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Gak jadi
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ConfirmModal };
