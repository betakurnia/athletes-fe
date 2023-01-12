import React from "react";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import { colors, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "3rem",
    display: "flex",
    grow: 1,
    background: "#fff",
    border: `1px solid ${colors.grey["300"]}`,
    borderRadius: `16px`,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  headerContainer: {
    paddingTop: "0.875rem 0.875rem 0.5rem",
    height: "auto",
  },
  header: {
    display: "flex",
    padding: "1rem 1.5rem 0",
    justifyContent: "space-between",
    alignItems: "center",
  },
  columnWrapper: {
    position: "relative",
    overflow: "hidden",
    outline: "none",
    border: `1px solid ${colors.grey["300"]}`,
  },
  columnContainer: {
    padding: "1rem 1.5rem",
    display: "block",
    textDecoration: "no-underline",
    height: "100%",
  },
  columnRoot: {
    display: "flex",
    alignItems: "center",
  },
  columnContent: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: "-0.25rem",
  },
  title: {
    paddingTop: "0.25rem",
    display: "flex",
    alignItems: "center",
    marginRight: "0.75rem",
    fontSize: 16,
    fontWeight: 300,
    color: colors.grey["500"],
  },
  description: {
    flexGrow: 1,
    marginRight: "3rem",
    fontWeight: 500,
    paddingTop: "0.25",
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const {
    isEditable = true,
    name,
    sports,
    gender,
    dateOfBirth,
    description,
    location,
    team,
    interests,
    formik,
  } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div style={{ minHeight: 1 }}>
          <div className={classes.headerContainer}>
            <header className={classes.header}>
              <h2 style={{ fontSize: 24 }}>Profile</h2>
              {isEditable && (
                <IconButton
                  onClick={() => {
                    formik.setFieldValue("step", 0);
                  }}
                >
                  <EditIcon />
                </IconButton>
              )}
            </header>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Name
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Sports
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {sports?.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Gender
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {gender}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Date of birth
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {moment(dateOfBirth).format("MMMM Do YYYY, h:mm:ss a")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Description
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Location
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ minHeight: 1 }}>
          <div className={classes.columnRoot}>
            <div className={classes.columnContainer}>
              <div className={classes.columnRoot}>
                <div style={{ flexGrow: "1" }}>
                  <div className={classes.columnContent}>
                    <div className={classes.title} style={{ width: 156 }}>
                      Team
                    </div>
                    <div className={classes.description} style={{ width: 328 }}>
                      {team}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ minHeight: 1 }}>
            <div className={classes.columnRoot}>
              <div className={classes.columnContainer}>
                <div className={classes.columnRoot}>
                  <div style={{ flexGrow: "1" }}>
                    <div className={classes.columnContent}>
                      <div className={classes.title} style={{ width: 156 }}>
                        Interests
                      </div>
                      <div
                        className={classes.description}
                        style={{ width: 328 }}
                      >
                        {interests}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
