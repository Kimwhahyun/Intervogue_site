
'use client'

import {motion} from 'framer-motion'
import {Brain, Briefcase, Globe2, Zap} from 'lucide-react'

interface AboutProps {
  language: 'ko'|'jp'|'en'
}

const content = {
  ko: {
    title : 'INTERVOGUE INTERNATIONAL을 선택해야하는 이유',
    subtitle: '40년 경력과 AI기술의 완벽한 조합',
    cards:[
      {
        icon: Brain,
        title: 'AI 앙상블 방법론',
        description: '최신 AI기술과 데이터 분석으로 정확한 시장 예측과 전략 수립',
      },
      {
        icon: Briefcase,
        title : '40년 패션 업계 경력',
        description: '한국과 일본 패션 시장을 깊이 이해하는 실전 경험',
      },
      {
        icon:Globe2,
        title:'네이티브 일본어',
        description:'일본 현지 근무 경험 기반 네이티브 일본어 능력으로 현지 비지니스 커뮤니케이션 지원',
      },
      {
        icon: Zap,
        title: '전략에서 실행까지',
        description: '컨설팅부터 실제 바이어 매칭, 전시회 참가까지 원스톱 서비스',
      },
    ],
  },
  jp: {
    title: 'INTERVOGUEを選ぶ理由',
    subtitle: '40年の経験とAI技術の完璧な組み合わせ',
    cards: [
      {
        icon: Brain,
        title: 'AIアンサンブル手法',
        description: '最新のAI技術とデータ分析で正確な市場予測と戦略立案',
      },
      {
        icon: Briefcase,
        title: '40年のファッション業界経験',
        description: '韓国と日本のファッション市場を深く理解する実戦経験',
      },
      {
        icon: Globe2,
        title: 'ネイティブ日本語',
        description: '完璧な言語能力で現地ビジネスコミュニケーションをサポート',
      },
      {
        icon: Zap,
        title: '戦略から実行まで',
        description: 'コンサルティングから実際のバイヤーマッチング、展示会参加までワンストップサービス',
      },
    ],
  },
  en: {
    title: 'Why Choose INTERVOGUE',
    subtitle: 'Perfect Combination of 30 Years Experience and AI Technology',
    cards: [
      {
        icon: Brain,
        title: 'AI Ensemble Methodology',
        description: 'Accurate market prediction and strategy development with latest AI technology and data analysis',
      },
      {
        icon: Briefcase,
        title: '40 Years Fashion Industry',
        description: 'Deep understanding of Korean and Japanese fashion markets through hands-on experience',
      },
      {
        icon: Globe2,
        title: 'Native Japanese Speaker',
        description: 'Perfect language skills for seamless local business communication',
      },
      {
        icon: Zap,
        title: 'Strategy to Execution',
        description: 'One-stop service from consulting to buyer matching and exhibition participation',
      },
    ],
  },
}

export default function About({language}: AboutProps){
  const text = content[language]

  return(
    <section id = "about" className='py-20 bg-[--background-light]'>
      <div className='container mx-auto px-4'>
        {/*섹션 타이틀*/}
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once: true}}
          transition={{duration:0.6}}
          className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-[--primary-navy] mb-4'>
              {text.title}
            </h2>
            <p className="text-xl text-gray-700">
              {text.subtitle}
            </p>
          </motion.div>

          {/*카드그리드*/}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {text.cards.map((card,index)=>(
              <motion.div
                key={index}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:0.6,delay:index*0.1}}
                className='bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow'>

                  {/*아이콘*/}
                  <div className='w-16 h-16 bg-gradient-to-br from-[--primary-navy] to-blue-600 rounded-xl flex items-center justify-center mb-6'>

                    <card.icon className='text-white' size={32}/>
                    </div>
                  
                  {/*제목*/}
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>
                    {card.title}
                  </h3>

                  {/*설명*/}
                  <p className="text-gray-800 leading-relaxed">
                    {card.description}
                  </p>

                </motion.div>
            ))}
          </div>
      </div>
    </section>
  )
}