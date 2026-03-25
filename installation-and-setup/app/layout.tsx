import "./globals.css";
import React from "react";


export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div className="min-h-screen">{children}</div>
        <footer className="bg-black p-4 text-white">
          <ul className="flex justify-center items-center gap-5">
          </ul>
        </footer>
      </body>
    </html>
  );
}
