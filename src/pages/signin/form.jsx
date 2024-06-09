import Button from "../../components/Elements/Button";
import InputForm from "../../components/Elements/InputForm";
import PropTypes from "prop-types";

const Form = ({ form, handleChange, handleSubmit, isLoading }) => {
  return (
    <form className="space-y-5">
      <div>
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={form.email}
          placeholder="Masukan Email"
          onChange={handleChange}
        />
      </div>
      <div>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={form.password}
          placeholder="Masukan Password"
          onChange={handleChange}
        />
      </div>
      <Button
        loading={isLoading}
        disabeld={isLoading}
        onClick={handleSubmit}
        className="w-full px-5 py-3 from-purple-800 to-purple-900 hover:shadow-[#6025F5]/50"
      >
        Login
      </Button>
    </form>
  );
};

Form.propTypes = {
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Form;
