import React from 'react';

const BusinessForm = () => {
    return (
        <div>
            <h1>Create a Campaign</h1>
            <form>
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
    );
}

export default BusinessForm;
