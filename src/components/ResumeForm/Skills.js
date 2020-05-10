import React, { Component } from 'react';
import { SKILLS } from './list';
import './tagstyle.css';
import ReactTags from 'react-tag-autocomplete';
import Submit from './Submit';

const suggestions = SKILLS.map((country) => {
	return {
		id: country,
		name: country
	};
});

const KeyCodes = {
	comma: 188,
	enter: 13
};

const delimiters = [ KeyCodes.comma, KeyCodes.enter ];

class Skills extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: [ { id: 'html', name: 'html' } ],
			suggestions: suggestions,
			showComp: false
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAddition = this.handleAddition.bind(this);
	}

	handleDelete(i) {
		const { tags } = this.state;
		this.setState({
			tags: tags.filter((tag, index) => index !== i)
		});
	}

	handleAddition(tag) {
		this.setState((state) => ({ tags: [ ...state.tags, tag ] }));
	}

	submitClick = () => {
		this.setState({ showComp: true });
	};

	render() {
		const { tags, suggestions } = this.state;
		return (
			<div className="container mt-4 mb-4">
				<h3 className="text-center">Add Skills</h3>
				<div className="out mt-4">
					<div className="in">
						<ReactTags
							tags={tags}
							suggestions={suggestions}
							delimiters={delimiters}
							handleDelete={this.handleDelete}
							handleAddition={this.handleAddition}
							allowNew={true}
						/>
						<div className="mt-3">
							<button onClick={this.submitClick} className="btn btn-primary mr-2">
								Submit
							</button>
							<button onClick={this.props.prev} className="btn btn-secondary">
								Go Back
							</button>
						</div>
						{this.state.showComp ? <Submit value={this.props.value} skills={this.state.tags} /> : null}
					</div>
				</div>
			</div>
		);
	}
}
export default Skills;
