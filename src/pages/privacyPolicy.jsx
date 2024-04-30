import NavBar from "../components/Fragments/NavBar";
import { Accordion } from "flowbite-react";

const PrivacyPolicy = () => {
  return (
    <>
      <NavBar />
      <div className="p-4 md:p-8">
        <p className="text-xl text-center font-semibold text-gray-700 py-8">
          Pemberitahuan Privasi untuk Caridulu
        </p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Pengantar</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Selamat datang di Caridulu. Kebijakan Privasi ini bertujuan
                untuk menjelaskan bagaimana kami mengumpulkan, menggunakan,
                mengelola, dan melindungi informasi pribadi pengguna.
                Menggunakan Caridulu berarti Anda setuju dengan pengumpulan dan
                penggunaan informasi sesuai dengan kebijakan ini.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Informasi yang Kami Kumpulkan</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Kami mengumpulkan informasi pribadi berikut dari pengguna:
              </p>

              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  Nama - untuk personalisasi pengalaman Anda di platform kami.
                </li>
                <li>
                  Alamat Email - untuk komunikasi terkait layanan dan penawaran
                  khusus.
                </li>
                <li>
                  Riwayat Pencarian - untuk memperbaiki dan menyempurnakan hasil
                  pencarian produk.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Cara Penggunaan Informasi</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Informasi yang dikumpulkan digunakan untuk:
              </p>

              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  Meningkatkan layanan dan personalisasi pengalaman pengguna.
                </li>
                <li>
                  Komunikasi mengenai pembaruan layanan dan penawaran khusus.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Pembagian Informasi</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Kami tidak menjual atau menyewakan informasi Anda kepada pihak
                ketiga. Informasi dapat dibagikan dengan:
              </p>

              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  Penyedia layanan yang memerlukan akses ke informasi tersebut
                  untuk melaksanakan tugas mereka.
                </li>
                <li>
                  Otoritas hukum, jika diperlukan dan sesuai dengan hukum yang
                  berlaku.
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Keamanan Data</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Kami mengambil langkah-langkah keamanan yang wajar untuk
                melindungi data Anda dari akses tidak sah dan pengungkapan.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Hak Pengguna</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Anda memiliki hak untuk mengakses, mengoreksi, atau menghapus
                informasi pribadi Anda kapan saja. Silakan hubungi kami untuk
                melakukan perubahan ini.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Kontak Kami</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Jika Anda memiliki pertanyaan atau kekhawatiran mengenai
                kebijakan privasi ini, silakan hubungi kami di:{" "}
                <a href="mailto:app.caridulu@gmail.com" className="font-bold">
                  app.caridulu@gmail.com
                </a>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
};

export default PrivacyPolicy;
