import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const FormPopup = ({ children }) => {
    const [showPopup, setShowPopup] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {

        const isFormSubmitted = localStorage.getItem('formSubmitted');
        if (isFormSubmitted) {
            setShowPopup(false);
        }
    }, []);

    const handleClose = () => {
        if (formSubmitted) {
            setShowPopup(false);
        }
    };

    const handleFormSubmit = () => {
        setFormSubmitted(true);
        localStorage.setItem('formSubmitted', 'true');
    };

    return (
        <>
            {showPopup && !formSubmitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black p-8 rounded-lg">
                        <button className="absolute top-2 right-2 text-gray-600" onClick={handleClose}>Close</button>
                        <ContactForm onFormSubmit={handleFormSubmit} />
                    </div>
                </div>
            )}
            {formSubmitted ? children : null}
        </>
    );
};

export default FormPopup;
