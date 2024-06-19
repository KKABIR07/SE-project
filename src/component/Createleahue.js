
    import React, { useState } from 'react';

    const Createleahue = () => {
      let [numofplayers , setnumofplayers] = useState()
       let players = new Array(numofplayers).fill('')
      

      return (
        <>
          
    
          <div className="bg-black py-[50px]">
            <form
              className="flex flex-col gap-4 p-4 lg:w-[40%] mx-auto rounded-md"
              action="/create"
              method="POST"
            >
              <h1 className="text-white text-2xl text-center">
                Create a Fixture list
              </h1>
              <p className="text-sm font-light text-white text-center">
                Enter your league details and set up your team names below to create
                a fixture list.
              </p>
    
              <input
                type="text"
                id="ListName"
                name="ListName"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
                placeholder="Tournament name"
              />
    
              <label htmlFor="types" className="text-md text-white font-thin">
                Participant Type :
              </label>
              <select
                id="ParticipantType"
                name="ParticipantType"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
              >
                <option value="Player">Player</option>
                <option value="Team">Team</option>
              </select>
    
              <label htmlFor="types" className="text-md text-white font-thin">
                Meetings :
              </label>
              <select
                id="Meetings"
                name="Meetings"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
              >
                <option value="once">Once Only</option>
                <option value="HomeAway">Home and away</option>
              </select>
    
              <label htmlFor="types" className="text-md text-white font-thin">
                Type of fixture :
              </label>
              <select
                id="TypeofFixture"
                name="TypeofFixture"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
              >
                <option value="Round">Round</option>
                <option value="day">day</option>
                <option value="week">week</option>
              </select>
    
              <label htmlFor="types" className="text-md text-white font-thin">
                Number of Players :
              </label>
              <select
                name="NumberofParticipants"
                id="NumberofParticipants"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
                onChange={(e) => setnumofplayers(e.target.value)}
              >
                <option value="6" >6</option>
                
              </select>
    
              <h1 className="text-white text-2xl text-center">Participants</h1>
    
              {
                players.map((x , i) =>(
                  <input
                type="text"
                className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
                placeholder="Player 6 Name"
                id="Player6Name"
                name="Player6Name"
                key={i}
              />
                ))
              }
    
              
    
              <button className="text-white py-3 rounded-md bg-blue-500 w-[30%] mx-auto">
                Create List
              </button>
            </form>
          </div>
    
         
        </>
      );
    };
    
    export default Createleahue;
    


