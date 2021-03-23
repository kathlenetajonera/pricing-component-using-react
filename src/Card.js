import React from "react";

const Card = ({ type, price, storage, usersAllowed, sendCapacity }) => {
    return (
        <div className={`plan ${type === "Professional" ? "active" : ""}`}>
            <p className="plan__name">{ type} </p>

            <div className="plan__pricing">
                <span className="plan__currency">$</span>
                <h1 className="plan__cost">{ price }</h1>
            </div>

            <div className="plan__features">
                <p className="plan__feature">{ storage } Storage</p>
                <p className="plan__feature">{ usersAllowed } Users Allowed</p>
                <p className="plan__feature">Send up to { sendCapacity } GB</p>
            </div>

            <button className="button">Learn More</button>
        </div>
    )
}

export default Card;