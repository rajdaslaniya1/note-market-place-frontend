import React from "react";

const Pagination = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 d-flex align-items-center  justify-content-center">
          <nav aria-label="search result pages">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-left"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1<span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <i className="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
