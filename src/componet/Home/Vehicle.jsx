import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import img7 from "../../img/img7.png";
import img8 from "../../img/img8.svg";
import img9 from "../../img/img9.svg";
import img10 from "../../img/img10.svg";
import img11 from "../../img/play.png";
import img12 from "../../img/puse.png";

// const parts = [
//   { name: "Complete body", icon: { tr } },
//   { name: "Front", icon: "/img/icon-front.svg" },
//   { name: "Cabin", icon: "/img/icon-cabin.svg" },
//   { name: "Trunk", icon: "/img/icon-trunk.svg" },
//   { name: "Exterior", icon: "/img/icon-exterior.svg" },
// ];

const VehicleVideoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef([]);

  // Function to toggle play/pause
  const toggleAllVideos = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      videoRefs.current.forEach((video) => {
        if (video) {
          newState ? video.play() : video.pause();
        }
      });
      return newState;
    });
  };
  useEffect(() => {
    videoRefs.current = [];
  }, []);

  return (
    <section className="bg-black text-white py-5">
      <div className="container">
        <h2 className="heading_text wow zoomIn  animated">
          Evolving the drive with{" "}
          <strong className="fw-bold">360-degree</strong> <br />
          comprehensive solutions
        </h2>

        {/* Video */}

        <div className="tab_menu  d-flex align-items-start">
         
          <ul
            className="nav tabnew nav-pills flex-column nav-pills"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link text-primary fw-semibold active position-relative"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Passenger vehicles
                <br />
                <p>Revving up Nonwoven innovation from interior to exterior.</p>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link  fw-semibold position-relative"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Commercial vehicles
                <br />
                <p>Advancing Nonwoven engineering for heavy-duty vehicles.</p>
              </button>
            </li>
          </ul>
          <div className="tab-content tabnew" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="menu_car">
                <div className="tab-content" id="pills-tabContent1">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home1"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab1"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay={isPlaying}
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/ap.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile1"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab1"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact1"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab1"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-disabled1"
                    role="tabpanel"
                    aria-labelledby="pills-disabled-tab1"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video5.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-trunk1"
                    role="tabpanel"
                    aria-labelledby="pills-trunk-tab1"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video6.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-pills mb-3" id="pills-tab1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home1"
                      type="button"
                      role="tab"
                      aria-controls="pills-home1"
                      aria-selected="true"
                    >
                      <img src={img3} alt="" className="img-fluid" />
                      <p>Complete Body</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile1"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile1"
                      aria-selected="false"
                    >
                      <img src={img4} alt="" className="img-fluid" />
                      <p>Front</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact1"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact1"
                      aria-selected="false"
                    >
                      <img src={img5} alt="" className="img-fluid" />
                      <p>Cabin</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-disabled-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-disabled1"
                      type="button"
                      role="tab"
                      aria-controls="pills-disabled1"
                      aria-selected="false"
                    >
                      <img src={img6} alt="" className="img-fluid" />
                      <p>Trunk</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-trunk-tab1"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-trunk1"
                      type="button"
                      role="tab"
                      aria-controls="pills-trunk1"
                      aria-selected="false"
                    >
                      <img src={img7} alt="" className="img-fluid" />
                      <p>Exterior</p>
                    </button>
                  </li>

                  <li className="nav-item new_flex">
                  <div className="btn_text_new">
            <button className="btn" onClick={toggleAllVideos}>
              {isPlaying ? (
                <>
                  <img src={img11} className="play" />
                </>
              ) : (
                <>
                  <img src={img12} className="play" />
                </>
              )}
            </button>
          </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="menu_car wow  fadeInUp  animated">
                <div className="tab-content" id="pills-tabContent2">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home2"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab2"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "400px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video7.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile2"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab2"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video8.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact2"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab2"
                    tabindex="0"
                  >
                    <div
                      className=""
                      style={{ maxWidth: "500px", margin: "0 auto" }}
                    >
                      <video
                        ref={(el) => videoRefs.current.push(el)}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <source src="/img/video10.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tabContent2"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-home-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home2"
                      type="button"
                      role="tab"
                      aria-controls="pills-home2"
                      aria-selected="true"
                    >
                      <img src="https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg" alt="" className="img-fluid" />
                      <p>Complete Body</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile2"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile2"
                      aria-selected="false"
                    >
                      <img src="https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg" alt="" className="img-fluid" />
                      <p>Engine</p>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-contact-tab2"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact2"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact2"
                      aria-selected="false"
                    >
                      <img src="https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg" alt="" className="img-fluid" />
                      <p>Cabin</p>
                    </button>
                  </li>
                  {/* <li className="nav-item new_flex">
                  <div className="btn_text_new">
            <button className="btn" onClick={toggleAllVideos}>
              {isPlaying ? (
                <>
                  <img src={img11} className="play" />
                </>
              ) : (
                <>
                  <img src={img12} className="play" />
                </>
              )}
            </button>
          </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleVideoSection;
