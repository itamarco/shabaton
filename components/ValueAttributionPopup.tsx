import { InfoPopup } from "./InfoPopup";
import { CheckCircle, FileText, Eye, FolderOpen, Calculator, Clock } from "lucide-react";

export const ValueAttributionPopup = () => {
  return (
    <InfoPopup title='מה זה "זקיפת שווי"?' triggerText="מה זה זקיפת שווי?">
      <div className="space-y-6 text-slate-700">
        {/* What is it - Simple explanation */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-blue-900">
            תקציר למשתלם
          </h4>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <p className="text-base leading-relaxed">
              במילים פשוטות, מדובר במצב שבו רשות המסים מחשיבה הטבה שקיבלתם (במקרה זה, הפקדות של קרן ההשתלמות לפנסיה שלכם) 
              כאילו היא הייתה שכר מזומן ששולם לכם. מכיוון שמס הכנסה לא רואה בקרן ההשתלמות "מעסיק" רשמי, 
              הכסף שהיא שמה עבורכם בחיסכון הפיצויים נחשב ל"מתנה" חייבת במס. 
              <span className="font-semibold text-blue-900"> התוצאה היא שלמרות שלא ראיתם את הכסף הזה בחשבון הבנק, 
              אתם עלולים לשלם עליו מס הכנסה כבר עכשיו או בזמן הפרישה.</span>
            </p>
          </div>
        </div>

        {/* How it works */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-slate-800">
            איך זה עובד בפועל? (הסבר למתחילים)
          </h4>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <p className="text-base leading-relaxed">
              כשאתם עובדים בגן, משרד החינוך שם לכם בכל חודש כסף בצד לפיצויים בתוך קרן הפנסיה. 
              בשבתון, קרן ההשתלמות עושה את זה במקומו. 
              <span className="font-semibold"> הבעיה היא שבעיני מס הכנסה, קרן ההשתלמות היא סוג של "צינור" ולא המעסיק האמיתי שלכם.</span> לכן, 
              הם אומרים: "הכסף שנכנס לפיצויים הוא הכנסה לכל דבר", ומטילים עליו מס לפי מדרגות המס שלכם.
            </p>
          </div>
        </div>

        {/* Bottom line - Action items */}
        <div>
          <h4 className="text-xl font-bold mb-4 text-orange-800">
            מה השורה התחתונה? (הנחיה אופרטיבית)
          </h4>
          <p className="text-slate-700 mb-4">
            כדי שלא תשלמו מס כפול או תסתבכו בבירוקרטיה כשתפרשו לפנסיה, עליכם לבצע את הצעדים הבאים:
          </p>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-white border-2 border-blue-200 p-5 rounded-2xl hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">1. לפני היציאה - עדכון פרטים</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ודאו שקרן ההשתלמות יודעת בדיוק לאיזו קרן פנסיה להפקיד את הכסף. 
                    טעות כאן תגרום לכסף "ללכת לאיבוד" בקופה כללית ותקשה מאוד על חישוב המס בעתיד.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-2 border-teal-200 p-5 rounded-2xl hover:border-teal-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-teal-100 p-2 rounded-lg text-teal-600">
                  <Eye size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">2. במהלך השנה - מעקב דוחות</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    היכנסו לאזור האישי של קרן הפנסיה שלכם (לא קרן ההשתלמות) פעם בכמה חודשים 
                    ובדקו שמופיעות הפקדות תחת המשלם "קרנות השתלמות".
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-2 border-amber-200 p-5 rounded-2xl hover:border-amber-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-amber-100 p-2 rounded-lg text-amber-600">
                  <FolderOpen size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">3. שמירת ניירת (חשוב מאוד!)</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    שמרו בתיקייה (פיזית או דיגיטלית) את כל תלושי המענק החודשיים של השבתון 
                    ואת "אישור ההפקדות השנתי" שתקבלו מהקרן בסוף השנה.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white border-2 border-purple-200 p-5 rounded-2xl hover:border-purple-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Calculator size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">4. תיאום מס</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    אם אתם עובדים בעבודה נוספת (אפילו קטנה) בזמן השבתון, ציינו בתיאום המס 
                    שיש לכם "הכנסה זקופה" מהשבתון כדי שלא יורידו לכם מס מקסימלי בטעות.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white border-2 border-green-200 p-5 rounded-2xl hover:border-green-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 mb-2">5. בזמן הפרישה (בעוד שנים)</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    כשתמלאו טופס 161 (טופס פרישה), תצטרכו להראות שהיו לכם שני "מעסיקים" שונים שהפקידו לפיצויים: 
                    משרד החינוך וקרנות ההשתלמות. הניירת ששמרתם בסעיף 3 תחסוך לכם אלפי שקלים וריצות לפקיד השומה.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important notice */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <CheckCircle size={24} />
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">💡 זכרו:</h5>
              <p className="text-orange-50 leading-relaxed">
                הניירת והמעקב הם המפתח! עדיף להשקיע 10 דקות כל חודש בבדיקה, 
                מאשר לגלות בעוד 20 שנה שחסר לכם תיעוד ואתם חייבים מס נוסף.
              </p>
            </div>
          </div>
        </div>
      </div>
    </InfoPopup>
  );
};
