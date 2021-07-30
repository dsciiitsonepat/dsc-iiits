import React from 'react'

export default function TeamCard(props) {
	//TODO add firebase support
	console.log(props.color);
	return (
		<div className="card">
			<div className="bg-card">
				<div className="card-header" style={{backgroundColor:props.color}}></div>
				<div className="card-content" style={{backgroundColor:"#c5c5c5"}}>
					<h2>Name</h2>
					<p>Role</p>
				</div>
			</div>
			<div className="img-circle" style={{backgroundColor:"#f0f0f0"}}></div>
		</div>
	)
}
