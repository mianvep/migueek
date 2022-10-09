import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProyectCard } from "./ProyectCard";
import imgs from "../imports/media.js";
import colorSharp2 from "../assets/images/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Proyects = () => {
	const projects = [
		{
			title: "Accounting Website",
			description: "Design & Development with JavaScript",
			imgUrl: imgs.proy1,
		},
		{
			title: "Shopping Cart",
			description: "Design & Development with JavaScript",
			imgUrl: imgs.proy2,
		},
		{
			title: "Rick and Morty App",
			description: "Design & Development with react",
			imgUrl: imgs.proy3,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h2>Projects</h2>
									<p>
										Here I present the main projects that I have been developing
										in the different areas, using each new technology that I am
										adding to my knowledge to improve my work experience.
									</p>
									<Tab.Container id="projects-tabs" defaultActiveKey="first">
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">Fronted</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">Backend</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="third">Web 3</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible ? "animate__animated animate__slideInUp" : ""
											}
										>
											<Tab.Pane eventKey="first">
												<Row>
													{projects.map((project, index) => {
														return <ProyectCard key={index} {...project} />;
													})}
												</Row>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<p>Building proyects ....</p>
											</Tab.Pane>
											<Tab.Pane eventKey="third">
												<p>Building proyects ....</p>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2}></img>
		</section>
	);
};
