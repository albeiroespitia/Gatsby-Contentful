import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import './styles/index.scss'

const IndexPage = () => {
	return(
		<Layout>
			<Head title="Home"/>
			<h1>Hello EasierJs</h1>
			<h2>Im Albeiro, A full stack developer living in Colombia</h2>
			<p>Need a developer? <Link to="/contact">Contact me</Link></p>
		</Layout>
	)
}

export default IndexPage;
