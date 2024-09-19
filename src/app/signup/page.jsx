// pages/signup.jsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <form className="mt-8 space-y-6">
          <input type="text" placeholder="Full Name" required className="w-full px-3 py-2 border rounded-md" />
          <input type="email" placeholder="Email address" required className="w-full px-3 py-2 border rounded-md" />
          <input type="password" placeholder="Password" required className="w-full px-3 py-2 border rounded-md" />
          <div className="flex items-center justify-between">
            <Button variant="primary" className="w-full">Sign Up</Button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-primary hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
