
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

  if (pageCount <= 1) {
    return <></>;
  }

  return (
    <div className="pagination">
      <div className="pagination__numbers">
        <span className="pagination__number">
          <button className="pagination__number-link pagination__number-link_current"
            aria-label="Текущая страница">
            {currentPage}
          </button>
        </span>
        <span className="pagination__number">
          <button className="pagination__number-link" aria-label="Последняя страница" >
            {pageCount}
          </button>
        </span>
      </div>
      <div className="pagination__arrows">
        <button className="pagination__arrow" aria-label="Предыдущая страница" onClick={() => handlePrevBtnClick(currentPage)} disabled={currentPage === 1}>
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#arrow-left"></use>
          </svg>
        </button>
        <button className="pagination__arrow" aria-label="Следующая страница" onClick={() => handleNextBtnClick(currentPage)} disabled={currentPage === pageCount}>
          <svg className="slider-icon" height="12" width="26">
            <use xlinkHref="#main-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Pagination;
