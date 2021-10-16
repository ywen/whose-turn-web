interface Params {
  name: string;
};

const getLabel = ({ name }: Params) => {
  const label = name.replace(/([A-Z])/g, ' $1');
  return label.replace(/^./, label[0].toUpperCase());
};

export default getLabel;
