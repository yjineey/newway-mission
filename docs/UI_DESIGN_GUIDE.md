# UI 디자인 가이드

## 디자인 철학

**B2C 느낌의 세련되고 모던한 디자인**
- 촌스럽지 않게
- 깔끔하고 프로페셔널하게
- 사용자 경험 중심

---

## 아이콘 시스템

### 통일성 원칙
- **단일 아이콘 라이브러리 사용**: Lucide React 권장
- **일관된 스타일**: 같은 라인 두께, 사이즈, 스타일
- **이모지 사용 금지**: 벡터 아이콘만 사용

### 아이콘 사용 가이드
```
✅ 좋은 예:
- 같은 stroke width (1.5~2px)
- 통일된 크기 (16px, 20px, 24px)
- outline 또는 filled 중 하나로 통일
- 의미 전달이 명확한 곳에만 사용

❌ 나쁜 예:
- 이모지 (💬, 📝, 👍) 사용
- 여러 아이콘 라이브러리 혼용
- 장식용 과다 사용
- 일관성 없는 크기와 스타일
```

### 아이콘 적용 영역
- 카테고리 카드
- 네비게이션 (Footer)
- 댓글, 좋아요, 작성 등 액션 버튼
- 더보기 메뉴 (햄버거 아이콘)

---

## 색상 시스템

### 다크/라이트 모드 지원
```css
/* CSS Variables 예시 */
:root {
  /* Light Mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --border: #dee2e6;
  --accent: #your-brand-color;
}

[data-theme="dark"] {
  /* Dark Mode */
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #f8f9fa;
  --text-secondary: #adb5bd;
  --border: #495057;
  --accent: #your-brand-color;
}
```

### 색상 사용 원칙
- 원색 과다 사용 금지
- 형광색 금지
- 적절한 대비(Contrast) 유지
- 브랜드 컬러를 포인트로 사용

---

## 타이포그래피

### 폰트
- **한글**: Pretendard, Noto Sans KR, Apple SD Gothic Neo
- **영문/숫자**: Inter, SF Pro Display, Roboto
- 투박한 폰트 지양

### 폰트 크기 체계
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

### 폰트 웨이트
- 제목: 600-700 (Semibold-Bold)
- 본문: 400 (Regular)
- 강조: 500-600 (Medium-Semibold)
- 보조: 400 (Regular)

---

## 레이아웃

### 여백 (Spacing)
```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
```

### 원칙
- **여백을 아끼지 말 것**: 답답하지 않게
- **일관된 간격 사용**: 위 spacing 시스템 활용
- **시각적 위계 명확하게**

---

## 컴포넌트 스타일

### 카드
```css
.card {
  border-radius: 12px;          /* 부드러운 모서리 */
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);  /* 은은한 그림자 */
  padding: 1.5rem;
  background: var(--bg-primary);
}
```

### 버튼
```css
.button {
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);   /* 미묘한 상승 효과 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}
```

### 인풋
```css
.input {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  transition: border-color 0.2s ease;
}

.input:focus {
  border-color: var(--accent);
  outline: none;
  box-shadow: 0 0 0 3px rgba(accent, 0.1);
}
```

---

## 애니메이션

### 원칙
- **부드럽고 자연스럽게**
- **빠르고 반응적으로** (200-300ms)
- **과하지 않게**

### 예시
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 사용 */
.element {
  animation: fadeIn 0.3s ease;
}
```

---

## 댓글 시스템

### 디자인
```
┌──────────────────────────────────┐
│ [▼] 댓글 3개                      │ ← 접힌 상태
└──────────────────────────────────┘

클릭 시 펼쳐짐 ↓

┌──────────────────────────────────┐
│ [▲] 댓글 3개                      │ ← 펼쳐진 상태
├──────────────────────────────────┤
│ 홍길동 · 2시간 전                 │
│ 댓글 내용입니다...                │
├──────────────────────────────────┤
│ 김철수 · 5시간 전                 │
│ 댓글 내용입니다...                │
├──────────────────────────────────┤
│ [댓글 작성하기...]                │
└──────────────────────────────────┘
```

### 상태
- **기본**: 접혀있음 (collapsed)
- **호버**: 은은한 배경색 변화
- **클릭**: 부드러운 펼쳐짐 애니메이션 (slide down)

---

## 더보기 메뉴

### 위치
- Header 우측 상단
- 아이콘: 햄버거 (≡) 또는 더보기 (⋯)

### 메뉴 스타일
```
┌────────────────────┐
│ 교회 소개           │  ← 클릭 시 페이지/모달
├────────────────────┤
│ 🌙 다크모드  [⚪️]  │  ← 토글 스위치
└────────────────────┘
```

### 애니메이션
- 우측에서 슬라이드 인 (slide in from right)
- 배경 오버레이: 반투명 (rgba(0,0,0,0.5))
- 닫기: 배경 클릭 또는 X 버튼

---

## 반응형 디자인

### Mobile-First 원칙
- 모바일 디자인을 먼저 설계
- 데스크톱은 확장된 형태

### 브레이크포인트
```css
/* Mobile: 기본 */
/* Tablet: 768px 이상 */
@media (min-width: 768px) { ... }

/* Desktop: 1024px 이상 */
@media (min-width: 1024px) { ... }
```

### 네비게이션
- **모바일**: 하단 고정 네비게이션 (Footer)
- **데스크톱**: 하단 네비게이션 또는 사이드바 (선택)

---

## 피해야 할 것들 (안티패턴)

### ❌ 촌스러운 디자인 요소
- 이모지 아이콘 (💬, 📝, 👍)
- 테두리 과다 사용
- 투박한 그라디언트
- 원색/형광색 과다
- 낡은 아이콘 스타일
- 여백이 부족한 레이아웃
- 일관성 없는 폰트/색상

### ✅ 추구해야 할 것들
- 깨끗한 벡터 아이콘
- 미니멀한 디자인
- 은은한 그림자
- 적절한 여백
- 부드러운 애니메이션
- 일관된 디자인 시스템
- 직관적인 UX

---

## 참고 레퍼런스

### 벤치마킹할 서비스
- **Notion**: 깔끔한 UI, 타이포그래피
- **Slack**: 심플한 메시징 UI
- **Airbnb**: 카드 디자인, 여백 활용
- **당근마켓**: 모바일 친화적 디자인
- **Linear**: 모던한 애니메이션

### 디자인 시스템
- Material Design 3
- Apple Human Interface Guidelines
- Ant Design
- Chakra UI

---

## 체크리스트

개발 시 아래 항목을 확인하세요:

- [ ] 아이콘은 Lucide React 등 통일된 라이브러리 사용
- [ ] 이모지 아이콘 사용하지 않음
- [ ] 다크/라이트 모드 지원
- [ ] 모바일 우선 반응형 디자인
- [ ] 적절한 여백과 간격
- [ ] 부드러운 border-radius
- [ ] 은은한 그림자 효과
- [ ] 일관된 색상 시스템
- [ ] 자연스러운 애니메이션
- [ ] 깔끔한 타이포그래피

