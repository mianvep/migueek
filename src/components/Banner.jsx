import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import imgs from "../imports/media.js";
import cv from "../docs/MIGUEL_VERA_CV.pdf";
import "animate.css";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "Blockchain Developer", "Entrepreneur"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row>
					<Col xs={12} md={6} xl={7}>
						<span className="tagline">Welcome to my personal universe</span>
						<h1>
							{`I'm Miguel,`}{" "}
							<span
								className="txt-rotate"
								dataPeriod="1000"
								data-rotate='[ "Web Developer", "and", "Web Designer" ]'
							>
								<span className="wrap">{text}</span>
							</span>
						</h1>
						<p>
							I am a young engineer, technology developer and entrepreneur. I
							adhere to the technological evolution and the solutions that etsa
							can offer to humanity.
						</p>
						<a href={cv} id="cv" download>
							<button onClick={() => console.log("")}>
								Download cv
								<ArrowDownCircle size={25} />
							</button>
						</a>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={imgs.tierra} alt="Header Img" />
					</Col>
				</Row>
			</Container>
		</section>
	);
};
