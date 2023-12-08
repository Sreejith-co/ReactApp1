import React from "react";
import ListItem from "./Listitem";
import Tools from "../components/Tools";

const arr = [
  {
    title: "Doc Appointment",
    descr: "The patient is rescheduled to November",
    isActive: false,
  },
  {
    title: "Doc Appointment",
    descr: "The patient is rescheduled to December",
    isActive: true,
  },
  {
    title: "Doc Appointment",
    descr: "The patient is rescheduled to January",
    isActive: false,
  },
];

class List extends React.Component {
  render() {
    return (
      <Tools>
        <div className="app-list">
          {arr.map((obj) => (
            <ListItem
              key={obj.title}
              title={obj.title}
              descr={obj.descr}
              isActive={obj.isActive}
            />
          ))}
        </div>
      </Tools>
    );
  }
}

export default List;
