const addRow = (data: any[], setData: (updatedData: any[]) => void) => {
  const newRow = {
    id: data.length + 1,
    title: 'cart',
    year: '2023',
    model: 'New Model',
    section: 'New Section',
  };
  
  setData([...data, newRow]);
}

export default addRow;
