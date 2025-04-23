"use client"

import React from 'react';
import '/globals.css';
import { Provider } from 'react-redux';
import { store } from "@/app/redux/store";
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
