Sample App
==== 
# 概要

Next.js Typescript Tailwind を使ったサンプルアプリケーション

## ディレクトリ構成

src/
├── components              ... アプリケーション全体で使うコンポーネント
│   ├── elements
│   │   └── Button.tsx
│   └── layouts
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Layout.tsx
│       └── Sidebar.tsx
├── features                ... ある特定の機能やページでしか使わないapiやコンポーネントなど
│   ├── common              ... 共通で使うコンポーネント以外(featuresではないかも)
│   │   ├── const.ts
│   │   └── libs
│   │       └── apollo.ts
│   └── sample              ... 特定の機能やページ
│       ├── api
│       │   └── getPosts.ts
│       └── components
│           ├── PostItem.tsx
│           └── PostsList.tsx
├── pages
│   ├── _app.tsx            ... 
│   ├── _document.tsx       ... 
│   ├── index.tsx           ... トップページ
│   └── sample.tsx          ... 各ページ
└── styles
    └── globals.css


## コーディング規約


## インストール

```
$ git clone https://github.com/~
$ cd react-app-typescript
$ cp .env.example .env.local
$ npm install
$ npm run dev
[http://localhost:3000](http://localhost:3000)
```