
function Pagination(): JSX.Element {
  return (
    <div className="pagination">
      <div className="pagination__numbers">
        <span className="pagination__number">
          <a className="pagination__number-link pagination__number-link_current" href="#"
            aria-label="Первая страница">
            1
          </a>
        </span>
        <span className="pagination__number">
          <a className="pagination__number-link" href="#" aria-label="Восьмая страница (последняя)">
            8
          </a>
        </span>
      </div>
      <div className="pagination__arrows">
        <a className="pagination__arrow" href="#" aria-label="Предыдущая страница">
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </a>
        <a className="pagination__arrow" href="#" aria-label="Следующая страница">
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#main-arrow"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
