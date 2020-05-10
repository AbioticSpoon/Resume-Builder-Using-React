import React from 'react';
import homestyle from './homePage.style.css';
import resume from './resume.svg';
import { Link } from 'react-router-dom';

function Homepage() {
	return (
		<div className="container container2 d-flex justify-content-between align-items-center">
			<div>
				<h1 className="heading">
					Build your <span className="text-span">Resume</span> with <br /> us and get your dream job.
				</h1>
				<Link className="btn btn-primary mt-3" to="/create">
					Build Your Resume
				</Link>
				{/* <a href="/create" className="btn btn-primary mt-3">
					Build Your Resume
				</a> */}
			</div>
			<div className="hero-right">
				<img src={resume} alt="" />
			</div>
		</div>
	);
}

export default Homepage;
