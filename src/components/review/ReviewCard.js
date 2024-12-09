import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Store from '../store/Store';
import ReviewCardsSkeleton from '../skeleton/ReviewCardsSkeleton';

const ReviewCards = () => {
    const { review, isLoading } = useSelector((state) => state.review);

    const [sortOrder, setSortOrder] = useState('asc');
    const [filterAuthor, setFilterAuthor] = useState('');

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

    const formatTime = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleString();
    };

    const filteredAndSortedReviews = () => {
        if (!review?.data?.reviews) return [];
        let filtered = review.data.reviews;
        if (filterAuthor) {
            filtered = filtered.filter((card) =>
                card.author_name.toLowerCase().includes(filterAuthor.toLowerCase())
            );
        }
        filtered.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.author_name.localeCompare(b.author_name);
            } else {
                return b.author_name.localeCompare(a.author_name);
            }
        });
        return filtered;
    };

    return (
        <div>

            <div className="mb-4 d-flex justify-content-between">
                <input
                    type="text"
                    placeholder="Filter by author name"
                    className="form-control w-50 me-2"
                    value={filterAuthor}
                    onChange={(e) => setFilterAuthor(e.target.value)}
                />

                <select
                    className="form-select w-25"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="asc">Sort by (Ascending)</option>
                    <option value="desc">Sort by (Descending)</option>
                </select>
            </div>

            <div className="row g-3">
                {isLoading ? (
                    <ReviewCardsSkeleton />
                ) : review?.data && filteredAndSortedReviews().length > 0 ? (
                    <>
                        <Store name={review?.data?.name} rating={review?.data?.rating} />
                        {filteredAndSortedReviews().map((card, index) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={card.time}>
                                <Card className="h-100 shadow-sm">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-3">
                                            <img
                                                src={card.profile_photo_url}
                                                alt={`${card.author_name}'s profile`}
                                                className="rounded-circle me-2"
                                                style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                                            />
                                            <div>
                                                <Card.Title className="mb-0">{card.author_name}</Card.Title>
                                                <small className="text-muted">{formatTime(card.time)}</small>
                                            </div>
                                        </div>
                                        <div className="mb-2">{renderStars(card.rating)}</div>
                                        <div className="mb-2">{`Sentiment: ${card.sentiment}`}</div>
                                        <Card.Text
                                            style={{
                                                maxHeight: '80px',
                                                overflowY: 'auto',
                                            }}
                                            className="text-muted"
                                        >
                                            {card.text}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </>
                ) : (
                    <Card className="shadow-sm p-4 mb-4">
                        <Card.Body>
                            <div className="d-flex flex-column align-items-center text-center">
                                <h1 className="mb-2" style={{ fontWeight: 'bold', fontSize: '1rem' }}>
                                    No reviews available.
                                </h1>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default ReviewCards;
