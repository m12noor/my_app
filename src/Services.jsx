import React, { useEffect, useState } from "react";

function Services() {
    const [services, setServices] = useState([]);

    // loading state
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("API DATA:", data);
                setServices(data.products.slice(0, 3));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Services API error:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mb-20">
            <h3 className="m-8 flex justify-center text-blue-950 text-3xl font-bold">
                Our Services
            </h3>

            {/* services container */}
            <div className="flex justify-center gap-10">
                {/* loading text */}
                {loading && <p>Loading services...</p>}


                {!loading &&
                    services.length > 0 &&
                    services.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center
              text-blue-950 text-2xl font-bold rounded
              bg-blue-100 p-10 w-72"
                        >
                            {/* static image */}
                            <img
                                src="src\assets\cardimg1.png"
                                alt=""
                                className="mb-2 w-24 h-24 object-contain"
                            />

                            {/* title from API */}
                            <h3 className="text-xl mb-2 text-center">
                                {item.title}
                            </h3>

                            <div className="border-b border-gray-400 w-full my-2"></div>

                            {/* description from API */}
                            <p className="text-base text-gray-700 font-normal text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Services;
















// import React from 'react'

// function Services() {
//     return (
//         <div className='mb-20'>
//             <h3 className='left-0 right-0 m-8 flex items-center justify-center text-blue-950 text-3xl font-bold'>Our Services</h3>
//             <div className='flex items-center'>
//                 {/* Card 1 */}

//                 <div className="inset-50 ml-41 top-0 left-0 right-0 flex flex-col items-center justify-center text-blue-950 text-2xl font-bold rounded bg-blue-100 h-50 p-10">
//                     <img src="cardimg1.png" alt="" className="mb-1 w-25 h-30" />
//                     <h3 className="text-xl mb-2">Web Development</h3>
//                     <div className="border-b border-gray-400 w-55 my-1"></div>
//                     <p className="text-base text-gray-700 font-normal text-center mb-5">Responsive and dynamic websites</p>
//                 </div>
//                 {/* Card 2 */}


//                 <div className="inset-50 ml-11  top-0 left-0 right-0 flex flex-col items-center justify-center text-blue-950 text-2xl font-bold rounded bg-blue-100 h-50 p-10">
//                     <img src="cardimg2.png" alt="" className="mb-1 w-25 h-25" />
//                     <h3 className="text-xl mb-2">Mobile Apps</h3>
//                     <div className="border-b border-gray-400 w-55 my-1"></div>
//                     <p className="text-base text-gray-700 font-normal text-center mb-5">iOS and Android Solutions</p>
//                 </div>

//                 {/* Card 3 */}
//                 <div className="inset-50 ml-11  top-0 left-0 right-0 flex flex-col items-center justify-center text-blue-950 text-2xl font-bold rounded bg-blue-100 h-50 p-10">
//                     <img src="cardimg3.png" alt="" className="mb-1 w-25 h-30" />
//                     <h3 className="text-xl mb-2">UI/UX Design</h3>
//                     <div className="border-b border-gray-400 w-55 my-1"></div>
//                     <p className="text-base text-gray-700 font-normal mb-5 text-center">User-friendly interface design</p>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Services
