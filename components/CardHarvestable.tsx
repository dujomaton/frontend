import Image from "next/image";
import React, { useContext } from "react";
import { MouseEventHandler } from "react";

import { ModalContext } from "../context/ModalContext";
import { CardDataType } from "../pages/demo";
import CardModal from "./CardModal";

type CardHarvestableProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
  isHarvestable: boolean;
};
export default function CardHarvestable({
  data,
  handleClick,
  isHarvestable,
}: CardHarvestableProps): JSX.Element {
  const { modalVisible, setModalVisible, modalCard, setModalCard } =
    useContext(ModalContext);

  function handleRightClick(e: any) {
    e.preventDefault();
    setModalCard(data.card);
    setModalVisible(true);
  }

  return (
    <div
      onClick={handleClick}
      onContextMenu={handleRightClick}
      className="cursor-pointer"
    >
      <Image
        src={`${data.card.cardImage}`}
        alt=""
        width={350}
        height={700}
        className={`${isHarvestable ? "rotate-90" : ""}`}
      />
      <div
        className="top-0 bg-red-500 rounded-full text-center ml-auto "
        style={{ width: "25px", height: "25px" }}
      >
        {data.count == Infinity ? "∞" : data.count}
      </div>
    </div>
  );
}
