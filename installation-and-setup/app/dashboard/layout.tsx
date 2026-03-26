import Link from 'next/link';
import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="flex gap-5">
      <aside className="w-30 h-screen text-slate-800">
        <div className="bg-blue-500 px-10 p-4 h-32 text-3xl flex items-end text-white rounded">
          <h1>PJ01</h1>
        </div>
        <nav className="px-5 py-5">
          <ul>
            <Link href="/dashboard">
              <li className="hover:bg-slate-200 p-2 mb-2 rounded">Dashboard</li>
            </Link>

            <Link href="/dashboard/setting">
              <li className="hover:bg-slate-200 p-2 rounded cursor-pointer">
                Settings
              </li>
            </Link>

            <Link href="/dashboard/profile">
              <li className="hover:bg-slate-200 p-2 rounded cursor-pointer">
                Profile
              </li>
            </Link>
          </ul>
        </nav>
      </aside>
      <div>{children}</div>
    </div>
  );
}

export default Layout