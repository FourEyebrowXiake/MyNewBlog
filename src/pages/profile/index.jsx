import React from 'react'

class Profile extends React.Component {
  render() {
    const pathPrefix =
      process.env.NODE_ENV === 'development' ? '' : __PATH_PREFIX__
    return (
      <div>
        <section className="text-center">
          <div className="container">
            <img
              src={pathPrefix + '/img/profile.jpg'}
              className="rounded-circle mx-auto d-block"
              width="120px"
            />
            <h1>四条眉毛</h1>
            <div>
              <a href="https://www.zhihu.com/people/fish-86-23/activities">
                Follow me in Zhihu
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="bg-primary text-white text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading">SKIL</h2>
                <hr className="border-white" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="HTML"
                >
                  <i
                    className="devicon-html5-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="JavaScript"
                >
                  <i
                    className="devicon-javascript-plain wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="React.js"
                >
                  <i
                    className="devicon-react-original wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col-lg-3 col-6">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Node.js"
                >
                  <i
                    className="devicon-nodejs-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div
                  className="service-box"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Android"
                >
                  <i
                    className="devicon-android-plain-wordmark wow bounceIn"
                    data-wow-duration="2.0s"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="text-center">
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
                <p>大学期间，我是先接触了Android开发，然后才转向前端。</p>
                <p>通过学习Android，我才意识到数据结构和设计模式的重要性。当项目中的代码越写越多的时候，你就要学会组织代码了。</p>
                <p>
                  现在，正在努力学习前端。自认为已经入了Js的门，了解事件模型、闭包和原型链，并用Js做了些小项目，如构建一个生态系统。而且，清楚网站优化的方向。但是，对CSS缺乏经验，没有独立完成过涉及前后端的大项目。只写过一些前端和后端的小项目。如用redux和react写了一个贴吧应用，用express和Mongodb做了个REST
                  API。
                </p>
                <p>清楚自己的不足，所以正在做这个新博客。</p>
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
              <div className="col-md-6 text-center">
                <h2 className="section-heading">Repositories</h2>
              </div>
              <div className="col-md-6 text-left">
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/MyNewBlog"
                    style={{ color: 'white' }}
                  >
                    四条眉毛的博客
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/PostList"
                    style={{ color: 'white' }}
                  >
                    PostList
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/REST-API"
                    style={{ color: 'white' }}
                  >
                    REST API
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/FourEyebrowXiake/HotMovie"
                    style={{ color: 'white' }}
                  >
                    Android
                  </a>
                </li>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Profile
