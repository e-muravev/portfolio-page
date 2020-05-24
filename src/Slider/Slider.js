import React, { useState } from 'react'
import cat from './cat.jpg'
import mem1 from './Untitled-8.jpg'
import mem2 from './javascript-everywhere.jpg'
import mem3 from './Tramp.jpg'
import mem4 from './Harry.jpg'
import './slider.css'

const Slider = () => {
	const [slider, setSlider] = useState(0)
	
	const incrementSlider = () => {
		let x = slider
		if (x < 2) { setSlider(++x) }
	}

	const decrementSlider = () => {
		let x = slider
		if (x > -2) {setSlider(--x)}
	}

	return (
			<>
			<div className="slideshow-container">
				<img  src={cat}  className={slider === 0 ? "activate fade" : "fade mySlides"}  alt='img'/>
				<img  src={mem1} className={slider === 1 ? "activate fade" : "fade mySlides"} alt='img'/>
				<img  src={mem2} className={slider === -1 ? "activate fade" : "fade mySlides"} alt='img'/>
				<img  src={mem3} className={slider === 2 ? "activate fade" : "fade mySlides"} alt='img'/>
				<img  src={mem4} className={slider === -2 ? "activate fade" : "fade mySlides"} alt='img'/>
		  		<button className="prev" onClick={decrementSlider}>&#10094;</button>
		        <button className="next" onClick={incrementSlider}>&#10095;</button>
			</div>
			<div>
				<span className={slider === -2 ? "dot current" : "dot"} onClick={()=>setSlider(-2)}></span> 
				<span className={slider === -1 ? "dot current" : "dot"} onClick={()=>setSlider(-1)}></span> 
				<span className={slider === 0 ? "dot current" : "dot"} onClick={()=>setSlider(0)}></span> 
				<span className={slider === 1 ? "dot current" : "dot"} onClick={()=>setSlider(1)}></span>
				<span className={slider === 2 ? "dot current" : "dot"} onClick={()=>setSlider(2)}></span>
			</div>
			</>
	);
}

export default Slider;