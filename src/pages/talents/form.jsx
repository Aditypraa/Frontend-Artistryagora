import PropTypes from "prop-types";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import { config } from "../../configs";
import { FaRegSave } from "react-icons/fa";

export default function FormTalents({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <div>
      <InputForm
        placeholder={"Masukan nama talent"}
        label={"Nama"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <InputForm
        placeholder={"Masukan role"}
        label={"Role"}
        name="role"
        value={form.role}
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
          className="px-4 py-2 from-[#4f5de2] to-[#0025f5] hover:shadow-[#6025F5]/50"
        >
          <FaRegSave className="w-6 h-6 fill-current inline-block" />
          <span> {edit ? "Edit" : "Simpan"}</span>
        </Button>
      </div>
    </div>
  );
}

FormTalents.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
};
