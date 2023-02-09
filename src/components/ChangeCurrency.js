import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Dropdown from "react-bootstrap/Dropdown";

const ChangeCurrency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const setCurrency = (newCurrency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
  };

  const currencyName = [
    {
      label: "Dollar",
      value: "$",
    },
    {
      label: "Pound",
      value: "£",
    },
    {
      label: "Euro",
      value: "€",
    },
    {
      label: "Ruppee",
      value: "₹",
    },
  ];

  const mapCurrency = currencyName.map((curr) => {
    return curr.value === currency ? curr.label : "";
  });

  const dropdownStyle = {
    backgroundColor: "#93E498",
    border: "1px solid gray",
  };

  const menuStyle = {
    background: "#93E498",
    border: "1px solid #3C783C",
    color: "black",
  };

  return (
    <Dropdown onSelect={(eventKey) => setCurrency(eventKey)}>
      <Dropdown.Toggle variant="success" style={dropdownStyle}>
        Currency ({currency} {mapCurrency})
      </Dropdown.Toggle>

      <Dropdown.Menu style={menuStyle}>
        <Dropdown.Item href="#" eventKey="$">
          $ Dollar
        </Dropdown.Item>
        <Dropdown.Item href="#" eventKey="£">
          £ Pound
        </Dropdown.Item>
        <Dropdown.Item href="#" eventKey="€">
          € Euro
        </Dropdown.Item>
        <Dropdown.Item href="#" eventKey="₹">
          ₹ Ruppee
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ChangeCurrency;