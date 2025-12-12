# Firebase 설정 가이드

## 1. Firebase 프로젝트 생성

1. [Firebase Console](https://console.firebase.google.com/) 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력: `newway-mission`
4. Google Analytics 설정 (선택사항)

## 2. 웹 앱 추가

1. 프로젝트 대시보드에서 웹 아이콘 `</>` 클릭
2. 앱 닉네임 입력: `newway-mission-web`
3. Firebase SDK 설정 코드 복사

## 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```bash
# .env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 4. Firestore Database 설정

1. Firebase Console > 빌드 > Firestore Database
2. "데이터베이스 만들기" 클릭
3. 위치 선택: `asia-northeast3` (서울)
4. 프로덕션 모드로 시작
5. 규칙 탭에서 `firestore.rules` 내용 복사/붙여넣기

## 5. Storage 설정

1. Firebase Console > 빌드 > Storage
2. "시작하기" 클릭
3. 위치: `asia-northeast3` (서울)
4. 규칙 탭에서 `storage.rules` 내용 복사/붙여넣기

## 6. Authentication 설정

1. Firebase Console > 빌드 > Authentication
2. "시작하기" 클릭
3. 로그인 제공업체 > 익명 사용 설정

## 7. Firebase CLI 설정 (선택사항)

```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 로그인
firebase login

# 프로젝트 초기화
firebase init

# Firestore, Storage 선택
# 기존 프로젝트 선택
```

## 8. 배포 규칙 적용

```bash
# Firestore 규칙 배포
firebase deploy --only firestore:rules

# Storage 규칙 배포
firebase deploy --only storage:rules
```

## 보안 주의사항

- ⚠️ `.env` 파일은 **절대 Git에 커밋하지 마세요**
- ✅ `.env.example`만 커밋
- ✅ `.gitignore`에 `.env` 포함 확인
- ✅ GitHub Secrets에 환경 변수 등록 (GitHub Actions 배포 시)

## GitHub Actions 환경 변수 설정

1. GitHub 저장소 > Settings > Secrets and variables > Actions
2. New repository secret 클릭
3. 다음 변수들 추가:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

