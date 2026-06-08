import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/data';
import clsx from 'clsx';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-brand">Alex Dev</a>
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300',
          open ? 'max-h-60' : 'max-h-0'
        )}
      >
        <ul className="flex flex-col px-6 pb-4 gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-400 hover:text-white text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
