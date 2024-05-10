import React from "react"

export default function Grid(props) {
    return (
        <>
            <div className="container">
                    <div className="card--i">
                        <img src={props.person.image}/>
                        <div className="info">
                            <h3>{props.person.name}</h3>
                            <p>{props.person.about}</p>
                            <p>Age: {props.person.age} years old</p>
                        </div>                   
                </div>
            </div>
        </>
    )
}