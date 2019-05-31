import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'

function clickCard(){
    window.location.href='https://www.reactjs.org';
}

const CardContainer = () => {
    return <div className="cardContainer" onClick={clickCard}>
        <CardBanner />
        <CardContent />
    </div>
}



export default CardContainer;
