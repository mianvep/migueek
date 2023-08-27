import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import imgs from "../imports/media.js";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Router>
			<Navbar expand="md" className={scrolled ? "scrolled" : ""}>
				<Container>
					<NavbarBrand>
						<img src={imgs.migueek} alt="Logo" />
					</NavbarBrand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === "home" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("home")}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#skills"
								className={
									activeLink === "skills" ? "active navbar-link" : "navbar-link"
								}
								onClick={() => onUpdateActiveLink("skills")}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === "projects"
										? "active navbar-link"
										: "navbar-link"
								}
								onClick={() => onUpdateActiveLink("projects")}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a
									href="https://www.linkedin.com/in/miguel-verap"
									target="_blank"
								>
									<img src={imgs.in} alt="linkedin" />
								</a>
								<a href="https://github.com/mianvep" target="_blank">
									<img src={imgs.ghb} alt="github" />
								</a>
								<a href="https://www.instagram.com/verapmiguel/" target="_blank">
									<img src={imgs.ig} alt="instagram" />
								</a>
							</div>
							<HashLink to="#connect">
								<button className="vvd">
									<span>Let’s Connect</span>
								</button>
							</HashLink>
						</span>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Router>
	);
};
