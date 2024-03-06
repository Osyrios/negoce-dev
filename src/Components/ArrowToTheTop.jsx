
export function ArrowToTheTop() {
    return <div className="animate-bounce bg-blue-900 p-2 w-12 h-12 rounded-full flex items-center justify-center fixed bottom-5 right-5 md:bottom-10 md:right-10">

        <a href="#top">
            <svg className="w-8 h-8 text-gray-400"
                 fill="none"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                <path d="M19 12l-7-7m0 0l-7 7m7-7v16"></path>
            </svg>
        </a>

    </div>
}
