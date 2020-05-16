import React from 'react'
import { useHistory } from "react-router-dom";
import './AboutMe.css'
import PrevButton from '../PrevButton/PrevButton'
import NextButton from '../NextButton/NextButton'

function AboutMe() {
	
    let history = useHistory();
    const goNext = () => {
       history.push("/skills");
	}
	const goPrevious = () => {
		history.push("/")
	}
	const goToProjects = () => {
		history.push("/projects")
	}
	const goToSkills = () => {
		history.push("/skills")
	}
	

	if(document.documentElement.clientWidth > 578)
	{
		return (
			<div className="about flex-center arise">
				<h2>"My passion is creating, and I find happiness in being a better me today than the me yesterday."</h2>
				<div>
					<p>I am a guy who working for 3 years in radionavigation developer team. I've got so much team work experience during that time.</p>
					<p>Although I am a ragio engineer by my education and my work I've got enough expericence as in theory as in practice of programming.</p>
					<p>In my work I used programming language and framework such C++, Qt, LabView and little bit assembler.</p>
					<p>But one day I heard about front end and web programming from my colleages and I decided to read about that.</p>
					<p>Since that I so loved it and I started to learn this awesome part of IT industry.</p>
					<p>Now I have 1,5 year front-end and a little bit back-end experience and really want to be a great front end developer who will help company grows so much.</p>
				</div>
				<div className="flex-center" style={{marginTop:'2rem'}}>
					<h3>Want to see more? See my web skills -></h3>
					<h3 className="openMySkills" onClick={goToSkills}>
						<span className="red-color">this</span>
						.
						<span className="blue-color">openMySkills()</span>
					</h3>
				</div>
				<div className="flex-center">
					<h3>Or maybe you want to see my projects? See it here -></h3>
					<h3 className="openProjects" onClick={goToProjects}>
						<span className="red-color">this</span>
						.
						<span className="blue-color">openProjects()</span>
					</h3>
				</div>
				<PrevButton goPrevious={goPrevious} opacity={100} cursor={'pointer'}/>
				<NextButton goNext={goNext} cursor={'pointer'}/>
				
			</div>
		);
	}
	else {
		return (
			<div className="about flex-center arise">
				<h3>"My passion is creating, and I find happiness in being a better me today than the me yesterday."</h3>
				<div>
					<p>I am a guy who working for 3 years in radionavigation developer team. I've got so much team work experience during that time.</p>
					<p>Although I am a ragio engineer by my education and my work I've got enough expericence as in theory as in practice of programming.</p>
					<p>In my work I used programming language and framework such C++, Qt, LabView and little bit assembler.</p>
					<p>But one day I heard about front end and web programming from my colleages and I decided to read about that.</p>
					<p>Since that I so loved it and I started to learn this awesome part of IT industry.</p>
					<p>Now I have 1,5 year front-end and a little bit back-end experience and really want to be a great front end developer who will help company grows so much.</p>
				</div>
			</div>
		);
	}
	
}

export default AboutMe