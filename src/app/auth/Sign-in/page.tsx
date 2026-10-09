// "use client";
// import { authClient, signIn } from "@/lib/auth-client";
// import { createAuthClient } from "better-auth/client";

// import { FaGoogle } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { useRouter } from "next/navigation";
// import {
//   Button,
//   Description,
//   FieldError,
//   FieldGroup,
//   Fieldset,
//   Form,
//   Input,
//   Label,
//   TextArea,
//   TextField,
// } from "@heroui/react";
// import Link from "next/link";

// const Signinpage = () => {

//     const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
//       e.preventDefault();
//       const formData = new FormData(e.target);
//       const user =Object.fromEntries(formData.entries()) as {email:string,password:string};
//       console.log(user)

//       const {data,error}= await authClient.signIn.email({
//         ...user,
//         callbackURL:"/"
//       })
//       if(data){

//        console.log(data)

//       }
//       if(error){
//         console.log(error)
//       }}
// //   const authClient = createAuthClient();
// //     const logIn = async () => {
// //       const data = await authClient.signIn.social({
// //         provider: "google",
// //       });
// //     };
//   return (
//     <div className="min-h-screen bg-[#F1F6F2] px-4 py-8 sm:py-12">
//           <div className="mx-auto w-full max-w-[420px]">
//             <div className="mb-5 text-center">
//               <h1 className="text-2xl font-bold tracking-tight text-[#26382D]">
//                 অ্যাকাউন্ট তৈরি করুন
//               </h1>
//               <p className="mt-2 text-xs leading-5 text-[#78847B]">
//                 বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
//               </p>
//             </div>

//             <Form
//               className="w-full rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-4 sm:p-5"
//               onSubmit={onSubmit}
//             >
//               <Fieldset className="min-w-0">
//                 <FieldGroup className="gap-3">
//                   <TextField isRequired name="email" type="email">
//                     <Label className="mb-1 block text-xs font-medium text-[#35443A]">
//                       ইমেইল
//                     </Label>
//                     <Input
//                       className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
//                       placeholder="you@example.com"
//                     />
//                     <FieldError className="mt-1 text-xs text-red-600" />
//                   </TextField>
//                   <TextField
//                     isRequired
//                     name="password"
//                     type="password"
//                     minLength={8}
//                     validate={(value) => {
//                       if (value.length < 8) {
//                         return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
//                       }
//                       if (!/[A-Z]/.test(value)) {
//                         return "কমপক্ষে একটি ইংরেজি বড় হাতের অক্ষর দিন";
//                       }
//                       if (!/[0-9]/.test(value)) {
//                         return "কমপক্ষে একটি সংখ্যা দিন";
//                       }
//                       return null;
//                     }}
//                   >
//                     <Label className="mb-1 block text-xs font-medium text-[#35443A]">
//                       পাসওয়ার্ড
//                     </Label>
//                     <Input
//                       className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
//                       placeholder="কমপক্ষে ৮ অক্ষর"
//                     />
//                     <FieldError className="mt-1 text-xs text-red-600" />
//                   </TextField>
//                 </FieldGroup>

//                 <Fieldset.Actions className="mt-4">
//                   <Button
//                     type="submit"
//                     className="w-full rounded-md bg-[#078A43] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#067638] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078A43]"
//                   >
//                      তৈরি করুন
//                   </Button>
//                 </Fieldset.Actions>
//               </Fieldset>

//               <div className="my-4 flex items-center gap-3">
//                 <div className="h-px flex-1 bg-[#E1E9E3]" />
//                 <span className="text-[11px] text-[#778279]">অথবা</span>
//                 <div className="h-px flex-1 bg-[#E1E9E3]" />
//               </div>

//               <div className="flex gap-3 justify-center">
//                 <Button
//                   type="button"
//                   className="flex items-center justify-center gap-2 rounded-md border
//                    border-[#E1E9E3] bg-white px-2 py-3 text-[11px] font-medium text-[#303B33]
//                     transition-colors hover:bg-[#F3F7F4]"
//                 >
//                   <span className="font-bold text-[#4285F4]">
//                     <FaGoogle className="h-4 w-4" />
//                   </span>
//                   Google দিয়ে চালিয়ে যান
//                 </Button>

