import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					CVBuilder
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home<span className="sr-only">(current)</span>
							</Link>
							{/* <a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a> */}
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/create">
								Build<span className="sr-only">(current)</span>
							</Link>

							{/* <a className="nav-link" href="/create">
								Build-Resume
							</a> */}
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
