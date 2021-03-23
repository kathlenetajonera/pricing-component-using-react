import React from "react";

const Header = ({ pricingType, setPricingType }) => {
    return (
        <header className="header">
            <h1 className="header__title">Our Pricing</h1>

            <div className="toggle">
                <p className="header__text">Annually</p>

                <div className="toggle__btn" onClick={() => pricingType === "monthly" ? setPricingType("annual") : setPricingType("monthly")}>
                    <div className={`toggle__indicator ${ pricingType }`}></div>
                </div>

                <p className="header__text">Monthly</p>
            </div>
        </header>
    )
}

export default Header;