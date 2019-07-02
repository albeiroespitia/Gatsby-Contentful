import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styles from './styles.module.scss'

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<header className={styles.header}>
			<h1>
				<Link className={styles.title} to="/">
					{data.site.siteMetadata.title}
				</Link>
			</h1>
			<nav>
				<ul className={styles.navList}>
					<li><Link to="/" className={styles.navItem} activeClassName={styles.activeNavItem}>Home</Link></li>
					<li><Link to="/blog" className={styles.navItem} activeClassName={styles.activeNavItem}>Blog</Link></li>
					<li><Link to="/about" className={styles.navItem} activeClassName={styles.activeNavItem}>About</Link></li>
					<li><Link to="/contact" className={styles.navItem} activeClassName={styles.activeNavItem}>Contact</Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
