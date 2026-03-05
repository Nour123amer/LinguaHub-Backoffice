"use client"
import { Bell, Search, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function DashboardHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="
      h-20 shrink-0
      sticky top-0 z-40
      bg-white/70 backdrop-blur-xl
      border-b border-gray-200
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
      flex items-center justify-between
      px-10 transition-all duration-300
      "
    >
      <div className="flex items-center gap-10">

        <h1 className="text-2xl font-bold tracking-tight 
        bg-linear-to-r from-[#185E99] to-[#9ECC46] 
        bg-clip-text text-transparent">
          Dashboard
        </h1>

        <div className="relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="
            w-72 pl-11 pr-4 py-2.5 rounded-2xl
            bg-gray-100/70
            focus:bg-white
            border border-transparent
            focus:border-[#185E99]
            focus:ring-2 focus:ring-[#185E99]/20
            outline-none transition-all duration-300
            text-sm
            shadow-sm
            "
          />
        </div>
      </div>

      <div className="flex items-center gap-8">

        <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9ECC46] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#9ECC46]"></span>
          </span>
          Online
        </div>

        <button
          className="
          relative p-2 rounded-xl
          hover:bg-gray-100
          transition-all duration-300
          group
          "
        >
          <Bell size={20} className="text-gray-600 cursor-pointer group-hover:text-[#185E99] transition-colors" />
          <span
            className="
            absolute -top-1 -right-1
            bg-[#9ECC46] text-white text-[10px]
            w-5 h-5 flex items-center justify-center
            rounded-full font-semibold shadow-md 
            "
          >
            3
          </span>
        </button>

        <div
          onClick={() => setOpen(!open)}
          className="
          relative flex items-center gap-3 cursor-pointer
          group
          "
        >
          <div
            className="
            w-10 h-10 rounded-full
            bg-linear-to-br from-[#9ECC46] to-[#185E99]
            text-white font-semibold
            flex items-center justify-center
            shadow-md
            group-hover:scale-105
            transition-transform duration-300
            "
          >
            A
          </div>

          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-800">
              Admin
            </span>
            <span className="text-xs text-gray-500">
              Super Admin
            </span>
          </div>

          <ChevronDown
            size={18}
            className={`text-gray-500 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />

          {open && (
            <div
              className="
              absolute right-0 top-14
              w-48 bg-white rounded-2xl
              shadow-xl border border-gray-100
              py-2 animate-in fade-in zoom-in-95
              "
            >
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition">
                Settings
              </button>
              <div className="border-t my-1"></div>
              <button className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition">
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}