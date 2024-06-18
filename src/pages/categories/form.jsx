import PropTypes from "prop-types";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import { FaRegSave } from "react-icons/fa";

function FormCategories({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
  className,
}) {
  return (
    <div>
      <InputForm
        placeholder={"Masukan Nama Kategori"}
        label="Nama Kategori"
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
        className={className}
      />
      <div className="my-3 mx-3">
        <Button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={handleSubmit}
          loading={isLoading}
        >
          <FaRegSave className="w-6 h-6 fill-current inline-block" />
          <span> {edit ? "Edit" : "Simpan"}</span>
        </Button>
      </div>
    </div>
  );
}

FormCategories.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
};

export default FormCategories;
