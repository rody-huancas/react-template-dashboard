import { RiShieldCheckLine } from "react-icons/ri"

export const ChangePassword = () => {
    return (
        <div className="bg-secondary-100 p-8 rounded-xl mb-8">
            <h1 className="text-xl text-gray-100">User and Password</h1>
            <hr className="my-8 border-gray-500/30" />
            <form className="mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between">
                    <div>
                        <h5 className="text-gray-100 text-xl mb-1">Email</h5>
                        <p className="text-sm text-gray-500">rodyhuancas@gmail.com</p>
                    </div>
                    <button className="w-full sm:w-auto bg-secondary-900/50 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300">Change Email</button>
                </div>

                <hr className="my-8 border-gray-500/30 border-dashed" />

                <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 justify-between">
                    <div>
                        <h5 className="text-gray-100 text-xl mb-1">Password</h5>
                        <p className="text-sm text-gray-500">******************</p>
                    </div>
                    <button className="w-full sm:w-auto bg-secondary-900/50 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300">Change Password</button>
                </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-8 place-items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 gap-y-5 md:gap-y-0">
                <div className="w-full flex justify-center">
                    <RiShieldCheckLine className="text-5xl text-green-500" />
                </div>
                <div className="col-span-6 text-center md:text-start">
                    <h5 className="text-gray-100 mb-2">Secure Your Account</h5>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum repellendus numquam, nesciunt officia cum!</p>
                </div>
                <div className="w-full flex justify-center">
                    <button className="w-full sm:w-auto bg-green-600/70 hover:bg-green-600 transition-colors duration-300 py-2 px-4 rounded-lg text-gray-100">Activate</button>
                </div>
            </div>
        </div>
    )
}
