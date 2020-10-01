const deleteIncome = (state, id) =>
  state.income.filter((item) => item.incomeId !== id);

const deleteCosts = (state, id) =>
  state.costs.filter((item) => item.costsId !== id);

const deleteProducts = (state, id) =>
  state.products.filter((item) => item._id !== id);

export const categoriesSelector = (state) => state.operations.categories;

export default {
  deleteIncome,
  deleteCosts,
  deleteProducts,
  categoriesSelector,
};
