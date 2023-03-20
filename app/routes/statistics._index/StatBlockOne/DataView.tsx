import React from "react";

type Props = {
  value: number;
};

export const DataView: React.FC<Props> = ({ value }) => {
  return <>{value}</>;
};

DataView.defaultProps = {};

export default DataView;
