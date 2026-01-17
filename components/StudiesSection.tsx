import { BookOpen, GraduationCap, Palette, TrendingUp } from "lucide-react";

export const StudiesSection = () => {
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
              <h4 className="font-bold text-slate-800 mb-3">הרכב השעות</h4>
              <div className="h-4 flex rounded-full overflow-hidden bg-slate-200">
                <div className="w-3/4 bg-teal-500"></div>
                <div className="w-1/4 bg-orange-400"></div>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-teal-700 font-medium">75% חובה (מקצועי/אקדמי)</span>
                <span className="text-orange-600 font-medium">25% השלמה (העשרה)</span>
              </div>
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
      </div>
    </section>
  );
};
