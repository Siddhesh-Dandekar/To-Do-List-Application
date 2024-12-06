import '../index.css';

function Header() {
    return (
        <header className="w-full flex justify-center">
            <nav className="w-11/12 flex gap-3 rounded-2xl flex-col sm:flex-row items-center justify-between text-white my-3 p-3 md:rounded-full"
                id="nav-section">
                <span
                    className="bg-black border-custom rounded-full p-3 font-medium text-lg sm:text-2xl h-full flex items-center handjet-font">SIDDHESH
                    DANDEKAR</span>
                <h1 className="bg-black border-custom rounded-full p-3 font-bold title text-lg sm:text-2xl handjet-font">To-Do-List Application</h1>
            </nav>
        </header>
    )
}

export default Header;