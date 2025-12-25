export default function Home() {
  return (
    <div className="h-screen bg-gray-100 p-4 animate-fade">
      
      <h1 className="text-xl font-bold mb-4">
        لوحة التحكم
      </h1>

      <div className="grid grid-cols-2 gap-4">
        
        <div className="bg-white rounded-xl p-4 shadow active:scale-95 transition">
          <h3 className="font-semibold mb-2">الحضور</h3>
          <p className="text-sm text-gray-500">تسجيل حضور اليوم</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow active:scale-95 transition">
          <h3 className="font-semibold mb-2">الانصراف</h3>
          <p className="text-sm text-gray-500">تسجيل الانصراف</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow active:scale-95 transition col-span-2">
          <h3 className="font-semibold mb-2">السجل</h3>
          <p className="text-sm text-gray-500">عرض سجل الأيام السابقة</p>
        </div>

      </div>
    </div>
  );
}
