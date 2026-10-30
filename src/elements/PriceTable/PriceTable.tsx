import { PriceTableStyled } from "./PriceTable.styled";
import type { TableProps } from "./PriceTable.types";

export const PriceTable = ({ children }: TableProps) => {
  return <PriceTableStyled>{children}</PriceTableStyled>;
};
