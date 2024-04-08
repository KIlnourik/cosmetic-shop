type Props = {
  id: number,
  filterType: string,
  filterItemValue: string,
  filterItemTitle: string
};

function CatalogFilterItem({id, filterType, filterItemValue, filterItemTitle}: Props): JSX.Element {
  return (
    <li className="filter__item">
      <input className="visually-hidden" type="checkbox" id={`filter-${filterType}-${id}`} name={filterType} value={filterItemValue} defaultChecked />
      <label className="filter__checkbox-label" htmlFor={`filter-${filterType}-${id}`}>{filterItemTitle}</label>
    </li>
  );
}

export default CatalogFilterItem;
