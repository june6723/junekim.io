import ThemeClassManager from '@/components/ThemeClassManager';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import '../styles/prism-vsc-dark-plus.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeClassManager />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
