import './globals.css';

import { Metadata } from 'next';
import FlyonuiScript from '../components/FlyonuiScript';

export const metadata: Metadata = {
  title: 'HealthTracker - Your Personal Health Companion',
  description: 'Track your health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="soft">
      <body>

        <div>{children}</div>
      </body>
      <FlyonuiScript />
    </html>
  );
}

