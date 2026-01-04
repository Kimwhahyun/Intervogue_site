'use client'

import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'

interface NavigationProps {
  language: "ko" | "jp" | "en"
  onLanguageChange: (lang: "ko" | "jp" | "en") => void
}

const content = {
  ko: {
    logo: "INTERVOGUE",
    menu: ['소개', '서비스', '고객사', '인사이트', '문의하기'],
    menuIds: ['about', 'service', 'client', 'insights', 'contact'],
  },
  jp: {
    logo: 'INTERVOGUE',
    menu: ['紹介', 'サービス', 'お客様', 'インサイト', 'お問い合わせ'],
    menuIds: ['about', 'service', 'client', 'insights', 'contact'],
  },
  en: {
    logo: 'INTERVOGUE',
    menu: ['About', 'Service', 'Client', 'Insight', 'Contact'],
    menuIds: ['about', 'service', 'client', 'insights', 'contact'],
  },
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const text = content[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a365d] shadow-lg py-4 transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          {text.logo}
        </div>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          {text.menu.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(text.menuIds[index])}
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              {item}
            </button>
          ))}

          {/* 언어 선택 드롭다운 */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 hover:border-white transition-colors text-white"
            >
              <Globe size={18} />
              <span className="uppercase font-semibold">{language}</span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-lg overflow-hidden min-w-[100px]">
                {/* ✅ 선택된 언어 제외하고 표시! */}
                {(['ko', 'jp', 'en'] as const)
                  .filter((lang) => lang !== language)
                  .map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onLanguageChange(lang)
                        setIsLangMenuOpen(false)
                      }}
                      className="w-full px-4 py-2 text-left transition-colors uppercase font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#c53030]"
                    >
                      {lang}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-4 py-4">
          {text.menu.map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(text.menuIds[index])}
              className="block w-full text-left px-6 py-3 text-gray-900 font-medium hover:bg-gray-100 hover:text-[#c53030] transition-colors"
            >
              {item}
            </button>
          ))}

          {/* ✅ 언어 선택 - 선택된 언어 제외! */}
          <div className="px-6 py-3 border-t border-gray-200 mt-2">
            <p className="text-sm font-semibold text-gray-700 mb-3">Language</p>
            <div className="flex gap-2">
              {(['ko', 'jp', 'en'] as const)
                .filter((lang) => lang !== language)
                .map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      onLanguageChange(lang)
                      setIsMobileMenuOpen(false)
                    }}
                    className="px-4 py-2 rounded-lg uppercase font-semibold transition-colors bg-gray-200 text-gray-900 hover:bg-[#c53030] hover:text-white"
                  >
                    {lang}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}