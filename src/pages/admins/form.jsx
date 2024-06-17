import PropTypes from "prop-types";
import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import { FaRegSave } from "react-icons/fa";

export default function FormAdmin({
  handleSubmit,
  form,
  handleChange,
  isLoading,
  edit,
}) {
  return (
    <div>
      <InputForm
        placeholder={"Masukan nama admin"}
        label={"Nama Admin"}
        name={"name"}
        value={form.name}
        type={"text"}
        onChange={handleChange}
        controlId="formName"
      />
      <InputForm
        placeholder={"Masukan email admin"}
        label={"Email"}
        name={"email"}
        value={form.email}
        type={"email"}
        onChange={handleChange}
        controlId="formEmail"
      />
      <InputForm
        placeholder={"Masukan password admin"}
        label={"Password"}
        name={"password"}
        value={form.password}
        type={"password"}
        onChange={handleChange}
        controlId="formPassword"
      />
      <InputForm
        placeholder={"Masukan confirm password admin"}
        label={"Confirm password"}
        name={"confirmPassword"}
        value={form.confirmPassword}
        type={"password"}
        onChange={handleChange}
        controlId="formconfirmPassword"
      />

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

FormAdmin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  edit: PropTypes.bool,
};
