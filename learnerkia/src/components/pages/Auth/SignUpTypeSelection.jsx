import { useState } from "react";
import NavBtn from "../../common/buttons/NavBtn";

import { NavLink } from "react-router-dom";
import InputOption from "../../common/inputs/InputOption";

const SignUpTypeSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <h1>Sign Up</h1>

      <div className=" py-10">
        <p>How would you describe yourself?</p>

        <div className="my-5">
          <InputOption
            id={"company"}
            label={"Company"}
            type={"radio"}
            name={"reg-type"}
            value={"sign-up-company"}
            onChange={handleOptionChange}
            currentOption={selectedOption}
          />

          <InputOption
            id={"school"}
            label={"School or Learning Institution"}
            type={"radio"}
            name={"reg-type"}
            value={"sign-up-school"}
            onChange={handleOptionChange}
            currentOption={selectedOption}
          />

          <InputOption
            id={"student"}
            label={"Student"}
            type={"radio"}
            name={"reg-type"}
            value={"sign-up-student"}
            onChange={handleOptionChange}
            currentOption={selectedOption}
          />

          <InputOption
            id={"job-seeker"}
            label={"Job Seeker"}
            type={"radio"}
            name={"reg-type"}
            value={"sign-up-job-seeker"}
            onChange={handleOptionChange}
            currentOption={selectedOption}
          />
        </div>

        <div className="flex justify-end items-center mt-10">
          <NavBtn
            buttonName={"Next"}
            navUrl={selectedOption}
            isDisabled={selectedOption == null ? true : false}
          />
        </div>
      </div>

      <p className="text-center py-8 px-16">
        Have an account? <NavLink to={"login"}>Log in</NavLink>
      </p>
    </div>
  );
};

export default SignUpTypeSelection;
