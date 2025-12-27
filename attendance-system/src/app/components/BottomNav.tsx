type Props = {
  active: "home" | "profile";
  onChange: (v: "home" | "profile") => void;
};

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t flex justify-around py-2">
      <button
        onClick={() => onChange("home")}
        className={`flex flex-col items-center text-[11px] transition
          ${active === "home" ? "text-primary" : "text-textSub"}
          active:scale-95`}
      >
        <span className="text-[18px]">🏠</span>
        الرئيسية
      </button>

      <button
        onClick={() => onChange("profile")}
        className={`flex flex-col items-center text-[11px] transition
          ${active === "profile" ? "text-primary" : "text-textSub"}
          active:scale-95`}
      >
        <span className="text-[18px]">👤</span>
        الحساب
      </button>
    </nav>
  );
}
