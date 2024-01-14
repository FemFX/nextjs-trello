import { FC, PropsWithChildren } from "react";

const ListWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
};

export default ListWrapper;
