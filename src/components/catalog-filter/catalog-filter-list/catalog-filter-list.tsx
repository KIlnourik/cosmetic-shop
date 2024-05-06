import { FilterType } from '../../../types/types';
import CatalogFilterItem from '../catalog-filter-item/catalog-filter-item';

type Props = {
  filter: FilterType;
}

function CatalogFilterList({ filter }: Props): JSX.Element {
  const filterType = filter.name;
  const filterItems = filter.items;

  return (
    <ul className="filter__list accordion__inner">
      {Object.entries(filterItems).map(([key, value], index) => (
        <CatalogFilterItem key={`${filterType}${index}`}
          filterType={filterType}
          id={index}
          filterItemValue={key}
          filterItemTitle={value}
          filters={filter}/>
      ))}
    </ul>
  );
}

export default CatalogFilterList;
