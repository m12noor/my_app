import React, { useEffect, useState } from 'react';

function ProjectTable() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Async function to fetch projects
        const fetchProjects = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                setProjects(data.slice(0, 10)); // Take first 10 projects
                console.log("API DATA:", data.slice(0, 10)); // Optional: for debugging
            } catch (err) {
                console.log(err);
                setError(err.message); // Show error in UI
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchProjects(); // 🔥 Call the function!
    }, []);

    // Loading state
    if (loading) return <p className="text-center py-4">Loading...</p>;

    // Error state
    if (error) return <p className="text-center py-4 text-red-500">{error}</p>;

    return (
        <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Lead</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr key={project.id} className="text-center">
                            <td className="border px-4 py-2">{project.title}</td>
                            <td className="border px-4 py-2">Lead {project.userId}</td>
                            <td className="border px-4 py-2">In Progress</td>
                            <td className="border px-4 py-2">2026-01-20</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectTable;

















// import React from 'react'

// function ProjectTable() {
//     return (

//         <div className='mb-20'>
//             <h3 className='left-0 right-0 m-8 flex items-center justify-center text-blue-950 text-3xl font-bold'>Recent Projects</h3>

//             <table className="mx-auto max-w-5xl text-left rounded border border-gray-300 shadow-md border-collapse w-full">
//                 <thead>
//                     <tr class="bg-gray-200">
//                         <th class="px-4 py-2">Project Name</th>
//                         <th class="px-4 py-2">Team Lead</th>
//                         <th class="px-4 py-2">Status</th>
//                         <th class="px-4 py-2">Deadline</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr class="border-b border-gray-300">
//                         <td class="px-4 py-2">Mobile App Launch</td>
//                         <td class="px-4 py-2">Fahad Ahsan</td>
//                         <td class="px-4 py-2">
//                             <button class="bg-green-500 text-white px-3 py-1 rounded">Completed</button>
//                         </td>
//                         <td class="px-4 py-2">Jan 01, 2026</td>
//                     </tr>

//                     <tr class="border-b border-gray-300">
//                         <td class="px-4 py-2">E-commerce Platform</td>
//                         <td class="px-4 py-2">Sana Khan</td>
//                         <td class="px-4 py-2">
//                             <button class="bg-yellow-500 text-white px-3 py-1 rounded">In Progress</button>
//                         </td>
//                         <td class="px-4 py-2">Jan 28, 2026</td>
//                     </tr>

//                     <tr class="border-b border-gray-300">
//                         <td class="px-4 py-2">CRM System</td>
//                         <td class="px-4 py-2">Ali Ahmad</td>
//                         <td class="px-4 py-2">
//                             <button class="bg-red-500 text-white px-3 py-1 rounded">Pending</button>
//                         </td>
//                         <td class="px-4 py-2">Feb 15, 2026</td>
//                     </tr>

//                     <tr class="border-b border-gray-300">
//                         <td class="px-4 py-2">CRM System</td>
//                         <td class="px-4 py-2">Zara Ahmad</td>
//                         <td class="px-4 py-2">
//                             <button class="bg-green-500 text-white px-3 py-1 rounded">Completed</button>
//                         </td>
//                         <td class="px-4 py-2">Jan 05, 2026</td>
//                     </tr>
//                 </tbody>
//             </table>




//         </div>


//     )
// }

// export default ProjectTable
