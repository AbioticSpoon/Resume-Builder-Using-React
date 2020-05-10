import React from 'react';

export default function PersonalDetails(props) {
	return (
		<div className="container mt-4 w-50 ">
			<h3 className="text-center">Education Details</h3>
			<form action="" className="mx-auto mt-4">
				<div className="form-group">
					<label htmlFor="institute">Institute</label>
					<input
						type="text"
						name="institute"
						id=""
						className="form-control"
						defaultValue={props.value.institute}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="year">Year</label>
					<input
						type="number"
						name="year"
						id=""
						className="form-control"
						defaultValue={props.value.year}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="degree">Degree</label>
					<input
						type="text"
						name="degree"
						id=""
						className="form-control"
						defaultValue={props.value.degree}
						onChange={props.handleChange}
					/>
				</div>

				<button className="btn btn-primary mr-2" onClick={props.next}>
					Next
				</button>
				<button className="btn btn-secondary mr-2" onClick={props.prev}>
					Go Back
				</button>
			</form>
		</div>
	);
}
