import React from 'react';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ReviewCardsSkeleton = () => {
    return (
        <div className="row g-4">
            {/* Skeleton for the Store Section */}
            <div className="col-12">
                <Card className="shadow-sm p-4 mb-4">
                    <Card.Body className="text-center">
                        <Skeleton width={200} height={40} className="mb-2" />
                        <div className="d-flex justify-content-center align-items-center">
                            <Skeleton width={40} height={40} circle={true} className="me-2" />
                            <Skeleton width={80} height={20} />
                        </div>
                    </Card.Body>
                </Card>
            </div>

            {/* Skeleton for the Review Cards */}
            {Array.from({ length: 5 }).map((_, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                    <Card className="h-100 shadow-sm">
                        <Card.Body>
                            {/* Profile Section */}
                            <div className="d-flex align-items-center mb-3">
                                <Skeleton circle={true} width={50} height={50} className="me-2" />
                                <div>
                                    <Skeleton width={100} height={20} />
                                    <Skeleton width={80} height={15} />
                                </div>
                            </div>
                            {/* Stars Section */}
                            <div className="mb-3">
                                <Skeleton width={120} height={20} />
                            </div>
                            {/* Text Section */}
                            <Skeleton count={3} height={15} />
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ReviewCardsSkeleton;
