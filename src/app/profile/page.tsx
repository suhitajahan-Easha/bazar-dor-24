
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
import Image from "next/image";
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


  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="w-full max-w-150 mx-auto my-6">
        <h1 className=" font-bold font-3xl">আমার প্রোফাইল</h1>
        <p className="text-[#78847B] text-md">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

      </div>
      <div className="mx-auto my-8 flex w-full max-w-150 flex-col gap-4 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-5 sm:flex-row sm:items-center">
        <img
            src={session?.user.image  || "/default-avatar.png"}
            alt="Profile"
            className="h-24 w-24 rounded-2xl bg-white object-cover"
          />

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

      <div className="mx-auto w-full max-w-150  rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-4 sm:p-5">
        <p className="mb-3 font-bold text-md ">তথ্য</p>

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
              <Label className="mb-1 block text-sm font-bold text-[#35443A]">
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

///responsive 
// "use client";

// import { useSession, updateUser, signOut } from "@/lib/auth-client";
// import {
//   Button,
//   FieldError,
//   Fieldset,
//   Form,
//   Input,
//   Label,
//   TextField,
// } from "@heroui/react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Profilepage = () => {
//   const { data: session } = useSession();
//   const router = useRouter();
//   const [message, setMessage] = useState("");

//   const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage("");

//     const formData = new FormData(e.currentTarget);
//     const name = String(formData.get("name") || "").trim();

//     try {
//       const { error } = await updateUser({ name });

//       if (error) {
//         setMessage(error.message || "নাম আপডেট করা যায়নি।");
//         return;
//       }

//       setMessage("নাম সফলভাবে আপডেট হয়েছে।");
//       router.refresh();
//     } catch {
//       setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
//     }
//   };

//   const handlesignout = async () => {
//     await signOut({
//       fetchOptions: {
//         onSuccess: () => {
//           router.replace("/auth/Sign-in");
//           router.refresh();
//         },
//       },
//     });
//   };

//   return (
//     <div className="mx-auto w-full max-w-7xl px-4 max-sm:px-3">
//       <div className="mx-auto my-6 w-full max-w-150 max-sm:my-4">
//         <h1 className="text-2xl font-bold max-sm:text-xl">আমার প্রোফাইল</h1>
//         <p className="mt-1 text-md text-[#78847B] max-sm:text-sm">
//           আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
//         </p>
//       </div>

//       <div className="mx-auto my-8 flex w-full max-w-150 flex-col gap-4 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-5 sm:flex-row sm:items-center max-sm:my-5 max-sm:gap-3 max-sm:p-4">
//         <img
//           src={session?.user.image || "/default-avatar.png"}
//           alt="Profile"
//           className="h-24 w-24 shrink-0 rounded-2xl bg-white object-cover max-sm:h-20 max-sm:w-20"
//         />

//         <div className="min-w-0 flex-1">
//           <h2 className="break-words font-semibold text-[#26382D]">
//             {session?.user.name}
//           </h2>
//           <p className="break-all text-sm text-[#78847B] max-sm:text-xs">
//             {session?.user.email}
//           </p>
//         </div>

//         <button
//           type="button"
//           onClick={handlesignout}
//           className="shrink-0 self-start rounded-md px-3 py-2 text-sm text-red-500 transition hover:bg-red-50 sm:self-center max-sm:w-full max-sm:border max-sm:border-red-100"
//         >
//           ↪ সাইন আউট
//         </button>
//       </div>

//       <div className="mx-auto mb-8 w-full max-w-150 rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-5 max-sm:p-4">
//         <p className="mb-4 text-md font-bold max-sm:text-sm">তথ্য</p>

//         <Form className="w-full" onSubmit={onSubmit}>
//           <Fieldset className="min-w-0">
//             <TextField
//               isRequired
//               name="name"
//               defaultValue={session?.user.name || ""}
//               validate={(value) =>
//                 value.trim().length < 3
//                   ? "নাম কমপক্ষে ৩ অক্ষরের হতে হবে"
//                   : null
//               }
//             >
//               <Label className="mb-1 block text-sm font-bold text-[#35443A]">
//                 নাম
//               </Label>
//               <Input
//                 className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
//                 placeholder="আপনার নাম লিখুন"
//               />
//               <FieldError className="mt-1 text-xs text-red-600" />
//             </TextField>

//             {message && (
//               <p
//                 role="status"
//                 className={`mt-3 text-sm max-sm:text-xs ${
//                   message.includes("সমস্যা") ||
//                   message.includes("যায়নি")
//                     ? "text-red-600"
//                     : "text-[#078A43]"
//                 }`}
//               >
//                 {message}
//               </p>
//             )}

//             <Fieldset.Actions className="mt-4 w-full">
//               <Button
//                 type="submit"
//                 className="w-full rounded-md bg-[#078A43] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#067638]"
//               >
//                 আপডেট
//               </Button>
//             </Fieldset.Actions>
//           </Fieldset>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Profilepage;
