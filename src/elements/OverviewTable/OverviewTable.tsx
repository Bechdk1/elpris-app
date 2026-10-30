import { OverviewTableStyled } from "./OverviewTable.styled";
import type { OverviewProps } from "./OverviewTable.types";

export const OverviewTable = ({ children }: OverviewProps) => {
  return <OverviewTableStyled>{children}</OverviewTableStyled>;
};
