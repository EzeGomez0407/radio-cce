

export default function RouteTemplate({children}){
    return <>
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            <div className="flex h-full grow flex-col">
                <main className="flex-1 px-4 py-10 sm:px-10 lg:px-20 pt-[90px]">
                    {children}
                </main>
            </div>
        </div>
    </>
}