import React from "react";
import FontAwesome from "../FontAwesome/index";

const metadata = {
  socialMedia: {
    github: {
      fullName: "GitHub",
      url: "https://github.com/kbrgl"
    },
    email: {
      fullName: "Email",
      url: "mailto:fourfishxiake@gmail.com",
      icon: "envelope"
    }
  }
};

const socialMediaInfo = Object.keys(metadata.socialMedia).map(key => {
  const info = {
    name: key,
    ...metadata.socialMedia[key]
  };
  return info;
});

const Social = () => {
  const socialIcons = socialMediaInfo.map((info, index) => (
    <li
      key={info.name}
      style={{
        display: "inline-block",
        marginRight: "30px"
      }}
    >
      <a href={info.url}>
        <FontAwesome icon={info.icon ? info.icon : info.name} />
      </a>
    </li>
  ));

  return (
    <div className="container">
      <div className="row align-items-center text-center ">
        <div className="col">
          <ul className="list-unstyled">
            {socialIcons}
            <li className="h6" style={{ display: "inline-block" }}>
              <a href={"https://www.zhihu.com/people/fish-86-23/activities"}>
                知
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Social;
