import React from "react";
import Job from "./Job";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import JobModal from "./JobModal";

const Jobs = ({ jobs }) => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  const [activeStep, setActiveStep] = React.useState(0);

  // step == 0, show 0 - 49
  // step == 1, show 50 - 99
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <>
      <div className="jobs">
        <JobModal open={open} job={selectedJob} handleClose={handleClose} />
        <Typography variant="h4" component="h1">
          Entry Level Software Jobs
        </Typography>
        <Typography>Found {numJobs} Jobs</Typography>
        {jobsOnPage.length ? (
          jobsOnPage.map((job, idx) => (
            <Job
              key={idx}
              job={job}
              onClick={() => {
                handleClickOpen();
                selectJob(job);
              }}
            />
          ))
        ) : (
          <div class="empty"> not shit nigga </div>
        )}
        <div>
          Page {activeStep + 1} of {numPages}
        </div>
        <MobileStepper
          className="stepper"
          variant="progress"
          steps={numPages}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === numPages - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
      </div>
    </>
  );
};

export default Jobs;
