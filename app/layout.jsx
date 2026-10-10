import './globals.css';

export const metadata = {
  title: 'Dr. Maya Reynolds Counseling | Trusted Therapist',
  description: 'Evidence-based therapy, anxiety counseling, trauma recovery, and couples therapy in a safe, confidential space.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}