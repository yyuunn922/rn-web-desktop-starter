# 소개
React프로젝트가 있다면, Wails를 이용해, 빠르게 데스크탑 프로젝트로 전환할수있다, 간단하지만 기억을 위해 생성됨

# 사용법
```
// Golang // Wails가 필요합니다
brew install go
go install github.com/wailsapp/wails/v2/cmd/wails@latest

git clone https://github.com/yyuunn922/rn-web-desktop-starter your-project
rm -rf frontend
git clone https://github.com/yourFrontendProject frontend
```
```
// frontend의 package.json 스크립트를 wails.json의 스크립트 내용에 맞춰 수정 
"frontend:install": "npm install",
"frontend:build": "npm run web:build",
"frontend:dev:watcher": "npm run web",
"frontend:dev:serverUrl": "http://localhost:8080",

// 예시 프로젝트에 맞춰서 작성됨
```

React 프로젝트를 서브모듈로 작업하면 편함,

React 프로젝트 작업후 -> 서브모듈 업데이트 -> 인스톨러 생성 
