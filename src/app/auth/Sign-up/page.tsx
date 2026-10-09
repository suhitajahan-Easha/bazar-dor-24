"use client";
import { signUp } from "@/lib/auth-client";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";


const Signuppage = () => {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      image: string;
    };
    
    const { data, error } = await signUp.email({
      ...user,
      callbackURL: "/",
    });
   if (data) {
     toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে! 🎉");
      router.push("/");
    }

  if (error) {
    toast.error(error.message || "সাইন আপ ব্যর্থ হয়েছে। আবার চেষ্টা করুন।");
  }}

  return (
    <div className="min-h-screen bg-[#F1F6F2] px-4 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-105">
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-[#26382D]">
            অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="mt-2 text-xs leading-5 text-[#78847B]">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <Form
          className="w-full rounded-xl border border-[#E0E9E2] bg-[#FBFDFC] p-4 sm:p-5"
          onSubmit={onSubmit}
        >
          <Fieldset className="min-w-0">
            <FieldGroup className="gap-3">
              <TextField
                isRequired
                name="name"
                validate={(value) => {
                  if (value.length < 3) {
                    return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                  }
                  return null;
                }}
              >
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  নাম
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="যেমন: রহিম উদ্দিন"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>
              <TextField
                name="image"
                type="url"
                validate={(value) => {
                  if (!value.trim()) return null;

                  try {
                    const url = new URL(value);
                    if (url.protocol !== "https:" && url.protocol !== "http:") {
                      return "একটি সঠিক ছবির URL দিন";
                    }
                    return null;
                  } catch {
                    return "একটি সঠিক ছবির URL দিন";
                  }
                }}
              >
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  প্রোফাইল ছবির URL (ঐচ্ছিক)
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="https://example.com/profile.jpg"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>
              <TextField isRequired name="email" type="email">
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  ইমেইল
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="you@example.com"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>

              <TextField
                isRequired
                name="password"
                type="password"
                minLength={8}
                validate={(value) => {
                  if (value.length < 8) {
                    return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "কমপক্ষে একটি ইংরেজি বড় হাতের অক্ষর দিন";
                  }
                  if (!/[0-9]/.test(value)) {
                    return "কমপক্ষে একটি সংখ্যা দিন";
                  }
                  return null;
                }}
              >
                <Label className="mb-1 block text-xs font-medium text-[#35443A]">
                  পাসওয়ার্ড
                </Label>
                <Input
                  className="h-10 w-full rounded-md border border-[#E1E9E3] bg-white px-3 text-xs text-[#29372D] outline-none placeholder:text-[#9AA49C] focus:border-[#168847] focus:ring-2 focus:ring-[#168847]/10"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                />
                <FieldError className="mt-1 text-xs text-red-600" />
              </TextField>
            </FieldGroup>

            <Fieldset.Actions className="mt-4">
              <Button
                type="submit"
                className="w-full rounded-md bg-[#078A43] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#067638] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#078A43]"
              >
                অ্যাকাউন্ট তৈরি করুন
              </Button>
            </Fieldset.Actions>
          </Fieldset>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E1E9E3]" />
            <span className="text-[11px] text-[#778279]">অথবা</span>
            <div className="h-px flex-1 bg-[#E1E9E3]" />
          </div>

          <div className="flex gap-3 justify-center">
            <Button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border
               border-[#E1E9E3] bg-white px-2 py-3 text-[11px] font-medium text-[#303B33]
                transition-colors hover:bg-[#F3F7F4]"
            >
              <span className="font-bold text-[#4285F4]">
                <FaGoogle className="h-4 w-4" />
              </span>
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              className="flex items-center justify-center gap-2 rounded-md border border-[#E1E9E3] bg-white px-2 py-3 text-[11px] font-medium text-[#303B33] transition-colors hover:bg-[#F3F7F4]"
            >
              <span className="font-bold text-[#24292F]">
                <FaGithub />
              </span>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          <p className="mt-4 text-center text-xs text-[#778279]">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/auth/Sign-in"
              className="font-semibold text-[#078A43] hover:underline"
            >
              সাইন ইন করুন
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
    </div>
  );
};

export default Signuppage;
