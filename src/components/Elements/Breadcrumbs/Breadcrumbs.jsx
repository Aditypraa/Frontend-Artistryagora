import PropTypes from "prop-types";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Breadcrumbs({ textSecound, textThird, urlSecound }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center px-4 mt-3">
      <nav aria-label="Breadcrumb" className="flex">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
          <li className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
            >
              <AiOutlineHome className="text-gray-500" />
              Home
            </button>
          </li>

          <li className="relative flex items-center">
            {/* Jika Tidak ada Text Tree Tidak akan di tampilkan */}
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180" />
            {!textThird && (
              <span className=" flex h-10 items-center bg-white pe-4 ps-8  transition hover:text-gray-900">
                {textSecound}
              </span>
            )}
            {/* Jika Tidak ada Text Tree Tidak akan di tampilkan */}

            {textThird && (
              <button
                onClick={() => navigate(urlSecound)}
                className="flex h-10 items-center bg-white pe-4 ps-8  transition hover:text-gray-900"
              >
                {textSecound}
              </button>
            )}
          </li>
        </ol>
      </nav>
    </div>
  );
}

Breadcrumbs.propTypes = {
  textSecound: PropTypes.string,
  textThird: PropTypes.string,
  urlSecound: PropTypes.string,
};

export default Breadcrumbs;
