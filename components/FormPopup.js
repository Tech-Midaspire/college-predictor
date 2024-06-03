import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const FormPopup = ({ children }) => {
    const [showPopup, setShowPopup] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const isFormSubmitted = localStorage.getItem('formSubmitted');
        if (isFormSubmitted) {
            setShowPopup(false);
            setFormSubmitted(true);
        }
    }, []);

    const handleClose = () => {
        if (formSubmitted) {
            setShowPopup(false);
        }
    };

    const handleFormSubmit = async () => {
        try {
            setIsSubmitting(true); 
            await new Promise(resolve => setTimeout(resolve, 500));
            setFormSubmitted(true);
            localStorage.setItem('formSubmitted', 'true');
            setShowPopup(false);
        } catch (error) {
            console.error("Form submission failed", error);
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <>
            {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-black p-8 rounded-lg relative shadow-lg text-white">
                        {!formSubmitted && !isSubmitting && (
                            <button className="absolute top-2 right-2 text-gray-400" onClick={handleClose}>Close</button>
                        )}
                        {isSubmitting ? (
                            <div className="flex justify-center items-center">
                                <div className="w-20 h-20 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            <ContactForm onFormSubmit={handleFormSubmit} />
                        )}
                    </div>
                </div>
            )}
            {formSubmitted ? children : null}
        </>
    );
};

export default FormPopup;
