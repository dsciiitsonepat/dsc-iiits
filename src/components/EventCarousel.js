import logo from "../assets/logo1.png";
import "../styles/Events.css";
import React, {useState} from 'react'
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

export default function EventCarousel() {
	const arr  = [1,2,3,4,5]
	const [current, setCurrent] = useState(0);

	const length = arr.length;

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
			{arr.map((slider,idx)=>{
				return(
					<div className={idx===current ? "event-slide-active":"event-slide"}>
						{idx===current && <EventCard />}
					</div>
				)
			})}
		</section>
	)
}

function EventCard() {
	return (
		<div className="event-card" style={{backgroundColor:"#c4c4c4", borderRadius:"32px"}}>
			<div>
				<h1>Event Title</h1>
				<p>Helllooooooooooooooooooooooo</p>
			</div>
			<div className="event-media">
				<h3>Media</h3>
			</div>
		</div>
	)
}