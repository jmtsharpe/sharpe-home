const CloudPuff = ({
  cx,
  cy,
  r,
  fill,
  lining,
}: {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  lining?: { color: string; width: number };
}) => {
  return (
    <>
      {lining && (
        <circle
          cx={`${cx}`}
          cy={`${cy}`}
          r={`${r + lining.width}`}
          fill={lining.color}
        />
      )}
      <circle cx={`${cx}`} cy={`${cy}`} r={`${r}`} fill={fill || "white"} />
    </>
  );
};

export { CloudPuff };
