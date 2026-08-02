import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Tic-Tac-Toe',
  description: 'Ein einfaches Tic-Tac-Toe Spiel gelernt mit Claude Code',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}