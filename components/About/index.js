import React from "react";
import { TextField } from "@mui/material";

const About = (props) => {
  const { formik } = props;

  return (
    <>
      <TextField
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        fullWidth
      >
        Description
      </TextField>
      <TextField
        label="Location"
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
        fullWidth
      >
        Location
      </TextField>
      <TextField
        label="Team"
        name="team"
        value={formik.values.team}
        onChange={formik.handleChange}
        fullWidth
      >
        Team
      </TextField>
      <TextField
        label="Interests"
        name="interests"
        value={formik.values.interests}
        onChange={formik.handleChange}
        fullWidth
      >
        Interests
      </TextField>
    </>
  );
};

export default About;
