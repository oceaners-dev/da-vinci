import domTestingLib, { queryHelpers } from '@testing-library/dom';

export const queryByDataName = queryHelpers.queryByAttribute.bind(
  null,
  'data-name',
);
export const queryAllByDataName = queryHelpers.queryAllByAttribute.bind(
  null,
  'data-name',
);

export function getAllByDataName(
  container: HTMLElement,
  id: string,
  ...rest: undefined[]
) {
  const els = queryAllByDataName(container, id, ...rest);
  if (!els.length) {
    throw queryHelpers.getElementError(
      `Unable to find an element by: [data-name="${id}"]`,
      container,
    );
  }
  return els;
}

export function getByDataName(container: any, id: any, ...rest: any[]) {
  // result >= 1
  const result = getAllByDataName(container, id, ...rest);
  if (result.length > 1) {
    throw queryHelpers.getElementError(
      `Found multiple elements with the [data-name="${id}"]`,
      container,
    );
  }
  return result[0];
}

// re-export with overrides
module.exports = {
  ...domTestingLib,
  getByDataName,
  getAllByDataName,
  queryByDataName,
  queryAllByDataName,
};
