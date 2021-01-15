import React from 'react';
import Card from './Card.js';
import './List.css';

export default function List(props){
    return(
        <section className='List'>
            <header className='List-cards'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) =>
                <Card
                    key={Card.id}
                    title={Card.title}
                    content={Card.content}
                />
                )}
            <button
                type='button'
                className='List-add-button'
                >
                    + Add Random Card

            </button>
            </div>
        </section>
    );
}