import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgs from "../imports/media.js";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h2>Skills</h2>
							<p>
								I dominate the main technologies and to collaborate in the
								development of potential projects.<br></br> I also focus on
								learning new more useful tools.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={imgs.html_img} alt="Image" />
									<h5>Html 5</h5>
								</div>
								<div className="item">
									<img src={imgs.css_img} alt="Image" />
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src={imgs.js_img} alt="Image" />
									<h5>JavaScript</h5>
								</div>
								<div className="item">
									<img src={imgs.react_img} alt="Image" />
									<h5>React JS</h5>
								</div>
								<div className="item">
									<img src={imgs.node_img} alt="Image" />
									<h5>Node JS</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp} alt="Image" />
		</section>
	);
};
