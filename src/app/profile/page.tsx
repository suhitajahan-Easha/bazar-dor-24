
"use client";

import { useSession,updateUser,signOut } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profilepage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();

    try {
      const { error } = await updateUser({ name });

      if (error) {
        setMessage(error.message || "নাম আপডেট করা যায়নি।");
        return;
      }

      setMessage("নাম সফলভাবে আপডেট হয়েছে।");
      router.refresh();
    } catch {
      setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  const handlesignout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.replace("/auth/Sign-in");
          router.refresh();
        },
      },
    });
  };

  // if (!session?.user) {
  //   return (
  //     <div className="mx-auto max-w-7xl p-6">প্রোফাইল দেখতে সাইন ইন করুন।</div>
  //   );
  // }

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="mx-auto my-8 flex w-full max-w-150 flex-col gap-4 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-5 sm:flex-row sm:items-center">
        {session?.user.image ? (
          <img
            src={session?.user.image}
            alt="Profile"
            className="h-24 w-24 rounded-2xl bg-white object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[#F1F6F2] text-2xl font-bold text-[#078A43]">
            {session?.user.name?.charAt(0) || "?"}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <h1 className="font-semibold text-[#26382D]">{session?.user.name}</h1>
          <p className="truncate text-sm text-[#78847B]">
            {session?.user.email}
          </p>
        </div>

        <button
          type="button"
          onClick={handlesignout}
          className="rounded-md px-3 py-2 text-sm text-red-500 hover:bg-red-50"
        >
          ↪ সাইন আউট
        </button>
      </div>

      <div className="mx-auto w-full max-w-150 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-4 sm:p-5">
        <p className="mb-3 text-xs text-[#78847B]">তথ্য</p>

        <Form className="w-full" onSubmit={onSubmit}>
          <Fieldset className="min-w-0">
            <TextField
              isRequired
              name="name"
              defaultValue={session?.user.name || ""}
              validate={(value) =>
                value.trim().length < 3 ? "নাম কমপক্ষে ৩ অক্ষরের হতে হবে" : null
              }
            >
              <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                নাম
              </Label>
              <Input
                className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                placeholder="আপনার নাম লিখুন"
              />
              <FieldError className="mt-1 text-xs text-red-600" />
            </TextField>

            {message && (
              <p role="status" className="mt-3 text-sm text-[#078A43]">
                {message}
              </p>
            )}

            <Fieldset.Actions className="mt-4">
              <Button
                type="submit"
                className="w-full rounded-md bg-[#078A43] px-4 py-3 text-xs font-semibold text-white hover:bg-[#067638]"
              >
                আপডেট
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default Profilepage;
