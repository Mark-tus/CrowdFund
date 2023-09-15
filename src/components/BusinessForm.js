import React from 'react';
import "./css/BusinessForm.css";
import { toast } from 'react-toastify';
import Navbar from './Navbar';


const showToast = (type, message) => {
    if (type === 'success') {
        toast.success(message);
    } else if (type === 'error') {
        toast.error(message);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('http://127.0.0.1:8000/core/addBusiness/', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // The API call was successful
            const data = await response.json();
            alert(data.message)

            
        } else {
            // Handle API errors here
        }
    } catch (error) {
        console.error('Error:', error);
        showToast('error', 'An error occurred');
    }
};


const BusinessForm = () => {
    return (
        <>
        <Navbar/>
        <div className="form-container">
            <h1>Create a Campaign</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="businessName">Business Name:</label>
                    <input type="text" id="businessName" name="businessName" className="form-control" required />
                </div>

                <div className="form-group">
                    <label htmlFor="businessType">Business Type:</label>
                    <input type="text" id="businessType" name="businessType" className="form-control" required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" className="form-control" rows="4" required></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="discount">Discount:</label>
                    <input type="text" id="discount" name="discount" className="form-control" required />
                </div>

                <div className="form-group">
                    <label htmlFor="numProducts">Number of Products:</label>
                    <input type="number" id="numProducts" name="numProducts" className="form-control" required />
                </div>

                <div className="form-group">
                    <label htmlFor="offerValidity">Offer Validity:</label>
                    <input type="text" id="offerValidity" name="offerValidity" className="form-control" required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );  
}

export default BusinessForm;
