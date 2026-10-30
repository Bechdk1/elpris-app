import { PriceCircle } from "../../elements/PriceCircle/PriceCircle.tsx";
import { useFetch } from "../../hooks/UseFetch.tsx";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper.tsx";
import { timeFormatting } from "../../utils/TimeFormatter.tsx";
import type { PriceItems } from "./Now.types.ts";

export const NowModule = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const area = "DK2";

  const url = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${area}.json`;

  const { data, isLoading, error } = useFetch<PriceItems[]>(url);

  const currentTime =
    data &&
    data.find(
      (item) =>
        new Date(item.time_start) < today && new Date(item.time_end) > today,
    );

  const { startTime, endTime } = timeFormatting(currentTime);

  console.log(startTime, endTime);

  console.log(currentTime);
  return (
    <ContentWrapper title="Lige nu" heading="Elprisen lige nu">
      <PriceCircle>
        {currentTime?.DKK_per_kWh}
        <span>kr./kWh</span>
      </PriceCircle>
      {startTime}
      <span> - </span>
      {endTime}
    </ContentWrapper>
  );
};
