import React from 'react';
import './CatFood.css';
import CatCard from "../CatCard";

function CatFood() {
  return (
   <div className="wrap">
      <p className="title">Ты сегодня покормил кота?</p>
      <div className="block-line">
         <CatCard 
            taste='фуа-гра'
            subText='Печень утки разварная с артишоками.'
            weight='0.5'>
            <p className="ammount">10 порций</p>
            <p className="gift">мышь в подарок</p>   
         </CatCard>
         <CatCard selected 
            taste='рыбой'
            subText='Головы щучьи с чесноком да свежайшая сёмгушка.'
            weight='2'>
            <p className="ammount">40 порций</p>
            <p className="gift">2 мыши в подарок</p>
         </CatCard>
         <CatCard disabled
            taste='курой'
            subText='Филе из цыплят с трюфелями в бульоне.'
            weight='5'>
            <p className="ammount">100 порций</p>
            <p className="gift">5 мышей в подарок заказчик доволен</p>
         </CatCard>
      </div>
   </div>            
  );
}

export default CatFood;
