import { RiEdit2Line } from "react-icons/ri"

export const FormProfile = () => {
    return (
        <div className="bg-secondary-100 p-8 rounded-xl mb-8">
            <h1 className="text-xl text-gray-100">Profile</h1>
            <hr className="my-8 border-gray-500/30" />
            <form>
                <div className="flex items-center mb-6">
                    <div className="w-1/4">
                        <p>Avatar</p>
                    </div>
                    <div className="flex-1">
                        <div className="relative mb-2">
                            <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="avatar" className="w-28 h-28 object-cover rounded-lg" />
                            <label htmlFor="avatar" className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24">
                                <RiEdit2Line />
                            </label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>
                        <p className="text-gray-500 text-sm">Allowed file types: png, jpg, jpeg.</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="flex flex-col sm:flex-row md:items-center mb-6">
                    <div className="w-full sm:w-1/4">
                        <p>Full Name <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex md:items-center flex-col md:flex-row gap-4">
                        <div className="w-full" >
                            <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Name" />
                        </div>
                        <div className="w-full" >
                            <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Lastname" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-center mb-6">
                    <div className="w-full sm:w-1/4">
                        <p>Company <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full" >
                            <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Company name" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-center mb-6">
                    <div className="w-full sm:w-1/4">
                        <p>Contact <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full" >
                            <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Contact" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-center mb-6">
                    <div className="w-full sm:w-1/4">
                        <p>Website <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1 flex items-center gap-4">
                        <div className="w-full" >
                            <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Website" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row md:items-center mb-6">
                    <div className="w-full sm:w-1/4">
                        <p>Country <span className="text-red-500">*</span></p>
                    </div>
                    <div className="flex-1">
                        <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                            <option value="peru">Peru</option>
                            <option value="argentina">Argentina</option>
                            <option value="colombia">Colombia</option>
                            <option value="mexico">Mexico</option>
                            <option value="venezuela">Venezula</option>
                            <option value="uruguay">Uruguay</option>
                        </select>
                    </div>
                </div>
            </form>

            <hr className="my-8 border-gray-500/30" />

            <div className="flex justify-end">
                <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors font-medium">
                    Save
                </button>
            </div>
        </div>
    )
}
