
import { useState } from 'react';

const ContactForm = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.contact) {
            try {
                const response = await fetch('https://college-predictorpro.netlify.app/api/submit-form', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    onFormSubmit(formData);
                } else {
                    alert('Error submitting form');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Error submitting form');
            }
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-black rounded px-8 pt-6 pb-8 mb-4">
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
            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
