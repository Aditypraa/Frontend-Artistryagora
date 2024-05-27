import PropTypes from "prop-types";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";

function FormCategories({ handleSubmit, form, handleChange, isLoading, edit }) {
  return (
    <div>
      <InputForm
        placeholder={"Masukan Nama Kategori"}
        label="Nama Kategori"
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <div className="my-3">
        <Button
          className="px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
          onClick={handleSubmit}
          loading={isLoading}
        >
          {edit ? "Ubah" : "Simpan"}
        </Button>
      </div>
    </div>
  );
}

FormCategories.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
};

export default FormCategories;
