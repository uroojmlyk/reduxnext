'use client';  // ← Ye important hai – Next.js App Router mein client component banane ke liye

import { Provider } from 'react-redux';
import { store } from './store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}