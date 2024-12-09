import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Card from "react-bootstrap/Card";

const Store = ({ name, rating }) => {

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className="text-warning" />);
            } else if (i - rating < 1) {
                stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-warning" />);
            }
        }
        return stars;
    };

    return (
        <Card className="shadow-sm p-4 mb-4">
            <Card.Body>
                <div className="d-flex flex-column align-items-center text-center">
                    <h1 className="mb-2" style={{ fontWeight: "bold", fontSize: "2rem" }}>
                        {name}
                    </h1>
                    <div className="d-flex align-items-center">
                        <span className="me-2" style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                            {rating}
                        </span>
                        <div>{renderStars(rating)}</div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Store;
