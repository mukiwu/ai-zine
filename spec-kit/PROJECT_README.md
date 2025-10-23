# Spec-Driven Development Zine

一個以 zine 風格呈現 GitHub Spec Kit 與 BMAD-Method 比較的互動式網站。

## 專案概述

這個專案使用 Astro + Tailwind CSS 創建了一個具有手作出版質感的數位 zine，探討兩個規格驅動開發框架的特點、差異與應用場景。

## 設計特色

根據 `zine-web-design-guide.md` 的設計原則：

### 1. Zine 設計原則實作

- **自主出版精神**：非完美的排版、允許錯位與非線性導覽
- **節奏而非速度**：使用 CSS Scroll Snap 創造翻頁般的閱讀體驗
- **不完美的秩序**：利用 collage-rotate 類別創造微妙的旋轉效果
- **文本為核心**：所有視覺設計服務於內容呈現

### 2. 版面結構模組

- **Scroll Zine 模組**：整個網站採用全螢幕滾動的頁面結構，每次滑動呈現完整一頁
- **Page Spread 模組**：雙欄布局呈現對比內容（如第 2、6 頁）
- **Collage Flow 模組**：第 5 頁使用絕對定位創造拼貼風格的視覺層次

### 3. 技術實作

- **字體節奏**：使用 `clamp()` 響應式字級、精心調整的 letter-spacing 與 line-height
- **紙張質感**：paper-texture 類別使用 CSS 網格創造紙張質感
- **色彩系統**：stone、blue、amber 色系營造印刷品的溫暖感

## 內容結構

網站包含 10 個頁面，按順序呈現：

1. **封面頁**：標題與副標題
2. **反對 Vibe Coding**：問題陳述與兩個解決方案介紹
3. **GitHub Spec Kit 介紹**：核心理念與關鍵特性
4. **BMAD-Method 介紹**：框架說明與代理角色
5. **共同點**：拼貼風格呈現四個核心相似之處
6. **關鍵差異**：雙欄對比兩個框架的本質差異
7. **取捨分析**：各自的優勢比較
8. **實際建議**：選擇指南
9. **實作範例**：具體使用案例
10. **結語**：回顧與核心訊息

## 技術堆疊

- **框架**：Astro 5.14.8
- **樣式**：Tailwind CSS 4.x
- **字體**：Georgia / Times New Roman (serif)
- **動畫**：CSS Scroll Snap + Transform

## 啟動專案

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 建置生產版本
npm run build

# 預覽生產版本
npm run preview
```

開發服務器預設運行於：http://localhost:4321/

## 設計決策

### 為何選擇 Scroll Zine 而非傳統導航？

Scroll Zine 模組最能重現翻閱實體 zine 的體驗，每次滑動就像翻頁，讓讀者沉浸在線性敘事中。這符合 zine 的「節奏而非速度」原則。

### 為何使用 Tailwind 而非手寫 CSS？

雖然 zine 強調手作感，但 Tailwind 的 utility-first 方法讓我們能快速實驗破版與非標準排版，同時保持程式碼的可維護性。

### 配色選擇

- **Stone 系列**：主色調，營造紙張與印刷品的中性溫暖感
- **Blue**：代表 GitHub Spec Kit，科技感與清晰度
- **Amber**：代表 BMAD-Method，溫暖與全面性

## 未來擴展

可考慮加入的功能：

- [ ] Framer Motion 動畫增強過場效果
- [ ] Pop Note 互動註解提供額外資訊
- [ ] 使用者筆記功能（LocalStorage）
- [ ] 響應式設計優化（目前主要針對桌面）
- [ ] 暗色模式變體

## 授權

本專案遵循開源精神，內容取自公開的技術文章比較。

---

設計參考：`zine-web-design-guide.md`
