import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
	return (
		<Col lg={12}>
			<div className="newsletter-bx wow slideInUp">
				<Row>
					<Col lg={12} md={6} xl={5}>
						<h3>
							"Some of the books I have read so far.<br></br> These have made me
							improve as a person".
						</h3>
					</Col>
					<Col md={6} xl={7}>
						<ul>
							<li>
								<span>Ray Dalio:</span> Principles.
							</li>
							<li>
								<span>Yuval Noha:</span> Sapiens, Homo Deus, 21 Lessons for the
								XXI century.
							</li>
							<li>
								<span>Adam Grant:</span> Originals, Think Again.
							</li>
							<li>
								<span>Hans Rosling:</span> Factfulness.
							</li>
						</ul>
					</Col>
				</Row>
			</div>
		</Col>
	);
};
