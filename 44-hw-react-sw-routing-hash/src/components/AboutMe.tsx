import React, { useEffect, useState } from 'react';
import { base_url, characters, period_month } from '../utils/constants';
import { useParams } from 'react-router-dom';

const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState<any>();
  const {heroId = 'luke'} = useParams();

  useEffect(()=>{
    const hero1 = JSON.parse(localStorage.getItem('hero')!);
    if(heroId && ((Date.now() - hero1.time) < period_month)){
      setIsLoading(false);
      setHero(hero1.payload);
    }else{
      fetch(characters[heroId].url)
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

