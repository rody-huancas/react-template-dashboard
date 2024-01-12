import { RiEdit2Line, RiShieldCheckLine } from "react-icons/ri"

export const Profile = () => {
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
          <div className="flex items-center mb-6">
            <div className="w-1/4">
              <p>Full Name <span className="text-red-500">*</span></p>
            </div>
            <div className="flex-1 flex items-center gap-4">
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

      {/* change password */}
      <div className="bg-secondary-100 p-8 rounded-xl">
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
    </>
  )
}
