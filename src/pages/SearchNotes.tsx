import React from "react";
import {
  book1,
  dateImage,
  flagImage,
  pagesImage,
  starImage,
  universityImage,
  whiteStarImage,
} from "assets/images";
import BackgroundImageText from "component/BackgroundImageText";
import HeaderFooterLayout from "component/layout/HeaderFooterLayout";
import Pagination from "component/Pagination";

const SearchNotes = () => {
  return (
    <>
      <HeaderFooterLayout>
        <BackgroundImageText text="Search Notes" />

        <section id="searchnotes">
          <div className="content-box-md">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sub-heading">Search and Filter Notes</div>
                </div>
              </div>
              <form className="searchnotes mb-4">
                <div className="form-row">
                  <div className="form-group col-lg-12 col-md-12 input-group">
                    <input
                      type="search"
                      className="form-control"
                      id="search"
                      placeholder="Search Notes Here"
                    />
                  </div>
                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="type" className="form-control">
                      <option>Select Type</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>
                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="category" className="form-control">
                      <option>Select Category</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="university" className="form-control">
                      <option>Select University</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="course" className="form-control">
                      <option>Select Course</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="country" className="form-control">
                      <option>Select Country</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>

                  <div className="form-group col-lg-2 col-md-4 col-sm-4">
                    <select id="rating" className="form-control">
                      <option>Select Rating</option>
                      <option>Data 1</option>
                      <option>Data 2</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="search-form-heading">Total 18 Notes</div>
              <div className="row books">
                <div
                  className="col-lg-4 col-md-6 col-sm-6"
                  style={{ backgroundClip: "padding-box" }}
                >
                  <div className="book">
                    <a href="#">
                      <img id="bookphoto" src={book1} alt="book" />
                      <div className="book-heading">
                        Computer Operating System-Final Exams Book With Paper
                        Solution
                      </div>
                      <ul className="book-details">
                        <li>
                          <img src={universityImage} alt="university" />
                          University of California ,Us
                        </li>
                        <li>
                          <img src={pagesImage} alt="pages" />
                          204 Pages
                        </li>
                        <li>
                          <img src={dateImage} alt="date" />
                          Thu,Nov 26 2020
                        </li>
                        <li>
                          <img src={flagImage} alt="flag" />
                          <span className="flag">
                            5 Users marked this notes as inappropriate
                          </span>
                        </li>
                        <li>
                          <div className="rating">
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                            <img src={starImage} alt="star" />
                            <img src={whiteStarImage} alt="star" />
                            <img src={whiteStarImage} alt="star" />
                          </div>
                          100 reviews
                        </li>
                      </ul>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pagination />
      </HeaderFooterLayout>
    </>
  );
};

export default SearchNotes;
