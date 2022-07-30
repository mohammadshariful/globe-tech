import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className="font-medium text-lg mx-8"
      style={{ color: match ? "#D7F561" : "#8FE5FF" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
