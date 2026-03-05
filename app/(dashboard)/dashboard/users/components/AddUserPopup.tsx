type Props ={
  onClose:()=> void;
}

export default function AddUserPopup({onClose}:Props) {   
    return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center
     bg-black/40 backdrop-blur-sm">
      
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New User
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Create a new instructor or student account
            </p>
          </div>

          <button
          onClick={()=>{onClose()}}
          className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition"
            />
          </div>

          {/* Role */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">
              Role
            </label>

            <div className="grid grid-cols-2 gap-4">
              
              {/* Instructor Option */}
              <div className="flex items-center justify-center gap-2 
                              border-2 border-green-500 bg-green-50 
                              rounded-xl py-3 cursor-pointer">
                <input type="radio" name="role" defaultChecked />
                <span className="font-medium text-gray-700">
                  Instructor
                </span>
              </div>

              {/* Student Option */}
              <div className="flex items-center justify-center gap-2 
                              border border-gray-200 rounded-xl py-3 
                              cursor-pointer hover:border-blue-400 transition">
                <input type="radio" name="role" />
                <span className="font-medium text-gray-700">
                  Student
                </span>
              </div>

            </div>
          </div>

          {/* Status */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Status
              </p>
              <p className="text-xs text-gray-500">
                Account is active
              </p>
            </div>

            {/* Toggle (UI Only) */}
            <div className="relative w-11 h-6 bg-green-500 rounded-full cursor-pointer">
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 p-6 border-t border-gray-100 bg-gray-50">
          
          <button
            className="px-6 py-2 rounded-xl bg-white border border-gray-200 
                       text-gray-600 hover:bg-gray-100 transition shadow-sm"
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 rounded-xl bg-blue-600 text-white 
                       hover:bg-blue-700 transition shadow-md 
                       shadow-blue-200 disabled:opacity-50"
          >
            Create User
          </button>

        </div>
      </div>
    </div>

    </>
  )
}
