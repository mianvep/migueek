import { Col, Container, Row } from "react-bootstrap";
import imgs from "../imports/media.js";
import { Newsletter } from "./Newsletter.jsx";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Newsletter />
					<Col size={12} sm={6}>
						<img src={imgs.migueek} alt="Logo" />
					</Col>
					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/miguel-verap">
								<img src={imgs.in} alt="Icon" />
							</a>
							<a href="https://github.com/mianvep">
								<img src={imgs.ghb} alt="Icon" />
							</a>
							<a href="https://www.instagram.com/migueek/">
								<img src={imgs.ig} alt="Icon" />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
