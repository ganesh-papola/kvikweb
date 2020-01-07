import React from "react";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { LocalForm, Control } from "react-redux-form";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

import "./searchService.scss";
import { pagination } from "../../utilities/constants";
import { getJobProduct, reset_job_products } from "../../actions/job";

const SearchService = props => {
  const loggedInUser = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();
  const pathname = props.history.location.pathname;

  const _handleSearch = searchKey => {
    if (pathname === "/" && searchKey.search) {
      dispatch(reset_job_products());
      dispatch(getJobProduct({ page: pagination.page, search: searchKey }));
      /* if (searchKey.search === "") {
        console.log("I am calling in empty search");
        dispatch(getJobProduct({ page: pagination.page }));
      } else {
        console.log("I am calling in string search");
        dispatch(reset_job_products());
        
      } */
    }
  };
  return (
    <div className="src-service-blc d-flex flex-column flex-fill">
      <Container className="d-flex flex-column flex-fill">
        <Row className="d-flex flex-column flex-fill">
          <Col className="d-flex flex-fill">
            <div className="src-service-blc d-flex flex-fill m-auto justify-content-center">
              <div className="src-service d-flex">
                <LocalForm
                  onSubmit={values => _handleSearch(values)}
                  className="d-flex flex-fill"
                >
                  <span className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="799.695"
                      height="800"
                      viewBox="0 0 799.695 800"
                    >
                      <path
                        id="Shape_1"
                        data-name="Shape 1"
                        d="M793.778,759.2,599.4,564.789a339.764,339.764,0,0,0,83.711-223.681C683.108,152.9,530.05,0,342.054,0,153.88,0,1,153.082,1,341.108S154.057,682.218,342.054,682.218A339.642,339.642,0,0,0,565.7,598.492L760.08,792.9a24.1,24.1,0,0,0,16.849,7.1,23.359,23.359,0,0,0,16.849-7.1A23.986,23.986,0,0,0,793.778,759.2ZM48.708,341.108c0-161.773,131.6-293.215,293.168-293.215,161.749,0,293.169,131.619,293.169,293.215S503.625,634.5,341.876,634.5C180.306,634.5,48.708,502.883,48.708,341.108Z"
                        transform="translate(-1)"
                      />
                    </svg>
                  </span>
                  <Control.text
                    type="search"
                    name="search"
                    model=".search"
                    placeholder="Search for a service"
                    className="border-0 flex-fill h-100 form-control"
                    onChange={e => _handleSearch({ search: e.target.value })}
                  />
                  <Button color="primary" type="submit">
                    Search
                  </Button>
                </LocalForm>
              </div>
              <Link
                className="text-black"
                to={loggedInUser ? "/post-job" : "/login"}
              >
                <Button className="post-job-btn btn-block">Post a Job</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withRouter(SearchService);
