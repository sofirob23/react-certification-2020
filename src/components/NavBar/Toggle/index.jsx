import React, { useState, useContext, useEffect } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';

import { store } from '../../../state/store';

const Toggle = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const [darkMode, setDarkMode] = useState(globalState.state.darkMode);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    dispatch({ type: 'darkMode', payload: darkMode });
  }, [darkMode, dispatch]);

  return (
    <FormGroup className="ToggleGroup">
      <FormControlLabel
        control={
          <Switch
            id="ToggleSwitch"
            checked={darkMode}
            onChange={handleChange}
            color="default"
          />
        }
        label="Dark Mode"
      />
    </FormGroup>
  );
};

export default Toggle;
