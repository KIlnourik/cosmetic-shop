
type Props = {
  page: number,
  pageCount: number,
  handleNextBtnClick(currentPage: number): void,
  handlePrevBtnClick(currentPage: number): void
}

function Pagination({
  page,
  pageCount,
  handleNextBtnClick,
  handlePrevBtnClick
}: Props): JSX.Element {

  const currentPage = page;

  return (
    <div className="pagination">
      <div className="pagination__numbers">
        <span className="pagination__number">
          <a className="pagination__number-link pagination__number-link_current" href="#"
            aria-label="Первая страница">
            {currentPage}
          </a>
        </span>
        <span className="pagination__number">
          <a className="pagination__number-link" href="#" aria-label="Восьмая страница (последняя)">
            {pageCount}
          </a>
        </span>
      </div>
      <div className="pagination__arrows">
        <a className="pagination__arrow" href="#" aria-label="Предыдущая страница" onClick={() => handlePrevBtnClick(currentPage)}>
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </a>
        <a className="pagination__arrow" href="#" aria-label="Следующая страница" onClick={() => handleNextBtnClick(currentPage)}>
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#main-arrow"></use>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Pagination;
