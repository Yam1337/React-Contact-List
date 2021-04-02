import React from "react";
import "./App.css";
// IMPORT COMPONENTS //
import Nav from "./components/nav/Nav";
import Search from "./components/search/Search";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div>
      <Nav />
      <Search />
      <Contacts />
    </div>
  );
}

export default App;
