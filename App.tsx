import { useState } from 'react';
import { Shield, Users, Briefcase, ArrowRight, CalendarCheck, FileText, Package, BarChart3, Award, Plane, Clock, BookOpen, ClipboardList, UserPlus, FileCheck, Save } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import logoImage from 'figma:asset/e082bc7fa3ec9d95bfe847d20f7b8e0633cf4a49.png';

type Page = 'login' | 'home' | 'officers' | 'individuals' | 'employees' | 'officers-attendance' | 'individuals-attendance' | 'employees-attendance' | 'officers-report' | 'individuals-report' | 'employees-report' | 'officers-deliveries' | 'individuals-deliveries' | 'officers-general-report' | 'individuals-general-report' | 'employees-general-report' | 'officers-discipline' | 'individuals-discipline' | 'employees-discipline' | 'officers-leave' | 'individuals-leave' | 'employees-leave' | 'officers-program' | 'individuals-program' | 'employees-program' | 'officers-admin-work' | 'individuals-admin-work' | 'employees-admin-work' | 'officers-attachment' | 'individuals-attachment' | 'employees-attachment' | 'officers-assigned' | 'individuals-assigned' | 'employees-assigned' | 'individuals-shifts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [attendanceStatus, setAttendanceStatus] = useState<'present' | 'absent' | null>(null);
  const [absenceReason, setAbsenceReason] = useState<string>('');
  const [absenceDuration, setAbsenceDuration] = useState<'morning' | 'fullday' | null>(null);
  const [missionType, setMissionType] = useState<string>('');
  const [missionLocation, setMissionLocation] = useState<'internal' | 'external' | null>(null);
  const [missionDuration, setMissionDuration] = useState<string>('');
  const [missionStartDate, setMissionStartDate] = useState<string>('');
  const [missionEndDate, setMissionEndDate] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [employeeNumber, setEmployeeNumber] = useState<string>('');
  const [showReport, setShowReport] = useState<boolean>(false);
  const [department, setDepartment] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [division, setDivision] = useState<string>('');
  const [disciplineType, setDisciplineType] = useState<string>('');
  const [thankYouLetter, setThankYouLetter] = useState<string>('');
  const [medalType, setMedalType] = useState<string>('');
  const [violationType, setViolationType] = useState<string>('');
  const [violationDate, setViolationDate] = useState<string>('');
  const [actionTaken, setActionTaken] = useState<string>('');
  const [leaveType, setLeaveType] = useState<string>('');
  const [leaveStartDate, setLeaveStartDate] = useState<string>('');
  const [leaveEndDate, setLeaveEndDate] = useState<string>('');
  const [programStartDate, setProgramStartDate] = useState<string>('');
  const [programEndDate, setProgramEndDate] = useState<string>('');
  const [programType, setProgramType] = useState<string>('');
  const [assignedWork, setAssignedWork] = useState<string>('');
  const [workDuration, setWorkDuration] = useState<string>('');
  const [attachmentStartDate, setAttachmentStartDate] = useState<string>('');
  const [attachmentEndDate, setAttachmentEndDate] = useState<string>('');
  const [attachmentDetail, setAttachmentDetail] = useState<string>('');
  const [assignedStartDate, setAssignedStartDate] = useState<string>('');
  const [assignedEndDate, setAssignedEndDate] = useState<string>('');
  const [assignedDetail, setAssignedDetail] = useState<string>('');
  const [shiftType, setShiftType] = useState<string>('');
  const [shiftStartDate, setShiftStartDate] = useState<string>('');
  const [shiftEndDate, setShiftEndDate] = useState<string>('');
  const [assigningEntity, setAssigningEntity] = useState<string>('');
  const [assignedToEntity, setAssignedToEntity] = useState<string>('');
  const [attachingEntity, setAttachingEntity] = useState<string>('');
  const [attachedToEntity, setAttachedToEntity] = useState<string>('');

  // بيانات وهمية للرسم البياني
  const chartData = [
    { name: 'السبت', الحضور: 95, الغياب: 5 },
    { name: 'الأحد', الحضور: 92, الغياب: 8 },
    { name: 'الإثنين', الحضور: 98, الغياب: 2 },
    { name: 'الثلاثاء', الحضور: 90, الغياب: 10 },
    { name: 'الأربعاء', الحضور: 94, الغياب: 6 },
    { name: 'الخميس', الحضور: 96, الغياب: 4 },
  ];

  // دالة تحويل التاريخ الميلادي إلى هجري (تقريبي)
  const gregorianToHijri = (date: Date) => {
    const gYear = date.getFullYear();
    const gMonth = date.getMonth() + 1;
    const gDay = date.getDate();
    
    // حساب Julian Day
    let jd = Math.floor((1461 * (gYear + 4800 + Math.floor((gMonth - 14) / 12))) / 4) +
             Math.floor((367 * (gMonth - 2 - 12 * Math.floor((gMonth - 14) / 12))) / 12) -
             Math.floor((3 * Math.floor((gYear + 4900 + Math.floor((gMonth - 14) / 12)) / 100)) / 4) +
             gDay - 32075;
    
    // تحويل إلى التقويم الهجري
    const l = jd - 1948440 + 10632;
    const n = Math.floor((l - 1) / 10631);
    const l2 = l - 10631 * n + 354;
    const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
              Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
    const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
               Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
    const hMonth = Math.floor((24 * l3) / 709);
    const hDay = l3 - Math.floor((709 * hMonth) / 24);
    const hYear = 30 * n + j - 30;
    
    return { day: hDay, month: hMonth, year: hYear };
  };

  // Get current date in Arabic format
  const getCurrentDate = () => {
    const days = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const monthsGregorian = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const monthsHijri = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'];
    
    const now = new Date();
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = monthsGregorian[now.getMonth()];
    const year = now.getFullYear();
    
    // تحويل التاريخ الميلادي إلى هجري
    const hijriDate = gregorianToHijri(now);
    
    const gregorianString = `${day} ${month} ${year}م`;
    const hijriString = `${hijriDate.day} ${monthsHijri[hijriDate.month - 1]} ${hijriDate.year}هـ`;
    
    return { dayName, gregorianString, hijriString };
  };

  const { dayName, gregorianString, hijriString } = getCurrentDate();

  const handleLogin = () => {
    // يمكن إضافة التحقق من بيانات تسجيل الدخول هنا
    setCurrentPage('home');
  };

  const renderLoginPage = () => (
    <>
      {/* Header Bar - Maroon Background */}
      <header className="w-full bg-[#8B0000] py-8 px-6">
      </header>

      {/* Main Content - Login Form */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl text-center mb-8 text-[#8B0000]">نظام المتابعة</h1>
        
        <div className="w-full max-w-sm space-y-6">
          {/* اسم المستخدم */}
          <div>
            <label className="block mb-2 text-lg">اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="أدخل اسم المستخدم"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* كلمة المرور */}
          <div>
            <label className="block mb-2 text-lg">كلمة المرور</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر تسجيل الدخول */}
          <button
            onClick={handleLogin}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors text-xl"
          >
            تسجيل الدخول
          </button>
        </div>
      </main>
    </>
  );

  const renderHomePage = () => (
    <>
      {/* Header Bar - Maroon Background */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('login')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <div className="flex-1"></div>
      </header>

      {/* Main Content - Title and Icons Grid */}
      <main className="flex-1 flex flex-col p-6">
        <h1 className="text-3xl text-center mb-2 mt-4">نظام المتابعة</h1>
        
        {/* Date Display */}
        <div className="mb-8 px-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-base text-gray-600">{gregorianString}</p>
            <p className="text-lg text-gray-700">{dayName}</p>
          </div>
          <div className="flex justify-start">
            <p className="text-base text-gray-600">{hijriString}</p>
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5 w-full max-w-xs">
            {/* Officers Button */}
            <button 
              onClick={() => setCurrentPage('officers')}
              className="bg-[#8B0000] rounded-2xl p-6 shadow-lg hover:bg-[#6B0000] transition-colors flex flex-col items-center gap-3"
            >
              <Shield className="w-14 h-14 text-white" />
              <span className="text-white text-xl">الضباط</span>
            </button>

            {/* Individuals Button */}
            <button 
              onClick={() => setCurrentPage('individuals')}
              className="bg-[#8B0000] rounded-2xl p-6 shadow-lg hover:bg-[#6B0000] transition-colors flex flex-col items-center gap-3"
            >
              <Users className="w-14 h-14 text-white" />
              <span className="text-white text-xl">أفراد</span>
            </button>

            {/* Employees Button */}
            <button 
              onClick={() => setCurrentPage('employees')}
              className="bg-[#8B0000] rounded-2xl p-6 shadow-lg hover:bg-[#6B0000] transition-colors flex flex-col items-center gap-3"
            >
              <Briefcase className="w-14 h-14 text-white" />
              <span className="text-white text-xl">الموظفين</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );

  const renderOfficersPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الضباط</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* الحضور والغياب */}
          <button 
            onClick={() => setCurrentPage('officers-attendance')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <CalendarCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">الحضور والغياب</span>
          </button>

          {/* طلب تقرير خاص */}
          <button 
            onClick={() => setCurrentPage('officers-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileText className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير خاص</span>
          </button>

          {/* استلامات */}
          <button 
            onClick={() => setCurrentPage('officers-deliveries')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Package className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">استلامات</span>
          </button>

          {/* طلب تقرير عام */}
          <button 
            onClick={() => setCurrentPage('officers-general-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BarChart3 className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير عام</span>
          </button>

          {/* إجازات */}
          <button 
            onClick={() => setCurrentPage('officers-leave')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Plane className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">إجازات</span>
          </button>

          {/* مستوى الانضباط العام */}
          <button 
            onClick={() => setCurrentPage('officers-discipline')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Award className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">مستوى الانضباط العام</span>
          </button>

          {/* برنامج */}
          <button 
            onClick={() => setCurrentPage('officers-program')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BookOpen className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">برنامج</span>
          </button>

          {/* عمل إداري */}
          <button 
            onClick={() => setCurrentPage('officers-admin-work')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <ClipboardList className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">عمل إداري</span>
          </button>

          {/* ملحق */}
          <button 
            onClick={() => setCurrentPage('officers-attachment')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">ملحق</span>
          </button>

          {/* مكلف */}
          <button 
            onClick={() => setCurrentPage('officers-assigned')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <UserPlus className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">مكلف</span>
          </button>
        </div>
      </main>
    </>
  );

  const renderIndividualsPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">أفراد</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* الحضور والغياب */}
          <button 
            onClick={() => setCurrentPage('individuals-attendance')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <CalendarCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">الحضور والغياب</span>
          </button>

          {/* طلب تقرير خاص */}
          <button 
            onClick={() => setCurrentPage('individuals-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileText className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير خاص</span>
          </button>

          {/* استلامات */}
          <button 
            onClick={() => setCurrentPage('individuals-deliveries')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Package className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">استلامات</span>
          </button>

          {/* طلب تقرير عام */}
          <button 
            onClick={() => setCurrentPage('individuals-general-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BarChart3 className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير عام</span>
          </button>

          {/* إجازات */}
          <button 
            onClick={() => setCurrentPage('individuals-leave')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Plane className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">إجازات</span>
          </button>

          {/* مستوى الانضباط العام */}
          <button 
            onClick={() => setCurrentPage('individuals-discipline')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Award className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">مستوى الانضباط العام</span>
          </button>

          {/* المناوبات */}
          <button 
            onClick={() => setCurrentPage('individuals-shifts')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Clock className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">المناوبات</span>
          </button>

          {/* برنامج */}
          <button 
            onClick={() => setCurrentPage('individuals-program')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BookOpen className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">برنامج</span>
          </button>

          {/* عمل إداري */}
          <button 
            onClick={() => setCurrentPage('individuals-admin-work')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <ClipboardList className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">عمل إداري</span>
          </button>

          {/* ملحق */}
          <button 
            onClick={() => setCurrentPage('individuals-attachment')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">ملحق</span>
          </button>

          {/* مكلف */}
          <button 
            onClick={() => setCurrentPage('individuals-assigned')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <UserPlus className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">مكلف</span>
          </button>
        </div>
      </main>
    </>
  );

  const renderEmployeesPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('home')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الموظفين</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* الحضور والغياب */}
          <button 
            onClick={() => setCurrentPage('employees-attendance')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <CalendarCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">الحضور والغياب</span>
          </button>

          {/* طلب تقرير خاص */}
          <button 
            onClick={() => setCurrentPage('employees-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileText className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير خاص</span>
          </button>

          {/* طلب تقرير عام */}
          <button 
            onClick={() => setCurrentPage('employees-general-report')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BarChart3 className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">طلب تقرير عام</span>
          </button>

          {/* مستوى الانضباط العام */}
          <button 
            onClick={() => setCurrentPage('employees-discipline')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Award className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">مستوى الانضباط العام</span>
          </button>

          {/* الإجازات */}
          <button 
            onClick={() => setCurrentPage('employees-leave')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <Plane className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">الإجازات</span>
          </button>

          {/* برنامج */}
          <button 
            onClick={() => setCurrentPage('employees-program')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <BookOpen className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">برنامج</span>
          </button>

          {/* عمل إداري */}
          <button 
            onClick={() => setCurrentPage('employees-admin-work')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <ClipboardList className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">عمل إداري</span>
          </button>

          {/* ملحق */}
          <button 
            onClick={() => setCurrentPage('employees-attachment')}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
          >
            <FileCheck className="w-12 h-12 text-[#8B0000]" />
            <span className="text-center text-sm">ملحق</span>
          </button>
        </div>
      </main>
    </>
  );

  const renderOfficersAttendancePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('officers')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الحضور والغياب</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الحالة */}
          <div>
            <label className="block mb-3 text-lg">الحالة</label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setAttendanceStatus('present');
                  setAbsenceReason('');
                  setAbsenceDuration(null);
                  setMissionType('');
                  setMissionLocation(null);
                  setMissionDuration('');
                  setMissionStartDate('');
                  setMissionEndDate('');
                }}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'present'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                موجود
              </button>
              <button
                onClick={() => setAttendanceStatus('absent')}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'absent'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                غير موجود
              </button>
            </div>
          </div>

          {/* سبب الغياب - يظهر فقط عند اختيار غير موجود */}
          {attendanceStatus === 'absent' && (
            <div>
              <label className="block mb-3 text-lg">سبب الغياب</label>
              <select
                value={absenceReason}
                onChange={(e) => {
                  setAbsenceReason(e.target.value);
                  setAbsenceDuration(null);
                  if (e.target.value !== 'مهمة') {
                    setMissionType('');
                    setMissionLocation(null);
                    setMissionDuration('');
                    setMissionStartDate('');
                    setMissionEndDate('');
                  }
                }}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر السبب</option>
                <option value="غياب">غياب</option>
                <option value="مستأذن">مستأذن</option>
                <option value="مستشفى">مستشفى</option>
                <option value="مرافق">مرافق</option>
                <option value="مهمة">مهمة</option>
              </select>
            </div>
          )}

          {/* المدة - تظهر فقط للأسباب: غياب، مستأذن، مستشفى، مرافق */}
          {attendanceStatus === 'absent' && (absenceReason === 'غياب' || absenceReason === 'مستأذن' || absenceReason === 'مستشفى' || absenceReason === 'مرافق') && (
            <div>
              <label className="block mb-3 text-lg">المدة</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setAbsenceDuration('morning')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'morning'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  حصة صباحية
                </button>
                <button
                  onClick={() => setAbsenceDuration('fullday')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'fullday'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  يوم كامل
                </button>
              </div>
            </div>
          )}

          {/* تفاصيل المهمة - تظهر فقط عند اختيار مه��ة */}
          {attendanceStatus === 'absent' && absenceReason === 'مهمة' && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg mb-3">تفاصيل المهمة</h3>
              
              {/* نوع المهمة: داخلية/خارجية */}
              <div>
                <label className="block mb-2">نوع ��لمهمة</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setMissionLocation('internal')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'internal'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    داخلية
                  </button>
                  <button
                    onClick={() => setMissionLocation('external')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'external'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    خارجية
                  </button>
                </div>
              </div>

              {/* وصف المهمة */}
              <div>
                <label className="block mb-2">وصف المهمة</label>
                <input
                  type="text"
                  value={missionType}
                  onChange={(e) => setMissionType(e.target.value)}
                  placeholder="أدخل وصف المهمة"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* المدة */}
              <div>
                <label className="block mb-2">المدة</label>
                <input
                  type="text"
                  value={missionDuration}
                  onChange={(e) => setMissionDuration(e.target.value)}
                  placeholder="أدخل المدة (مثلاً: 3 أيام)"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ البداية */}
              <div>
                <label className="block mb-2">تاريخ البداية</label>
                <input
                  type="date"
                  value={missionStartDate}
                  onChange={(e) => setMissionStartDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ النهاية */}
              <div>
                <label className="block mb-2">تاريخ النهاية</label>
                <input
                  type="date"
                  value={missionEndDate}
                  onChange={(e) => setMissionEndDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {attendanceStatus && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsAttendancePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('individuals')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الحضور والغياب</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الحالة */}
          <div>
            <label className="block mb-3 text-lg">الحالة</label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setAttendanceStatus('present');
                  setAbsenceReason('');
                  setAbsenceDuration(null);
                  setMissionType('');
                  setMissionLocation(null);
                  setMissionDuration('');
                  setMissionStartDate('');
                  setMissionEndDate('');
                }}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'present'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                موجود
              </button>
              <button
                onClick={() => setAttendanceStatus('absent')}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'absent'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                غير موجود
              </button>
            </div>
          </div>

          {/* سبب الغياب - يظهر فقط عند اختيار غير موجود */}
          {attendanceStatus === 'absent' && (
            <div>
              <label className="block mb-3 text-lg">سبب الغياب</label>
              <select
                value={absenceReason}
                onChange={(e) => {
                  setAbsenceReason(e.target.value);
                  setAbsenceDuration(null);
                  if (e.target.value !== 'مهمة') {
                    setMissionType('');
                    setMissionLocation(null);
                    setMissionDuration('');
                    setMissionStartDate('');
                    setMissionEndDate('');
                  }
                }}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر السبب</option>
                <option value="غياب">غياب</option>
                <option value="مستأذن">مستأذن</option>
                <option value="مستشفى">مستشفى</option>
                <option value="مرافق">مرافق</option>
                <option value="مهمة">مهمة</option>
              </select>
            </div>
          )}

          {/* المدة - تظهر فقط للأسباب: غياب، مستأذن، مستشفى، مرافق */}
          {attendanceStatus === 'absent' && (absenceReason === 'غياب' || absenceReason === 'مستأذن' || absenceReason === 'مستشفى' || absenceReason === 'مرافق') && (
            <div>
              <label className="block mb-3 text-lg">المدة</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setAbsenceDuration('morning')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'morning'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  حصة صباحية
                </button>
                <button
                  onClick={() => setAbsenceDuration('fullday')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'fullday'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  يوم كامل
                </button>
              </div>
            </div>
          )}

          {/* تفاصيل المهمة - تظهر فقط عند اختيار مهمة */}
          {attendanceStatus === 'absent' && absenceReason === 'مهمة' && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg mb-3">تفاصيل المهمة</h3>
              
              {/* نوع المهمة: داخلية/خارجية */}
              <div>
                <label className="block mb-2">نوع المهمة</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setMissionLocation('internal')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'internal'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    داخلية
                  </button>
                  <button
                    onClick={() => setMissionLocation('external')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'external'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    خارجية
                  </button>
                </div>
              </div>

              {/* وصف المهمة */}
              <div>
                <label className="block mb-2">وصف المهمة</label>
                <input
                  type="text"
                  value={missionType}
                  onChange={(e) => setMissionType(e.target.value)}
                  placeholder="أدخل وصف المهمة"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* المدة */}
              <div>
                <label className="block mb-2">المدة</label>
                <input
                  type="text"
                  value={missionDuration}
                  onChange={(e) => setMissionDuration(e.target.value)}
                  placeholder="أدخل المدة (مثلاً: 3 أيام)"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ البداية */}
              <div>
                <label className="block mb-2">تاريخ البداية</label>
                <input
                  type="date"
                  value={missionStartDate}
                  onChange={(e) => setMissionStartDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ النهاية */}
              <div>
                <label className="block mb-2">تاريخ النهاية</label>
                <input
                  type="date"
                  value={missionEndDate}
                  onChange={(e) => setMissionEndDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {attendanceStatus && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesAttendancePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('employees')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الحضور والغياب</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الحالة */}
          <div>
            <label className="block mb-3 text-lg">الحالة</label>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setAttendanceStatus('present');
                  setAbsenceReason('');
                  setAbsenceDuration(null);
                  setMissionType('');
                  setMissionLocation(null);
                  setMissionDuration('');
                  setMissionStartDate('');
                  setMissionEndDate('');
                }}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'present'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                موجود
              </button>
              <button
                onClick={() => setAttendanceStatus('absent')}
                className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                  attendanceStatus === 'absent'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                غير موجود
              </button>
            </div>
          </div>

          {/* سبب الغياب - يظهر فقط عند اختيار غير موجود */}
          {attendanceStatus === 'absent' && (
            <div>
              <label className="block mb-3 text-lg">سبب الغياب</label>
              <select
                value={absenceReason}
                onChange={(e) => {
                  setAbsenceReason(e.target.value);
                  setAbsenceDuration(null);
                  if (e.target.value !== 'مهمة') {
                    setMissionType('');
                    setMissionLocation(null);
                    setMissionDuration('');
                    setMissionStartDate('');
                    setMissionEndDate('');
                  }
                }}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر السبب</option>
                <option value="غياب">غياب</option>
                <option value="مستأذن">مستأذن</option>
                <option value="مستشفى">مستشفى</option>
                <option value="مرافق">مرافق</option>
                <option value="مهمة">مهمة</option>
              </select>
            </div>
          )}

          {/* المدة - تظهر فقط للأسباب: غياب، مستأذن، مستشفى، مرافق */}
          {attendanceStatus === 'absent' && (absenceReason === 'غياب' || absenceReason === 'مستأذن' || absenceReason === 'مستشفى' || absenceReason === 'مرافق') && (
            <div>
              <label className="block mb-3 text-lg">المدة</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setAbsenceDuration('morning')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'morning'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  حصة صباحية
                </button>
                <button
                  onClick={() => setAbsenceDuration('fullday')}
                  className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                    absenceDuration === 'fullday'
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  يوم كامل
                </button>
              </div>
            </div>
          )}

          {/* تفاصيل المهمة - تظهر فقط عند اختيار مهمة */}
          {attendanceStatus === 'absent' && absenceReason === 'مهمة' && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg mb-3">تفاصيل المهمة</h3>
              
              {/* نوع المهمة: داخلية/خارجية */}
              <div>
                <label className="block mb-2">نوع المهمة</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setMissionLocation('internal')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'internal'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    داخلية
                  </button>
                  <button
                    onClick={() => setMissionLocation('external')}
                    className={`flex-1 py-3 px-6 rounded-lg transition-colors ${
                      missionLocation === 'external'
                        ? 'bg-[#8B0000] text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    خارجية
                  </button>
                </div>
              </div>

              {/* وصف المهمة */}
              <div>
                <label className="block mb-2">وصف المهمة</label>
                <input
                  type="text"
                  value={missionType}
                  onChange={(e) => setMissionType(e.target.value)}
                  placeholder="أدخل وصف المهمة"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* المدة */}
              <div>
                <label className="block mb-2">المدة</label>
                <input
                  type="text"
                  value={missionDuration}
                  onChange={(e) => setMissionDuration(e.target.value)}
                  placeholder="أدخل المدة (مثلاً: 3 أيام)"
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ البداية */}
              <div>
                <label className="block mb-2">تاريخ البداية</label>
                <input
                  type="date"
                  value={missionStartDate}
                  onChange={(e) => setMissionStartDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              {/* تاريخ النهاية */}
              <div>
                <label className="block mb-2">تاريخ النهاية</label>
                <input
                  type="date"
                  value={missionEndDate}
                  onChange={(e) => setMissionEndDate(e.target.value)}
                  className="w-full py-2 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {attendanceStatus && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setEmployeeNumber('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير خاص</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setEmployeeNumber('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير خاص</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setEmployeeNumber('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير خاص</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersDeliveriesPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('officers')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">استلامات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {/* أمر خفر */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">أمر خفر</span>
          </button>

          {/* معسكر حضن */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">معسكر حضن</span>
          </button>

          {/* ضابط خفر */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">ضابط خفر</span>
          </button>
        </div>
      </main>
    </>
  );

  const renderIndividualsDeliveriesPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => setCurrentPage('individuals')}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">استلامات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4">
          {/* أمر خفر */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">أمر خفر</span>
          </button>

          {/* معسكر حضن */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">معسكر حضن</span>
          </button>

          {/* ضابط خفر */}
          <button className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow flex flex-col items-center gap-3">
            <Package className="w-14 h-14 text-[#8B0000]" />
            <span className="text-center text-lg">ضابط خفر</span>
          </button>
        </div>
      </main>
    </>
  );

  const renderOfficersGeneralReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setDepartment('');
            setSection('');
            setDivision('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير عام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الإدارة */}
          <div>
            <label className="block mb-3 text-lg">الإدارة</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الإدارة</option>
              <option value="إدارة الموارد البشرية">إدارة الموارد البشرية</option>
              <option value="إدارة العمليات">إدارة العمليات</option>
              <option value="إدارة الأمن">إدارة الأمن</option>
              <option value="إدارة التدريب">إدارة التدريب</option>
            </select>
          </div>

          {/* القسم */}
          <div>
            <label className="block mb-3 text-lg">القسم</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر القسم</option>
              <option value="قسم التوظيف">قسم التوظيف</option>
              <option value="قسم الشؤون الإدارية">قسم الشؤون الإدارية</option>
              <option value="قسم المراقبة">قسم المراقبة</option>
              <option value="قسم التطوير">قسم التطوير</option>
            </select>
          </div>

          {/* الشعبة */}
          <div>
            <label className="block mb-3 text-lg">الشعبة</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الشعبة</option>
              <option value="شعبة الحضور والانصراف">شعبة الحضور والانصراف</option>
              <option value="شعبة الإجازات">شعبة الإجازات</option>
              <option value="شعبة الأرشيف">شعبة الأرشيف</option>
              <option value="شعبة المتابعة">شعبة المتابعة</option>
            </select>
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي عدد المنسوبين:</span>
                  <span className="text-blue-600">150 منسوب</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsGeneralReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setDepartment('');
            setSection('');
            setDivision('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير عام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الإدارة */}
          <div>
            <label className="block mb-3 text-lg">الإدارة</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الإدارة</option>
              <option value="إدارة الموارد البشرية">إدارة الموارد البشرية</option>
              <option value="إدارة العمليات">إدارة العمليات</option>
              <option value="إدارة الأمن">إدارة الأمن</option>
              <option value="إدارة التدريب">إدارة التدريب</option>
            </select>
          </div>

          {/* القسم */}
          <div>
            <label className="block mb-3 text-lg">القسم</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر القسم</option>
              <option value="قسم التوظيف">قسم التوظيف</option>
              <option value="قسم الشؤون الإدارية">قسم الشؤون الإدارية</option>
              <option value="قسم المراقبة">قسم المراقبة</option>
              <option value="قسم التطوير">قسم التطوير</option>
            </select>
          </div>

          {/* الشعبة */}
          <div>
            <label className="block mb-3 text-lg">الشعبة</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الشعبة</option>
              <option value="شعبة الحضور والانصراف">شعبة الحضور والانصراف</option>
              <option value="شعبة الإجازات">شعبة الإجازات</option>
              <option value="شعبة الأرشيف">شعبة الأرشيف</option>
              <option value="شعبة المتابعة">شعبة المتابعة</option>
            </select>
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي عدد المنسوبين:</span>
                  <span className="text-blue-600">150 منسوب</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesGeneralReportPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setDepartment('');
            setSection('');
            setDivision('');
            setShowReport(false);
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">طلب تقرير عام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* الإدارة */}
          <div>
            <label className="block mb-3 text-lg">الإدارة</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الإدارة</option>
              <option value="إدارة الموارد البشرية">إدارة الموارد البشرية</option>
              <option value="إدارة العمليات">إدارة العمليات</option>
              <option value="إدارة الأمن">إدارة الأمن</option>
              <option value="إدارة التدريب">إدارة التدريب</option>
            </select>
          </div>

          {/* القسم */}
          <div>
            <label className="block mb-3 text-lg">القسم</label>
            <select
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر القسم</option>
              <option value="قسم التوظيف">قسم التوظيف</option>
              <option value="قسم الشؤون الإدارية">قسم الشؤون الإدارية</option>
              <option value="قسم المراقبة">قسم المراقبة</option>
              <option value="قسم التطوير">قسم التطوير</option>
            </select>
          </div>

          {/* الشعبة */}
          <div>
            <label className="block mb-3 text-lg">الشعبة</label>
            <select
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر الشعبة</option>
              <option value="شعبة الحضور والانصراف">شعبة الحضور والانصراف</option>
              <option value="شعبة الإجازات">شعبة الإجازات</option>
              <option value="شعبة الأرشيف">شعبة الأرشيف</option>
              <option value="شعبة المتابعة">شعبة المتابعة</option>
            </select>
          </div>

          {/* زر البحث */}
          <button
            onClick={() => setShowReport(true)}
            className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors"
          >
            بحث
          </button>

          {/* الرسم البياني - يظهر بعد البحث */}
          {showReport && (
            <div className="mt-6">
              <h3 className="text-lg mb-4 text-center">تقرير الحضور والغياب</h3>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="الحضور" fill="#10b981" />
                    <Bar dataKey="الغياب" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* معلومات إضافية */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-3">
                <h4 className="text-lg mb-2">ملخص التقرير</h4>
                <div className="flex justify-between">
                  <span>إجمالي عدد المنسوبين:</span>
                  <span className="text-blue-600">150 منسوب</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الحضور:</span>
                  <span className="text-green-600">565 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>إجمالي أيام الغياب:</span>
                  <span className="text-red-600">35 يوم</span>
                </div>
                <div className="flex justify-between">
                  <span>نسبة الحضور:</span>
                  <span className="text-blue-600">94.2%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersDisciplinePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setEmployeeNumber('');
            setDisciplineType('');
            setThankYouLetter('');
            setMedalType('');
            setViolationType('');
            setViolationDate('');
            setActionTaken('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مستوى الانضباط العام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الانضباط */}
          <div>
            <label className="block mb-3 text-lg">التصنيف</label>
            <select
              value={disciplineType}
              onChange={(e) => {
                setDisciplineType(e.target.value);
                setThankYouLetter('');
                setMedalType('');
                setViolationType('');
                setViolationDate('');
                setActionTaken('');
              }}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر التصنيف</option>
              <option value="خطاب الشكر">خطاب الشكر</option>
              <option value="الأنواط">الأنواط</option>
              <option value="المخالفات">المخالفات</option>
              <option value="الجزاءات">الجزاءات</option>
              <option value="القرارات الإدارية">القرارات الإدارية</option>
            </select>
          </div>

          {/* حقول خطاب الشكر */}
          {disciplineType === 'خطاب الشكر' && (
            <div>
              <label className="block mb-3 text-lg">نص خطاب الشكر</label>
              <textarea
                value={thankYouLetter}
                onChange={(e) => setThankYouLetter(e.target.value)}
                placeholder="أدخل نص خطاب الشكر..."
                rows={6}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
              />
            </div>
          )}

          {/* حقول الأنواط */}
          {disciplineType === 'الأنواط' && (
            <div>
              <label className="block mb-3 text-lg">نوع الوسام</label>
              <select
                value={medalType}
                onChange={(e) => setMedalType(e.target.value)}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر نوع الوسام</option>
                <option value="وسام الملك عبدالعزيز">وسام الملك عبدالعزيز</option>
                <option value="وسام الاستحقاق">وسام الاستحقاق</option>
                <option value="وسام الخدمة المخلصة">وسام الخدمة المخلصة</option>
                <option value="وسام الشجاعة">وسام الشجاعة</option>
                <option value="وسام الواجب">وسام الواجب</option>
                <option value="وسام التفوق">وسام التفوق</option>
                <option value="وسام الأمن الوطني">وسام الأمن الوطني</option>
              </select>
            </div>
          )}

          {/* حقول المخالفات */}
          {disciplineType === 'المخالفات' && (
            <>
              <div>
                <label className="block mb-3 text-lg">نوع المخالفة</label>
                <select
                  value={violationType}
                  onChange={(e) => setViolationType(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                >
                  <option value="">اختر نوع المخالفة</option>
                  <option value="تأخر عن العمل">تأخر عن العمل</option>
                  <option value="غياب بدون إذن">غياب بدون إذن</option>
                  <option value="عدم الالتزام بالزي الرسمي">عدم الالتزام بالزي الرسمي</option>
                  <option value="إهمال في العمل">إهمال في العمل</option>
                  <option value="عدم تنفيذ الأوامر">عدم تنفيذ الأوامر</option>
                  <option value="سوء السلوك">سوء السلوك</option>
                  <option value="مخالفة التعليمات">مخالفة التعليمات</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-lg">التاريخ</label>
                <input
                  type="date"
                  value={violationDate}
                  onChange={(e) => setViolationDate(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-3 text-lg">الإجراء المتخذ</label>
                <textarea
                  value={actionTaken}
                  onChange={(e) => setActionTaken(e.target.value)}
                  placeholder="أدخل الإجراء المتخذ..."
                  rows={4}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
                />
              </div>
            </>
          )}

          {/* نص توضيحي للجزاءات */}
          {disciplineType === 'الجزاءات' && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-amber-900">معلومات توضيحية - الجزاءات</h3>
              <div className="space-y-3 text-amber-800">
                <p>• <strong>الإنذار الكتابي:</strong> يُوجه للمنسوب في حالة ارتكاب مخالفة بسيطة</p>
                <p>• <strong>الخصم من الراتب:</strong> يتم خصم نسبة من الراتب حسب نوع المخالفة</p>
                <p>• <strong>الإيقاف عن العمل:</strong> إيقاف مؤقت بدون راتب لمدة محددة</p>
                <p>• <strong>الحرمان من العلاوة:</strong> حرمان من العلاوة السنوية لمدة محددة</p>
                <p>• <strong>الفصل من الخدمة:</strong> إنهاء الخدمة في حالات المخالفات الجسيمة</p>
              </div>
            </div>
          )}

          {/* نص توضيحي للقرارات الإدارية */}
          {disciplineType === 'القرارات الإدارية' && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-blue-900">معلومات توضيحية - القرارات الإدارية</h3>
              <div className="space-y-3 text-blue-800">
                <p>• <strong>قرار النقل:</strong> نقل المنسوب من قسم إلى آخر أو من منطقة لأخرى</p>
                <p>• <strong>قرار الترقية:</strong> ترقية المنسوب إلى رتبة أو درجة أعلى</p>
                <p>• <strong>قرار الندب:</strong> ندب المنسوب للعمل في جهة أخرى مؤقتاً</p>
                <p>• <strong>قرار التكليف:</strong> تكليف المنسوب بمهام إضافية أو وظيفة أخرى</p>
                <p>• <strong>قرار الإعارة:</strong> إعارة المنسوب لجهة حكومية أخرى</p>
                <p>• <strong>قرار الإحالة للتقاعد:</strong> إحالة المنسوب للتقاعد</p>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {employeeNumber && disciplineType && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors">
              {disciplineType === 'الجزاءات' || disciplineType === 'القرارات الإدارية' ? 'استعلام' : 'حفظ'}
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsDisciplinePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setEmployeeNumber('');
            setDisciplineType('');
            setThankYouLetter('');
            setMedalType('');
            setViolationType('');
            setViolationDate('');
            setActionTaken('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مستوى الانضباط العام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الانضباط */}
          <div>
            <label className="block mb-3 text-lg">التصنيف</label>
            <select
              value={disciplineType}
              onChange={(e) => {
                setDisciplineType(e.target.value);
                setThankYouLetter('');
                setMedalType('');
                setViolationType('');
                setViolationDate('');
                setActionTaken('');
              }}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر التصنيف</option>
              <option value="خطاب الشكر">خطاب الشكر</option>
              <option value="الأنواط">الأنواط</option>
              <option value="المخالفات">المخالفات</option>
              <option value="الجزاءات">الجزاءات</option>
              <option value="القرارات الإدارية">القرارات الإدارية</option>
            </select>
          </div>

          {/* حقول خطاب الشكر */}
          {disciplineType === 'خطاب الشكر' && (
            <div>
              <label className="block mb-3 text-lg">نص خطاب الشكر</label>
              <textarea
                value={thankYouLetter}
                onChange={(e) => setThankYouLetter(e.target.value)}
                placeholder="أدخل نص خطاب الشكر..."
                rows={6}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
              />
            </div>
          )}

          {/* حقول الأنواط */}
          {disciplineType === 'الأنواط' && (
            <div>
              <label className="block mb-3 text-lg">نوع الوسام</label>
              <select
                value={medalType}
                onChange={(e) => setMedalType(e.target.value)}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر نوع الوسام</option>
                <option value="وسام الملك عبدالعزيز">وسام الملك عبدالعزيز</option>
                <option value="وسام الاستحقاق">وسام الاستحقاق</option>
                <option value="وسام ال��دمة المخلصة">وسام الخدمة المخلصة</option>
                <option value="وسام الشجاعة">وسام الشجاعة</option>
                <option value="وسام الواجب">وسام الواجب</option>
                <option value="وسام التفوق">وسام التفوق</option>
                <option value="وسام الأمن الوطني">وسام الأمن الوطني</option>
              </select>
            </div>
          )}

          {/* حقول المخالفات */}
          {disciplineType === 'المخالفات' && (
            <>
              <div>
                <label className="block mb-3 text-lg">نوع المخالفة</label>
                <select
                  value={violationType}
                  onChange={(e) => setViolationType(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                >
                  <option value="">اختر نوع المخالفة</option>
                  <option value="تأخر عن العمل">تأخر عن العمل</option>
                  <option value="غياب بدون إذن">غياب بدون إذن</option>
                  <option value="عدم الالتزام بالزي الرسمي">عدم الالتزام بالزي الرسمي</option>
                  <option value="إهمال في العمل">إهمال في العمل</option>
                  <option value="عدم تنفيذ الأوامر">عدم تنفيذ الأوامر</option>
                  <option value="سوء السلوك">سوء السلوك</option>
                  <option value="مخالفة التعليمات">مخالفة التعليمات</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-lg">التاريخ</label>
                <input
                  type="date"
                  value={violationDate}
                  onChange={(e) => setViolationDate(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-3 text-lg">الإجراء المتخذ</label>
                <textarea
                  value={actionTaken}
                  onChange={(e) => setActionTaken(e.target.value)}
                  placeholder="أدخل الإجراء المتخذ..."
                  rows={4}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
                />
              </div>
            </>
          )}

          {/* نص توضيحي للجزاءات */}
          {disciplineType === 'الجزاءات' && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-amber-900">معلومات توضيحية - الجزاءات</h3>
              <div className="space-y-3 text-amber-800">
                <p>• <strong>الإنذار الكتابي:</strong> يُوجه للمنسوب في حالة ارتكاب مخالفة بسيطة</p>
                <p>• <strong>الخصم من الراتب:</strong> يتم خصم نسبة من الراتب حسب نوع المخالفة</p>
                <p>• <strong>الإيقاف عن العمل:</strong> إيقاف مؤقت بدون راتب لمدة محددة</p>
                <p>• <strong>الحرمان من العلاوة:</strong> حرمان من العلاوة السنوية لمدة محددة</p>
                <p>• <strong>الفصل من الخدمة:</strong> إنهاء الخدمة في حالات المخالفات الجسيمة</p>
              </div>
            </div>
          )}

          {/* نص توضيحي للقرارات الإدارية */}
          {disciplineType === 'القرارات الإدارية' && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-blue-900">معلومات توضيحية - القرارات الإدارية</h3>
              <div className="space-y-3 text-blue-800">
                <p>• <strong>قرار النقل:</strong> نقل المنسوب من قسم إلى آخر أو من منطقة لأخرى</p>
                <p>• <strong>قرار الترقية:</strong> ترقية المنسوب إلى رتبة أو درجة أعلى</p>
                <p>• <strong>قرار الندب:</strong> ندب المنسوب للعمل في جهة أخرى مؤقتاً</p>
                <p>• <strong>قرار التكليف:</strong> تكليف المنسوب بمهام إضافية أو وظيفة أخرى</p>
                <p>• <strong>قرار الإعارة:</strong> إعارة المنسوب لجهة حكومية أخرى</p>
                <p>• <strong>قرار الإحالة للتقاعد:</strong> إحالة المنسوب للتقاعد</p>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {employeeNumber && disciplineType && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors">
              {disciplineType === 'الجزاءات' || disciplineType === 'القرارات الإدارية' ? 'استعلام' : '��فظ'}
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesDisciplinePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setEmployeeNumber('');
            setDisciplineType('');
            setThankYouLetter('');
            setMedalType('');
            setViolationType('');
            setViolationDate('');
            setActionTaken('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مستوى الانضباط العام</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الانضباط */}
          <div>
            <label className="block mb-3 text-lg">التصنيف</label>
            <select
              value={disciplineType}
              onChange={(e) => {
                setDisciplineType(e.target.value);
                setThankYouLetter('');
                setMedalType('');
                setViolationType('');
                setViolationDate('');
                setActionTaken('');
              }}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر التصنيف</option>
              <option value="خطاب الشكر">خطاب الشكر</option>
              <option value="الأنواط">الأنواط</option>
              <option value="المخالفات">المخالفات</option>
              <option value="الجزاءات">الجزاءات</option>
              <option value="القرارات الإدارية">القرارات الإدارية</option>
            </select>
          </div>

          {/* حقول خطاب الشكر */}
          {disciplineType === 'خطاب الشكر' && (
            <div>
              <label className="block mb-3 text-lg">نص خطاب الشكر</label>
              <textarea
                value={thankYouLetter}
                onChange={(e) => setThankYouLetter(e.target.value)}
                placeholder="أدخل نص خطاب الشكر..."
                rows={6}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
              />
            </div>
          )}

          {/* حقول الأنواط */}
          {disciplineType === 'الأنواط' && (
            <div>
              <label className="block mb-3 text-lg">نوع الوسام</label>
              <select
                value={medalType}
                onChange={(e) => setMedalType(e.target.value)}
                className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
              >
                <option value="">اختر نوع الوسام</option>
                <option value="وسام الملك عبدالعزيز">وسام الملك عبدالعزيز</option>
                <option value="وسام الاستحقاق">وسام الاستحقاق</option>
                <option value="وسام الخدمة المخلصة">وسام الخدمة المخلصة</option>
                <option value="وسام الشجاعة">وسام الشجاعة</option>
                <option value="وسام الواجب">وسام الواجب</option>
                <option value="وسام التفوق">وسام التفوق</option>
                <option value="وسام الأمن الوطني">وسام الأمن الوطني</option>
              </select>
            </div>
          )}

          {/* حقول المخالفات */}
          {disciplineType === 'المخالفات' && (
            <>
              <div>
                <label className="block mb-3 text-lg">نوع المخالفة</label>
                <select
                  value={violationType}
                  onChange={(e) => setViolationType(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                >
                  <option value="">اختر نوع المخالفة</option>
                  <option value="تأخر عن العمل">تأخر عن العمل</option>
                  <option value="غياب بدون إذن">غياب بدون إذن</option>
                  <option value="عدم الالتزام بالزي الرسمي">عدم الالتزام بالزي الرسمي</option>
                  <option value="إهمال في العمل">إهمال في العمل</option>
                  <option value="عدم تنفيذ الأوامر">عدم تنفيذ الأوامر</option>
                  <option value="سوء السلوك">سوء السلوك</option>
                  <option value="مخالفة التعليمات">مخالفة التعليمات</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-lg">التاريخ</label>
                <input
                  type="date"
                  value={violationDate}
                  onChange={(e) => setViolationDate(e.target.value)}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-3 text-lg">الإجراء المتخذ</label>
                <textarea
                  value={actionTaken}
                  onChange={(e) => setActionTaken(e.target.value)}
                  placeholder="أدخل الإجراء المتخذ..."
                  rows={4}
                  className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none resize-none"
                />
              </div>
            </>
          )}

          {/* نص توضيحي للجزاءات */}
          {disciplineType === 'الجزاءات' && (
            <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-amber-900">معلومات توضيحية - الجزاءات</h3>
              <div className="space-y-3 text-amber-800">
                <p>• <strong>الإنذار الكتابي:</strong> يُوجه للمنسوب في حالة ارتكاب مخالفة بسيطة</p>
                <p>• <strong>الخصم من الراتب:</strong> يتم خصم نسبة من الراتب حسب نوع المخالفة</p>
                <p>• <strong>الإيقاف عن العمل:</strong> إيقاف م��قت بدون راتب لمدة محددة</p>
                <p>• <strong>الحرمان من العلاوة:</strong> حرمان من العلاوة السنوية لمدة مح��دة</p>
                <p>• <strong>الفصل من الخدمة:</strong> إنهاء الخدمة في حالات المخالفات الجسيمة</p>
              </div>
            </div>
          )}

          {/* نص توضيحي للقرارات الإدارية */}
          {disciplineType === 'القرارات الإدارية' && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg mb-3 text-blue-900">معلومات توضيحية - القرارات الإدارية</h3>
              <div className="space-y-3 text-blue-800">
                <p>• <strong>قرار النقل:</strong> نقل المنسوب من قسم إلى آخر أو من منطقة لأخرى</p>
                <p>• <strong>قرار الترقية:</strong> ترقية المنسوب إلى رتبة أو درجة أعلى</p>
                <p>• <strong>قرار الندب:</strong> ندب المنسوب للعمل في جهة أخرى مؤقتاً</p>
                <p>• <strong>قرار التكليف:</strong> تكليف المنسوب بمهام إضافية أو وظيفة أخرى</p>
                <p>• <strong>قرار الإعارة:</strong> إعارة المنسوب لجهة حكومية أخرى</p>
                <p>• <strong>قرار الإحالة للتقاعد:</strong> إحالة المنسوب للتقاعد</p>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {employeeNumber && disciplineType && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors">
              {disciplineType === 'الجزاءات' || disciplineType === 'القرارات الإدارية' ? 'استعلام' : 'حفظ'}
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersLeavePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setEmployeeNumber('');
            setLeaveType('');
            setLeaveStartDate('');
            setLeaveEndDate('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الإجازات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الإجازة */}
          <div>
            <label className="block mb-3 text-lg">نوع الإجازة</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع الإجازة</option>
              <option value="اعتيادية">اعتيادية</option>
              <option value="عرضية">عرضية</option>
              <option value="ميدانية">ميدانية</option>
              <option value="مرضية">مرضية</option>
              <option value="دراسية">دراسية</option>
              <option value="أبوية">أبوية</option>
              <option value="حالة وفاة">حالة وفاة</option>
              <option value="انفكاك مهمة">انفكاك مهمة</option>
              <option value="انفكاك برنامج">انفكاك برنامج</option>
            </select>
          </div>

          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={leaveEndDate}
              onChange={(e) => setLeaveEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* عرض عدد الأيام */}
          {leaveStartDate && leaveEndDate && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-900">عدد أيام الإجازة:</span>
                <span className="text-blue-900">
                  {Math.ceil((new Date(leaveEndDate).getTime() - new Date(leaveStartDate).getTime()) / (1000 * 60 * 60 * 24)) + 1} يوم
                </span>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {(employeeNumber || leaveType || leaveStartDate || leaveEndDate) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsLeavePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setEmployeeNumber('');
            setLeaveType('');
            setLeaveStartDate('');
            setLeaveEndDate('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الإجازات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الإجازة */}
          <div>
            <label className="block mb-3 text-lg">نوع الإجازة</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع الإجازة</option>
              <option value="اعتيادية">اعتيادية</option>
              <option value="عرضية">عرضية</option>
              <option value="ميدانية">ميدانية</option>
              <option value="مرضية">مرضية</option>
              <option value="دراسية">دراسية</option>
              <option value="أبوية">أبوية</option>
              <option value="حالة وفاة">حالة وفاة</option>
              <option value="انفكاك مهمة">انفكاك مهمة</option>
              <option value="انفكاك برنامج">انفكاك برنامج</option>
            </select>
          </div>

          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={leaveEndDate}
              onChange={(e) => setLeaveEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* عرض عدد الأيام */}
          {leaveStartDate && leaveEndDate && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-900">عدد أيام الإجازة:</span>
                <span className="text-blue-900">
                  {Math.ceil((new Date(leaveEndDate).getTime() - new Date(leaveStartDate).getTime()) / (1000 * 60 * 60 * 24)) + 1} يوم
                </span>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {(employeeNumber || leaveType || leaveStartDate || leaveEndDate) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesLeavePage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setEmployeeNumber('');
            setLeaveType('');
            setLeaveStartDate('');
            setLeaveEndDate('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">الإجازات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* رقم المنسوب */}
          <div>
            <label className="block mb-3 text-lg">رقم المنسوب</label>
            <input
              type="text"
              value={employeeNumber}
              onChange={(e) => setEmployeeNumber(e.target.value)}
              placeholder="أدخل رقم المنسوب"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع الإجازة */}
          <div>
            <label className="block mb-3 text-lg">نوع الإجازة</label>
            <select
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع الإجازة</option>
              <option value="اعتيادية">اعتيادية</option>
              <option value="عرضية">عرضية</option>
              <option value="ميدانية">ميدانية</option>
              <option value="مرضية">مرضية</option>
              <option value="دراسية">دراسية</option>
              <option value="أبوية">أبوية</option>
              <option value="حالة وفاة">حالة وفاة</option>
              <option value="انفكاك مهمة">انفكاك مهمة</option>
              <option value="انفكاك برنامج">انفكاك برنامج</option>
            </select>
          </div>

          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={leaveStartDate}
              onChange={(e) => setLeaveStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={leaveEndDate}
              onChange={(e) => setLeaveEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* عرض عدد الأيام */}
          {leaveStartDate && leaveEndDate && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-blue-900">عدد أيام الإجازة:</span>
                <span className="text-blue-900">
                  {Math.ceil((new Date(leaveEndDate).getTime() - new Date(leaveStartDate).getTime()) / (1000 * 60 * 60 * 24)) + 1} يوم
                </span>
              </div>
            </div>
          )}

          {/* زر الحفظ */}
          {(employeeNumber || leaveType || leaveStartDate || leaveEndDate) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersProgramPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setProgramStartDate('');
            setProgramEndDate('');
            setProgramType('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">برنامج</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={programStartDate}
              onChange={(e) => setProgramStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={programEndDate}
              onChange={(e) => setProgramEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع البرنامج */}
          <div>
            <label className="block mb-3 text-lg">نوع البرنامج</label>
            <select
              value={programType}
              onChange={(e) => setProgramType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع البرنامج</option>
              <option value="داخلي">داخلي</option>
              <option value="خارجي">خارجي</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(programStartDate || programEndDate || programType) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsProgramPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setProgramStartDate('');
            setProgramEndDate('');
            setProgramType('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">برنامج</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={programStartDate}
              onChange={(e) => setProgramStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={programEndDate}
              onChange={(e) => setProgramEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع البر��امج */}
          <div>
            <label className="block mb-3 text-lg">نوع البرنامج</label>
            <select
              value={programType}
              onChange={(e) => setProgramType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع البرنامج</option>
              <option value="داخلي">داخلي</option>
              <option value="خارجي">خارجي</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(programStartDate || programEndDate || programType) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesProgramPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setProgramStartDate('');
            setProgramEndDate('');
            setProgramType('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">برنامج</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">المدة من</label>
            <input
              type="date"
              value={programStartDate}
              onChange={(e) => setProgramStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">المدة إلى</label>
            <input
              type="date"
              value={programEndDate}
              onChange={(e) => setProgramEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* نوع البرنامج */}
          <div>
            <label className="block mb-3 text-lg">نوع البرنامج</label>
            <select
              value={programType}
              onChange={(e) => setProgramType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع البرنامج</option>
              <option value="داخلي">داخلي</option>
              <option value="خارجي">خارجي</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(programStartDate || programEndDate || programType) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersAdminWorkPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setAssignedWork('');
            setWorkDuration('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">عمل إداري</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* خانة توضيحية للعمل المكلف به */}
          <div>
            <label className="block mb-3 text-lg">العمل المكلف به</label>
            <input
              type="text"
              value={assignedWork}
              onChange={(e) => setAssignedWork(e.target.value)}
              placeholder="أدخل العمل المكلف به"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* قائمة منسدلة توضيحي */}
          <div>
            <label className="block mb-3 text-lg">توضيحي</label>
            <select
              value={workDuration}
              onChange={(e) => setWorkDuration(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر المدة</option>
              <option value="حصة صباحية">حصة صباحية</option>
              <option value="يوم كامل">يوم كامل</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(assignedWork || workDuration) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsAdminWorkPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setAssignedWork('');
            setWorkDuration('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">عمل إداري</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* خانة توضيحية للعمل المكلف به */}
          <div>
            <label className="block mb-3 text-lg">العمل المكلف به</label>
            <input
              type="text"
              value={assignedWork}
              onChange={(e) => setAssignedWork(e.target.value)}
              placeholder="أدخل العمل المكلف به"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* قائمة منسدلة توضيحي */}
          <div>
            <label className="block mb-3 text-lg">توضيحي</label>
            <select
              value={workDuration}
              onChange={(e) => setWorkDuration(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر المدة</option>
              <option value="حصة صباحية">حصة صباحية</option>
              <option value="يوم كامل">يوم كامل</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(assignedWork || workDuration) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesAdminWorkPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setAssignedWork('');
            setWorkDuration('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">عمل إداري</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* خانة توضيحية للعمل المكلف به */}
          <div>
            <label className="block mb-3 text-lg">العمل المكلف به</label>
            <input
              type="text"
              value={assignedWork}
              onChange={(e) => setAssignedWork(e.target.value)}
              placeholder="أدخل العمل المكلف به"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* قائمة منسدلة توضيحي */}
          <div>
            <label className="block mb-3 text-lg">توضيحي</label>
            <select
              value={workDuration}
              onChange={(e) => setWorkDuration(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر المدة</option>
              <option value="حصة صباحية">حصة صباحية</option>
              <option value="يوم كامل">يوم كامل</option>
            </select>
          </div>

          {/* زر الحفظ */}
          {(assignedWork || workDuration) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersAttachmentPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setAttachmentStartDate('');
            setAttachmentEndDate('');
            setAttachingEntity('');
            setAttachedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">ملحق</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={attachmentStartDate}
              onChange={(e) => setAttachmentStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={attachmentEndDate}
              onChange={(e) => setAttachmentEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة الألحاق */}
          <div>
            <label className="block mb-3 text-lg">جهة الألحاق</label>
            <input
              type="text"
              value={attachingEntity}
              onChange={(e) => setAttachingEntity(e.target.value)}
              placeholder="أدخل جهة الألحاق"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة الملحق بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة الملحق بها</label>
            <input
              type="text"
              value={attachedToEntity}
              onChange={(e) => setAttachedToEntity(e.target.value)}
              placeholder="أدخل الجهة الملحق بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(attachmentStartDate || attachmentEndDate || attachingEntity || attachedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsAttachmentPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setAttachmentStartDate('');
            setAttachmentEndDate('');
            setAttachingEntity('');
            setAttachedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">ملحق</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={attachmentStartDate}
              onChange={(e) => setAttachmentStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={attachmentEndDate}
              onChange={(e) => setAttachmentEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة الألحاق */}
          <div>
            <label className="block mb-3 text-lg">جهة الألحاق</label>
            <input
              type="text"
              value={attachingEntity}
              onChange={(e) => setAttachingEntity(e.target.value)}
              placeholder="أدخل جهة الألحاق"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة الملحق بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة الملحق بها</label>
            <input
              type="text"
              value={attachedToEntity}
              onChange={(e) => setAttachedToEntity(e.target.value)}
              placeholder="أدخل الجهة الملحق بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(attachmentStartDate || attachmentEndDate || attachingEntity || attachedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesAttachmentPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setAttachmentStartDate('');
            setAttachmentEndDate('');
            setAttachingEntity('');
            setAttachedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">ملحق</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={attachmentStartDate}
              onChange={(e) => setAttachmentStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={attachmentEndDate}
              onChange={(e) => setAttachmentEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة الألحاق */}
          <div>
            <label className="block mb-3 text-lg">جهة الألحاق</label>
            <input
              type="text"
              value={attachingEntity}
              onChange={(e) => setAttachingEntity(e.target.value)}
              placeholder="أدخل جهة الألحاق"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة الملحق بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة الملحق بها</label>
            <input
              type="text"
              value={attachedToEntity}
              onChange={(e) => setAttachedToEntity(e.target.value)}
              placeholder="أدخل الجهة الملحق بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(attachmentStartDate || attachmentEndDate || attachingEntity || attachedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderOfficersAssignedPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('officers');
            setAssignedStartDate('');
            setAssignedEndDate('');
            setAssigningEntity('');
            setAssignedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مكلف</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={assignedStartDate}
              onChange={(e) => setAssignedStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={assignedEndDate}
              onChange={(e) => setAssignedEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة التكليف */}
          <div>
            <label className="block mb-3 text-lg">جهة التكليف</label>
            <input
              type="text"
              value={assigningEntity}
              onChange={(e) => setAssigningEntity(e.target.value)}
              placeholder="أدخل جهة التكليف"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة المكلف بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة المكلف بها</label>
            <input
              type="text"
              value={assignedToEntity}
              onChange={(e) => setAssignedToEntity(e.target.value)}
              placeholder="أدخل الجهة المكلف بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(assignedStartDate || assignedEndDate || assigningEntity || assignedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsAssignedPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setAssignedStartDate('');
            setAssignedEndDate('');
            setAssigningEntity('');
            setAssignedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مكلف</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={assignedStartDate}
              onChange={(e) => setAssignedStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={assignedEndDate}
              onChange={(e) => setAssignedEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة التكليف */}
          <div>
            <label className="block mb-3 text-lg">جهة التكليف</label>
            <input
              type="text"
              value={assigningEntity}
              onChange={(e) => setAssigningEntity(e.target.value)}
              placeholder="أدخل جهة التكليف"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة المكلف بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة المكلف بها</label>
            <input
              type="text"
              value={assignedToEntity}
              onChange={(e) => setAssignedToEntity(e.target.value)}
              placeholder="أدخل الجهة المكلف بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(assignedStartDate || assignedEndDate || assigningEntity || assignedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderEmployeesAssignedPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('employees');
            setAssignedStartDate('');
            setAssignedEndDate('');
            setAssigningEntity('');
            setAssignedToEntity('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">مكلف</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={assignedStartDate}
              onChange={(e) => setAssignedStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={assignedEndDate}
              onChange={(e) => setAssignedEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* جهة التكليف */}
          <div>
            <label className="block mb-3 text-lg">جهة التكليف</label>
            <input
              type="text"
              value={assigningEntity}
              onChange={(e) => setAssigningEntity(e.target.value)}
              placeholder="أدخل جهة التكليف"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* الجهة المكلف بها */}
          <div>
            <label className="block mb-3 text-lg">الجهة المكلف بها</label>
            <input
              type="text"
              value={assignedToEntity}
              onChange={(e) => setAssignedToEntity(e.target.value)}
              placeholder="أدخل الجهة المكلف بها"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(assignedStartDate || assignedEndDate || assigningEntity || assignedToEntity) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  const renderIndividualsShiftsPage = () => (
    <>
      {/* Header Bar */}
      <header className="w-full bg-[#8B0000] py-6 px-6 flex items-center gap-4">
        <button 
          onClick={() => {
            setCurrentPage('individuals');
            setShiftType('');
            setShiftStartDate('');
            setShiftEndDate('');
          }}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl flex-1 text-center">المناوبات</h1>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {/* قائمة منسدلة نوع المناوبة */}
          <div>
            <label className="block mb-3 text-lg">نوع المناوبة</label>
            <select
              value={shiftType}
              onChange={(e) => setShiftType(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            >
              <option value="">اختر نوع المناوبة</option>
              <option value="الإسكان">الإسكان</option>
              <option value="الإعاشة">الإعاشة</option>
              <option value="الصيانة والنقل">الصيانة والنقل</option>
              <option value="السنترال">السنترال</option>
              <option value="مجموعات أمنية">مجموعات أمنية</option>
            </select>
          </div>

          {/* المدة من */}
          <div>
            <label className="block mb-3 text-lg">من</label>
            <input
              type="date"
              value={shiftStartDate}
              onChange={(e) => setShiftStartDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* المدة إلى */}
          <div>
            <label className="block mb-3 text-lg">إلى</label>
            <input
              type="date"
              value={shiftEndDate}
              onChange={(e) => setShiftEndDate(e.target.value)}
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-lg focus:border-[#8B0000] focus:outline-none"
            />
          </div>

          {/* زر الحفظ */}
          {(shiftType || shiftStartDate || shiftEndDate) && (
            <button className="w-full bg-[#8B0000] text-white py-3 px-6 rounded-lg hover:bg-[#6B0000] transition-colors mt-4">
              حفظ
            </button>
          )}
        </div>
      </main>
    </>
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Mobile Container */}
      <div className="w-full h-full bg-white flex flex-col">
        {currentPage === 'login' && renderLoginPage()}
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'officers' && renderOfficersPage()}
        {currentPage === 'individuals' && renderIndividualsPage()}
        {currentPage === 'employees' && renderEmployeesPage()}
        {currentPage === 'officers-attendance' && renderOfficersAttendancePage()}
        {currentPage === 'individuals-attendance' && renderIndividualsAttendancePage()}
        {currentPage === 'employees-attendance' && renderEmployeesAttendancePage()}
        {currentPage === 'officers-report' && renderOfficersReportPage()}
        {currentPage === 'individuals-report' && renderIndividualsReportPage()}
        {currentPage === 'employees-report' && renderEmployeesReportPage()}
        {currentPage === 'officers-deliveries' && renderOfficersDeliveriesPage()}
        {currentPage === 'individuals-deliveries' && renderIndividualsDeliveriesPage()}
        {currentPage === 'officers-general-report' && renderOfficersGeneralReportPage()}
        {currentPage === 'individuals-general-report' && renderIndividualsGeneralReportPage()}
        {currentPage === 'employees-general-report' && renderEmployeesGeneralReportPage()}
        {currentPage === 'officers-discipline' && renderOfficersDisciplinePage()}
        {currentPage === 'individuals-discipline' && renderIndividualsDisciplinePage()}
        {currentPage === 'employees-discipline' && renderEmployeesDisciplinePage()}
        {currentPage === 'officers-leave' && renderOfficersLeavePage()}
        {currentPage === 'individuals-leave' && renderIndividualsLeavePage()}
        {currentPage === 'employees-leave' && renderEmployeesLeavePage()}
        {currentPage === 'officers-program' && renderOfficersProgramPage()}
        {currentPage === 'individuals-program' && renderIndividualsProgramPage()}
        {currentPage === 'employees-program' && renderEmployeesProgramPage()}
        {currentPage === 'officers-admin-work' && renderOfficersAdminWorkPage()}
        {currentPage === 'individuals-admin-work' && renderIndividualsAdminWorkPage()}
        {currentPage === 'employees-admin-work' && renderEmployeesAdminWorkPage()}
        {currentPage === 'officers-attachment' && renderOfficersAttachmentPage()}
        {currentPage === 'individuals-attachment' && renderIndividualsAttachmentPage()}
        {currentPage === 'employees-attachment' && renderEmployeesAttachmentPage()}
        {currentPage === 'officers-assigned' && renderOfficersAssignedPage()}
        {currentPage === 'individuals-assigned' && renderIndividualsAssignedPage()}
        {currentPage === 'employees-assigned' && renderEmployeesAssignedPage()}
        {currentPage === 'individuals-shifts' && renderIndividualsShiftsPage()}
      </div>
    </div>
  );
}
