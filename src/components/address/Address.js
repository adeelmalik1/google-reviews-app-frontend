import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Button from "react-bootstrap/Button";
import { getReviews } from "../../store/storeIndex";
import { useDispatch } from "react-redux";

const AddressInput = ({ onGetReviews }) => {
    const [address, setAddress] = useState("");

    const dispatch = useDispatch();

    const handleGetReviews = () => {
        if (address) {
            const data = {
                location: address,
            };
            dispatch(getReviews(data));
        } else {
            alert("Please select an address first!");
        }
    };

    return (
        <div className="align-items-center mb-4 w-50">
            {/* Input Field */}
            <div className="flex-grow-1 me-2">
                <GooglePlacesAutocomplete
                    selectProps={{
                        defaultInputValue: address,
                        placeholder: "Select Address",
                        onChange: (option) => setAddress(option.label),
                    }}
                    apiKey={process.env.REACT_APP_MAP_KEY}
                />
            </div>
            <div>
                <Button className="my-2" variant="primary" onClick={handleGetReviews}>
                    Get Reviews
                </Button>
            </div>

        </div>

    );
};

export default AddressInput;
