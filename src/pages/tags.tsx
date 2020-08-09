import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery, Link } from "gatsby"

import './tags.scss'

const TagPage = () => {
  const data = useStaticQuery(graphql`query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          tags
          title
          permalink
          category
        }
        fields {
          slug
          date
        }
      }
    }
  }`)

  const d1: {[k in string]: {link: string, title: string; date: Date}[]} = {}


  data.allMarkdownRemark.nodes.forEach(node => {
    const {tags} = node.frontmatter
    if (tags && tags.length > 0){
      tags.forEach(tag => {
        const {date, slug} = node.fields
        const {permalink, category, title} = node.frontmatter;
        const link = permalink || `/${category}${slug}`
        if (!d1[tag]) {
          d1[tag] = []
        }
        d1[tag].push({link: slug, date, title})
      })
    }
  })

  let d2 = []
  for(const item in d1) {
    d2.push({
      tag: item,
      node: d1[item]
    })
  }
  d2.sort((a, b)=> {
    return a.tag.toLowerCase() > b.tag.toLowerCase() ? 1 : -1;
  })


  return (
    <Layout>
      <SEO title="태그" />
      <div className="tag-page container">
        <h1 className="my-10">태그</h1>
        {d2.map(item => {
          return <div className="tag-item mb-5">
            <h2 id={item.tag}>
              <Link to={`#${item.tag}`} className="tag-title-link">#{item.tag}</Link>
            </h2>
            <ul className="post-list">
              {item.node
                .sort((a, b) => {
                  return a.date > b.date ? -1 : 1;
                })
                .map(node => {
                  return <li className="post-item" key={node.link}>
                      <Link className="post-title" to={node.link}>{node.title}</Link>
                  </li>
                })}
            </ul>
          </div>
        })}
      </div>
    </Layout>

  )
}

export default TagPage