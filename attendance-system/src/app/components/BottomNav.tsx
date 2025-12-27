import {
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeSolid,
  UserIcon as UserSolid,
} from "@heroicons/react/24/solid";

type Props = {
  active: "home" | "profile";
  onChange: (v: "home" | "profile") => void;
};

export default function BottomNav({ active, onChange }: Props) {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white border-t flex justify-around py-2">

      {/* الرئيسية */}
      <button
        onClick={() => onChange("home")}
        className="flex flex-col items-center gap-1 active:scale-95 transition"
      >
        {active === "home" ? (
          <HomeSolid className="w-6 h-6 text-primary" />
        ) : (
          <HomeIcon className="w-6 h-6 text-textSub" />
        )}
        <span
          className={`text-[11px] ${
            active === "home" ? "text-primary" : "text-textSub"
          }`}
        >
          الرئيسية
        </span>
      </button>

      {/* الحساب */}
      <button
        onClick={() => onChange("profile")}
        className="flex flex-col items-center gap-1 active:scale-95 transition"
      >
        {active === "profile" ? (
          <UserSolid className="w-6 h-6 text-primary" />
        ) : (
          <UserIcon className="w-6 h-6 text-textSub" />
        )}
        <span
          className={`text-[11px] ${
            active === "profile" ? "text-primary" : "text-textSub"
          }`}
        >
          الحساب
        </span>
      </button>

    </nav>
  );
}
