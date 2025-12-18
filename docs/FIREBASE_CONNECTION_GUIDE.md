# Firebase 프로젝트 연동 가이드

Firebase 프로젝트를 생성했으니 이제 앱과 연동하는 방법을 단계별로 안내합니다.

---

## 📋 연동 단계 요약

1. ✅ Firebase 프로젝트 생성 (완료)
2. 🔄 웹 앱 추가 및 설정 정보 가져오기
3. 🔄 환경 변수 파일 (.env) 생성
4. 🔄 Firestore Database 활성화
5. 🔄 Storage 활성화
6. 🔄 Authentication 활성화
7. 🔄 보안 규칙 설정
8. ✅ 앱 재시작 및 테스트

---

## 1️⃣ 웹 앱 추가 및 설정 정보 가져오기

### Firebase Console에서:

1. **프로젝트 대시보드** 접속
   - https://console.firebase.google.com/
   - 생성한 프로젝트 선택

2. **웹 앱 추가**
   - 프로젝트 개요 페이지에서 **웹 아이콘 `</>`** 클릭
   - 또는 왼쪽 메뉴에서 **프로젝트 설정** > **일반** 탭

3. **앱 등록**
   - "앱 추가" 섹션에서 **웹** 선택
   - 앱 닉네임: `newway-mission-web` (또는 원하는 이름)
   - "앱 등록" 클릭

4. **Firebase SDK 설정 정보 복사**
   - 아래와 같은 설정 정보가 표시됩니다:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef"
   };
   ```
   - 이 정보를 복사해두세요 (다음 단계에서 사용)

---

## 2️⃣ 환경 변수 파일 (.env) 생성

### 프로젝트 루트에 `.env` 파일 생성

프로젝트 루트 디렉토리 (`/Users/yjineey/dev/newway-mission/`)에 `.env` 파일을 생성하고 다음 내용을 입력하세요:

```bash
# Firebase 설정
VITE_FIREBASE_API_KEY=여기에_apiKey_값_입력
VITE_FIREBASE_AUTH_DOMAIN=여기에_authDomain_값_입력
VITE_FIREBASE_PROJECT_ID=여기에_projectId_값_입력
VITE_FIREBASE_STORAGE_BUCKET=여기에_storageBucket_값_입력
VITE_FIREBASE_MESSAGING_SENDER_ID=여기에_messagingSenderId_값_입력
VITE_FIREBASE_APP_ID=여기에_appId_값_입력
```

### 예시:

```bash
VITE_FIREBASE_API_KEY=AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz
VITE_FIREBASE_AUTH_DOMAIN=newway-mission.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=newway-mission
VITE_FIREBASE_STORAGE_BUCKET=newway-mission.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

**⚠️ 중요:**
- `.env` 파일은 절대 Git에 커밋하지 마세요
- `.gitignore`에 이미 포함되어 있는지 확인하세요

---

## 3️⃣ Firestore Database 활성화

1. **Firebase Console** > 왼쪽 메뉴에서 **빌드** > **Firestore Database** 클릭

2. **데이터베이스 만들기** 클릭

3. **보안 규칙 설정**
   - "프로덕션 모드로 시작" 선택 (나중에 규칙 수정 가능)

4. **위치 선택**
   - `asia-northeast3` (서울) 선택
   - "사용 설정" 클릭

5. **보안 규칙 설정** (선택사항)
   - **규칙** 탭 클릭
   - `firestore.rules` 파일 내용을 복사해서 붙여넣기
   - "게시" 클릭

---

## 4️⃣ Storage 활성화

1. **Firebase Console** > 왼쪽 메뉴에서 **빌드** > **Storage** 클릭

2. **시작하기** 클릭

3. **위치 선택**
   - Firestore와 동일한 위치 선택: `asia-northeast3` (서울)
   - "완료" 클릭

4. **보안 규칙 설정** (선택사항)
   - **규칙** 탭 클릭
   - `storage.rules` 파일 내용을 복사해서 붙여넣기
   - "게시" 클릭

