
import dbConnect from '../../lib/mongodb';
import FormSubmission from '../../models/formSubmission';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://college-predictorpro.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    await dbConnect();
    if (req.method === 'OPTIONS') {

        return res.status(200).end();
    }
    if (req.method === 'POST') {
        const { name, email, contact } = req.body;

        if (!name || !email || !contact) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        const contactRegex = /^[0-9]+$/;
        if (!contactRegex.test(contact)) {
            return res.status(400).json({ message: 'Contact number must be numeric' });
        }

        try {
            const newSubmission = new FormSubmission({
                name,
                email,
                contact,
            });

            await newSubmission.save();
            res.status(201).json({ message: 'Form submission saved successfully' });
        } catch (error) {
            console.error('Error saving form submission:', error);
            res.status(500).json({ message: 'Error saving form submission', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
