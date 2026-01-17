import { FileText, ShieldAlert, HeartHandshake, Undo2 } from "lucide-react";

export const BureaucracySection = () => {
  return (
    <section id="bureaucracy" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-purple-100 rounded-2xl text-purple-600">
            <FileText size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">האותיות הקטנות</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Legal Status & Pension */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2">
                <FileText size={24} className="text-purple-500" />
                מעמד משפטי
              </h3>
              <p className="text-slate-600">
                שנת שבתון נחשבת כחל"ת (חופשה ללא תשלום) ממשרד החינוך, תוך <span className="font-semibold text-purple-600">השהיית חוזה העבודה</span>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2">
                <HeartHandshake size={24} className="text-red-500" />
                פנסיה ופיצויים
              </h3>
              <p className="text-slate-600 mb-4">
                הקרן מפרישה כספים לקרן הפנסיה הצוברת (חלק עובד ומעסיק).
              </p>
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <div className="flex items-start gap-2 text-red-700">
                  <ShieldAlert size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm mb-1">שים לב: "זקיפת שווי"</span>
                    <p className="text-sm">יש לשים לב לרכיב הפיצויים שעלול להיות חייב במס בפרישה.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Security & Return */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-800">ביטוח לאומי</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full shrink-0"></div>
                  <div>
                    <span className="font-bold block text-slate-800">חודשיים ראשונים</span>
                    <span className="text-slate-600">משרד החינוך משלם ומנכה מהשכר העתידי.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 mt-2 bg-purple-400 rounded-full shrink-0"></div>
                  <div>
                    <span className="font-bold block text-slate-800">המשך השנה</span>
                    <span className="text-slate-600">תשלום עצמאי (כ-203 ש"ח לחודש נכון ל-2025/6).</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-purple-600 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Undo2 size={24} />
                זכויות חזרה לעבודה
              </h3>
              <p className="text-purple-100 mb-4">
                עובד הוראה שב משבתון ישובץ במוסד בו עבד טרם יציאתו.
              </p>
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="text-sm font-semibold">
                  גננות מנהלות גן: יש לוודא אישור מפקחת לשמירת המקום הספציפי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
