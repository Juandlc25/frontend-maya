export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Name",
    Footer: "Name",
    accessor: "name",
    sticky: "left",
  },
  {
    Header: "Weight Imperial",
    Footer: "Weight Imperial",
    accessor: "weightimperial",
    sticky: "left",
  },
  {
    Header: "Weight Metric",
    Footer: "Weight Metric",
    accessor: "weightmetric",
    sticky: "left",
  },
  {
    Header: "Image",
    Footer: "Image",
    accessor: "image",
    Cell: ({ value }: { value: string }) => {
      return <img src={value} alt={`${value}-cat`} className="cat-image" />;
    },
  },
];
