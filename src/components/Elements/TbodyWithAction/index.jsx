import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import moment from "moment";
import { config } from "../../../configs";
import Button from "../Button";

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
              <Loading className={"bg-white"} />
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
                      "mx-2 px-4 py-2 from-[#41b973] to-[#06e663] hover:shadow-[#6025F5]/50"
                    }
                    onClick={() => navigate(`${editUrl}/${item._id}`)}
                  >
                    Edit
                  </Button>
                )}
                {deleteAction && (
                  <Button
                    className={
                      "mx-2 px-4 py-2 from-[#f55050] to-[#ee1a1a] hover:shadow-[#6025F5]/50"
                    }
                    onClick={() => deleteAction(item._id)}
                  >
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
            Tidak Ditemukan Data
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
