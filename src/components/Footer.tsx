export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-heading font-bold text-xl text-brand-heading">BITStu</p>
          <p className="text-sm text-brand-body">Agentic AI, built to spec.</p>
        </div>
        
        <div className="text-sm text-brand-body flex flex-col items-center md:items-end gap-2">
          <p>© 2026 BITStu. All rights reserved.</p>
          <p>Cooking in the Stu 🔥</p>
        </div>
      </div>
    </footer>
  );
}
