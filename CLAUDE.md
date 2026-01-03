# INTERVOGUE International DX 웹사이트 프로젝트

## 프로젝트 개요
한일 패션 DX 컨설팅 회사 INTERVOGUE의 공식 웹사이트 개발

## 클라이언트 정보
- **회사명**: INTERVOGUE International DX
- **대표**: 김강화 (30년 패션 업계 경력)
- **핵심 차별점**: AI 앙상블 방법론 + 30년 패션 경험 + 네이티브 일본어
- **슬로건**: "한국에서 일본으로, 전략에서 실행까지"
- **주요 서비스**: 브랜드 SWOT 분석, 사업계획서, 전시회 바이어 매칭, 컨설팅 강의

## 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (motion/react)
- **Icons**: Lucide React

## 디자인 시스템
### 색상
- Primary Navy: `#1a365d`
- Accent Red: `#c53030`
- Background Light: `#f8fafc`
- Text Gray: `#374151`

### 폰트
- 한글: Pretendard 또는 Noto Sans KR
- 영문/일본어: Inter

## 섹션 구성 (11개 컴포넌트)
1. **Navigation** - 고정 헤더, 다국어 드롭다운 (KO/JP/EN)
2. **Hero** - 풀스크린, 통계 카운터
3. **About** - 4개 핵심 강점 카드
4. **Services** - 6개 서비스 그리드
5. **Portfolio** - 프로젝트 카드 + 파트너사 로고
6. **Insights** - 블로그/기사 카드
7. **Contact** - 문의 폼 + 연락처 정보
8. **Footer** - 링크, SNS, 저작권
9. **FloatingActions** - LINE, 이메일 버튼 (우하단)
10. **ChatbotWidget** - FAQ 챗봇 (좌하단)
11. **App.tsx** - 메인 레이아웃

## 다국어 지원
- 모든 텍스트는 `content` 객체로 관리
- `language: 'ko' | 'jp' | 'en'` prop으로 전달
- 시장별 연락 방법: 한국=KakaoTalk, 일본=LINE

## 현재 작업 상태
- [x] 버전 1: 내용 구성 완료
- [x] 버전 2: 깔끔한 디자인 완료
- [ ] 두 버전 합치기 (버전1 내용 + 버전2 디자인)
- [ ] Next.js 프로젝트 구조 세팅
- [ ] 실제 콘텐츠 교체 (더미 데이터 → 실제 정보)

## 실제 콘텐츠 교체 필요 항목
1. **Portfolio**: 더미 브랜드 A, B, C → 실제 또는 익명화된 고객사
2. **Footer**: 파트너사 로고
3. **Contact**: 대표님 실제 연락처
4. **Insights**: 실제 기고글/블로그 링크

## 코딩 규칙
- 컴포넌트는 함수형 + TypeScript
- Props는 interface로 정의
- 'use client' 지시문 필요한 컴포넌트에 추가
- Tailwind 클래스 사용, 인라인 스타일 최소화
- framer-motion은 `motion/react`에서 import

## 프로젝트 구조 (목표)
```
intervogue-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Insights.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingActions.tsx
│   └── ChatbotWidget.tsx
├── public/
│   └── images/
├── CLAUDE.md (이 파일)
└── package.json
```

## 참고 사항
- 학습자: SSAFY 교육생, 웹개발 초보 → 친절한 설명 필요
- 메인 팀 프로젝트는 Vue, 이건 React/Next.js 학습용 사이드 프로젝트
- 실제 클라이언트 프로젝트이므로 프로페셔널한 결과물 필요


CLAUDE.md 파일에 노션 연동 섹션 추가해줘. 내용은:

## Notion CMS 연동 (추가 기능)

### 목적
클라이언트(김강화 대표님)가 코드 수정 없이 노션에서 직접 콘텐츠 관리

### 연동할 콘텐츠
1. **Portfolio** - 프로젝트 목록 (제목, 카테고리, 설명, 이미지, 성과)
2. **Insights** - 블로그/기사 (제목, 카테고리, 날짜, 링크)
3. **Contact** - 연락처 정보 (이메일, 전화, 주소)

### 기술 구현
- Notion API (@notionhq/client)
- ISR (Incremental Static Regeneration) - 주기적 갱신
- 환경변수: NOTION_API_KEY, NOTION_DATABASE_ID

### 노션 데이터베이스 구조
Portfolio DB:
- Title (제목)
- Category (선택: 럭셔리/캐주얼/영캐주얼)
- Description (설명)
- Result (성과)
- Image (이미지 URL)
- Language (ko/jp/en)

Insights DB:
- Title (제목)
- Category (선택: 시장동향/성공전략/AI분석)
- Date (날짜)
- ReadTime (읽기 시간)
- Link (외부 링크)
- Language (ko/jp/en)
