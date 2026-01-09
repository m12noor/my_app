function Header() {
    return (
        <header className="bg-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold hover:text-blue-950">TechNova</h1>
                <div className="flex  items-center gap-12">
                    <nav className="px-4">
                        <ul className="flex gap-6 list-none m-0 p-0">
                            <li className="hover:text-blue-950 px-4 cursor-pointer font-bold">Home</li>
                            <li className="hover:text-blue-950 px-4 cursor-pointer font-bold">Services</li>
                            <li className="hover:text-blue-950 px-4 cursor-pointer font-bold">Contact</li>
                        </ul>
                    </nav>
                    <button className="bg-blue-800 px-6 py-2 rounded border border-white hover:bg-blue-950 font-bold" >Login</button>
                </div>

            </div>
        </header>
    );
}

export default Header;
