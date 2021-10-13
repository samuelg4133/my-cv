import React from "react";

import "./styles.css";

type TopicItemProps = {
  date?: string;
  title: string;
  subtitle: React.ReactNode;
  list: string[];
};

const TopicItem: React.FC<TopicItemProps> = ({
  date,
  subtitle,
  title,
  list,
}) => {
  return (
    <section className="card">
      <header>
        <small>{date}</small>
        <div>
          <span>{title}</span>
          <small>{subtitle}</small>
        </div>
      </header>
      <ul>
        {list.map((item) => {
          return (
            <li key={item}>
              <small>{item}</small>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TopicItem;
