"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#185E99] to-[#9ECC46]">

      
      <div className="absolute w-72 h-72 bg-[#9ECC46] opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-[#185E99] opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 
                   shadow-2xl rounded-3xl px-12 py-16 text-center"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-[28px] italic"
        >
          Welcome to
        </motion.h2>

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[56px] font-bold mt-2 text-white
                     bg-clip-text text-transparent animate-gradient"
        >
          LinguaHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-white/80 mt-2 text-lg tracking-wide"
        >
          Backoffice Management System
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => router.push("/signin")}
            className="mt-10 w-[220px] text-lg py-6 
                       bg-white text-[#185E99] 
                       hover:bg-[#9ECC46] hover:text-white 
                       rounded-2xl shadow-lg cursor-pointer
                       transition-all duration-300 
                       hover:scale-105 active:scale-95"
          >
            Sign In →
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}