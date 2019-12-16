import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Job from "./../../../components/jobs/jobs";
import { pagination } from "../../..//utilities/constants";

import {
  getUserActiveJob,
  getUserCompletedJob,
  reset_active_job,
  reset_completed_job
} from "../../../actions/job";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleUserActiveJob = this.handleUserActiveJob.bind(this);
    this.handleUserCompletedJob = this.handleUserCompletedJob.bind(this);
  }

  componentDidMount() {
    this.props.reset_active_job();
    this.props.getUserActiveJob({ page: pagination.page });
    this.props.reset_completed_job();
    this.props.getUserCompletedJob({ page: pagination.page });
  }

  handleUserActiveJob(page) {
    // this.props.reset_active_job();
    this.props.getUserActiveJob(page);
  }

  handleUserCompletedJob(page) {
    // this.props.reset_completed_job();
    this.props.getUserCompletedJob(page);
  }

  render() {
    return (
      <React.Fragment>
        <Job
          path={this.props.match.path}
          _handleUserActiveJob={page => this.handleUserActiveJob(page)}
          _handleUserCompletedJob={page => this.handleUserCompletedJob(page)}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  activeJobs: state.job.activeJobProduct,
  completedJobs: state.job.completedJobProduct
});

const mapDispatchToProps = dispatch => ({
  getUserActiveJob: bindActionCreators(getUserActiveJob, dispatch),
  getUserCompletedJob: bindActionCreators(getUserCompletedJob, dispatch),
  reset_active_job: bindActionCreators(reset_active_job, dispatch),
  reset_completed_job: bindActionCreators(reset_completed_job, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(JobList);