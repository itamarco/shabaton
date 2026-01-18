"use client";

import { BookOpen, GraduationCap, Palette, TrendingUp, CheckCircle2, AlertCircle, Search, ExternalLink } from "lucide-react";
import { useState } from "react";

export const StudiesSection = () => {
  const [hasMastersDegree, setHasMastersDegree] = useState(false);

  return (
    <section id="studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-teal-100 rounded-2xl text-teal-600">
            <BookOpen size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">תוכנית הלימודים שלך</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Study Hours */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold mb-6 text-teal-800 flex items-center gap-2">
              <GraduationCap size={24} />
              חובת לימודים
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-100">
                <span className="text-slate-700">למענק</span>
                <span className="font-bold text-teal-600">8 ש"ש (224 שעות)</span>
              </div>
              <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-100">
                <span className="text-slate-700">להכרה בוותק</span>
                <span className="font-bold text-teal-600">16 ש"ש</span>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800">הרכב השעות</h4>
                <div className="flex gap-2 bg-white rounded-lg p-1 border border-slate-200">
                  <button
                    onClick={() => setHasMastersDegree(false)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      !hasMastersDegree
                        ? "bg-teal-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    רגיל
                  </button>
                  <button
                    onClick={() => setHasMastersDegree(true)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      hasMastersDegree
                        ? "bg-purple-600 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    תואר שני
                  </button>
                </div>
              </div>
              <div className="h-4 flex rounded-full overflow-hidden bg-slate-200">
                <div 
                  className={`${hasMastersDegree ? "w-1/2 bg-purple-500" : "w-3/4 bg-teal-500"} transition-all duration-300`}
                ></div>
                <div 
                  className={`${hasMastersDegree ? "w-1/2 bg-orange-400" : "w-1/4 bg-orange-400"} transition-all duration-300`}
                ></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className={`font-medium transition-colors ${hasMastersDegree ? "text-purple-700" : "text-teal-700"}`}>
                  {hasMastersDegree ? "50%" : "75%"} חובה (מקצועי/אקדמי)
                </span>
                <span className="text-orange-600 font-medium">
                  {hasMastersDegree ? "50%" : "25%"} השלמה (העשרה)
                </span>
              </div>
              {hasMastersDegree && (
                <div className="mt-3 p-3 bg-purple-50 border border-purple-100 rounded-xl">
                  <p className="text-xs text-purple-900">
                    💡 <span className="font-semibold">בעלי תואר שני:</span> חלוקה שווה בין לימודי חובה ולימודי השלמה
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Special Benefits & Ofek Hadash */}
          <div className="space-y-6">
            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100">
              <h3 className="text-xl font-bold mb-4 text-teal-800 flex items-center gap-2">
                <Palette size={24} />
                הטבה לגננות
              </h3>
              <p className="text-teal-900">
                קורסי יצירה מוכרים עד <span className="font-bold">4 ש"ש</span> כלימודי חובה (במקום השלמה).
              </p>
            </div>

            <div className="bg-slate-800 text-slate-200 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <TrendingUp size={24} />
                אופק חדש
              </h3>
              <p className="mb-4">
                לצורך קידום בדרגה יש לצבור <span className="font-bold text-white">90-105 שעות</span> המוכרות למתווה "אופק חדש" במוסדות מאושרים.
              </p>
            </div>
          </div>
        </div>

        {/* Search Institute Link */}
        <div className="mb-12">
          <a 
            href="https://www.kranoth.org.il/%d7%99%d7%a6%d7%99%d7%90%d7%94-%d7%9c%d7%94%d7%a9%d7%aa%d7%9c%d7%9e%d7%95%d7%aa/%d7%97%d7%99%d7%a4%d7%95%d7%a9-%d7%9e%d7%95%d7%a1%d7%93/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-l from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <Search size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    חיפוש מוסדות מאושרים ללימודים
                    <ExternalLink size={20} className="group-hover:translate-x-[-4px] transition-transform" />
                  </h3>
                  <p className="text-blue-100 text-lg">
                    מערכת חיפוש מוסדות לימוד מאושרים על ידי קרנות ההשתלמות - מצא את המוסד המתאים לך!
                  </p>
                </div>
              </div>
              <div className="hidden md:block text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                🎓
              </div>
            </div>
          </a>
        </div>

        {/* Mandatory Studies Details */}
        <div className="mb-12 bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-3xl border border-teal-100">
          <h3 className="text-2xl font-bold mb-6 text-teal-900 flex items-center gap-3">
            <CheckCircle2 size={28} className="text-teal-600" />
            לימודי חובה - מה נכלל?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100">
                <CheckCircle2 size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">לימודים אקדמיים</p>
                  <p className="text-sm text-slate-600">לקראת תואר: B.A, M.A, B.Ed, M.Ed, דוקטור</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100">
                <CheckCircle2 size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">לימודי הסמכה ורישוי</p>
                  <p className="text-sm text-slate-600">רשיון הוראה, ריכוז מקצוע והשלמות לקראת תואר</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100">
                <CheckCircle2 size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">כתיבת פרויקטים</p>
                  <p className="text-sm text-slate-600">תוכניות לימודים, ספרים, חוברות ופרויקטים עם הנחיה</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-teal-100">
                <CheckCircle2 size={20} className="text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">השתלמויות מקצועיות</p>
                  <p className="text-sm text-slate-600">קידום ופיתוח מקצועי בתחומי ההוראה והחינוך</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Supplementary Studies Details */}
        <div className="mb-12 bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-3xl border border-orange-100">
          <h3 className="text-2xl font-bold mb-6 text-orange-900 flex items-center gap-3">
            <AlertCircle size={28} className="text-orange-600" />
            לימודי השלמה - תנאי הכרה
          </h3>
          <div className="bg-white p-6 rounded-2xl border border-orange-100 mb-6">
            <p className="text-slate-700 mb-4 text-lg">
              לימודים יוכרו כלימודי השלמה <span className="font-bold text-orange-900">רק</span> אם מתקיימים התנאים הבאים:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-r-4 border-orange-400 pr-4">
                <span className="font-bold text-orange-600 text-xl">1.</span>
                <p className="text-slate-700">היקפם <span className="font-bold">28 שעות לפחות</span></p>
              </div>
              <div className="flex items-start gap-3 border-r-4 border-orange-400 pr-4">
                <span className="font-bold text-orange-600 text-xl">2.</span>
                <p className="text-slate-700">שכר הלימוד משולם למוסד או לאדם פרטי שהוא <span className="font-bold">עוסק מורשה או עוסק פטור</span> ובחשבונות חותמת מוסד הלימודים</p>
              </div>
              <div className="flex items-start gap-3 border-r-4 border-orange-400 pr-4">
                <span className="font-bold text-orange-600 text-xl">3.</span>
                <p className="text-slate-700">לאחר סיום הלימודים ייתן להשתלם/ת <span className="font-bold">אישור על סיום הלימודים</span> ובו הפרטים: מספר ההשתלמות/ת, מספר תעודת זהות, תאריכי פתיחה וסיום הקורס והיקף השעות שנלמדו</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Palette size={20} />
                שיעורי ספורט
              </h4>
              <p className="text-sm text-amber-900">
                יאושרו עד <span className="font-bold">4 ש"ש</span> בשנת השתלמות מלאה
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <GraduationCap size={20} />
                ספרניות/סמנכ"לים ומי עיון
              </h4>
              <p className="text-sm text-amber-900">
                מוכרים לגמול השתלמות מטעם משרד החינוך - יאושרו עד 2 סמסטרים, שיזקפו כל סמינר 28 שעות (= 1 ש"ש) ובסה"כ לשני הסמינרים 56 שעות (= 2 ש"ש)
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
          <h3 className="text-xl font-bold mb-6 text-slate-900">צריכים עזרה?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="font-bold text-teal-700 mb-2">מוקד פיננסי</p>
              <p className="text-slate-700 text-sm mb-2">ביורוריים כספיים, עדכון פרטים, מענקי השתלמות</p>
              <p className="text-slate-900 font-semibold">*5339</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <p className="font-bold text-teal-700 mb-2">מוקד פדגוגי</p>
              <p className="text-slate-700 text-sm mb-2">אישור תוכניות לימודים, אישור וותק להשתלמים</p>
              <p className="text-slate-900 font-semibold">03-6938364</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
