"use client";

import { Footer } from "flowbite-react";

const FooterFrag = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <Footer.Divider />
        <Footer.Copyright href="#" by="Caridulu™" year={2024} />
      </div>
    </Footer>
  );
};

export default FooterFrag;