---

## 5️⃣ Authentication 활성화

1. **Firebase Console** > 왼쪽 메뉴에서 **빌드** > **Authentication** 클릭

2. **시작하기** 클릭

3. **로그인 제공업체 설정**
   - **익명** 탭 클릭
   - "사용 설정" 토글 ON
   - "저장" 클릭

   (또는 이메일/비밀번호 등 원하는 로그인 방법 활성화)

---

## 6️⃣ 보안 규칙 설정 (선택사항)

### Firestore 규칙

1. **Firestore Database** > **규칙** 탭
2. 프로젝트의 `firestore.rules` 파일 내용 복사
3. 붙여넣기 후 **게시** 클릭

### Storage 규칙

1. **Storage** > **규칙** 탭
2. 프로젝트의 `storage.rules` 파일 내용 복사
3. 붙여넣기 후 **게시** 클릭

---

## 7️⃣ 앱 재시작 및 테스트

### 개발 서버 재시작

환경 변수 파일을 생성/수정했으므로 개발 서버를 재시작해야 합니다:

```bash
# 현재 실행 중인 서버 중지 (Ctrl + C)
# 그 다음 다시 시작
npm run dev
```

### 연결 확인

1. **브라우저 콘솔 확인**
   - 개발자 도구 (F12) > Console 탭
   - Firebase 경고 메시지가 없어야 함
   - `⚠️ Firebase 설정이 없습니다` 메시지가 사라져야 함

2. **데이터 저장 테스트**
   - 앱에서 글 작성 시도
   - Firebase Console > Firestore Database > 데이터 탭에서 확인
   - `posts` 컬렉션이 자동 생성되고 데이터가 저장되는지 확인

3. **파일 업로드 테스트**
   - 글 작성 시 파일 첨부
   - Firebase Console > Storage에서 파일 확인

---

## 🔍 문제 해결

### 환경 변수가 적용되지 않을 때

1. **개발 서버 재시작** 확인
2. **`.env` 파일 위치** 확인 (프로젝트 루트에 있어야 함)
3. **변수명 확인** (`VITE_` 접두사 필수)
4. **값에 따옴표 없이** 입력했는지 확인

### Firebase 연결 오류

1. **브라우저 콘솔**에서 에러 메시지 확인
2. **Firebase Console**에서 서비스 활성화 확인
3. **`.env` 파일**의 값이 올바른지 확인

### 인덱스 오류

- 쿼리 실행 시 인덱스 오류가 발생하면
- 에러 메시지의 링크를 클릭하여 인덱스 자동 생성

---

## ✅ 연동 완료 체크리스트

- [ ] Firebase 프로젝트 생성 완료
- [ ] 웹 앱 추가 및 설정 정보 복사
- [ ] `.env` 파일 생성 및 설정 값 입력
- [ ] Firestore Database 활성화
- [ ] Storage 활성화
- [ ] Authentication 활성화
- [ ] 보안 규칙 설정 (선택사항)
- [ ] 개발 서버 재시작
- [ ] 브라우저 콘솔에서 Firebase 경고 없음 확인
- [ ] 데이터 저장 테스트 성공
- [ ] Firebase Console에서 데이터 확인

---

## 📝 다음 단계

연동이 완료되면:

1. **카테고리 데이터 마이그레이션**
   - 브라우저 콘솔에서 실행:
   ```javascript
   await window.migrateCategoriesToFirestore()
   ```

2. **인덱스 생성**
   - 첫 쿼리 실행 시 에러 메시지의 링크로 인덱스 생성

3. **데이터 확인**
   - Firebase Console에서 데이터 확인
   - 앱에서 CRUD 기능 테스트

---

## 🆘 도움이 필요하신가요?

문제가 발생하면:
1. 브라우저 콘솔의 에러 메시지 확인
2. Firebase Console에서 서비스 상태 확인
3. `.env` 파일의 값 재확인

