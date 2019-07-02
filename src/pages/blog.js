import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/Head'
import styles from './styles/blog.module.scss'


const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query{
			allContentfulBlogPost(sort: {fields:publishedDate, order: DESC}){
				edges{
					node{
						title
						slug
						publishedDate(formatString:"MMMM Do, YYYY")
					}
				}
			}
		}
	`)
	console.log(data);
	return(
		<Layout>
			<Head title="Blog"/>
			<h1>Blog</h1>
			<ol className={styles.posts}>
				{data.allContentfulBlogPost.edges.map((edge)=>{
					return(
						<li className={styles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
								<p>{edge.node.publishedDate}</p>
							</Link>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default BlogPage;
