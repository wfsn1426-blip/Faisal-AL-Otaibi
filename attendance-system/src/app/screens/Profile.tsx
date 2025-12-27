export default function Profile() {
  return (
    <div className="min-h-screen bg-bgMain px-5 pt-6 pb-20 animate-fade">

      <h1 className="text-[20px] font-semibold text-textMain mb-6">
        الحساب
      </h1>

      <div className="bg-white rounded-2xl p-4 shadow mb-4">
        <p className="text-[14px] text-textMain mb-1">الاسم</p>
        <p className="text-[12px] text-textSub">Dalal</p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow mb-4">
        <p className="text-[14px] text-textMain mb-1">البريد الإلكتروني</p>
        <p className="text-[12px] text-textSub">user@email.com</p>
      </div>

      <button className="w-full bg-danger text-white py-3 rounded-2xl text-[14px] font-medium active:scale-95 transition">
        تسجيل الخروج
      </button>

    </div>
  );
}
