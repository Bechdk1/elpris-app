import { OverviewTable } from "../../elements/OverviewTable/OverviewTable";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper";
import { Li } from "../../styles/Element.styled";
import { useFetch } from "../../hooks/UseFetch";
import type { OverviewProps } from "../../elements/OverviewTable/OverviewTable.types";
import { useState } from "react";

export const OverviewModule = () => {
  const today = new Date();
  const area = "DK2";
  const [inputValue] = useState(today.toISOString().split("T")[0]);
  const url = `https://www.elprisenligenu.dk/api/v1/prices/${new Date(inputValue).getFullYear()}/${new Date(inputValue).getMonth() + 1}-${new Date(inputValue).getDate()}_${area}.json`;

  const { data, error } = useFetch<OverviewProps[]>(url);

  return (
    <>
      <ContentWrapper title="Oversigt" heading="Elprisen Oversigt">
        <h3>Elpriserne d. {inputValue}</h3>
        {data?.map((item) => (
          <OverviewTable key={`${item.time_start}`}>
            <Li>
              <p>
                Kl.{" "}
                {new Date(item.time_start)
                  .toLocaleTimeString("da-DK")
                  .substring(0, 5)}
              </p>
              <p>{item.DKK_per_kWh}</p>
            </Li>
          </OverviewTable>
        ))}
      </ContentWrapper>
    </>
  );
};
