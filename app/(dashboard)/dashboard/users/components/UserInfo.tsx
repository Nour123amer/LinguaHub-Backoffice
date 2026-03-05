"use client";
import Image from "next/image";
import { X } from "lucide-react";
import { UserQuery } from "@/graphql/generated/graphql";

type Props = {
  onClose: () => void,
  user: UserQuery["user"]
}

export default function UserPopup({ user, onClose }: Props) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      {/* Popup Card */}
      <div className="bg-white w-100 rounded-2xl shadow-2xl p-6 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* User Image */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src={user.profilePicture || "/images/linguahub.png"}
              alt="user"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-4 space-y-2">
          <h2 className="text-xl font-bold">{user.firstName}</h2>

          <p className="text-gray-600 text-sm">{user.email}</p>

          <p className="text-gray-600 text-sm">
            📞 {user.phone || "No Phone"}
          </p>

          <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
         {user.roles.join(",")}
          </span>
        </div>
      </div>
    </div>
  );
}