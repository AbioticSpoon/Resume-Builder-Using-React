import React from 'react';

export default function PersonalDetails(props) {
	return (
		<div className="container mt-4 w-50 ">
			<h3 className="text-center">Experience Details</h3>
			<form action="" className="mx-auto mt-4">
				<div className="form-group">
					<label htmlFor="company">Company</label>
					<input
						type="text"
						name="company"
						id=""
						className="form-control"
						defaultValue={props.value.company}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="comYear">Year</label>
					<input
						type="number"
						name="comYear"
						id=""
						className="form-control"
						defaultValue={props.value.comYear}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="designation">Designation</label>
					<input
						type="text"
						name="designation"
						id=""
						className="form-control"
						defaultValue={props.value.designation}
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
