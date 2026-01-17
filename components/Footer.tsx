import { Link, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">המדריך לשבתון</h3>
            <p className="text-slate-400">כל מה שרצית לדעת על שנת השבתון במקום אחד.</p>
          </div>
          <div className="md:text-left">
            <p className="text-sm text-slate-500">
              * המידע באתר הינו לידע כללי בלבד. במקרה של סתירה, המקור הקובע הוא פורטל המשתלמים.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-800 pt-8">
          <a 
            href="https://mishtalmim.kranoth.org.il/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={16} />
            פורטל המשתלמים
          </a>
          <a 
            href="https://poh.education.gov.il/administrative/transaction-details/holiday-transfer/vacation-shabaton/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={16} />
            פורטל עובדי הוראה
          </a>
          <a 
            href="https://www.btl.gov.il/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={16} />
            ביטוח לאומי
          </a>
          <a 
            href="https://www.itu.org.il/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <ExternalLink size={16} />
            הסתדרות המורים
          </a>
        </div>
        
        <div className="mt-12 text-center text-sm text-slate-600">
          <p>נבנה באהבה עבור עובדי ההוראה ❤️</p>
        </div>
      </div>
    </footer>
  );
};
