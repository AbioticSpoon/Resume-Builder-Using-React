import React from 'react';

export default function PersonalDetails(props) {
	// const { name, email, address, phone } = this.props;
	return (
		<div className="container mt-4 w-50 ">
			<h3 className="text-center">Personal details</h3>
			<form action="" className="mx-auto mt-4">
				<div className="form-group">
					<label htmlFor="name">Full Name</label>
					<input
						type="text"
						name="name"
						id=""
						className="form-control"
						defaultValue={props.value.name}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">E-mail</label>
					<input
						type="email"
						name="email"
						id=""
						className="form-control"
						defaultValue={props.value.email}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						name="address"
						id=""
						className="form-control"
						defaultValue={props.value.address}
						onChange={props.handleChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone</label>
					<input
						type="number"
						name="phone"
						id=""
						className="form-control"
						defaultValue={props.value.phone}
						onChange={props.handleChange}
					/>
				</div>

				<button className="btn btn-primary mt-2" onClick={props.next}>
					Next
				</button>
			</form>
		</div>
	);
}
