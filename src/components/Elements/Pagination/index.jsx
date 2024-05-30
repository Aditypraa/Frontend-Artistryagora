import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { pages, handlePageClick, page = 1 } = props;
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={
        <span
          role="button"
          className="block px-3 py-2 border border-gray-300 bg-white text-gray-700"
        >
          ...
        </span>
      }
      breakClassName={"inline-block"}
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={"flex justify-center space-x-1 mt-4"}
      pageClassName={"inline-block"}
      pageLinkClassName={
        "block px-3 py-2 border border-gray-300 bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700"
      }
      nextClassName={"inline-block"}
      nextLinkClassName={
        "block px-3 py-2 border border-gray-300 bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700"
      }
      previousClassName={"inline-block"}
      previousLinkClassName={
        "block px-3 py-2 border border-gray-300 bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700"
      }
      activeClassName={"bg-blue-500 text-white"}
      forcePage={page - 1}
    />
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  handlePageClick: PropTypes.func,
  page: PropTypes.number,
};

export default Pagination;
