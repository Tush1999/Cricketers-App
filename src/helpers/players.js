import { NAME_SORT_TYPE, AGE_SORT_TYPE, RANK_SORT_TYPE } from "../constants";

export const getFilterTypes = (list) =>
  list.reduce((filters, { type }) => {
    if (!(type in filters) && type) {
      filters[type] = false;
    }
    return filters;
  }, {});

export const getSortedProducts = (list = [], activeSort) => {
  switch (activeSort) {
    case NAME_SORT_TYPE:
      return list.sort((a, b) => a.name.localeCompare(b.name));
    case RANK_SORT_TYPE:
      return list.sort((a, b) => a.rank - b.rank);
    case AGE_SORT_TYPE:
      return list.sort((a, b) => a.dob - b.dob);
    default:
      return list;
  }
};
