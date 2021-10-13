import React from "react";

import "./styles.css";

type SidebarItemProps = {
  title: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ title, children }) => {
  return (
    <div className="sidebar-item">
      <h3>{title}</h3>
      <hr />
      {children}
    </div>
  );
};

export default SidebarItem;
