import React from "react";
import { createGlobalState } from "react-hooks-global-state";
import "./Search.css";
import Loupe from "../../images/loupe.svg";

const initialState = { inputValue: "" };
const { useGlobalState } = createGlobalState(initialState);

function Search() {
  const [inputValue, setInputValue] = useGlobalState("inputValue");

  let changeFunction = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input">
      <div>
        <img src={Loupe} alt="" />
      </div>
      <div>
        <input
          type="text"
          onChange={changeFunction}
          value={inputValue}
          placeholder="Search Contacts"
        />
      </div>
    </div>
  );
}

export default Search;
export const useGlobalInput = useGlobalState;
