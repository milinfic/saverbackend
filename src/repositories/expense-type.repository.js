const expensiveTypes = [];

exports.read = async (data) => {  
  return expensiveTypes;
};

exports.create = async (data) => {
  expensiveTypes.push(data);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(expensiveTypes);
    }, 5000);
  });
};

exports.update = async (data) => {
  console.log('update service...');
  
  return data;
};

exports.delete = async (data) => {
  console.log('delete service...');
  
  return data;
};
