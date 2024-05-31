
import dbConnect from '../../lib/mongodb';
import FormSubmission from '../../models/formSubmission';

export default async function handler(req, res) {
    await dbConnect();

    if (req.method === 'POST') {
        const { name, email, contact } = req.body;

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
