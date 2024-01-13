import { useState } from "react"
import { Link } from "react-router-dom"
// icons
import { RiEdit2Line, RiShieldCheckLine } from "react-icons/ri"
// headlessui
import { Switch } from '@headlessui/react'

export const Profile = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      {/* Profile */}
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
          <div className="flex md:items-center mb-6">
            <div className="w-1/4">
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

          <div className="flex items-center mb-6">
            <div className="w-1/4">
              <p>Company <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full" >
                <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Company name" />
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-1/4">
              <p>Contact <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full" >
                <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Contact" />
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-1/4">
              <p>Website <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full" >
                <input type="text" className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900" placeholder="Website" />
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="w-1/4">
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
            Guardar
          </button>
        </div>
      </div>

      {/* Change password */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">User and Password</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Email</h5>
              <p className="text-sm text-gray-500">rodyhuancas@gmail.com</p>
            </div>
            <button className="bg-secondary-900/50 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300">Change Email</button>
          </div>

          <hr className="my-8 border-gray-500/30 border-dashed" />

          <div className="flex items-center justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Password</h5>
              <p className="text-sm text-gray-500">******************</p>
            </div>
            <button className="bg-secondary-900/50 py-2 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors duration-300">Change Password</button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 place-items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="w-full flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-500" />
          </div>
          <div className="col-span-6">
            <h5 className="text-gray-100 mb-2">Secure Your Account</h5>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum repellendus numquam, nesciunt officia cum!</p>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors duration-300 py-2 px-4 rounded-lg text-gray-100">Activate</button>
          </div>
        </div>
      </div>

      {/* Connected accounts */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Connected Accounts</h1>
        <hr className="my-8 border-gray-500/30" />

        <div className="flex items-center gap-5 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-500" />
          </div>
          <div className="flex-1">
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolorum repellendus numquam. <Link to="/" className="text-green-400">Read more...</Link></p>
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
              className={`${enabled ? 'bg-primary' : 'bg-secondary-900'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                  } inline-block h-4 w-4 transform rounded-full transition`}
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
              className={`${enabled ? 'bg-primary' : 'bg-secondary-900'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                  } inline-block h-4 w-4 transform rounded-full transition`}
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
              className={`${enabled ? 'bg-primary' : 'bg-secondary-900'
                } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${enabled ? 'translate-x-6 bg-secondary-900' : 'translate-x-1 bg-gray-500'
                  } inline-block h-4 w-4 transform rounded-full transition`}
              />
            </Switch>
          </div>
        </form>
      </div>
    </>
  )
}
