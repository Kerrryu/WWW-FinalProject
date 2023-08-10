import { useProducts } from 'contexts/products-context';

import * as S from './style';

export const availableFilters = ['Potion', 'Body', 'Face', 'Scrub', 'Bundle'];

const Filter = () => {
  const { filters, filterProducts } = useProducts();

  const selectedCheckboxes = new Set(filters);

  const toggleCheckbox = (label: string) => {
    if (selectedCheckboxes.has(label)) {
      selectedCheckboxes.delete(label);
    } else {
      selectedCheckboxes.add(label);
    }

    const filters = Array.from(selectedCheckboxes) as [];

    filterProducts(filters);
  };

  const createFilter = (label: string) => (
    <S.Checkbox label={label} handleOnChange={toggleCheckbox} key={label} />
  );

  const createFilters = () => availableFilters.map(createFilter);

  return (
    <S.Container>
      <S.Title>Options:</S.Title>
      {createFilters()}
    </S.Container>
  );
};

export default Filter;
