import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import lightBlue from "@material-ui/core/colors/lightBlue";
const useDate = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [allowKeyboardControl, setAllowKeyboardControl] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const variant = "dialog";
  const disablePast = true;
  const disableToolbar = false;
  const format = "yyyy/MM/dd HH:mm";
  const margin = "dense";
  const ampm = false;
  const autoOk = true;
  const inputVariant = "standard";
  const onChange = (event) => {
    console.log(event);
    setValue(event);
  };

  const clear = () => setValue("");
  return {
    bind: {
      value,
      onChange,
      allowKeyboardControl,
      disabled,
      disablePast,
      disableToolbar,
      variant,
      format,
      margin,
      ampm,
      autoOk,
      inputVariant,
    },
    value,
    clear,
  };
};
const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: lightBlue.A200,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "#f66f6c",
        color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: lightBlue.A700,
      },
      daySelected: {
        backgroundColor: lightBlue["400"],
      },
      dayDisabled: {
        color: lightBlue["100"],
      },
      current: {
        color: lightBlue["900"],
      },
    },
  },
});
const CustomDateTimePicker = () => {
  const date = useDate(new Date());
  return (
    <div className="datetimepicker">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={materialTheme}>
          <DateTimePicker
            {...date.bind}
            id="date-time-picker"
            InputProps={{
              disableUnderline: true,
            }}
          ></DateTimePicker>
        </ThemeProvider>
      </MuiPickersUtilsProvider>
    </div>
  );
};
export default CustomDateTimePicker;
