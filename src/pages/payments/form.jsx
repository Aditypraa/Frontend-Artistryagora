import PropTypes from "prop-types";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import { config } from "../../configs";
import { FaRegSave } from "react-icons/fa";

export default function FormPayments({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <div>
      <InputForm
        placeholder={"Masukan Type Payment"}
        label={"Type"}
        name="type"
        value={form.type}
        type="text"
        onChange={handleChange}
      />
      <InputForm
        placeholder={"Masukan Avatar"}
        label={"Avatar"}
        name="avatar"
        // value={form.avatar}
        type="file"
        onChange={handleChange}
      />
      {form.avatar !== "" && (
        <div>
          <figure>
            <img
              width={171}
              height={180}
              alt="171x180"
              src={`${config.VITE_API_IMAGE_DEV}/${form.avatar}`}
            />
            <figcaption>Perview image avatar</figcaption>
          </figure>
        </div>
      )}
      <div className="my-3 mx-3">
        <Button
          onClick={handleSubmit}
          loading={isLoading}
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
        >
          <FaRegSave className="w-6 h-6 fill-current inline-block" />
          <span> {edit ? "Edit" : "Simpan"}</span>
        </Button>
      </div>
    </div>
  );
}

FormPayments.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
};
