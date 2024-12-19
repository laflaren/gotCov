import './App.css';
import React from "react";
import products from './products.json';
import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">


      <header className="App-header">
      <h1> Manage Covid </h1>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Coronavirus._SARS-CoV-2.png/1920px-Coronavirus._SARS-CoV-2.png" className="App-logo" alt="SARS virus rotating" />
        <title>
          Avoid & manage Covid
        </title>

      <h3> 
      Learn to
      <a
      className="App-link"
      href="#div_id"
      target="_blank"
      rel="noopener noreferrer"
    >
      prevent Covid, 
    </a>
          and  
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
       recover from
    </a>
    SARS and SARS2
    </h3>
    <button type="button" class="btn btn-danger"> Sick with Covid! </button>

      </header>
      This is an low-risk, and researched ways to avoid the health issues that come from covid. 

      <p> 
  Half the Covid cases are asymptomatic.
  If you follow this protocol, you'll never get infected again. </p> 
  <p> Reminder: higher risk severe effects is EVERYONE, and especially the person who's Black or Brown, female, and immunocompromised. 
  You literally cannot tell when someone's contagious or not. 
  It's constantly mutating and evading immunity. 
  </p>
<div className='productz'>

  <div className='section1'>
    <div className="preventCov"> 
      {products.preventcov.map((preventcov) => ( //map has to be on ARRAY, not object 
   <div className='buddysys'> 
      <img src={preventcov.imgsrc} alt={preventcov.alttext} /> 
      <br />
      <button className variant="danger">{preventcov.buttonprice} <br></br>
      {preventcov.description}

      </button>
    
      </div> 
 
      ))}
    </div>
    </div>

    
    <div className='section2'>
  <p> So, you're sick. Let's create a personalized schedule: </p>
  <p> Day's priorities: Rest, medicate, be outside as much as possible</p>
  <div className="centeredBox">
  <ol> ☀️ Morning: </ol>
  <li> Take an anti-histamine to help with inflammation </li>
  <li> Gargle tea to disrupt virus's replication </li>
  <li> Get outside in sunlight as much as possible, while unmasked as much as possible to kill and release viral load. </li>
  <li> Paxlovid or other antiviral </li>

  <ol> 🌤️ Midday: </ol>
  <li> Get outside in sunlight as much as possible, while unmasked as much as possible to kill and release viral load. </li>
  <li>  </li>
  <li>  </li>


  <ol> 🌙 Evening: </ol>
  <li> Gargle herbal tea </li>
  <li> Melatonin </li>
  <li> Paxlovid or other antiviral </li>
  <li>  </li>
  <li>  </li>
  </div>
</div>

  <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1T2fEo0ROQ2?utm_source=generator&theme=0" width="90%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy">
  </iframe>

  <div className='section3'>
  <div className="duringCov"> 
        {products.duringcovid.map(duringcovid =>
          <div className='buddysys'> <img src={duringcovid.imgsrc} alt={duringcovid.alttext} />
          <br />
          <button variant="danger">{duringcovid.buttonprice} <br />
          {duringcovid.description}
          </button>
        
          </div> 
          //https://colours.neilorangepeel.com/category/blue/
          
        )}
      </div>

    <p> So you made out of the worst part. 
    <br />
    Congratulations! Let's aim for healing: </p>

    <div className="healCov"> 
      {products.healcovid.map(healcovid =>
        <div className='buddysys'> <img src={healcovid.imgsrc} alt={healcovid.alttext} />
        <br />
        <button variant="danger">{healcovid.buttonprice} <br></br>
        {healcovid.description}
        </button>
        </div>
      )}
    </div>
    </div>
    </div>


Clean you nasal passages. 
If you don't have time to find a neti pot, try using a clean gravy boat or tea pot. This will ultimately help protect your brain from viral damage: https://www.quora.com/Does-nasal-cavity-lead-to-the-brain

<p> Got Covid? Your job is lessen exposure to lessen severity and long term damage to your body and mind. </p>
    
    <footer className='Footer'>
      <h4> 
      Venmo: pleaselive
      </h4>
      <p>  
      Sources: <a href="https://pharmd.substack.com/p/i-have-covid-what-should-my-kids"> https://pharmd.substack.com/p/i-have-covid-what-should-my-kids </a> 
      </p> 
    </footer>
  </div>

  );
}

export default App;