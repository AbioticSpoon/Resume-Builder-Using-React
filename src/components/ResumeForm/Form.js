import React, { Component } from 'react';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import ExperieceDetails from './ExperienceDetails';
import Skills from './Skills';
import Submit from './Submit';

export class Form extends Component {
	constructor() {
		super();
		this.state = {
			page: 1,
			name: '',
			email: '',
			address: '',
			phone: '',
			institue: '',
			year: '',
			degree: '',
			company: '',
			comYear: '',
			designation: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	nextPage = () => {
		this.setState({ page: this.state.page + 1 });
	};
	prevPage = () => {
		this.setState({ page: this.state.page - 1 });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		switch (this.state.page) {
			case 1:
				return (
					<div>
						<PersonalDetails next={this.nextPage} value={this.state} handleChange={this.handleChange} />
					</div>
				);
				break;
			case 2:
				return (
					<div>
						<EducationDetails
							next={this.nextPage}
							prev={this.prevPage}
							value={this.state}
							handleChange={this.handleChange}
						/>
					</div>
				);
				break;
			case 3:
				return (
					<div>
						<ExperieceDetails
							next={this.nextPage}
							prev={this.prevPage}
							value={this.state}
							handleChange={this.handleChange}
						/>
					</div>
				);
				break;
			case 4:
				return (
					<div>
						<Skills next={this.nextPage} prev={this.prevPage} value={this.state} />
					</div>
				);
				break;
			case 5:
				return (
					<div>
						<Submit value={this.state} />
					</div>
				);
				break;

			default:
				break;
		}
	}
}

export default Form;
