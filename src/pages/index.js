import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import sortBy from "lodash/sortBy";
import Helmet from "react-helmet";

import SitePost from "../components/SitePost";

class BlogIndex extends React.Component {
  render() {
    const pageLinks = [];
    const site = get(this, "props.data.site.siteMetadata");
    const posts = get(this, "props.data.remark.posts");

    const sortedPosts = sortBy(posts, post =>
      get(post, "post.frontmatter.date")
    ).reverse();

    sortedPosts.forEach((data, i) => {
      const layout = get(data, "post.frontmatter.layout");
      const path = get(data, "post.path");
      if (layout === "post" && path !== "/404/") {
        pageLinks.push(
          <SitePost data={data.post} site={site} isIndex={true} key={path} />
        );
      }
    });

    return (
      <div>
        <Helmet
          title={get(site, "title")}
          meta={[
            { property: "og:title", content: get(site, "title") },
            { property: "og:type", content: "website" },
            { property: "og:description", content: get(site, "description") },
            {
              property: "og:image",
              content: `${get(site, "url")}/img/profile.jpg`
            }
          ]}
        />
        {pageLinks}
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            categories
            description
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`;
