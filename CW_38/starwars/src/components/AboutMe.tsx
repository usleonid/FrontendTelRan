import React, { useEffect, useState } from 'react';
import { base_url } from '../utils/constants';

const AboutMe = ()=>{
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState<any>();

  useEffect(()=>{
    console.log("AboutMe mounted");
    const hero1 = JSON.parse(localStorage.getItem('hero')!);
    if(hero1){
      setIsLoading(false);
      setHero(hero1.payload);
    }else{
      fetch(`${base_url}/v1/peoples/1`)
          .then((response) => response.json())
          .then((data) =>{
                  setIsLoading(false);
                  setHero(data);
                  const info = {
                    payload: data,
                    time: Date.now()
                  };
                  localStorage.setItem('hero', JSON.stringify(info));
            }
          );
    }
    return ()=>{console.log("AboutMe unmounted");}
  },[])
  
  if (isLoading) {
      return <div className="spinner-border text-primary"></div>;
  } else {
      return (
          <div>
              <img src={`${base_url}/${hero.image}`} alt={hero.name} />
              <p>birth_year: {hero.birth_year}</p>
              <p>eye_color: {hero.eye_color}</p>
              <p>gender: {hero.gender}</p>
              <p>hair_color: {hero.hair_color}</p>
              <p>height: {hero.height}</p>
              <p>mass: {hero.mass}</p>
              <p>skin_color: {hero.skin_color}</p>
          </div>
      );
  }
  
}

export default AboutMe;

