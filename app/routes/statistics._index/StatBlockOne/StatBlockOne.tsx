import { Await } from "@remix-run/react";
import React, { Suspense } from "react";
import FallbackStat from "./FallbackStat";
import DataView from "./DataView";

type Props = {
  value: Promise<number>;
};

export const StatBlockOne: React.FC<Props> = ({ value }) => {
  return (
    <>
      <Suspense fallback={<FallbackStat />}>
        <Await resolve={value}>
          {(value: number) => <DataView value={value} />}
        </Await>
      </Suspense>
    </>
  );
};

StatBlockOne.defaultProps = {};

export default StatBlockOne;
