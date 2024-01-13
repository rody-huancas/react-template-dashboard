import { RiErrorWarningLine } from "react-icons/ri"
import { Link } from "react-router-dom"

export const InactiveAccounts = () => {
    return (
        <div className="bg-secondary-100 p-8 rounded-xl mb-8">
            <h1 className="text-xl text-gray-100">Inactive Accounts</h1>
            <hr className="my-8 border-gray-500/30" />

            <div className="flex flex-col sm:flex-row items-center gap-5 bg-yellow-600/10 p-4 rounded-lg border border-dashed border-yellow-600 mb-8">
                <div className="flex justify-center">
                    <RiErrorWarningLine className="text-5xl text-yellow-500" />
                </div>
                <div className="flex-1 text-center sm:text-start">
                    <h5 className="text-gray-100 mb-2">You Are Deactivating Your Account</h5>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum repellendus numquam, nesciunt officia cum! <Link className="text-blue-600">Learn more...</Link></p>
                </div>
            </div>
            <form className="flex items-center gap-4">
                <input type="checkbox" className="accent-primary" id="idInactive" />
                <label htmlFor="idInactive" className="text-gray-500">I confirm my account deactivation</label>
            </form>

            <hr className="my-8 border-gray-500/30" />

            <div className="flex justify-end">
                <button className="bg-red-500/80 text-gray-100 py-2 px-4 rounded-lg hover:bg-red-500 transition-colors font-medium">
                    Desactivate Account
                </button>
            </div>
        </div>
    )
}
