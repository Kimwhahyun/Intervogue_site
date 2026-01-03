'use client'

import { Mail, Phone, MapPin, Facebook, MessageSquare } from 'lucide-react'

interface FooterProps {
  language: 'ko' | 'jp' | 'en'
}

const content = {
  ko: {
    company: {
      name: 'INTERVOGUE International DX',
      description: '한국에서 일본으로, 전략에서 실행까지. AI 앙상블 방법론과 40년 패션 경험을 바탕으로 브랜드의 일본 진출을 지원합니다.',
    },
    quickLinks: {
      title: '바로가기',
      links: [
        { label: '회사 소개', href: '#about' },
        { label: '서비스', href: '#service' },
        { label: '고객사', href: '#client' },
        { label: '인사이트', href: '#insights' },
        { label: '문의하기', href: '#contact' },
      ],
    },
    contact: {
      title: '연락처',
      email: 'intervog@chol.com',
      phone: '+82-10-2267-9986',
      address: 'Gyeonggi-do, Korea',
    },
    social: {
      title: '소셜 미디어',
    },
    copyright: '© 2026 INTERVOGUE International DX. All rights reserved.',
  },
  jp: {
    company: {
      name: 'INTERVOGUE International DX',
      description: '韓国から日本へ、戦略から実行まで。AIアンサンブル方法論と40年のファッション経験に基づき、ブランドの日本進出を支援します。',
    },
    quickLinks: {
      title: 'クイックリンク',
      links: [
        { label: '会社紹介', href: '#about' },
        { label: 'サービス', href: '#service' },
        { label: 'お客様', href: '#client' },
        { label: 'インサイト', href: '#insights' },
        { label: 'お問い合わせ', href: '#contact' },
      ],
    },
    contact: {
      title: '連絡先',
      email: 'intervog@chol.com',
      phone: '+81-10-2267-9968',
      address: 'Gyeonggi-do, Korea',
    },
    social: {
      title: 'ソーシャルメディア',
    },
    copyright: '© 2026 INTERVOGUE International DX. All rights reserved.',
  },
  en: {
    company: {
      name: 'INTERVOGUE International DX',
      description: 'From Korea to Japan, from strategy to execution. Supporting brand entry into Japan with AI ensemble methodology and 40 years of fashion experience.',
    },
    quickLinks: {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Services', href: '#service' },
        { label: 'Clients', href: '#client' },
        { label: 'Insights', href: '#insights' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    contact: {
      title: 'Contact',
      email: 'intervog@chol.com',
      phone: '+82-10-2267-9986',
      address: 'Gyeonggi-do, Korea',
    },
    social: {
      title: 'Social Media',
    },
    copyright: '© 2026 INTERVOGUE International DX. All rights reserved.',
  },
}

export default function Footer({ language }: FooterProps) {
  const text = content[language]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* 4컬럼 → 3컬럼으로 변경! */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1.5fr] gap-8">

          {/* 첫 번째 컬럼: 회사 정보 */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {text.company.name}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
            한국에서 일본으로, 전략에서 실행까지.
             <br />  {/* ← 줄바꿈! */}
             AI 앙상블 방법론과 30년 패션 경험을 바탕으로 브랜드의 일본 진출을 지원합니다.
            </p>
          </div>

          {/* 두 번째 컬럼: 바로가기 (서비스 삭제됨!) */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              {text.quickLinks.title}
            </h4>
            <ul className="space-y-2">
              {text.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 세 번째 컬럼: 연락처 & SNS */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              {text.contact.title}
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a
                  href={`mailto:${text.contact.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {text.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  {text.contact.phone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-400">
                  {text.contact.address}
                </span>
              </div>
            </div>

            <h4 className="text-white text-lg font-semibold mb-3">
              {text.social.title}
            </h4>
            <div className="flex gap-3">
              {language === 'ko' && (
                <a
                  href="#"
                  className="bg-yellow-400 text-gray-900 p-2 rounded-lg hover:bg-yellow-500 transition-colors"
                  aria-label="KakaoTalk"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
              {language === 'jp' && (
                <a
                  href="#"
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                  aria-label="LINE"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              )}
              <a
                href="https://www.facebook.com/intervogue"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              {text.copyright}
            </p>
            <div className="flex gap-6">
              <button className="text-sm text-gray-500 hover:text-white transition-colors">
                {language === 'ko' && '개인정보처리방침'}
                {language === 'jp' && 'プライバシーポリシー'}
                {language === 'en' && 'Privacy Policy'}
              </button>
              <button className="text-sm text-gray-500 hover:text-white transition-colors">
                {language === 'ko' && '이용약관'}
                {language === 'jp' && '利用規約'}
                {language === 'en' && 'Terms of Service'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
