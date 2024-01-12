import { RiEdit2Line } from "react-icons/ri"

export const Profile = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl">
      <h1 className="text-xl text-gray-100">Profile</h1>
      <hr className="my-8 border-gray-500" />
      <form>
        <div className="flex items-center">
          <div className="w-1/4">
            <p>Avatar</p>
          </div>
          <div className="flex-1">
            <div className="relative mb-2">
              <img src="https://img.freepik.com/foto-gratis/feliz-joven_1098-20869.jpg" alt="avatar" className="w-28 h-28 object-cover rounded-lg" />
              <label htmlFor="avatar" className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24">
                <RiEdit2Line/>
              </label>
              <input type="file" id="avatar" className="hidden"/>
            </div>
            <p className="text-gray-500 text-sm">Allowed file types: png, jpg, jpeg.</p>
          </div>
        </div>
      </form>
    </div>
  )
}
