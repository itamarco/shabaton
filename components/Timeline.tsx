import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";

const steps = [
  {
    date: "עד 31 במרץ (לפני היציאה)",
    title: "הגשת בקשות",
    description: "המועד הקובע להגשת בקשת חל\"ת/שבתון בפורטל עובדי הוראה ובאתר הבנק הבינלאומי/קרן ההשתלמות.",
    urgent: true,
  },
  {
    date: "יולי-אוגוסט",
    title: "בניית מערכת שעות",
    description: "בניית מערכת שעות והגשתה לאישור יועצת הקרן.",
    urgent: false,
  },
  {
    date: "ספטמבר-אוקטובר",
    title: "תחילת שנת השבתון",
    description: "תחילת הלימודים וקבלת מענקי קיום ראשונים.",
    urgent: false,
  },
  {
    date: "נובמבר",
    title: "ביטוח לאומי",
    description: "הסדרת תשלום עצמאי לביטוח לאומי.",
    urgent: false,
  },
  {
    date: "עד 31 במרץ (במהלך השבתון)",
    title: "הודעה על חזרה",
    description: "הגשת \"הודעה על חזרה לעבודה\" בפורטל עובדי הוראה. חובה למניעת פיטורים!",
    urgent: true,
  },
  {
    date: "עד 15 באוגוסט",
    title: "סיום הגשות",
    description: "סיום הגשת כל אישורי הלימודים לקרן לצורך הפקת אישור ותק.",
    urgent: false,
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-16 justify-center">
          <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
            <Calendar size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">ציר הזמן שלך</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 right-4 md:right-1/2 md:-mr-px w-0.5 bg-slate-200"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center md:justify-center">
                
                {/* Desktop: Spacer for one side */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}></div>

                {/* Dot */}
                <div className={`absolute right-0 md:static z-10 w-9 h-9 rounded-full border-4 border-white shadow-sm flex items-center justify-center shrink-0
                  ${step.urgent ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}
                  md:order-2 md:mx-4
                `}>
                  {step.urgent ? <AlertCircle size={16} /> : <CheckCircle2 size={16} />}
                </div>

                {/* Content */}
                <div className={`
                  w-full pr-12 md:pr-0 md:w-1/2
                  ${index % 2 === 0 ? 'md:order-3 md:text-right' : 'md:order-1 md:text-left'}
                `}>
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group hover:shadow-md transition-all
                    ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}
                  `}>
                    {/* Arrow (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-slate-100 transform rotate-45
                      ${index % 2 === 0 ? '-right-[7px] border-t border-r' : '-left-[7px] border-b border-l'}
                    `}></div>

                    <div className={`flex flex-col gap-1 ${index % 2 !== 0 ? 'md:items-end' : ''}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold w-fit">
                        {step.date}
                      </span>
                      <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
