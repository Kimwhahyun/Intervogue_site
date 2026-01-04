'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'

interface HeroProps {
  language: 'ko' | 'jp' | 'en'
}

const content = {
  ko: {
    title: 'INTERVOGUE International DX',
    subtitle: '한국에서 일본으로, 전략에서 실행까지',
    description: 'AI 앙상블 방법론과 40년 패션 경험으로 귀사의 일본 진출을 성공으로 이끕니다',
    cta: '상담 신청하기',
    stats: [
      { number: 40, label: '년 경력', suffix: '+' },
      { number: 100, label: '프로젝트', suffix: '+' },
      { number: 95, label: '만족도', suffix: '%' },
    ],
  },
  jp: {
    title: 'INTERVOGUE International DX',
    subtitle: '韓国から日本へ、戦略から実行まで',
    description: 'AIアンサンブル手法と40年のファッション経験で、御社の日本進出を成功に導きます',
    cta: '相談申し込み',
    stats: [
      { number: 40, label: '年の経験', suffix: '+' },
      { number: 100, label: 'プロジェクト', suffix: '+' },
      { number: 95, label: '満足度', suffix: '%' },
    ],
  },
  en: {
    title: 'INTERVOGUE International DX',
    subtitle: 'From Korea to Japan, Strategy to Execution',
    description: 'Leading your success in Japanese market with AI ensemble methodology and 40 years of fashion expertise',
    cta: 'Get Consultation',
    stats: [
      { number: 40, label: 'Years Experience', suffix: '+' },
      { number: 100, label: 'Projects', suffix: '+' },
      { number: 95, label: 'Satisfaction', suffix: '%' },
    ],
  },
}

export default function Hero({ language }: HeroProps) {
  const text = content[language]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[--primary-navy] to-[#2a4a7c] text-white pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        {/* 메인 타이틀 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {text.title}
          </h1>

          {/* ✅ 모든 언어 줄바꿈 추가! */}
          <p className="text-xl md:text-3xl mb-4 text-blue-200 leading-relaxed">
            {language === 'ko' ? (
              <>
                한국에서 일본으로,
                <br />
                전략에서 실행까지
              </>
            ) : language === 'jp' ? (
              <>
                韓国から日本へ、
                <br />
                戦略から実行まで
              </>
            ) : (
              <>
                From Korea to Japan,
                <br />
                Strategy to Execution
              </>
            )}
          </p>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            {text.description}
          </p>
        </motion.div>

        {/* CTA 버튼 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mb-20"
        >
          <button 
            onClick={scrollToContact}
            className="bg-[--accent-red] hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
          >
            {text.cta}
            <ArrowRight size={20} />
          </button>
        </motion.div>

        {/* 통계 카드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {text.stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// 통계 카드 컴포넌트 (카운터 애니메이션 포함)
function StatCard({ 
  number, 
  label, 
  suffix, 
  delay 
}: { 
  number: number
  label: string
  suffix: string
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = number
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [number])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all"
    >
      <div className="flex items-center justify-center mb-2">
        <TrendingUp className="text-blue-200 mr-2" size={24} />
      </div>
      <div className="text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      <div className="text-blue-200 text-lg">
        {label}
      </div>
    </motion.div>
  )
}