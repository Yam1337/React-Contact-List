import React, { useState, useEffect } from "react";
import { useGlobalInput } from "../search/Search";
import "./Contacts.css";

function Contacts() {
  const [inputValue] = useGlobalInput("inputValue");
  const [contacts, setContacts] = useState([]);
  const [box] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch(
      "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
    );
    setContacts(await data.json());
    if (data.status === 200) {
      console.log("API OK");
    } else {
      console.log("API ERR");
    }
  };

  //   SORT BY LAST_NAME
  contacts.sort((a, b) =>
    a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
  );
  // SORT BY LAST_NAME

  const addCheck = (id) => {
    setCheck(!check);
    const found = box.some((item) => item === id);
    if (found === true) {
      if (box.indexOf(id) > -1) {
        box.splice(box.indexOf(id), 1);
      }
    } else {
      box.push(id);
    }
    console.log(box);
  };

  const checkCheck = (id) => {
    const found = box.some((item) => item === id);
    if (found === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="contactList">
      {contacts
        .filter((y) => {
          if (inputValue === "") {
            return y;
          } else {
            return (
              y.first_name.toLowerCase().includes(inputValue.toLowerCase()) ||
              y.last_name.toLowerCase().includes(inputValue.toLowerCase()) ||
              y.email.toLowerCase().includes(inputValue.toLowerCase())
            );
          }
        })
        .map((x) => {
          if (x.avatar === null) {
            return (
              <div
                className="contact"
                onClick={() => {
                  addCheck(x.id);
                }}
              >
                <div className="myContact">
                  <div className="initials">
                    {x.first_name.charAt(0) + x.last_name.charAt(0)}
                  </div>
                  <div>
                    <div className="name">
                      {x.first_name + " " + x.last_name}
                    </div>
                    <div>{x.email}</div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" checked={checkCheck(x.id)} readOnly />
                </div>
              </div>
            );
          } else {
            return (
              <div
                className="contact"
                onClick={() => {
                  addCheck(x.id);
                }}
              >
                <div className="myContact">
                  <img alt="" src={x.avatar} />
                  <div>
                    <div className="name">
                      {x.first_name + " " + x.last_name}
                    </div>
                    <div>{x.email}</div>
                  </div>
                </div>
                <div>
                  <input type="checkbox" checked={checkCheck(x.id)} readOnly />
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Contacts;
