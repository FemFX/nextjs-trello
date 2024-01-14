"use client";

import { Card } from "@prisma/client";

interface CardItemProps {
  data: Card;
  index: number;
}

const CardItem = ({ data, index }: CardItemProps) => {
  return (
    <div
      role="button"
      className="truncate py-2 px-3 text-sm bg-white rounded-md shadow-sm border-2 border-transparent hover:border-black"
    >
      {data.title}
    </div>
  );
};

export default CardItem;
