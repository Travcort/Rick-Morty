export const Footer = () => {
    return (
        <footer className="flex flex-col md:flex-row bg-[var(--backgroundColour)] font-sans"> 
                <hr className="mb-3 border-slate-900 dark:border-gray-700 h-2" />
                
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-1 gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                    </div>
                    
                    <div className="flex gap-4 items-center hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                    </div>
                </div>
                <div className="flex flex-col mx-auto">
                    <p className="font-sans text-center md:text-lg">© {new Date().getFullYear()} Tirva Softwares</p>
                    <p className="font-sans text-center md:text-lg">All Rights Reserved</p>
                </div>
        </footer>
    );
}