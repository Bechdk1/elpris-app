import { PriceCircleStyled } from "./PriceCircle.styled";
import type { CircleProps } from "./PriceCircle.types";

export const PriceCircle = ({ children }: CircleProps) => {
  return <PriceCircleStyled>{children}</PriceCircleStyled>;
};
