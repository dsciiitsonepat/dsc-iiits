import "../styles/Events.css";
import React, {useState} from 'react'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

export default function EventCarousel(props) {
	const [current, setCurrent] = useState(0);

	const length = props.slides.length;

	const nextCard = () => {
		setCurrent(current===length-1 ? 0 : current+1);
		console.log(current);
	}

	const prevCard = () => {
		setCurrent(current===0 ? length-1 : current-1);
	}
	return (
		<section className="event-slider">
		<FaArrowAltCircleLeft className="arrow-left" onClick={prevCard}/>
		<FaArrowAltCircleRight className="arrow-right" onClick={nextCard}/>
			{props.slides.map((event,idx)=>{
				return(
					<div className={idx===current ? "event-slide-active":"event-slide"}>
						{idx===current && <EventCard event={event}/>}
					</div>
				)
			})}
		</section>
	)
}

function EventCard({event}) {
	return (
		<div className="event-card" style={{backgroundColor:"#c4c4c4", borderRadius:"32px"}}>
			<div style={{flexBasis:"45%"}}>
				<h1>{event.name}</h1>
				<p>{event.desc}</p>
			</div>
			<div className="event-media">
				<h3>{event.media}</h3>
			</div>
		</div>
	)
}