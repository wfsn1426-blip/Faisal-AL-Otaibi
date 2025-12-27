import { useState } from "react";

export default function Home() {
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);

  return (
    <div className="min-h-screen bg-bgMain px-5 pt-6 animate-fade">

      {/* العنوان */}
      <h1 className="text-[20px] font-semibold text-textMain mb-6">
        لوحة التحكم
      </h1>

      {/* البطاقات */}
      <div className="grid grid-cols-2 gap-4">

        {/* حضور */}
        <button
          disabled={checkIn}
          onClick={() => setCheckIn(true)}
          className={`
            rounded-2xl p-4 text-right transition-all
            ${checkIn
              ? "bg-success text-white"
              : "bg-white shadow active:scale-95"}
            disabled:opacity-80
          `}
        >
          <p className="text-[14px] mb-1">
            {checkIn ? "تم تسجيل الحضور" : "الحضور"}
          </p>
          <p className="text-[12px] opacity-80">
            {checkIn ? "حضورك مسجل اليوم" : "اضغط لتسجيل الحضور"}
          </p>
        </button>

        {/* انصراف */}
        <button
          disabled={!checkIn || checkOut}
          onClick={() => setCheckOut(true)}
          className={`
            rounded-2xl p-4 text-right transition-all
            ${checkOut
              ? "bg-danger text-white"
              : "bg-white shadow active:scale-95"}
            disabled:opacity-50
          `}
        >
          <p className="text-[14px] mb-1">
            {checkOut ? "تم تسجيل الانصراف" : "الانصراف"}
          </p>
          <p className="text-[12px] opacity-80">
            {checkOut ? "انتهى دوامك" : "اضغط لتسجيل الانصراف"}
          </p>
        </button>

      </div>

      {/* سجل */}
      <div className="mt-6 bg-white rounded-2xl p-4 shadow">
        <p className="text-[14px] text-textMain mb-1">السجل</p>
        <p className="text-[12px] text-textSub">
          سيتم عرض سجل الحضور والانصراف هنا
        </p>
      </div>

    </div>
  );
}
