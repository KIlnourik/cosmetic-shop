import { SyntheticEvent } from "react";
import { FilterType } from "../../../types/types";

type Props = {
  id: number,
  filterType: string,
  filterItemValue: string,
  filterItemTitle: string,
  filters: FilterType,
};


function CatalogFilterItem({
  id,
  filterType,
  filterItemValue,
  filterItemTitle,
  filters
}: Props): JSX.Element {

  const getCheckedStatus = (filterValue: string, filters: FilterType): boolean | undefined => {
    Object.entries(filters.items).map(([, value]) => {
      if (filterValue === value) {
        return true;
      }
    });
    return undefined;
  }

  const handleChangeInput = (evt: SyntheticEvent) => {
    const {value} = evt.target as HTMLInputElement;
    if (value) {
      console.log(value)
    }
  };


  return (
    <li className="filter__item">
      <input className="visually-hidden" type="checkbox" id={`filter-${filterType}-${id}`} name={filterType} value={filterItemValue}
        checked={getCheckedStatus(filterItemValue, filters)}
        onChange={handleChangeInput}
      />
      <label className="filter__checkbox-label" htmlFor={`filter-${filterType}-${id}`}>{filterItemTitle}</label>
    </li>
  );
}

export default CatalogFilterItem;
