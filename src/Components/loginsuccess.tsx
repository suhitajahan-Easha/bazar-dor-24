"use client";

import { useEffect, useRef } from "react";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function LoginSuccessToast() {
  const { data: session, isPending } = useSession();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (isPending || !session || hasShownToast.current) return;

    const provider = sessionStorage.getItem("login-provider");

    if (provider) {
      toast.success(`${provider} দিয়ে সফলভাবে লগইন হয়েছে!`);
      sessionStorage.removeItem("login-provider");
      hasShownToast.current = true;
    }
  }, [session, isPending]);

  return null;
}