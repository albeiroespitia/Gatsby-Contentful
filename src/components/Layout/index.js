import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './styles.css'

const Layout = (props) => {
	return(
		<div>
			<Header/>
			{props.children}
			<Footer/>
		</div>
	)
}

export default Layout;
