import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import moment from "moment";
import { config } from "../../../configs";
import Button from "../Button";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function TbodyWithAction({
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
  status,
}) {
  const navigate = useNavigate();
  return (
    <tbody className="bg-white">
      {status === "process" ? (
        <tr>
          <td colSpan={display.length + 1} className="text-center">
            <div className="flex items-center justify-center">
              <Loading />
            </div>
          </td>
        </tr>
      ) : data.length ? (
        data.map((item, index) => (
          <tr key={index} className="text-gray-700">
            {Object.keys(item).map(
              (key) =>
                display.indexOf(key) > -1 && (
                  <td key={key} className="px-4 py-3 text-sm border">
                    {key === "avatar" ? (
                      <img
                        height={40}
                        width={40}
                        src={`${config.VITE_API_IMAGE_DEV}/${item[key]}`}
                        alt="avatar"
                      />
                    ) : key === "date" ? (
                      moment(item[key]).format("DD-MM-YYYY, h:mm:ss a")
                    ) : key === "statusEvent" ? (
                      <span
                        className={
                          item[key] === "Published"
                            ? "bg-green-500 text-white px-2 py-1 rounded"
                            : "bg-red-500 text-white px-2 py-1 rounded"
                        }
                      >
                        {item[key]}
                      </span>
                    ) : (
                      item[key]
                    )}
                  </td>
                )
            )}
            {!actionNotDisplay && (
              <td className="px-4 py-3 text-sm border">
                {customAction && customAction(item._id, item.statusEvent)}
                {editUrl && (
                  <Button
                    className={
                      "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    }
                    onClick={() => navigate(`${editUrl}/${item._id}`)}
                  >
                    <CiEdit className="w-6 h-6 fill-current inline-block" />
                    <span> Edit</span>
                  </Button>
                )}
                {deleteAction && (
                  <Button
                    className={
                      "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    }
                    onClick={() => deleteAction(item._id)}
                  >
                    <MdDeleteForever className="w-6 h-6 fill-current inline-block" />
                    Hapus
                  </Button>
                )}
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={display.length + 1} className="text-center">
            Data Tidak Ditemukan
          </td>
        </tr>
      )}
    </tbody>
  );
}

TbodyWithAction.propTypes = {
  data: PropTypes.array.isRequired,
  display: PropTypes.array.isRequired,
  editUrl: PropTypes.string,
  deleteAction: PropTypes.func,
  customAction: PropTypes.func,
  actionNotDisplay: PropTypes.bool,
  status: PropTypes.string.isRequired,
};

export default TbodyWithAction;
