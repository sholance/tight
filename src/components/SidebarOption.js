import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title }) {
  return (
    <div className="SidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
    </div>
  );
}

export default SidebarOption;
