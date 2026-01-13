import React, { useEffect, useState } from "react";

const localProducts = [
    { id: 1, title: "Web Dev", description: "Responsive sites", img: "/cardimg1.png" },
    { id: 2, title: "Mobile Apps", description: "iOS & Android", img: "/cardimg2.png" },
    { id: 3, title: "UI/UX", description: "Friendly interface", img: "/cardimg3.png" },
];

function Services({ isLoggedIn }) {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setServices(localProducts);
        } catch {
            setServices([]);
        } finally {
            setLoading(false);
        }
    }, []);

    if (!isLoggedIn) {
        return (
            <div className="mb-20 text-center py-20">
                <h3 className="text-2xl font-bold text-red-600">Access Denied</h3>
                <p className="mt-4 text-gray-700">Please login to view our services.</p>
            </div>
        );
    }

    return (
        <div className="mb-20">
            <h3 className="m-8 flex justify-center text-blue-950 text-3xl font-bold">Our Services</h3>
            <div className="flex justify-center gap-10 flex-wrap">
                {loading && <p>Loading services...</p>}
                {!loading &&
                    services.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center bg-blue-100 p-10 w-72 text-blue-950 font-bold rounded">
                            <img src={item.img} alt={item.title} className="mb-2 w-24 h-24 object-contain" />
                            <h3 className="text-xl mb-2 text-center">{item.title}</h3>
                            <div className="border-b border-gray-400 w-full my-2"></div>
                            <p className="text-base text-gray-700 font-normal text-center">{item.description}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Services;
