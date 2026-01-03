'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'

interface ContactProps {
  language: 'ko' | 'jp' | 'en'
}

const content = {
  ko: {
    title: '문의하기',
    subtitle: '프로젝트에 대해 상담하고 싶으신가요? 언제든 연락주세요!',
    form: {
      name: '이름',
      email: '이메일',
      company: '회사명',
      type: '문의 유형',
      message: '메시지',
      submit: '문의 보내기',
      namePlaceholder: '홍길동',
      emailPlaceholder: 'your@email.com',
      companyPlaceholder: '회사명을 입력해주세요',
      messagePlaceholder: '프로젝트에 대해 자세히 알려주세요...',
    },
    types: [
      { value: 'consulting', label: '컨설팅 문의' },
      { value: 'japan-entry', label: '일본 진출 문의' },
      { value: 'education', label: '교육/강의 문의' },
      { value: 'partnership', label: '파트너십 문의' },
      { value: 'other', label: '기타 문의' },
    ],
    contactInfo: {
      title: '연락처 정보',
      email: '이메일',
      phone: '전화번호',
      address: '주소',
      socialTitle: '소셜 미디어',
    },
    success: '문의가 성공적으로 전송되었습니다!',
    error: '전송 중 오류가 발생했습니다. 다시 시도해주세요.',
  },
  jp: {
    title: 'お問い合わせ',
    subtitle: 'プロジェクトについて相談したいですか？いつでもご連絡ください！',
    form: {
      name: '名前',
      email: 'メール',
      company: '会社名',
      type: 'お問い合わせタイプ',
      message: 'メッセージ',
      submit: 'お問い合わせを送る',
      namePlaceholder: '山田太郎',
      emailPlaceholder: 'your@email.com',
      companyPlaceholder: '会社名を入力してください',
      messagePlaceholder: 'プロジェクトについて詳しく教えてください...',
    },
    types: [
      { value: 'consulting', label: 'コンサルティングのお問い合わせ' },
      { value: 'japan-entry', label: '日本進出のお問い合わせ' },
      { value: 'education', label: '教育・講義のお問い合わせ' },
      { value: 'partnership', label: 'パートナーシップのお問い合わせ' },
      { value: 'other', label: 'その他のお問い合わせ' },
    ],
    contactInfo: {
      title: '連絡先情報',
      email: 'メール',
      phone: '電話番号',
      address: '住所',
      socialTitle: 'ソーシャルメディア',
    },
    success: 'お問い合わせが正常に送信されました！',
    error: '送信中にエラーが発生しました。もう一度お試しください。',
  },
  en: {
    title: 'Contact Us',
    subtitle: 'Want to discuss your project? Feel free to reach out anytime!',
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      type: 'Inquiry Type',
      message: 'Message',
      submit: 'Send Inquiry',
      namePlaceholder: 'John Doe',
      emailPlaceholder: 'your@email.com',
      companyPlaceholder: 'Enter your company name',
      messagePlaceholder: 'Tell us more about your project...',
    },
    types: [
      { value: 'consulting', label: 'Consulting Inquiry' },
      { value: 'japan-entry', label: 'Japan Market Entry' },
      { value: 'education', label: 'Education & Training' },
      { value: 'partnership', label: 'Partnership Inquiry' },
      { value: 'other', label: 'Other Inquiry' },
    ],
    contactInfo: {
      title: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      socialTitle: 'Social Media',
    },
    success: 'Your inquiry has been sent successfully!',
    error: 'An error occurred. Please try again.',
  },
}

export default function Contact({ language }: ContactProps) {
  const text = content[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 이메일 제목
    const subject = `[INTERVOGUE 문의] ${formData.type || '일반 문의'}`

    // 이메일 본문
    const body = `
  안녕하세요, INTERVOGUE 담당자님께

  다음과 같이 문의드립니다.

  ━━━━━━━━━━━━━━━━━━━━━
  📋 문의 정보
  ━━━━━━━━━━━━━━━━━━━━━

  이름: ${formData.name}
  이메일: ${formData.email}
  회사명: ${formData.company || '미입력'}
  문의 유형: ${formData.type}

  ━━━━━━━━━━━━━━━━━━━━━
  💬 문의 내용
  ━━━━━━━━━━━━━━━━━━━━━

  ${formData.message}

  ━━━━━━━━━━━━━━━━━━━━━
  `.trim()

    // mailto 링크 생성
    const mailtoLink = `mailto:intervog@chol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // 이메일 앱 열기
    window.location.href = mailtoLink

    // ✅ 성공 메시지가 아니라 안내 메시지!
    // 폼 초기화도 하지 않음 (사용자가 이메일 앱에서 취소할 수도 있으니까)
    // 아무것도 안 해요!
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
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
          <p className="text-xl text-gray-600">
            {text.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          <form onSubmit={handleSubmit} className="space-y-6">
    {/* 이름 */}
    <div>
      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
        {text.form.name}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder={text.form.namePlaceholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black font-medium placeholder:text-gray-600"
      />
    </div>

    {/* 이메일 */}
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
        {text.form.email}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder={text.form.emailPlaceholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black font-medium placeholder:text-gray-600"
      />
    </div>

    {/* 회사명 */}
    <div>
      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
        {text.form.company}
      </label>
      <input
        type="text"
        id="company"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder={text.form.companyPlaceholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black font-medium placeholder:text-gray-600"
      />
    </div>

    {/* 문의 유형 */}
    <div>
      <label htmlFor="type" className="block text-sm font-semibold text-gray-700 mb-2">
        {text.form.type}
      </label>
      <select
        id="type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white text-black font-medium"
      >
        <option value="" className="text-gray-600">{text.form.type}</option>
        {text.types.map((type) => (
          <option key={type.value} value={type.value} className="text-black">
            {type.label}
          </option>
        ))}
      </select>
    </div>

    {/* 메시지 */}
    <div>
      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
        {text.form.message}
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        placeholder={text.form.messagePlaceholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-black font-medium placeholder:text-gray-600"
      />
    </div>

    {/* 제출 버튼 */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 group"
    >
      {text.form.submit}
      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {text.contactInfo.title}
              </h3>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {text.contactInfo.email}
                  </h4>
                  <a
                    href="mailto:intervog@chol.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    intervog@chol.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {text.contactInfo.phone}
                  </h4>
                  <p className="text-gray-600">+82-10-2267-9986</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {text.contactInfo.address}
                  </h4>
                  <p className="text-gray-600">Gyeonggi-do , Korea</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {text.contactInfo.socialTitle}
                  </h4>
                  <div className="flex gap-3">
                    {language === 'ko' && (
                      <a
                        href="#"
                        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                      >
                        KakaoTalk
                      </a>
                    )}
                    {language === 'jp' && (
                      <a
                        href="#"
                        className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                      >
                        LINE
                      </a>
                    )}
                    <a
                      href="https://www.facebook.com/intervog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8 text-center">
              <p className="text-gray-700 font-semibold text-lg">
                {language === 'ko' && '빠른 답변을 원하시면 KakaoTalk으로 연락주세요!'}
                {language === 'jp' && '迅速な返信をご希望の場合は、LINEでご連絡ください！'}
                {language === 'en' && 'For quick response, contact us via social media!'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}