//                 <Button
//                   type="button"
//                   className="flex items-center justify-center gap-2 rounded-md border border-[#E1E9E3] bg-white px-2 py-3 text-[11px] font-medium text-[#303B33] transition-colors hover:bg-[#F3F7F4]"
//                 >
//                   <span className="font-bold text-[#24292F]">
//                     <FaGithub />
//                   </span>
//                   GitHub দিয়ে চালিয়ে যান
//                 </Button>
//               </div>

//               {/* <p className="mt-4 text-center text-xs text-[#778279]">
//                 অ্যাকাউন্ট আছে?{" "}
//                 <Link
//                   href="/login"
//                   className="font-semibold text-[#078A43] hover:underline"
//                 >
//                   সাইন ইন করুন
//                 </Link>
//               </p> */}
//             </Form>

//             <div className="mt-5 text-center">
//               <Link
//                 href="/"
//                 className="text-xs text-[#879189] transition-colors hover:text-[#078A43]"
//               >
//                 ← হোম পেজে ফিরে যান
//               </Link>
//             </div>
//           </div>
//         </div>
//   );
// };

// export default Signinpage;

"use client";

import { signIn } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";

const Signinpage = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = {
      email: String(formData.get("email") || ""),
      password: String(formData.get("password") || ""),
    };

    try {
      const { data, error } = await signIn.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        setErrorMessage(
          error.message || "সাইন ইন করা যায়নি। আবার চেষ্টা করুন।",
        );
        return;
      }

      if (data) {
        router.replace("/");
        router.refresh();
      }
    } catch {
      setErrorMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <main className="min-h-screen bg-[#F1F6F2] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[420px]">
        <header className="mb-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#26382D]">
            সাইন ইন
          </h1>
          <p className="mt-1 text-xs leading-5 text-[#78847B]">
            বিস্তারিত দাম, বাজারের তথ্য ও প্রয়োজনীয় সুবিধা পেতে অ্যাকাউন্টে
            ঢুকুন।
          </p>
        </header>

        <Form
          onSubmit={onSubmit}
          className="w-full rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-4 sm:p-5"
        >
          <Fieldset className="w-full min-w-0">
            <FieldGroup className="gap-3">
              <TextField isRequired name="email" type="email">
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  ইমেইল
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  পাসওয়ার্ড
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  autoComplete="current-password"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>
            </FieldGroup>

            {errorMessage && (
              <p role="alert" className="mt-3 text-xs text-red-600">
                {errorMessage}
              </p>
            )}

            <Fieldset.Actions className="mt-4 w-full">
              <Button
                type="submit"
                isDisabled={isLoading}
                className="h-10 w-full rounded-md bg-[#078A43] px-4 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#067638] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078A43] disabled:opacity-60"
              >
                {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
              </Button>
            </Fieldset.Actions>
          </Fieldset>

          <div className="my-4 flex w-full items-center gap-3">
            <div className="h-px flex-1 bg-[#E1E9E3]" />
            <span className="text-[11px] text-[#778279]">অথবা</span>
            <div className="h-px flex-1 bg-[#E1E9E3]" />
          </div>

          <div className="flex justify-center gap-2  font-bold ">
            <Button
              type="button"
              // onPress={() => handleSocialSignIn("google")}
              className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#E1E9E3] bg-white px-2 text-[11px] font-medium text-[#303B33] transition-colors hover:bg-[#F3F7F4]"
            >
              <FaGoogle className="h-3.5 w-3.5 text-[#4285F4]" />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              // onPress={() => handleSocialSignIn("github")}
              className="flex h-10 items-center justify-center gap-2 rounded-md border border-[#E1E9E3] bg-white px-2 text-[11px] font-medium text-[#303B33] transition-colors hover:bg-[#F3F7F4]"
            >
              <FaGithub className="h-3.5 w-3.5 text-[#24292F]" />
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="mt-4 w-full text-center text-xs text-[#778279]">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/auth/Sign-up"
              className="font-semibold text-[#078A43] hover:underline"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </Form>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-xs text-[#879189] transition-colors hover:text-[#078A43]"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signinpage;
