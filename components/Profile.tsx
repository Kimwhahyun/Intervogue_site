'use client'

  import { motion } from 'framer-motion'
  import Image from 'next/image'
  import { Award, Building2, Globe2, GraduationCap, Briefcase } from 'lucide-react'

  interface ProfileProps {
    language: 'ko' | 'jp' | 'en'
  }

  const content = {
    ko: {
      badge: 'CEO & FOUNDER',
      name: '김강화',
      title: 'INTERVOGUE International DX 대표',
      quote: '"한국 브랜드의 일본 진출, 전략부터 실행까지 함께합니다"',
      bio: '40년간 패션 업계에서 쌓아온 경험과 네이티브 수준의 일본어 능력, 그리고 AI 앙상블 방법론을 결합하여 한국 브랜드의 성공적인 일본 시장 진출을 이끌고 있습니다.',
      careerTitle: '주요 경력',
      careers: [
        {
          icon: Briefcase,
          title: '제일모직',
          role: '상품기획부장',
        },
        {
          icon: Briefcase,
          title: '톰보이',
          role: '총괄전무',
        },
        {
          icon: Building2,
          title: '형지엘리트',
          role: '사외이사',
        },
        {
          icon: Building2,
          title: '인터보그인터네셔널',
          role: '대표 컨설턴트',
        },
        {
          icon: Award,
          title: '한국 스토어클리닉위원회',
          role: '위원장',
        },
        {
          icon: Award,
          title: '빅인사이트',
          role: '상임고문',
        },
        {
          icon: GraduationCap,
          title: '서울대학교',
          role: '섬유공학과 졸업',
        },
        {
          icon: GraduationCap,
          title: '우에다 야스코 복식전문학교',
          role: '패션비지니스과 수료',
        },
      ],
      expertiseTitle: '전문 분야',
      expertise: [
        { icon: Globe2, label: '한일 크로스보더 비즈니스' },
        { icon: Award, label: 'AI 앙상블 방법론' },
        { icon: Building2, label: '패션 브랜드 전략' },
      ],
    },
    jp: {
      badge: 'CEO & FOUNDER',
      name: 'キム・カンファ',
      title: 'INTERVOGUE International DX 代表',
      quote: '"韓国ブランドの日本進出、戦略から実行まで共に"',
      bio: '40年間ファッション業界で積み上げてきた経験とネイティブレベルの日本語能力、そしてAIアンサンブル方法論を組み合わせ、韓国ブランドの成功的な日本市場進出を導いています。',
      careerTitle: '主要経歴',
      careers: [
        {
          icon: Briefcase,
          title: 'チェイルモジク',
          role: '商品企画部長',
        },
        {
          icon: Briefcase,
          title: 'TOMBOY',
          role: '総括専務',
        },
        {
          icon: Building2,
          title: 'ヒョンジエリート',
          role: '社外取締役',
        },
        {
          icon: Building2,
          title: 'インターボグインターナショナル',
          role: '代表コンサルタント',
        },
        {
          icon: Award,
          title: '韓国ストアクリニック委員会',
          role: '委員長',
        },
        {
          icon: Award,
          title: 'ビッグインサイト',
          role: '常任顧問',
        },
        {
          icon: GraduationCap,
          title: 'ソウル大学校',
          role: '繊維工学科卒業',
        },
        {
          icon: GraduationCap,
          title: '上田安子服飾専門学校',
          role: 'ファッションビジネス科修了',
        },
      ],
      expertiseTitle: '専門分野',
      expertise: [
        { icon: Globe2, label: '韓日クロスボーダービジネス' },
        { icon: Award, label: 'AIアンサンブル方法論' },
        { icon: Building2, label: 'ファッションブランド戦略' },
      ],
    },
    en: {
      badge: 'CEO & FOUNDER',
      name: 'Kang-Hwa Kim',
      title: 'CEO, INTERVOGUE International DX',
      quote: '"From strategy to execution, partnering Korean brands for Japan market entry"',
      bio: 'Combining 40 years of fashion industry experience, native-level Japanese proficiency, and AI ensemble methodology to lead successful Japanese market entry for Korean brands.',
      careerTitle: 'Career Highlights',
      careers: [
        {
          icon: Briefcase,
          title: 'Cheil Industries',
          role: 'Product Planning Director',
        },
        {
          icon: Briefcase,
          title: 'TOMBOY',
          role: 'Executive Managing Director',
        },
        {
          icon: Building2,
          title: 'Hyungji Elite',
          role: 'Outside Director',
        },
        {
          icon: Building2,
          title: 'INTERVOGUE International',
          role: 'CEO & Lead Consultant',
        },
        {
          icon: Award,
          title: 'Korea Store Clinic Committee',
          role: 'Chairman',
        },
        {
          icon: Award,
          title: 'Big Insight',
          role: 'Senior Advisor',
        },
        {
          icon: GraduationCap,
          title: 'Seoul National University',
          role: 'B.S. in Textile Engineering',
        },
        {
          icon: GraduationCap,
          title: 'Ueda Yasuko Fashion College',
          role: 'Fashion Business Program',
        },
      ],
      expertiseTitle: 'Expertise',
      expertise: [
        { icon: Globe2, label: 'Korea-Japan Cross-border Business' },
        { icon: Award, label: 'AI Ensemble Methodology' },
        { icon: Building2, label: 'Fashion Brand Strategy' },
      ],
    },
  }

  export default function Profile({ language }: ProfileProps) {
    const text = content[language]

    return (
      <section id="profile" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* 왼쪽: 사진 영역 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* 배경 장식 */}
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-[#1a365d] to-blue-600 rounded-2xl opacity-10" />

                {/* CEO 사진 섹션 - 세로로 길게! */}
                <div className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                  <div className="aspect-[3/4] flex items-center justify-center bg-gradient-to-br from-[#1a365d] to-blue-700 p-8">
                    <div className="text-center text-white">
                      {/* ✅ 세로로 길게! */}
                      <div className="w-56 h-80 mx-auto mb-4 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src="/images/ceo-photo.jpeg"
                          alt="CEO Photo"
                          width={224}
                          height={320}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-sm font-semibold opacity-90">{text.name}</p>
                      <p className="text-xs opacity-70">{text.badge}</p>
                    </div>
                  </div>
                </div>

                {/* 플로팅 뱃지 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-4 -right-4 bg-[#c53030] text-white px-6 py-3 rounded-xl shadow-lg z-20"
                >
                  <div className="text-3xl font-bold">40+</div>
                  <div className="text-sm opacity-90">
                    {language === 'ko' && '년 경력'}
                    {language === 'jp' && '年の経験'}
                    {language === 'en' && 'Years Exp.'}
                  </div>
                </motion.div>
              </motion.div>

              {/* 오른쪽: 정보 영역 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* 뱃지 */}
                <span className="inline-block px-4 py-1.5 bg-[#1a365d]/10 text-[#1a365d] text-sm font-semibold tracking-wider rounded-full mb-4">
                  {text.badge}
                </span>

                {/* 이름 & 직함 */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {text.name}
                </h2>
                <p className="text-xl text-[#1a365d] font-medium mb-6">
                  {text.title}
                </p>

                {/* 인용구 */}
                <blockquote className="text-lg text-gray-600 italic border-l-4 border-[#c53030] pl-4 mb-6">
                  {text.quote}
                </blockquote>

                {/* 소개글 */}
                <p className="text-gray-700 leading-relaxed mb-8">
                  {text.bio}
                </p>

                {/* 전문 분야 태그 */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {text.expertiseTitle}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {text.expertise.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
                      >
                        <item.icon size={16} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 하단: 경력 타임라인 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-10">
                {text.careerTitle}
              </h3>

              {/* ✅ 4열 2행 (8개) */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {text.careers.map((career, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#1a365d]/30 transition-all group"
                  >
                    {/* 아이콘 */}
                    <div className="w-12 h-12 bg-[#1a365d] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <career.icon className="text-white" size={24} />
                    </div>

                    {/* 회사/기관명 */}
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {career.title}
                    </h4>

                    {/* 직책 */}
                    <p className="text-gray-600 text-sm">
                      {career.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    )
  }
