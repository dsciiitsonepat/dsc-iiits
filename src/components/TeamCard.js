import React from 'react'

export default function TeamCard(props) {
	console.log(props.color);
	return (
		<div className="card">
			<div className="bg-card">
				<div className="card-header" style={{backgroundColor:props.color}}></div>
				<div className="card-content" style={{backgroundColor:"#c5c5c5"}}>
					<h2>{props.member.name}</h2>
					<p>{props.member.role}</p>
				</div>
			</div>
			<div className="img-circle" style={{backgroundColor:"#f0f0f0"}}></div>
		</div>
	)
}
