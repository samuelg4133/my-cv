import React from "react";

import "./styles.css";

type TopicProps = {
  icon?: React.ReactNode;
  title: string;
};

const Topic: React.FC<TopicProps> = ({ icon, title, children }) => {
  return (
    <article className="container-article">
      <header className="article-header">
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
        <hr />
      </header>
      {children}
    </article>
  );
};

export default Topic;
