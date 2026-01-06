"use client";

import { useState } from "react";

const languages = [
  {
    name: "English",
    code: "en",
    flag: "https://flagcdn.com/us.svg",
  },
  {
    name: "Nederlands",
    code: "nl",
    flag: "https://flagcdn.com/nl.svg",
  },
  {
    name: "Español",
    code: "es",
    flag: "https://flagcdn.com/es.svg",
  },
  {
    name: "Français",
    code: "fr",
    flag: "https://flagcdn.com/fr.svg",
  },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(languages[0]);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
      >
        <img
          src={current.flag}
          alt={current.name}
          className="w-4 h-4 rounded-sm"
        />

        {current.name}

        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-gray-300 bg-white shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setCurrent(lang);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition ${
                current.code === lang.code
                  ? "font-semibold text-blue-600"
                  : "text-gray-700"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-5 h-5 rounded-sm"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
