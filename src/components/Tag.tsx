import * as React from "react";
import { Link } from "react-router-dom";

export const Tag: React.FC = ({ children }) => {
  return (
    <Link to="" className="tag-pill tag-default">
      {children}
    </Link>
  );
};