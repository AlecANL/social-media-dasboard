import { useRef } from 'react';
import { InputCheck, SwitchButton } from './switch.styled';

function Switch({ isChecked, setChecked, setDarkMode }) {
  const checkRef = useRef(null);

  function handleCheckChange() {
    setChecked(checkRef.current.checked);
    setDarkMode(checkRef.current.checked);
  }

  return (
    <>
      <InputCheck
        type="checkbox"
        name="darkMode"
        id="darkMode"
        onChange={handleCheckChange}
        checked={isChecked}
        ref={checkRef}
      ></InputCheck>
      <SwitchButton className="button-check" htmlFor="darkMode"></SwitchButton>
    </>
  );
}

export default Switch;
