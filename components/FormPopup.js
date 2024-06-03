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

    const handleFormSubmit = async () => {
        setIsSubmitting(true);
        try {
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
                        {isSubmitting && (
                            <div className="flex justify-center items-center">
                                <div className="w-20 h-20 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
                            </div>
                        )}
                        {!isSubmitting && <ContactForm onFormSubmit={handleFormSubmit} />}
                    </div>
                </div>
            )}
            {formSubmitted ? children : null}
        </>
    );
};

export default FormPopup;
