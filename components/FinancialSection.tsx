import { Coins, CheckCircle, AlertTriangle, Briefcase, Calculator } from "lucide-react";

export const FinancialSection = () => {
  return (
    <section id="financial" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
            <Coins size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">הכיס שלך בשבתון</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Grants Card */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-blue-800 flex items-center gap-2">
              <Calculator size={24} />
              גובה המענק
            </h3>
            <p className="text-slate-600 mb-4">המענק נגזר מהיקף המשרה הממוצע בשנות החיסכון:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-2xl text-blue-500">6</span>
                <div>
                  <span className="font-bold block text-slate-800">שנות חיסכון</span>
                  <span className="text-slate-600">כ-66.6% מהשכר הקובע</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-2xl text-teal-500">8</span>
                <div>
                  <span className="font-bold block text-slate-800">שנות חיסכון</span>
                  <span className="text-slate-600">כ-88.8% מהשכר הקובע</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Tax Benefits Card */}
          <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle size={24} />
                הטבת המס הגדולה
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                מענקי הקרן <span className="font-bold text-white bg-blue-500 px-2 py-0.5 rounded">פטורים לחלוטין ממס הכנסה</span>.
                משמעות הדבר היא שהסכום נטו שתקבלי יהיה קרוב מאוד לשכרך הרגיל, ולעיתים אף גבוה ממנו!
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-sm">💡 טיפ: זה הזמן לבדוק את תלושי השכר ולוודא שההפרשות תואמות.</p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>
          </div>
        </div>

        {/* Reimbursements & Work */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold mb-6 text-slate-800">החזרים ותשלומים נוספים</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={16} /></div>
                <div>
                  <span className="font-bold block text-slate-800">החזר שכר לימוד</span>
                  <span className="text-slate-600">עד לתקרה האוניברסיטאית (כ-10,000-11,000 ש"ח)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={16} /></div>
                <div>
                  <span className="font-bold block text-slate-800">החזר ביטוח לאומי</span>
                  <span className="text-slate-600">עד תקרה של כ-1,024 ש"ח (כנגד קבלות)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600"><CheckCircle size={16} /></div>
                <div>
                  <span className="font-bold block text-slate-800">דמי הבראה וביגוד</span>
                  <span className="text-slate-600">משולמים על ידי הקרן</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
            <h3 className="text-xl font-bold mb-4 text-orange-800 flex items-center gap-2">
              <Briefcase size={24} />
              עבודה נוספת
            </h3>
            <p className="text-slate-700 mb-4">
              ניתן לעבוד עד <span className="font-bold">שליש משרה</span> בלבד באישור.
            </p>
            <div className="flex items-start gap-2 text-orange-700 bg-orange-100 p-3 rounded-xl text-sm">
              <AlertTriangle size={18} className="shrink-0 mt-0.5" />
              <p>שכר מעבודה זו חייב במס מלא!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
