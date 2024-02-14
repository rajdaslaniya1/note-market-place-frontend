import { addImage, minusImage } from "assets/images";
import React, { useEffect } from "react";
import $ from "jquery";
import HeaderFooterLayout from "component/layout/HeaderFooterLayout";

const FAQ = () => {
  useEffect(() => {
    $(".collapse.show").each(function () {
      $(this).parentsUntil(".card").css({
        border: "1px solid #d1d1d1",
      });
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse")
      .on("show.bs.collapse", function () {
        $(this).prev(".card-header").find("h6").css({
          "font-weight": "700",
        });
        $(this).prev(".card-header").css({
          background: "white",
        });
        $(this).parent(".card").css("border", "1px solid #d1d1d1");
      })
      .on("hide.bs.collapse", function () {
        $(this).prev(".card-header").find("h6").css({
          "font-weight": "500",
        });
        $(this).prev(".card-header").css({
          background: "#f3f3f3",
        });
        $(this).parent(".card").css("border", "1px solid #d1d1d1");
      });
  }, []);

  return (
    <HeaderFooterLayout>
      <section id="faq">
        <div className="container">
          <div className="content-box-md">
            <div className="heading">General-questions</div>
            <div className="accordion" id="general-question">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">What is Notes Marketplace?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#general-question"
                >
                  <div className="card-body">
                    <p>
                      Notes Marketplace is an online marketplace for university
                      students to buy and sell their course notes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">Where did Notes Marketplace start?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#general-question"
                >
                  <div className="card-body">
                    <p>
                      What started out as four friends chucking around an idea
                      in Ahmedabad ended up turning into an earliest version of
                      Notes Marketplace. So, with 2021 batch of tatvasoft – we
                      has developed this product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" heading">Uploaders</div>
            <div className="accordion" id="uploaders">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">Why should I upload now?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#uploaders"
                >
                  <div className="card-body">
                    <p>
                      To maximize sales. We can't sell your notes if they are
                      rotting on your hard drive. Your notes are available for
                      purchase the instant they are approved, which means that
                      you could be missing potential sales as we speak. Despite
                      exam and holiday breaks, our users purchase notes all year
                      round, so the best time to upload notes is always today.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">What can't I sell?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#uploaders"
                >
                  <div className="card-body">
                    <p>
                      We won't approve materials that have been created by your
                      university or another third party. We also do not accept
                      assignments, essays, practical’s or take-home exams. We
                      love notes though.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">How long does it take to upload?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#uploaders"
                >
                  <div className="card-body">
                    <p>
                      Uploading notes is quick and easy. It can take as little
                      as 90 seconds per set of notes. Put it this way, in the
                      time it took to read these FAQs, you could’ve uploaded
                      several sets of notes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" heading">Downloaders</div>
            <div className="accordion" id="downloaders">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">How do I buy notes?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#downloaders"
                >
                  <div className="card-body">
                    <p>
                      Search for the notes you are after using the 'SEARCH
                      NOTES' tab at the at the top right of every page. You can
                      then filter results by university, category, course
                      information etc. To purchase, go to detail page of note
                      and click on download button. If notes are free to
                      download – it will download over the browser and if notes
                      are paid, Once Seller will allow download you can have
                      notes at my downloads grid for actual download.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">Why should I buy notes?</h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#downloaders"
                >
                  <div className="card-body">
                    <p>
                      The notes on our site are incredibly useful as an
                      educational tool when used correctly. They effectively
                      demonstrate the techniques that top students employ in
                      order to receive top marks. They also summaries the course
                      in a concise format and show what that student believed
                      were the most important elements of the course. Learn from
                      the best.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header" id="headingOne">
                  <h6 className="mb-0">
                    Will downloading notes guarantee I improve my grades?
                  </h6>
                  <a
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <img className="plus" src={addImage} alt="plus" />
                    <img className="minus" src={minusImage} alt="minus" />
                  </a>
                </div>

                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#downloaders"
                >
                  <div className="card-body">
                    <p>
                      How long is a piece of string? However, 90% of students
                      who purchased notes through our site said that doing so
                      improved their grades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HeaderFooterLayout>
  );
};

export default FAQ;
