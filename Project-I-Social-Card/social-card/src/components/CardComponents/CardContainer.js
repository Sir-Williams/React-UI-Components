import React from 'react';
import './Card.css';
import CardBanner from './CardBanner'
import CardContent from './CardContent'
import CardTitle from './CardTitle'


const CardContainer = () => {
    return <div>
        <CardBanner />
        <CardContent />
        <CardTitle />
    </div>
}

export default CardContainer;
