import React from "react";
import { Typography, Paper } from "@material-ui/core";

const Job = ({ job }) => {
  return (
    <Paper className="job">
      <div>
        <Typography>{job.title}</Typography>
        <Typography>{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>{job.created_at}</Typography>
      </div>
    </Paper>
  );
};

export default Job;
