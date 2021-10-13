import React from "react";

import "./styles.css";

type Props = {
  title: string;
  content: string;
  subtitle?: string;
};

const SidebarItemTopic: React.FC<Props> = ({
  children,
  content,
  subtitle,
  title,
}) => {
  return (
    <div className="item-topic">
      {children}
      <div className="topic-details">
        <h5>{title}</h5>
        <span>{subtitle}</span>
        <small>{content}</small>
      </div>
    </div>
  );
};

export default SidebarItemTopic;
