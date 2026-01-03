'use client'

import {motion} from 'framer-motion'
import {
  Target,
  FileText,
  Users,
  GraduationCap,
  TrendingUp,
  Lightbulb,
  Languages
} from 'lucide-react'

interface ServiceProps {
  language: 'ko'|'jp'|'en'
}

const content = {
  ko: {
    title:'서비스',
    subtitle:'전략부터 실행까지, 모든 단계를 함께합니다',
    services:[
      {
      icon: Target,
      title:'브랜드 SWOT분석',
      description: 'AI기반 데이터 분석으로 브랜드의 강점, 약점, 위협 요소를 정확히 파악합니다.',
      color: "from-blu-500 to-blue-700"
      },
      {
        icon: FileText,
        title: '사업계획서 작성',
        description: '일본 시장 진출을 위한 체계적이고 설득력 있는 사업계획서를 작성해드립니다.',
        color: 'from-purple-500 to-purple-700',
      },
      {
        icon: Users,
        title: '바이어 매칭',
        description: '전시회 및 비즈니스 미팅에서 최적의 바이어를 연결하고 성공적인 계약을 지원합니다.',
        color: 'from-green-500 to-green-700',
      },
      {
        icon: GraduationCap,
        title: '컨설팅 강의',
        description: '일본 시장 진출 노하우와 실전 경험을 공유하는 맞춤형 교육 프로그램을 제공합니다.',
        color: 'from-orange-500 to-orange-700',
      },
      {
        icon: TrendingUp,
        title: '시장 조사 및 분석',
        description: '일본 패션 트렌드와 소비자 인사이트를 분석하여 진출 전략을 수립합니다.',
        color: 'from-red-500 to-red-700',
      },
      {
        icon: Lightbulb,
        title: '브랜드 전략 컨설팅',
        description: '한국 브랜드의 일본 시장 포지셔닝과 마케팅 전략을 설계합니다.',
        color: 'from-cyan-500 to-cyan-700',
      },
    ],
  },
  jp: {
    title: 'サービス',
    subtitle: '戦略から実行まで、すべてのステップをサポート',
    services: [
      {
        icon: Target,
        title: 'ブランドSWOT分析',
        description: 'AIベースのデータ分析でブランドの強み、弱み、機会、脅威を正確に把握します。',
        color: 'from-blue-500 to-blue-700',
      },
      {
        icon: FileText,
        title: '事業計画書作成',
        description: '日本市場進出のための体系的で説得力のある事業計画書を作成します。',
        color: 'from-purple-500 to-purple-700',
      },
      {
        icon: Users,
        title: 'バイヤーマッチング',
        description: '展示会やビジネスミーティングで最適なバイヤーを繋ぎ、成功的な契約をサポートします。',
        color: 'from-green-500 to-green-700',
      },
      {
        icon: GraduationCap,
        title: 'コンサルティング講義',
        description: '日本市場進出のノウハウと実戦経験を共有するカスタマイズ教育プログラムを提供します。',
        color: 'from-orange-500 to-orange-700',
      },
      {
        icon: TrendingUp,
        title: '市場調査・分析',
        description: '日本のファッショントレンドと消費者インサイトを分析し、進出戦略を立案します。',
        color: 'from-red-500 to-red-700',
      },
      {
        icon: Lightbulb,
        title: 'ブランド戦略コンサルティング',
        description: '韓国ブランドの日本市場ポジショニングとマーケティング戦略を設計します。',
        color: 'from-cyan-500 to-cyan-700',
      },
    ],
  },
  en: {
    title: 'Services',
    subtitle: 'From Strategy to Execution, We Support Every Step',
    services: [
      {
        icon: Target,
        title: 'Brand SWOT Analysis',
        description: 'Accurately identify your brand\'s strengths, weaknesses, opportunities, and threats with AI-based data analysis.',
        color: 'from-blue-500 to-blue-700',
      },
      {
        icon: FileText,
        title: 'Business Plan Development',
        description: 'Create systematic and persuasive business plans for entering the Japanese market.',
        color: 'from-purple-500 to-purple-700',
      },
      {
        icon: Users,
        title: 'Buyer Matching',
        description: 'Connect with optimal buyers at exhibitions and business meetings, supporting successful contracts.',
        color: 'from-green-500 to-green-700',
      },
      {
        icon: GraduationCap,
        title: 'Consulting Education',
        description: 'Provide customized training programs sharing Japanese market entry know-how and practical experience.',
        color: 'from-orange-500 to-orange-700',
      },
      {
        icon: TrendingUp,
        title: 'Market Research & Analysis',
        description: 'Analyze Japanese fashion trends and consumer insights to establish entry strategies.',
        color: 'from-red-500 to-red-700',
      },
      {
        icon: Lightbulb,
        title: 'Brand Strategy Consulting',
        description: 'Design positioning and marketing strategies for Korean brands in the Japanese market.',
        color: 'from-cyan-500 to-cyan-700',
      },
    ],
  },
}

export default function Services ({ language} : ServiceProps){
  const text = content[language]

  return (
    <section id = "service" className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/*섹션타이틀*/}
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className='text-center mb-16'>

            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              {text.title}
            </h2>

            <p className='text-xl text-gray-700'>
              {text.subtitle}
            </p>
            </motion.div>

          {/*서비스 카드 그리드 */}
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
    {text.services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className='group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
      >
        {/* 아이콘 */}
        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="text-white" size={32} />
        </div>

        {/* 제목 */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {service.title}
        </h3>

        {/* 설명 */}
        <p className="text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    ))}
  </div>
          </div>
    </section>
  )
}
