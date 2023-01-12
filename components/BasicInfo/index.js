import React from "react";
import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const sports = [
  "Golf",
  "Tennis",
  "Cricket",
  "Basketball",
  "Baseball",
  "American Football",
  "Aquatics",
  "Archery",
  "Automobile Racing",
  "Badminton",
  "Beach Volleyball",
  "Bobsleigh",
  "Body Building",
  "Boxing",
  "Cross Country Running",
  "Cross Country Skiing",
  "Curling",
  "Cycling",
  "Darts",
  "Decathlon",
  "Down Hill Skiing",
  "Equestrianism",
  "eSports",
  "Fencing",
  "Field Hockey",
  "Figure Skating",
  "Gymnastics",
  "Ice Hockey",
  "Martial Arts",
  "Mixed Martial Arts",
  "Modern Pentathlon",
  "Motorcycle Racing",
  "Netball",
  "Polo",
  "Racquetball",
  "Rowing",
  "Rugby",
  "Sailing",
  "Softball",
  "Shooting",
  "Skateboarding",
  "Skeet Shooting",
  "Skeleton",
  "Snow Boarding",
  "Soccer (Football)",
  "Squash",
  "Surfing",
  "Swimming",
  "Track and Field",
];

const useStyles = makeStyles({
  datepicker: {
    width: "100%",
  },
});

const BasicInfo = (props) => {
  const classes = useStyles();

  const { formik } = props;

  const theme = useTheme();

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    formik.setFieldValue(
      "sports",
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <TextField
        label="Name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        fullWidth
      >
        Name
      </TextField>
      <FormControl fullWidth>
        <InputLabel id="sports">Sports</InputLabel>
        <Select
          labelId="sports"
          multiple
          value={formik.values.sports}
          onChange={handleChange}
          input={<OutlinedInput label="Sports" />}
          MenuProps={MenuProps}
        >
          {sports.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, formik.values.sports, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <FormLabel id="gender">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="gender"
          defaultValue="female"
          name="gender"
          row
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          className={classes.datepicker}
          label="Date of birth"
          name="dateOfBirth"
          value={formik?.values?.dateOfBirth}
          onChange={(value) => {
            formik.setFieldValue("dateOfBirth", value);
          }}
          disableFuture
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default BasicInfo;
