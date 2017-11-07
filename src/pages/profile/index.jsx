import React from "react";
import Social from "../../components/Social/index";

class Profile extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === "development" ? "" : __PATH_PREFIX__;
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center text-center ">
              <div className="col">
                <img
                  src={pathPrefix + "/img/profile.jpg"}
                  className="rounded-circle mx-auto d-block "
                  width="130px"
                />
                <p className="lead mt-3">竹杖芒鞋轻胜马,一蓑烟雨任平生</p>
                <Social />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKIL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div id="features" className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i className="devicon-html5-plain" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="service-box" title="JavaScript">
                  <i className="devicon-javascript-plain" />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="service-box" title="React.js">
                  <i className="devicon-react-original" />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div className="service-box" title="Node.js">
                  <i className="devicon-nodejs-plain-wordmark" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="service-box" title="Android">
                  <i className="devicon-android-plain-wordmark" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SPEAK</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                <p>Hi, 我是四条眉毛。</p>
                <p>我现在主要从事web开发，之前写过Android，对Android开发也略知一二.</p>
                <p>
                  我喜欢看动漫，最喜欢《Cowboy
                  Bebop》，一直琢磨着把博客头像换成Spike。结果，我确实是很自信，或者说很自恋。我还喜欢听音乐，看电影，四处旅游，就是对吃的不太感兴趣，给我一碗蛋炒饭就足够了。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="bg-primary text-white text-center color-inverse"
          id="repos"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-left">
                <h2 className="section-heading">Repositories</h2>
              </div>
              <div className="col-md-6 text-left mt-3">
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/MyNewBlog"
                    style={{ color: "white" }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/HotMovie"
                    style={{ color: "white" }}
                  >
                    HotMovie
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
