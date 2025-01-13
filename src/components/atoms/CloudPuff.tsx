const CloudPuff = ({
  cx,
  cy,
  r,
  fill,
  stroke,
}: {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  stroke?: { color: string; width: number };
}) => {
  return (
    <>
      {stroke && (
        <circle
          cx={`${cx}`}
          cy={`${cy}`}
          r={`${r + stroke.width}`}
          fill={stroke.color}
        />
      )}
      <circle cx={`${cx}`} cy={`${cy}`} r={`${r}`} fill={fill || "white"} />
    </>
  );
};

export { CloudPuff };
