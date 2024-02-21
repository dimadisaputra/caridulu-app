"use client";

import { Dropdown } from "flowbite-react";

const Dropdown = (props) => {
  return (
    <Dropdown label="Relevansi" dismissOnClick={false}>
      <Dropdown.Item>Relavansi</Dropdown.Item>
      <Dropdown.Item>Rating</Dropdown.Item>
      <Dropdown.Item>Terlaris</Dropdown.Item>
      <Dropdown.Item>Harga Tertinggi</Dropdown.Item>
      <Dropdown.Item>Harga Terendah</Dropdown.Item>
    </Dropdown>
  );
};

export default Dropdown;
