import React from 'react'

export default function InfoCard(props) {
    const { title, text, color = "blue" } = props;
    return (
        <article className={`infocard ${color == 'green' && 'infocard--green'}`}>
            <div className="infocard__title bg--blue">
                <h3 className='text--white text-3xl text-center font-bold'> {title} </h3>
            </div>
            <div className='infocard__text'>
                <p className='text-lg'>{text}</p>
            </div>
        </article>
    )
}
