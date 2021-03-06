import React, { useState, useEffect, useCallback } from "react";
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { filterToggleHandler } from "../../actions/job";
import smoothscroll from "smoothscroll-polyfill";
import JobProduct from "./jobProduct/jobProduct";
import Sidebar from "../sidebar/sidebar";
import { pagination } from "../../utilities/constants";
import Spinner from "../commonUi/spinner/spinner";
import NoData from "../commonUi/noData/noData";
import SpinnerOverlay from "../commonUi/spinner/spinnerOverlay/spinnerOverlay";
import "./jobs.scss";
import { getJobProduct, reset_job_products } from "./../../actions/job";
import SearchService from "../../components/searchService/searchService";
import { getTranslations } from "../../utilities/translations";
smoothscroll.polyfill();

const Job = ({
  path = "",
  _handleUserActiveJob,
  _handleUserCompletedJob,
  _handleUserActiveBid,
  _handleUserCompletedBid
}) => {
  const dispatch = useDispatch();
  const [listType, setlistType] = useState(false);
  let [selectedCategory, setCategory] = useState([]);
  let [postalCode, setPostalCode] = useState("");
  let [sort, setSortBy] = useState("");
  let [distance, setDistance] = useState("");
  let [budget, setBudget] = useState({});
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  let [initial, setInitial] = useState(true);
  let [page, setPage] = useState(pagination.page);
  let [jobType, setJobType] = useState("active");

  const toggleListType = (value) => {
    setlistType(value);
  };

  let jobs = useSelector((state) => state.job);
  const { isFetching } = useSelector((state) => state.loader);
  let bids = useSelector((state) => state.bid);
  let products = [];
  let count = 0;
  let active = "";
  let complete = "";

  if (path === "/job-list") {
    active = getTranslations("active_job");
    complete = getTranslations("complete_job");
    if (jobType === "active") {
      products = jobs.activeJobProduct;
      count = jobs.activeJobsCount;
    }
    if (jobType === "completed") {
      products = jobs.completedJobProduct;
      count = jobs.completedJobsCount;
    }
  } else if (path === "/bid-list") {
    active = getTranslations("active_bid");
    complete = getTranslations("complete_bid");
    if (jobType === "active") {
      products = bids.activeBid.reduce((d, i) => {
        d.push({ ...i.job_id });
        return d;
      }, []);
      count = bids.activeBidsCount;
    }
    if (jobType === "completed") {
      products = bids.completedBid.reduce((d, i) => {
        d.push({ ...i.job_id });
        return d;
      }, []);
      count = bids.completedBidsCount;
    }
  } else {
    products = jobs.jobProduct;
    count = jobs.count;
  }
  const showMoreProduct = (page) => {
    setPage(page);
    if (path === "/job-list") {
      if (jobType === "active") {
        _handleUserActiveJob({ page: page });
      }
      if (jobType === "completed") {
        _handleUserCompletedJob({ page: page });
      }
    } else if (path === "/bid-list") {
      if (jobType === "active") {
        _handleUserActiveBid({ page: page });
      }
      if (jobType === "completed") {
        _handleUserCompletedBid({ page: page });
      }
    } else {
      const reqData = {
        page: page,
        category: selectedCategory,
        lat: "",
        long: ""
      };
      dispatch(getJobProduct(reqData));
    }
  };

  const handleCategory = (category) => {
    let newSelectedCategory = [...selectedCategory];
    if (newSelectedCategory.length === 0) {
      newSelectedCategory.push(category);
      setCategory(newSelectedCategory);
    } else {
      if (newSelectedCategory.includes(category)) {
        const index = newSelectedCategory.indexOf(category);
        if (index > -1) {
          newSelectedCategory.splice(index, 1);
          setCategory(newSelectedCategory);
        }
      } else {
        newSelectedCategory.push(category);
        setCategory(newSelectedCategory);
      }
    }
    const reqData = {
      page: page,
      category: newSelectedCategory,
      minbudget: budget.min,
      maxbudget: budget.max,
      zip_code: postalCode,
      miles: distance,
      sort: sort
    };

    // dispatch(reset_job_products());
    // dispatch(sidebarToggleHandler(true));
    dispatch(getJobProduct(reqData));
  };

  const handlePostalCode = (value) => {
    setPostalCode(value);
    const reqData = {
      page: page,
      category: selectedCategory,
      minbudget: budget.min,
      maxbudget: budget.max,
      zip_code: value,
      miles: distance,
      sort: sort
    };
    dispatch(reset_job_products());
    dispatch(getJobProduct(reqData));
  };

  const handleBudget = (value) => {
    setBudget(value);
    const reqData = {
      page: page,
      category: selectedCategory,
      minbudget: value.min,
      maxbudget: value.max,
      zip_code: postalCode,
      miles: distance,
      sort: sort
    };
    dispatch(reset_job_products());
    dispatch(getJobProduct(reqData));
  };

  const handleDistance = (value) => {
    setDistance(value);
    const reqData = {
      page: page,
      category: selectedCategory,
      budget: budget,
      zip_code: postalCode,
      miles: value,
      sort: sort
    };
    dispatch(reset_job_products());
    dispatch(getJobProduct(reqData));
  };

  const sortBy = (value) => {
    setSortBy(value);
    const reqData = {
      page: page,
      category: selectedCategory,
      budget: budget,
      zip_code: postalCode,
      miles: distance,
      sort: value
    };
    dispatch(reset_job_products());
    dispatch(getJobProduct(reqData));
  };
  useEffect(() => {
    if (initial) {
      dispatch(getJobProduct({ page: 1 }));
      setInitial(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initial]);
  const windowResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 767) {
      if (jobs.sidebarToggle === true) {
        dispatch(filterToggleHandler(false));
      }
    }
  });
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      document.removeEventListener("resize", windowResize);
    };
  }, [windowResize]);

  const sidebarToggleValue = useSelector((state) => {
    return state.job.sidebarToggle;
  });
  const stopPropagation = (e) => {
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <React.Fragment>
      {/* <SpinnerOverlay className="position-fixed" /> */}
      <section className={`d-flex flex-column position-relative`} id="home">
        <div id="blank-div" className="blank-height"></div>
        <div
          className={`d-flex job-list-heading ${
            path !== "" ? "sorting-page" : ""
          }`}
        >
          {path == "" && <SearchService />}
          {path !== "" && (
            <div className="job-list-tab">
              <button
                className={`btn ${jobType === "active" ? "btn-primary" : ""}`}
                onClick={() => {
                  setJobType("active");
                }}
              >
                {active}
              </button>
              <button
                className={`btn ${
                  jobType === "completed" ? "btn-primary" : ""
                }`}
                onClick={() => {
                  setJobType("completed");
                }}
              >
                {complete}
              </button>
            </div>
          )}

          <div className="job-list-icon d-flex ml-auto">
            {path === "" && (
              <Button
                color="link"
                className="list-icon filter sidebar-toogle-btn d-md-none"
                onClick={(e) => {
                  dispatch(
                    filterToggleHandler(!jobs.filterToggle),
                    e.nativeEvent.stopImmediatePropagation()
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="511.973"
                  height="511.999"
                  viewBox="0 0 511.973 511.999"
                >
                  <path
                    id="filter"
                    d="M492.477,0H20.5A20,20,0,0,0,.5,20,195.331,195.331,0,0,0,66,165.871l87.59,77.852a71.265,71.265,0,0,1,23.9,53.223V491.977a20.01,20.01,0,0,0,31.09,16.637l118-78.66a20,20,0,0,0,8.906-16.641V296.945a71.265,71.265,0,0,1,23.9-53.223l87.586-77.852A195.331,195.331,0,0,0,512.473,20,20,20,0,0,0,492.477,0ZM420.395,135.973l-87.586,77.855a111.3,111.3,0,0,0-37.324,83.113V402.609l-78,52V296.945a111.3,111.3,0,0,0-37.324-83.117L92.578,135.977A155.356,155.356,0,0,1,41.793,40H471.18A155.317,155.317,0,0,1,420.395,135.973Zm0,0"
                    transform="translate(-0.5)"
                  />
                </svg>
              </Button>
            )}
            {products && products.length !== 0 && path === "" ? (
              <ButtonDropdown
                isOpen={dropdownOpen}
                toggle={toggle}
                className="sort-dropdown "
              >
                <DropdownToggle color="link" className="list-icon sort">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="427.648"
                    height="448"
                    viewBox="0 0 427.648 448"
                  >
                    <g
                      id="sort_1_"
                      data-name="sort (1)"
                      transform="translate(-0.5)"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        d="M118.324,393.375V0h-32V393.375l-63.2-63.2L.5,352.8l90.512,90.512a16,16,0,0,0,22.625,0L204.148,352.8l-22.625-22.625Zm0,0"
                      />
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M428.148,95.2,337.637,4.688a16,16,0,0,0-22.625,0L224.5,95.2l22.625,22.625,63.2-63.2V448h32V54.625l63.2,63.2Zm0,0"
                      />
                    </g>
                  </svg>
                </DropdownToggle>
                <DropdownMenu right className="overflow-auto">
                  <DropdownItem onClick={() => sortBy({ budget: -1 })}>
                    {getTranslations("budget_hi_lo")}
                  </DropdownItem>
                  <DropdownItem onClick={() => sortBy({ budget: 1 })}>
                    {getTranslations("budget_lo_hi")}
                  </DropdownItem>
                  <DropdownItem onClick={() => sortBy({ created_at: -1 })}>
                    {getTranslations("create_date")}
                  </DropdownItem>
                  <DropdownItem onClick={() => sortBy({ jobtitle: 1 })}>
                    {getTranslations("title_a_z")}
                  </DropdownItem>
                  <DropdownItem onClick={() => sortBy({ jobStartDate: -1 })}>
                    {getTranslations("job_start_date")}
                  </DropdownItem>
                  <DropdownItem onClick={() => sortBy({ jobEndDate: -1 })}>
                    {getTranslations("bid_deadline")}
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            ) : null}
            <Button
              color="link"
              className={"list-icon listTypes " + (listType ? "active" : "")}
              onClick={() => toggleListType(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="11.667"
                viewBox="0 0 21 11.667"
              >
                <path
                  id="Path_804"
                  data-name="Path 804"
                  d="M3,14H5.333V11.667H3Zm0,4.667H5.333V16.333H3ZM3,9.333H5.333V7H3ZM7.667,14H24V11.667H7.667Zm0,4.667H24V16.333H7.667ZM7.667,7V9.333H24V7Z"
                  transform="translate(-3 -7)"
                  fill="#b3b3b3"
                />
              </svg>
            </Button>
            <Button
              color="link"
              className={"list-icon listTypes " + (!listType ? "active" : "")}
              onClick={() => toggleListType(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="13"
                viewBox="0 0 17 13"
              >
                <path
                  id="Path_806"
                  data-name="Path 806"
                  d="M4,11H9V5H4Zm0,7H9V12H4Zm6,0h5V12H10Zm6,0h5V12H16Zm-6-7h5V5H10Zm6-6v6h5V5Z"
                  transform="translate(-4 -5)"
                  fill="#333"
                />
              </svg>
            </Button>
          </div>
          {/* )} */}
        </div>

        <Row className="d-flex flex-nowrap position-relative">
          {jobs.filterToggle ? (
            <Spinner
              className="with-overlay no-spin-icon position-fixed"
              onClickEvent={() => {
                dispatch(filterToggleHandler(false));
              }}
            />
          ) : null}
          {path === "" && (
            <div
              className={`${sidebarToggleValue ? "fixedSideBar" : ""} ${
                jobs.filterToggle ? "active" : ""
              } sidebar-col d-flex flex-column flex-shrink-0`}
              id="sideBar"
              onClick={stopPropagation}
            >
              <Sidebar
                selectedCategory={selectedCategory}
                _handleCategory={handleCategory}
                _handlePostalCode={handlePostalCode}
                _handleDistance={handleDistance}
                _handleBudget={handleBudget}
              />
            </div>
          )}
          <div
            className={`
            ${
              window.location.pathname === "/" && sidebarToggleValue
                ? "leftMargin"
                : ""
            } job-rt-col flex-fill
              ${
                window.location.pathname === "/bid-list" ||
                window.location.pathname === "/job-list"
                  ? "noSidebarFilter"
                  : ""
              }
                `}
          >
            <div className="job-list-blc m-0" id="jobList">
              <Row
                className={`job-listing position-relative
            ${listType ? "job-list-row" : ""}
            ${
              window.location.pathname === "/" && sidebarToggleValue
                ? "active"
                : ""
            }`}
                id="jobListing"
              >
                {isFetching ? <SpinnerOverlay /> : null}
                {!isFetching && products && products.length === 0 && <NoData />}
                {!isFetching &&
                  products &&
                  products.map((item, key) => {
                    return (
                      <Col
                        lg="4"
                        className="product-col d-flex flex-column"
                        key={key}
                      >
                        <JobProduct
                          product={item}
                          listType={listType}
                          path={path}
                        />
                      </Col>
                    );
                  })}
              </Row>
              {!isFetching &&
                products &&
                products.length !== 0 &&
                products.length < count && (
                  <Row className="joblist-more">
                    <Col className="d-flex justify-content-center">
                      <Button
                        color="secondary"
                        className="data-loader-btn"
                        onClick={() => showMoreProduct(++page)}
                      >
                        <span className="d-flex justify-content-center"></span>
                        <span>{getTranslations("show_more")}</span>
                      </Button>
                    </Col>
                  </Row>
                )}
            </div>
          </div>
        </Row>
      </section>
    </React.Fragment>
  );
};
export default Job;
