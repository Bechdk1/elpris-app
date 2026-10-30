import type { InputProps } from "./Input.types";

export const Input = ({ type, inputValue, setInputValue }: InputProps) => {
  let MaxDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <input
        type={type}
        value={inputValue}
        min={"2021-11-01"}
        max={MaxDate}
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
    </>
  );
};
