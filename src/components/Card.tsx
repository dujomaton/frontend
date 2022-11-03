import { MouseEventHandler } from "react";
import Image from 'next/image'
import { CardDataType } from "../../pages/demo";

type CardProps = {
  data: CardDataType;
  handleClick: MouseEventHandler;
};
export default function Card({ data, handleClick }: CardProps): JSX.Element {
  // @ts-ignore
  return (
    <div
      onClick={handleClick}
      style={{ aspectRatio: 1 / 1 }}
      className="bg-red-200 hover:bg-red-300 card grid grid-cols-2"
    >
      <div>{data.card.name}</div>
      <Image
          src={data.card.image}
          alt="Picture of the author"
          width={500}
          height={500}
      />
      <div>
        <div
          className="ml-auto bg-yellow-500 rounded-full text-center"
          style={{ width: "25px", height: "25px" }}
        >
          {data.card.cost}
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div
          className="bg-red-500 rounded-full text-center mt-auto flex width"
          style={{ width: "25px", height: "25px" }}
        >
          {data.count}
        </div>
      </div>
      <div></div>
    </div>
  );
}
