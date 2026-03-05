import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

type Props ={
    onClose:()=> void,
    role:string,
    setRole:React.Dispatch<React.SetStateAction<string>>,
    handleEditRole:()=>void
}

export default function EditRolePopup({ role, onClose,setRole,handleEditRole }: Props) {

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white w-[400px] rounded-2xl shadow-2xl p-6 
      flex flex-col gap-3
      relative animate-fadeIn">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
        >
          <X size={20} />
        </button>

        

        {/* edit user role */}
        <div className="text-center mt-4 space-y-2">
          <Input onChange={(e)=>{ setRole(e.target.value)}} placeholder="enter role" type="text" value={role} />
        </div>

        <Button
        onClick={handleEditRole}
        className="bg-[#9ECC46] hover:bg-[#185E99] text-white cursor-pointer"> Edit Role</Button>
      </div>
    </div>
  );
}