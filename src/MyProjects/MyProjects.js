import React from 'react'
import { useHistory } from "react-router-dom"
import NextButton from '../NextButton/NextButton'
import PrevButton from '../PrevButton/PrevButton'
import faceDetect from './face detect.jpg'
import filmSearch from './film search.jpg'
import weatherApp from './weather app.jpg'
import portfolio from './portfolio.jpg'


function MyProjects() {
    
    let history = useHistory();
    const goNext = () => {
       history.push("/contacts");
	}
	const goPrevious = () => {
		history.push("/skills")
    }
    
    const goExternURL = (url) => {
        window.open(url)
    }
    
    if (document.documentElement.clientWidth > 768) 
    {
        return (
            <div className="arise flex-center" style={{padding: '0 60px', flexDirection: 'column'}}>
                <div style={{width: '70%'}}>
                    <h2>Face Recognition App (Noncommercial)</h2>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={faceDetect} alt="facedetect"/>
                        <button style={{position: 'absolute', bottom: 4, right: 0}}
                                onClick={()=>goExternURL('https://e-muravev.github.io/face-recognition-app/')}>
                            See Live
                        </button>
                    </div>    
                    <p>Awesome application which allows you to recognize faces on pictures.</p>
                    <p>I used React, Redux, Node JS, Sequalize ORM(PostgreSQL) and Clarifai API in order to create this website.</p>
                    <p>It has as front-end as back-end server and includes database.</p>
                    <p>Also it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '70%'}}>
                    <h2>Weather App (Noncommercial)</h2>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={weatherApp} alt="weather app"/>
                        <button style={{position: 'absolute', bottom: 4, right: 0}}
                                onClick={()=>goExternURL('https://e-muravev.github.io/weather-app/')}>
                        See Live
                        </button>
                    </div> 
                    <p>Funny application which can be used for recognizing weather in any location in the world.</p>
                    <p>I used React,  React.Hooks and Weather API(OpenWeatherMap) in order to create this website.</p>
                    <p>And yes of course it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '70%'}}>
                    <h2>Film or Game Search App (Noncommercial)</h2>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={filmSearch} alt="film search"/>
                        <button style={{position: 'absolute', bottom: 4, right: 0}}
                                onClick={()=>goExternURL('https://e-muravev.github.io/films-games-search-app/')}>
                        See Live
                        </button>
                    </div>
                    <p>Awesome application which allows you to find out information about any film or game.</p>
                    <p>I used React,  React.Hooks and OMDB API(Open Movies Data Base) in order to create this website.</p>
                    <p>And again it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '70%'}}>
                    <h2>My Portfolio Site (Read about stack I used to create this)</h2>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={portfolio} alt="portfolio"/>
                    </div>
                    <p>Awesome page which gives you information about me.</p>
                    <p>I used React, React Router and React.Hooks in order to create this website.</p>
                    <p>What about adaptive? Sure, it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <PrevButton goPrevious={goPrevious} />
                <NextButton goNext={goNext} opacity={100} cursor={'pointer'}/>
            </div>
            );
    }
    else {
        return (
            <div className="arise flex-center" style={{padding: '0 10px', flexDirection: 'column'}}>
                <div style={{width: '90%'}}>
                    <h4>Face Recognition App (Noncommercial)</h4>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={faceDetect} alt="facedetect"/>
                        <button style={{position: 'absolute', bottom: 4, right: 0, fontSize: '0.75rem'}}
                                onClick={()=>goExternURL('https://e-muravev.github.io/face-recognition-app/')}>
                        See Live
                        </button>
                    </div>      
                    <p>Awesome application which allows you to recognize faces on pictures.</p>
                    <p>I used React, Redux, Node JS, Sequalize ORM(PostgreSQL) and Clarifai API in order to create this website.</p>
                    <p>It has as front-end as back-end server and includes database.</p>
                    <p>Also it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '90%'}}>
                    <h4>Weather App (Noncommercial)</h4>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={weatherApp} alt="weather app"/>
                        <button style={{position: 'absolute', bottom: 4, right: 0, fontSize: '0.75rem'}}
                                onClick={()=>goExternURL('https://e-muravev.github.io/face-recognition-app/')}>
                        See Live
                        </button>
                    </div>  
                    <p>Funny application which can be used for recognizing weather in any location in the world.</p>
                    <p>I used React,  React.Hooks and Weather API(OpenWeatherMap) in order to create this website.</p>
                    <p>And yes of course it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '90%'}}>
                    <h4>Film or Game Search App (Noncommercial)</h4>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={filmSearch} alt="film search"/>
                    </div>  
                    <p>Awesome application which allows you to find out information about any film or game.</p>
                    <p>I used React,  React.Hooks and OMDB API(Open Movies Data Base) in order to create this website.</p>
                    <p>And again it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
                <div style={{width: '90%'}}>
                    <h2>My Portfolio Site (Read about stack I used to create this)</h2>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '100%'}} src={portfolio} alt="portfolio"/>
                    </div>
                    <p>Awesome page which gives you information about me.</p>
                    <p>I used React, React Router and React.Hooks in order to create this website.</p>
                    <p>What about adaptive? Sure, it has adaptive and crossbrowser behavior from mobile to laptop with HiDPI screen.</p>
                </div>
            </div>
            );
    }

    
}

export default MyProjects