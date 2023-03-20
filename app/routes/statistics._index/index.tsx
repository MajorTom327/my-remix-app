import React from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import StatBlockOne from "./StatBlockOne";

export const loader: LoaderFunction = async ({ request }) => {
  const getNumber = new Promise((resolve) =>
    setTimeout(() => resolve(42), 1000)
  );
  return defer({
    value: getNumber,
  });
};

export const StatisticsIndex = () => {
  const { value } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>General Stats</h1>
      <StatBlockOne value={value} />
    </div>
  );
};

export const action: ActionFunction = async ({ request }) => {
  return null;
};

export default StatisticsIndex;
