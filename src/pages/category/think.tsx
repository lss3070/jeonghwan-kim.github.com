import { graphql } from "gatsby";
import React from "react";
import { CateogryPosts } from ".";

export default (p) => <CateogryPosts title="생각" posts={p.data.allMarkdownRemark.edges.map(e => e.node)} />


export const pageQuery = graphql`{
  allMarkdownRemark(sort: {fields: fields___date, order: DESC}, filter: {frontmatter: {category: {eq: "think"}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
          date(formatString: "YYYY년 MM월 DD일")
        }
        frontmatter {
          title
        }
      }
    }
  }
}`
