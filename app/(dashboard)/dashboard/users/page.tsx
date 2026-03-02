"use client"
import { UpdateUserDocument, UserDocument, UsersDocument } from '@/graphql/generated/graphql';
import { useMutation, useQuery } from '@apollo/client/react';
import { Suspense, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa';
import { MdDeleteForever, MdRemoveRedEye } from 'react-icons/md';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import AddUserPopup from './AddUserPopup';
import { useSession } from 'next-auth/react';
import UserPopup from './UserInfo';
import EditRolePopup from './EditRolePopup';

export default function page() {
  const { data } = useQuery(UsersDocument);
  const [filter, setFiltered] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isEyeClicked, setIsEyeClicked] = useState<boolean>(false);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const [role, setRole] = useState("")
  const allUsers = data?.users ?? []
  console.log("users ===> ", data?.users);
  const [userId, setId] = useState<string>("")
  const { data: session } = useSession();
  console.log("session ==>", session)

  const { data: userInfo } = useQuery(UserDocument, {
    variables: {
      id: userId,
    },
    skip: !userId
  });

  const [updateUserRole] = useMutation(UpdateUserDocument)


  const filteredUsers = allUsers
    .filter((user) => {
      if (filter === "students") {
        return user.roles.includes("student");
      }
      if (filter === "instructor") {
        return user.roles.includes("instructor");
      }
      return true;
    })
    .filter((user) => {
      if (!searchValue) return true;
      return (
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.phone?.includes(searchValue)
      );
    })


  const onClose = () => {
    setIsEditClicked(false)
  }

  const handleEditRole = async () => {
    await updateUserRole({
      variables: {
        id: userId,
        input: {
          roles: [role]
        }
      },
      refetchQueries: [{ query: UsersDocument }]
    })
    setIsEditClicked(false)

  }


  return (
    <div className="relative w-full">

      <div className={`absolute z-50 w-full h-full flex justify-center items-center
        ${isClicked ? "block" : "hidden"}
        `}>
        {isClicked && <AddUserPopup onClose={() => { setIsClicked(false) }} />}
      </div>


      {isEyeClicked && userInfo?.user &&
        <div className="absolute z-50 w-full h-full flex justify-center items-center">
          <UserPopup onClose={() => {
            setIsEyeClicked(false)
            setId("")
          }} user={userInfo?.user} />
        </div>}

      {isEditClicked &&
        <div className="absolute z-50 w-full h-full flex justify-center items-center">
          <EditRolePopup onClose={onClose} role={role}
            setRole={setRole} handleEditRole={handleEditRole} />
        </div>}


      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-blue-900">
            Users Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage instructors and students
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <input
            type="text"
            value={searchValue}
            placeholder="Search by email or phone..."
            className="px-4 py-2 w-64 rounded-xl border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-transparent bg-white"

            onChange={(e) => { setSearchValue(e.target.value) }}
          />

          {/* Filter */}

          <Select onValueChange={(value) => {
            setFiltered(value)
          }}>
            <SelectTrigger className="w-45 bg-white">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Users</SelectItem>
                <SelectItem value="instructor">Instructors</SelectItem>
                <SelectItem value="students">Students</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Add User Button */}
          <button
            className="px-5 py-2 rounded-xl bg-green-600 text-white 
                       hover:bg-green-700 transition-all duration-200 
                       shadow-md shadow-green-200 cursor-pointer"

            onClick={() => { setIsClicked(true) }}
          >
            + Add User
          </button>
        </div>
      </div>

      {/* users */}
      <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full bg-gray-50 rounded-2xl shadow-lg shadow-blue-100/40 overflow-hidden">

        <table className="w-full text-left border-collapse">

          <thead className="bg-gray-50 border-b border-gray-100">
            <tr className="text-xs uppercase tracking-wider text-blue-900/70">
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone Number</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">

            {filteredUsers && filteredUsers.map((user) =>
              <tr key={user.id} className="border-b border-gray-100 hover:bg-blue-50 transition-all duration-200">
                <td className="px-6 py-5 font-medium">
                  {user.email}
                </td>
                <td className="px-6 py-5 text-gray-500">
                  {user.phone}
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 text-xs font-medium rounded-full 
                                 bg-blue-100 text-blue-700 border border-blue-200">
                    {user.roles.join(",")}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="flex items-center gap-2 px-3 py-1 text-xs 
                                 font-medium rounded-full bg-green-100 
                                 text-green-700 border border-green-200 w-fit">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {user.isVerified ? "active" : "inactive"}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex gap-3">

                    {/* View */}
                    <button
                      onClick={() => {
                        setId(user.id);
                        setIsEyeClicked(true);
                      }}
                      className="group relative flex items-center justify-center 
                 w-10 h-10 rounded-xl 
                 bg-blue-50 text-blue-600
                 hover:bg-blue-600 hover:text-white
                 shadow-sm hover:shadow-md
                 transition-all duration-300 ease-in-out
                 active:scale-90 focus:outline-none 
                 focus:ring-2 focus:ring-blue-400"
                    >
                      <MdRemoveRedEye size={18} />

                      <span className="absolute -top-9 scale-0 group-hover:scale-100 
                       transition-transform duration-200 
                       bg-black text-white text-xs px-2 py-1 
                       rounded-md whitespace-nowrap">
                        View User
                      </span>
                    </button>

                    <button
                      className="group relative flex items-center justify-center 
                 w-10 h-10 rounded-xl 
                 bg-green-50 text-green-600
                 hover:bg-green-600 hover:text-white
                 shadow-sm hover:shadow-md
                 transition-all duration-300 ease-in-out
                 active:scale-90 focus:outline-none 
                 focus:ring-2 focus:ring-green-400"

                      onClick={() => {
                        setIsEditClicked(true)
                        setId(user.id)
                        setRole(user.roles?.[0] ?? "")
                      }}


                    >
                      <FaPencilAlt size={16} />

                      <span className="absolute -top-9 scale-0 group-hover:scale-100 
                       transition-transform duration-200 
                       bg-black text-white text-xs px-2 py-1 
                       rounded-md whitespace-nowrap"

                      >
                        Edit User
                      </span>
                    </button>

                    <button
                      className="group relative flex items-center justify-center 
                 w-10 h-10 rounded-xl 
                 bg-red-50 text-red-600
                 hover:bg-red-600 hover:text-white
                 shadow-sm hover:shadow-md
                 transition-all duration-300 ease-in-out
                 active:scale-90 focus:outline-none 
                 focus:ring-2 focus:ring-red-400"
                    >
                      <MdDeleteForever size={20} />

                      <span className="absolute -top-9 scale-0 group-hover:scale-100 
                       transition-transform duration-200 
                       bg-black text-white text-xs px-2 py-1 
                       rounded-md whitespace-nowrap">
                        Delete User
                      </span>
                    </button>

                  </div>
                </td>
              </tr>
            )}


          </tbody>
        </table>

      </div>
      </Suspense>
    </div>
  );

}
