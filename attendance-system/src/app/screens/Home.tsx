import { useState } from "react";

export default function Home() {
  const [checkedIn, setCheckedIn] = useState(false);
  const [checkedOut, setCheckedOut] = useState(false);

  return (
    <div className="h-screen bg-gray-100 p-4 animate-fade">
      
      <h1 className="text-xl font-bold mb-4">
        لوحة التحكم
      </h1>

      <div className="grid grid-cols-2 gap-4">

        {/* زر الحضور */}
        <button
          disabled={checkedIn}
          onClick={() => setCheckedIn(true)}
          className={`rounded-xl p-4 text-left transition transform
            ${checkedIn
              ? "bg-green-500 text-white"
              : "bg-white shadow active:scale-95"}
            disabled:opacity-70`}
        >
          <h3 className="font-semibold mb-1">
            {checkedIn ? "تم تسجيل الحضور" : "الحضور"}
          </h3>
          <p className="text-sm">
            {checkedIn ? "حضورك مسجل" : "سجّل حضورك الآن"}
          </p>
        </button>

        {/* زر الانصراف */}
        <button
          disabled={!checkedIn || checkedOut}
          onClick={() => setCheckedOut(true)}
          className={`rounded-xl p-4 text-left transition transform
            ${checkedOut
              ? "bg-red-500 text-white"
              : "bg-white shadow active:scale-95"}
            disabled:opacity-50`}
        >
          <h3 className="font-semibold mb-1">
            {checkedOut ? "تم تسجيل الانصراف" : "الانصراف"}
          </h3>
          <p className="text-sm">
            {checkedOut ? "تم إنهاء الدوام" : "سجّل الانصراف"}
          </p>
        </button>

        {/* السجل */}
        <div className="bg-white rounded-xl p-4 shadow col-span-2">
          <h3 className="font-semibold mb-2">السجل</h3>
          <p className="text-sm text-gray-500">
            سيتم عرض سجل الحضور هنا
          </p>
        </div>

      </div>
    </div>
  );
}
