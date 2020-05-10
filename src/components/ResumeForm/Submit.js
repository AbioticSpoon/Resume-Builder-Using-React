import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const _exportPdf = () => {
	html2canvas(document.querySelector('#capture')).then((canvas) => {
		// document.body.appendChild(canvas); // if you want see your screenshot in body.
		const imgData = canvas.toDataURL('image/png');
		const pdf = new jsPDF();
		pdf.addImage(imgData, 'PNG', 0, 0);
		pdf.save('download.pdf');
	});
};

const Submit = (props) => {
	return (
		<div>
			<button className="btn btn-primary mt-4" onClick={_exportPdf}>
				download
			</button>

			<div id="capture">
				<h5>{props.value.name}</h5>
				<p>Email : {props.value.email}</p>
				<p>Phone : {props.value.phone}</p>
				<h6>Education</h6>
				<p>College : {props.value.institute}</p>
				<p>Year : {props.value.year}</p>
				<p>Degree : {props.value.degree}</p>
				<h6>Experience</h6>
				<p>Company : {props.value.company}</p>
				<p>Year : {props.value.comYear}</p>
				<p>Designation : {props.value.designation}</p>
				<h6>Skills</h6>
				{props.skills.map((skill) => {
					return <p key={skill.id}>Skill: {skill.name}</p>;
				})}
			</div>
		</div>
	);
};

export default Submit;
