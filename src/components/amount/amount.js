const Amount = obj =>
  Object.values(obj).reduce((acc, dishAmount) => acc + dishAmount, 0);

export default Amount;
