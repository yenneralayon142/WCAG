import React from 'react'

export default function InfoCard(props) {
    const { title, text } = props;
    return (
        <article className="infocard">
            <div className="infocard__title bg--blue">
                <h3 className='text--white text--subtitle text--center text--bolder'> {title} </h3>
            </div>
            <div className='infocard__text'>
                <p className='text--large'>{text}</p>
            </div>
        </article>
    )
}
