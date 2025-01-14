import { useContext } from "react";

import { MainStoreContext } from "../context/MainStoreContext";
import { CardDataType } from "../pages/demo";
import ActionStoreCard from "./ActionStoreCard";
import WarbondStoreCard from "./WarbondStoreCard";

export function MainStore() {
  return (
    <div className="grid grid-cols-10 mb-5">
      <div className="col-span-12">
        <div className="grid grid-cols-10 ">
          <WarbondStore />
          <ActionStore />
        </div>
      </div>
    </div>
  );
}

function WarbondStore() {
  const warbondStoreContext = useContext(MainStoreContext);
  if (!warbondStoreContext) return null;
  const { warbondStore } = warbondStoreContext;
  return (
    <div className="col-span-2 grid grid-cols-2 bg-white border gap-2.5">
      <h2 className="col-span-full">Warbond Store</h2>
      {warbondStore.map((data: CardDataType) => (
        <WarbondStoreCard key={"sideStore-" + data.card.name} data={data} />
      ))}
    </div>
  );
}

function ActionStore() {
  const mainStoreContext = useContext(MainStoreContext);
  if (!mainStoreContext) return null;
  const { actionStore } = mainStoreContext;
  return (
    <div className="col-span-8 grid grid-cols-9 gap-2.5 bg-white border">
      <h2 className="col-span-full">Action Store</h2>
      {actionStore.map((data: CardDataType) => (
        <ActionStoreCard key={"store-" + data.card.name} data={data} />
      ))}
    </div>
  );
}
