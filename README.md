# 타자게임
- 영어 단어를 타자로 치며 공부하는 게임

## 1. 목표와 기능
### 1.1 목표
- 혼자서도 단어 테스트를 볼 수 있도록 만든 게임

### 1.2 기능
- 게임 시작 버튼을 누르면 남은 시간 카운팅
- 단어 맞출 때마다 점수 카운팅)
- 게임 시작 중일 땐 버튼 비활성화
- 시간이 0초가 되면 다시 게임시작 버튼 활성화 & 점수 초기화

## 2. 개발 환경 및 결과물
### 2.1 개발 환경
- Vue JS

### 2.2 결과물
![타이핑 게임](https://user-images.githubusercontent.com/85085844/137415023-a8083f29-4ec8-4021-a84a-ccce2ef7dc9e.gif)

## 3. 프로젝트 구조
```bash
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── CountTime.vue
    │   ├── TypingFooter.vue
    │   ├── TypingHeader.vue
    │   └── TypingText.vue
    ├── main.js
    └── store
        └── store.js
```
