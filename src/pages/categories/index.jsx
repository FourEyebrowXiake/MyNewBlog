import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";

import SitePost from "../../components/SitePost";

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      linkArray: []
    };
  }

  handleClick(category) {
    var Links = [];
    const posts = get(this, "props.data.remark.posts");
    const site = get(this, "props.data.site.siteMetadata");
    posts.forEach((data, index) => {
      const path = get(data, "post.frontmatter.path");
      const categories = get(data, "post.frontmatter.categories");
      categories.forEach((category_, index_) => {
        if (category == category_) {
          Links.push(
            <SitePost data={data.post} site={site} isIndex={true} key={path} />
          );
        }
      });
    });

    this.setState({
      linkArray: Links
    });
  }

  createCategory(i, state) {
    return (
      <li key={i} style={{ margin: "8px", float: "left" }}>
        <span
          onClick={this.handleClick.bind(this, i)}
          className="badge badge-primary text-white"
        >
          {i} {state[i]}
        </span>
      </li>
    );
  }

  render() {
    var state = {};
    const posts = get(this, "props.data.remark.posts");
    const category = [];
    posts.forEach((data, i) => {
      const categories = get(data, "post.frontmatter.categories");
      categories.forEach((category_, i) => {
        if (!state[category_]) {
          state[category_] = 1;
        } else {
          state[category_]++;
        }
      });
    });

    for (var i in state) {
      category.push(this.createCategory(i, state));
    }

    return (
      <div className="fill-viewport">
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-unstyled">{category}</ul>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-heading text-center">POST</h2>
                <hr className="border-primary" />
              </div>
            </div>
          </div>
          {this.state.linkArray}
        </section>
      </div>
    );
  }
}

export default Categories;

export const categoriesQuery = graphql`
  query CategoriesQuery {
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
