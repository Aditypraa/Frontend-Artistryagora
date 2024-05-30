import { useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import PropTypes from "prop-types";

export default function InputDate({ date, onChangeDate, setIsShowed }) {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const refDate = useRef(null);
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  return (
    <div className="fixed z-10" ref={refDate}>
      <DateRange
        editableDateInputs={true}
        onChange={onChangeDate}
        moveRangeOnFirstSelection={false}
        onRangeFocusChange={check}
        ranges={[date]}
        maxDate={new Date()}
      />
    </div>
  );
}

InputDate.propTypes = {
  date: PropTypes.object,
  onChangeDate: PropTypes.func,
  setIsShowed: PropTypes.func,
};
