import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess('');
        setError('');

        try {

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) throw new Error('Failed to submit form');

            const data = await response.json();
            console.log('Form submitted:', data);
            setSuccess('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-6 p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Contact Form</h2>

            {loading && <p className="text-blue-500 mb-2">Submitting...</p>}
            {success && <p className="text-green-500 mb-2">{success}</p>}
            {error && <p className="text-red-500 mb-2">{error}</p>}

            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-1">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="block mb-1">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
















// import React from 'react'

// function Contactform() {
//     return (
//         <div class="max-w-md mx-auto bg-white p-8 rounded border border-gray-300 shadow-md mt-10 mb-20">
//             <h2 class="text-2xl font-bold mb-6 text-center">Contact Us</h2>

//             <form>
//                 <div class="mb-4">
//                     <label class="block text-gray-700 mb-2" for="name">Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="Enter your name"
//                         class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                 </div>

//                 <div class="mb-4">
//                     <label class="block text-gray-700 mb-2" for="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Enter your email"
//                         class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                     />
//                 </div>

//                 <div class="mb-4">
//                     <label class="block text-gray-700 mb-2" for="message">Message</label>
//                     <textarea
//                         id="message"
//                         placeholder="Write your message"
//                         class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         rows="4"
//                     ></textarea>
//                 </div>

//                 <div class="text-center">
//                     <button type="submit" class="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-500 font-bold">Send Message </button>
//                 </div>
//             </form>
//         </div>

//     )
// }

// export default Contactform
