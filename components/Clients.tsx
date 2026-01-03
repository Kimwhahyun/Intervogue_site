'use client'

  import { motion } from 'framer-motion'
  import Image from 'next/image'

  interface ClientsProps {
    language: 'ko' | 'jp' | 'en'
  }

  const content = {
    ko: {
      title: '함께한 고객사',
      subtitle: '100여 개 이상의 브랜드가 INTERVOGUE와 함께 성장했습니다',
    },
    jp: {
      title: 'お客様',
      subtitle: '100以上のブランドがINTERVOGUEと共に成長しました',
    },
    en: {
      title: 'Our Clients',
      subtitle: 'Over 100 brands have grown with INTERVOGUE',
    },
  }

  // 실제 고객사 로고 리스트
  const clients = [
    { name: '마리몬떼', logo: '/images/MARE MONTE.png' },
    { name: 'CHASECULT', logo: '/images/CHASECULT-new.png' },
    { name: '지센', logo: '/images/ZISHEN.png' },
    { name: '형지엘리트', logo: '/images/형지엘리트.png' },
    { name: '에잇세컨즈', logo: '/images/8 seconds.svg' },
  ]

  export default function Clients({ language }: ClientsProps) {
    const text = content[language]

    return (
      <section id="client" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* 섹션 타이틀 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {text.title}
            </h2>
            <p className="text-xl text-gray-700">
              {text.subtitle}
            </p>
          </motion.div>

          {/* 무한 스크롤 로고 슬라이더 */}
          <div className="relative overflow-hidden py-8">
            {/* 왼쪽 그라디언트 (페이드 효과) */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

            {/* 오른쪽 그라디언트 (페이드 효과) */}
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>

            {/* 스크롤 컨테이너 */}
            <div className="flex animate-scroll">
              {/* 첫 번째 세트 */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 px-8 py-6 min-w-[200px] h-[120px] flex items-center justify-center hover:scale-105"
                >
                   <Image
    src={client.logo}
    alt={client.name}
    width={160}
    height={80}
    className="object-contain"
    style={{
      filter: 'grayscale(100%)',
      width: 'auto',
      height: 'auto',
      maxHeight: '80px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.filter = 'grayscale(0%)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.filter = 'grayscale(100%)'
    }}
  />

                </div>
              ))}

              {/* 두 번째 세트 (무한 반복용 복제) */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 px-8 py-6 min-w-[200px] h-[120px] flex items-center justify-center hover:scale-105"
                >
                <Image
    src={client.logo}
    alt={client.name}
    width={160}
    height={80}
    className="object-contain"
    style={{
      filter: 'grayscale(100%)',
      width: 'auto',
      height: 'auto',
      maxHeight: '80px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.filter = 'grayscale(0%)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.filter = 'grayscale(100%)'
    }}
  />
                </div>
              ))}

              {/* 세 번째 세트 (더 부드러운 무한 스크롤) */}
              {clients.map((client, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 mx-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 px-8 py-6 min-w-[200px] h-[120px] flex items-center justify-center hover:scale-105"
                >
                   <Image
    src={client.logo}
    alt={client.name}
    width={160}
    height={80}
    className="object-contain "
    style={{
      filter: 'grayscale(100%)',
      width: 'auto',
      height: 'auto',
      maxHeight: '80px'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.filter = 'grayscale(0%)'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.filter = 'grayscale(100%)'
    }}
  />
                </div>
              ))}
            </div>
          </div>

          {/* 추가 정보 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg font-semibold">
              {language === 'ko' && '+ 그 외 100여 개 브랜드'}
              {language === 'jp' && '+ その他100以上のブランド'}
              {language === 'en' && '+ Over 100 more brands'}
            </p>
          </motion.div>
        </div>
      </section>
    )
  }
