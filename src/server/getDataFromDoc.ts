const getDataFromDoc = ({ doc }) => {
  const data = doc.data();
  if (!data) {
    return [];
  }
  const result : any[] = [];
  Object.keys(data).forEach((key) => {
    result.push({ ...data[key] });
  });
  return result;
};

export default getDataFromDoc;
