import { useState } from "react";
import { Input } from "../../elements/Input/Input.tsx";
import { PriceTable } from "../../elements/PriceTable/PriceTable.tsx";
import { useFetch } from "../../hooks/UseFetch.tsx";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper.tsx";
import { Li } from "../../styles/Element.styled.ts";
import type { PriceValues } from "./History.types.ts";

export const HistoryModule = () => {
  const today = new Date();
  const area = "DK2";
  const [inputValue, setInputValue] = useState(
    today.toISOString().split("T")[0],
  );
  const url = `https://www.elprisenligenu.dk/api/v1/prices/${new Date(inputValue).getFullYear()}/${new Date(inputValue).getMonth() + 1}-${new Date(inputValue).getDate()}_${area}.json`;

  const { data, isLoading, error } = useFetch<PriceValues[]>(url);

  return (
    <ContentWrapper title="Historik" heading="Elprisen Historik">
      <Input
        type="date"
        inputValue={inputValue}
        setInputValue={setInputValue}
      ></Input>
      <h3>Elpriserne d. {inputValue}</h3>
      {data?.map((item) => (
        <PriceTable key={`${item.time_start}`}>
          <Li>
            <p>
              Kl.{" "}
              {new Date(item.time_start)
                .toLocaleTimeString("da-DK")
                .substring(0, 5)}
            </p>
            <p>{item.DKK_per_kWh}</p>
          </Li>
        </PriceTable>
      ))}
    </ContentWrapper>
  );
};
