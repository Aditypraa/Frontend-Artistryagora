import PropTypes from "prop-types";
import TbodyWithAction from "../Elements/TbodyWithAction";
import Thead from "../Elements/Thead";
import Pagination from "../Elements/Pagination";

function TableFragments({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
  pages,
}) {
  return (
    <>
      <table className="w-full">
        <Thead text={thead} />
        <TbodyWithAction
          status={status}
          data={data}
          display={tbody}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
      </table>
      {!withoutPagination && data.length ? (
        <Pagination pages={pages} handlePageClick={handlePageClick} />
      ) : (
        ""
      )}
    </>
  );
}

TableFragments.propTypes = {
  withoutPagination: PropTypes.bool,
  handlePageClick: PropTypes.func,
  actionNotDisplay: PropTypes.bool,
  data: PropTypes.array,
  thead: PropTypes.arrayOf(PropTypes.string).isRequired,
  tbody: PropTypes.arrayOf(PropTypes.string).isRequired,
  editUrl: PropTypes.string,
  deleteAction: PropTypes.func,
  customAction: PropTypes.func,
  status: PropTypes.string,
  pages: PropTypes.number,
};

export default TableFragments;
