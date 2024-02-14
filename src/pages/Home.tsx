import {
  customer1,
  customer2,
  customer3,
  customer4,
  downloadImage,
  sellerImage,
} from "assets/images";
import Footer from "component/Footer";
import Header from "component/Header";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <section id="home-bg-image">
        <div id="home-content">
          <div className="container">
            <div className="row">
              <div
                id="home-content-inner"
                className="col-lg-6 col-md-7 col-sm-8 col-12"
              >
                <h1>Download Free/Paid Notes or Sale your Book</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Expedita nemo nostrum eos nisi.
                </p>
                <div id="btn-learn-more">
                  <a
                    className="btn btn-transperent"
                    href="FAQ.html"
                    title="Learn More"
                    role="button"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="content-box-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-4 col-12">
                <div className="heading">
                  About <br />
                  Notes MarketPlace
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-8 col-12">
                <div id="paragraph1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Pariatur, quam nulla aut nobis laboriosam quo deleniti,
                    ratione tenetur illo consequuntur ut praesentium tempore
                    similique neque sunt. Laboriosam sit aliquam voluptate.
                  </p>
                </div>
                <div id="paragraph2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus atque porro nesciunt natus error, et, alias,
                    beatae facere voluptatum obcaecati quam nihil rerum quisquam
                    quod sequi quos! Tempore, excepturi, magni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div className="content-box-md">
          <div className="container text-center">
            <div className="heading">How it Works</div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="work-image">
                  <img src={downloadImage} alt="download" />
                </div>
                <div className="sub-heading">Download Free/Paid Notes</div>
                <p>
                  Get Material for your <br />
                  Cources etc.
                </p>
                <div className="btn-work">
                  <a
                    className="btn btn-color"
                    href="search notes.html"
                    title="Download"
                    role="button"
                  >
                    Download
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="work-image">
                  <img src={sellerImage} alt="seller" />
                </div>
                <div className="sub-heading">Seller</div>
                <p>
                  Upload and Download Cources <br />
                  and Materials etc.
                </p>
                <div className="btn-work">
                  <a
                    className="btn btn-color"
                    href="login.html"
                    title="Sell Book"
                    role="button"
                  >
                    Sell Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="customer">
        <div className="container">
          <div className="content-box-md">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center heading">
                  What Our Customers are Saying
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="white-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                      <img
                        src={customer1}
                        className="img-respnosive img-rounded"
                        alt="customer"
                      />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                      <div className="sub-heading-1">Walter Meller</div>
                      <div id="des">Founder & CEO,Matrix Group</div>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maiores eligendi rerum illo, nulla facere
                      suscipit quae fugit quos. Repudiandae quia tenetur
                      necessitatibus, alias quis quisquam quam fuga! Est,
                      inventore."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="white-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                      <img
                        src={customer2}
                        className="img-respnosive img-rounded"
                        alt="customer"
                      />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                      <div className="sub-heading-1">Jonnie Riley</div>
                      <div id="des">Employee,Curious Snakcs</div>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maiores eligendi rerum illo, nulla facere
                      suscipit quae fugit quos. Repudiandae quia tenetur
                      necessitatibus, alias quis quisquam quam fuga! Est,
                      inventore."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row top-buffer">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="white-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                      <img
                        src={customer3}
                        className="img-respnosive img-rounded"
                        alt="customer"
                      />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                      <div className="sub-heading-1">Amilia Luna</div>
                      <div id="des">Teacher,Saint Joseph High School</div>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maiores eligendi rerum illo, nulla facere
                      suscipit quae fugit quos. Repudiandae quia tenetur
                      necessitatibus, alias quis quisquam quam fuga! Est,
                      inventore."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <div className="white-box">
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-4">
                      <img
                        src={customer4}
                        className="img-respnosive img-rounded"
                        alt="customer"
                      />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-8">
                      <div className="sub-heading-1">Daniel Cardos</div>
                      <div id="des">Software Engineer,INfinitum Company</div>
                    </div>
                  </div>
                  <div className="row">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Asperiores maiores eligendi rerum illo, nulla facere
                      suscipit quae fugit quos. Repudiandae quia tenetur
                      necessitatibus, alias quis quisquam quam fuga! Est,
                      inventore."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
