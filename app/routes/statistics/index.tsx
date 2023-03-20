import React from "react";
import { Outlet } from "@remix-run/react";

export const Statistics = () => {
  return (
    <div>
      <h1>Home of statistics</h1>
      <Outlet />
    </div>
  );
};

export default Statistics;
