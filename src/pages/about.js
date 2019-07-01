import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = () => {
	return(
		<Layout>
			<h1>About Me</h1>
			<h2>I currently study Data Science in the university</h2>
			<Link to="/contact">Contact me</Link>
		</Layout>
	)
}

export default AboutPage;
