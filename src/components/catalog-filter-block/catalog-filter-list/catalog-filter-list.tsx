
function CatalogFilterList(): JSX.Element {
  return (
    <ul className="filter__list accordion__inner">
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-0" name="face-care" value="cream" defaultChecked />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-0">Крема</label>
      </li>
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-1" name="face-care" value="serum" defaultChecked />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-1">Сыворотки</label>
      </li>
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-2" name="face-care" value="mask" defaultChecked />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-2">Маски</label>
      </li>
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-3" name="face-care" value="foam" />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-3">Пенки</label>
      </li>
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-4" name="face-care" value="tonic" />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-4">Тоники</label>
      </li>
      <li className="filter__item">
        <input className="visually-hidden" type="checkbox" id="filter-face-care-5" name="face-care" value="powder" defaultChecked />
        <label className="filter__checkbox-label" htmlFor="filter-face-care-5">Пудры</label>
      </li>
    </ul>
  );
}

export default CatalogFilterList;
