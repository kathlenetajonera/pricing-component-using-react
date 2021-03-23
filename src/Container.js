import React from "react";
import Card from "./Card";

const Container = ({ pricingType }) => {
    return (
        <div className="container">
            <Card type="Basic" price={pricingType === "monthly" ? "19.99" : "199.99"} storage="500 GB" usersAllowed="2" sendCapacity="3" />
            <Card type="Professional" price={pricingType === "monthly" ? "24.99" : "249.99"} storage="1 TB" usersAllowed="5" sendCapacity="10" />
            <Card type="Master" price={pricingType === "monthly" ? "39.99" : "399.99"} storage="2 TB" usersAllowed="10" sendCapacity="20" />
        </div>
    );
}
 
export default Container;