'use client'

  import { motion } from 'framer-motion'
  import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
  import { useState } from 'react'

  interface InsightsProps {
    language: 'ko' | 'jp' | 'en'
  }

  const content = {
    ko: {
      title: '인사이트',
      subtitle: '패션 업계 트렌드와 전략적 인사이트',
      viewMore: '더보기',
    },
    jp: {
      title: 'インサイト',
      subtitle: 'ファッション業界のトレンドと戦略的インサイト',
      viewMore: 'もっと見る',
    },
    en: {
      title: 'Insights',
      subtitle: 'Fashion Industry Trends and Strategic Insights',
      viewMore: 'View More',
    },
  }

  const articles = [
    {
      title: {
        ko: 'AI 마케팅 전략',
        jp: 'AIマーケティング戦略',
        en: 'AI Marketing Strategy',
      },
      excerpt: {
        ko: '패션 브랜드가 AI를 활용해 마케팅 효율을 극대화하는 방법과 실제 적용 사례를 소개합니다.',
        jp: 'ファッションブランドがAIを活用してマーケティング効率を最大化する方法と実際の適用事例を紹介します。',
        en: 'How fashion brands can maximize marketing efficiency using AI and real application cases.',
      },
      date: '2025.12.31',
      link: 'https://www.facebook.com/share/p/1BCw9pS6SS/',
      category: { ko: 'AI', jp: 'AI', en: 'AI' },
    },
    {
      title: {
        ko: '무신사 SEO 분석',
        jp: 'MUSINSAのSEO分析',
        en: 'MUSINSA SEO Analysis',
      },
      excerpt: {
        ko: 'K-패션 대표 플랫폼 무신사의 검색 최적화 전략과 성공 요인을 분석합니다.',
        jp: 'K-ファッション代表プラットフォームMUSINSAの検索最適化戦略と成功要因を分析します。',
        en: "Analysis of K-Fashion platform MUSINSA's search optimization strategy and success factors.",
      },
      date: '2025.12.31',
      link: 'https://www.facebook.com/share/p/15h96a2aqy/',
      category: { ko: 'SEO', jp: 'SEO', en: 'SEO' },
    },
    {
      title: {
        ko: 'AEO 마케팅',
        jp: 'AEOマーケティング',
        en: 'AEO Marketing',
      },
      excerpt: {
        ko: 'AI 검색 시대에 필수적인 AEO(Answer Engine Optimization) 마케팅 전략을 알아봅니다.',
        jp: 'AI検索時代に必須のAEO（Answer Engine Optimization）マーケティング戦略を学びます。',
        en: 'Learn essential AEO (Answer Engine Optimization) marketing strategies for the AI search era.',
      },
      date: '2025.12.28',
      link: 'https://www.facebook.com/share/p/14k1gRmabL/',
      category: { ko: '마케팅', jp: 'マーケティング', en: 'Marketing' },
    },
    {
      title: {
        ko: '야나이 다다시의 경영 철학',
        jp: '柳井正の経営哲学',
        en: "Tadashi Yanai's Management Philosophy",
      },
      excerpt: {
        ko: '유니클로를 글로벌 브랜드로 성장시킨 야나이 다다시 회장의 경영 철학과 전략을 살펴봅니다.',
        jp: 'ユニクロをグローバルブランドに成長させた柳井正会長の経営哲学と戦略を探ります。',
        en: "Explore the management philosophy and strategy of Chairman Tadashi Yanai who grew UNIQLO into a global brand.",
      },
      date: '2025.12.28',
      link: 'https://www.facebook.com/share/p/15m7R1gPDv/',
      category: { ko: '경영', jp: '経営', en: 'Management' },
    },
  ]

  export default function Insights({ language }: InsightsProps) {
    const text = content[language]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1))
    }

    const handleNext = () => {
      setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1))
    }

    const handleLinkClick = (link: string) => {
      window.open(link, '_blank', 'noopener,noreferrer')
    }

    return (
      <section id="insights" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {text.title}
            </h2>
            <p className="text-lg text-gray-600">
              {text.subtitle}
            </p>
          </motion.div>

          {/* ✅ 모바일: 1개씩, 데스크탑: 4개씩 */}
          <div className="relative md:px-12">

            {/* 화살표 - 모바일에서도 표시 */}
            <button
              onClick={handlePrev}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* 카드 영역 */}
            <div className="overflow-hidden px-8 md:px-0">
              <div className="max-w-sm md:max-w-full mx-auto">

                {/* ✅ 모바일: 현재 인덱스 카드만, 데스크탑: 전체 그리드 */}
                <div className="block md:hidden">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 shadow-lg"
                  >
                    {/* 카테고리 */}
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
                      {articles[currentIndex].category[language]}
                    </span>

                    {/* 제목 */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {articles[currentIndex].title[language]}
                    </h3>

                    {/* 더보기 버튼 */}
                    <button
                      onClick={() => handleLinkClick(articles[currentIndex].link)}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      {text.viewMore}
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </motion.div>
                </div>

                {/* ✅ 데스크탑: 4개 그리드 */}
                <div className="hidden md:grid grid-cols-4 gap-6">
                  {articles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
                    >
                      {/* 카테고리 & 날짜 */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {article.category[language]}
                        </span>
                        <span className="text-xs text-gray-500">{article.date}</span>
                      </div>

                      {/* 제목 */}
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {article.title[language]}
                      </h3>

                      {/* 서머리 */}
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt[language]}
                      </p>

                      {/* 더보기 */}
                      <button
                        onClick={() => handleLinkClick(article.link)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        {text.viewMore}
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 인디케이터 */}
            <div className="flex justify-center gap-2 mt-8">
              {articles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to article ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }