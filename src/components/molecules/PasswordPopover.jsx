/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const PasswordPopover = ({
  label,
  value,
  isVisible,
  setValue,
  setError,
  clearErrors,
}) => {
  const [rule1, setRule1] = useState(false);
  const [rule2, setRule2] = useState(false);
  const [rule3, setRule3] = useState(false);
  const [rule4, setRule4] = useState(false);
  const [rule5, setRule5] = useState(false);
  const validatePassword = (value) => {
    let valuePassword = value;
    let valid = true;

    if (valuePassword === "") return false;
    setValue(label, valuePassword, { shouldValidate: true });

    // rule 1 : At Least 8 Characters
    if (value.length >= 8) {
      setRule1(true);
    } else {
      setRule1(false);
      valid = false;
      setValue(label, "");
    }

    // rule 2 : At Least 1 Lowercase
    const matches2 = value.match(/[a-z]/g) || [];
    if (matches2.length >= 1) {
      setRule2(true);
    } else {
      setRule2(false);
      valid = false;
      setValue(label, "");
    }

    // rule 3 : At Least 1 Uppercase
    const matches3 = value.match(/[A-Z]/g) || [];
    if (matches3.length >= 1) {
      setRule3(true);
    } else {
      setRule3(false);
      valid = false;
      setValue(label, "");
    }

    // rule 4 : At Least 1 Symbol
    const matches4 = value.match(/[^0-9a-zA-Z\s]/g) || [];
    if (matches4.length >= 1) {
      setRule4(true);
    } else {
      setRule4(false);
      valid = false;
      setValue(label, "");
    }

    // rule 5 : At Least 1 Number
    const matches5 = value.match(/[0-9]/g) || [];
    if (matches5.length >= 1) {
      setRule5(true);
    } else {
      setRule5(false);
      valid = false;
      setValue(label, "");
    }

    if (!valid) {
      setError(label, {
        type: "manual",
        message: "Password requirements",
      });
    } else {
      clearErrors(label);
    }
  };

  useEffect(() => {
    validatePassword(value);
    if (value === "") {
      setRule1(false);
      setRule2(false);
      setRule3(false);
      setRule4(false);
      setRule5(false);
    }
  }, [value]);

  return (
    <>
      {isVisible ? (
        <div className="absolute z-50 left-0 p-5 rounded-md shadow-md bg-slate-100 top-[5.1rem]">
          <div className="popover__message">
            <p className="text-sm font-medium">Password Requirements:</p>
            <div className="my-0 divider"></div>

            <ul className="flex flex-col gap-1 text-xs font-normal">
              <li className={rule1 ? "line-through" : ""}>Min 8 Characters</li>
              <li className={rule2 ? "line-through" : ""}>Lowercase (a-z)</li>
              <li className={rule3 ? "line-through" : ""}>Uppercase (A-Z)</li>
              <li className={rule4 ? "line-through" : ""}>Symbols (?#@..)</li>
              <li className={rule5 ? "line-through" : ""}>Number (0-9)</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PasswordPopover;
