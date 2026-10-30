import { ContentWrapperStyled } from "./ContentWrapper.styled";
import type { ContentWrapperProps } from "./ContentWrapper.types";

const SITE_NAME = "elprisen.nu";

export const ContentWrapper = ({
  title,
  children,
  heading,
}: ContentWrapperProps) => {
  return (
    <>
      <title>{`${SITE_NAME} | ${title} `}</title>
      <ContentWrapperStyled>
        <h2>{heading}</h2>
        {children}
      </ContentWrapperStyled>
    </>
  );
};
