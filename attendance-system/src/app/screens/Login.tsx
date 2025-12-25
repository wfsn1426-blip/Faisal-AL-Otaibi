import { useState } from "react";

type Props = {
  onLogin: () => void;
};

export default function Login({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-full flex flex-col justify-center px-6 bg-white animate-slide">
      
      <h2 className="text-2xl font-bold text-center mb-8">
        تسجيل الدخول
      </h2>

      <input
        type="email"
        placeholder="البريد الإلكتروني"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <input
        type="password"
        placeholder="كلمة المرور"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />

      <button
        onClick={onLogin}
        className="bg-primary text-white py-3 rounded-lg font-semibold active:scale-95 transition"
      >
        دخول
      </button>

    </div>
  );
}
