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
          className="px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
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
