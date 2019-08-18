export const arrayToMap = array =>
  array.reduce(
    (map, item) => ({
      ...map,
      [item.id]: item,
    }),
    {}
  )
