import { useState } from "react"
import { Link } from "react-router-dom"
import { Switch } from "@headlessui/react"
import { RiShieldCheckLine } from "react-icons/ri"

export const ConnectedAccounts = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className="bg-secondary-100 p-8 rounded-xl mb-8">
            <h1 className="text-xl text-gray-100">Connected Accounts</h1>
            <hr className="my-8 border-gray-500/30" />

            <div className="flex flex-col sm:flex-row items-center gap-5 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
                <div className="flex justify-center">
                    <RiShieldCheckLine className="text-5xl text-green-500" />
                </div>
                <div className="flex-1">
                    <p className="text-gray-500 text-center sm:text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum repellendus numquam. <Link to="/" className="text-green-400">Read more...</Link></p>
                </div>
            </div>

            <form className="mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" className="w-8 h-8 object-cover" />
                        <div className="flex flex-col gap-y-1">
                            <h5 className="text-gray-100">Google</h5>
                            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-primary' : 'bg-secondary-900'} relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'} inline-block h-4 w-4 transform rounded-full transition`}
                        />
                    </Switch>
                </div>

                <hr className="my-8 border-gray-500/30" />

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5347-github_102542.png" alt="github" className="w-8 h-8 object-cover" />
                        <div className="flex flex-col gap-y-1">
                            <h5 className="text-gray-100">GitHub</h5>
                            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-primary' : 'bg-secondary-900'} relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'} inline-block h-4 w-4 transform rounded-full transition`}
                        />
                    </Switch>
                </div>

                <hr className="my-8 border-gray-500/30" />

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="https://icones.pro/wp-content/uploads/2022/08/logo-slack.png" alt="slack" className="w-8 h-8 object-cover" />
                        <div className="flex flex-col gap-y-1">
                            <h5 className="text-gray-100">Slack</h5>
                            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-primary' : 'bg-secondary-900'} relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className="sr-only">Enable notifications</span>
                        <span
                            className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'} inline-block h-4 w-4 transform rounded-full transition`}
                        />
                    </Switch>
                </div>
            </form>
        </div>
    )
}
