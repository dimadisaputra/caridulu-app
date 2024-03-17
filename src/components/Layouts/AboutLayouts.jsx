"use client";

import { Accordion } from "flowbite-react";

const AboutLayouts = () => {
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Apa itu Caridulu?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Caridulu adalah website pencari, yang mencari produk dari berbagai
            marketplace di Indonesia.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Apa tujuan dari Caridulu?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Tujuan Caridulu adalah untuk membantu para pembeli yang hendak
            membeli produk secara online untuk dapat membandingkan produk tiap
            marketplace yang berbeda.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Marketplace apa saja yang dapat di cari melalui Caridulu?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Untuk sekarang terdapat tiga marketplace yang dapat di cari melalui
            Caridulu, yaitu: Shopee Indonesia, Tokopedia dan Lazada Indonesia.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default AboutLayouts;
