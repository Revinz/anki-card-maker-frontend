import React from "react";
import "./section.css";

type SectionProps = {
  title: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
};

export const Section = (props: SectionProps) => {
  return (
    <div className="section">
      <div className="section-content">
        <label className="section-header">{props.title}</label>
        {props.description ? (
          <label className="section-description">{props.description}</label>
        ) : null}
        {props.children}
      </div>
    </div>
  );
};
