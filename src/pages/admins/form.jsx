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
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
