export const EmailPreferences = () => {
    return (
        <div className="bg-secondary-100 p-8 rounded-xl mb-8">
            <h1 className="text-xl text-gray-100">E-mail Notifications</h1>
            <hr className="my-8 border-gray-500/30" />

            <form className="mb-6">
                <div className="flex items-center gap-4">
                    <input type="checkbox" id="id1" className="accent-primary" />
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="id1" className="text-gray-100">Successful Payments</label>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <hr className="my-8 border-gray-500/30" />

                <div className="flex items-center gap-4">
                    <input type="checkbox" id="id2" className="accent-primary" />
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="id2" className="text-gray-100">Successful Payments</label>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <hr className="my-8 border-gray-500/30" />

                <div className="flex items-center gap-4">
                    <input type="checkbox" id="id3" className="accent-primary" />
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="id3" className="text-gray-100">Successful Payments</label>
                        <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <hr className="my-8 border-gray-500/30" />
            </form>
            <div className="flex justify-end">
                <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors font-medium">
                    Save
                </button>
            </div>
        </div>
    )
}
