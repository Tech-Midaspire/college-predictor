import { useState } from 'react';

const ContactForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (formData.name && formData.email && formData.contact) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setError('Invalid email format');
                return;
            }

            const contactRegex = /^[0-9]{10}$/;
            if (!contactRegex.test(formData.contact)) {
                setError('Invalid contact number. Please enter a 10-digit number');
                return;
            }

            try {
                console.log('Sending form data:', formData);
                const response = await fetch('https://college-predictor-beta.vercel.app/api/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                console.log('Response status:', response.status);
                if (response.ok) {
                    onFormSubmit(formData);
                } else {
                    const data = await response.json();
                    console.log('Error response data:', data);
                    setError(data.message || 'Error submitting form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                setError('An unexpected error occurred. Please try again.');
            }
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-black text-white rounded px-8 pt-6 pb-8 mb-4">
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="appearance-none border border-black rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="appearance-none border border-black rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="contact">
                    Contact No
                </label>
                <input
                    className="appearance-none border border-black rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-blue-500"
                    id="contact"
                    type="text"
                    placeholder="Contact No"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="flex items-center justify-center lg:mt-4">
                <button
                    className="bg-blue-800 hover:bg-red-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
