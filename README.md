# 2025-react-app 專案介紹

本專案是一個以 React 19 + Vite 為基礎的前端練習專案，包含多個自訂元件，並已設定可部署於 GitHub Pages。以下將詳細說明專案結構、主要功能與各段程式碼的用途。

---

## 目錄結構

```
react-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── assets/
│   │   ├── react.svg
│   ├── component/
│   │   ├── rgb-panel/
│   │   │   ├── MySlider.jsx
│   │   │   └── MyPanel.jsx
│   │   ├── calculator/
│   │   │   └── MyCalculator.jsx
│   │   └── tic-tac-toe/
│   │       └── TicTacToe.jsx
├── package.json
├── vite.config.js
└── ...
```

---

## 主要功能與元件說明

### 1. Logo 與標題區塊

```jsx
<div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>5b1g0001吳翎瑋</h1>
```
- **用途**：顯示 Vite 與 React 官方 Logo，點擊可連到官方網站。下方顯示學生姓名。

---

### 2. RGB 色彩控制元件

```jsx
<h2>我的第一個元件：Slider</h2>
<div>
  <p>
    R:
    <MySlider /> {/* 紅色滑桿 */}
  </p>
  <p>
    G:
    <MySlider /> {/* 綠色滑桿 */}
  </p>
  <p>
    B:
    <MySlider /> {/* 藍色滑桿 */}
  </p>
</div>
```
- **用途**：三個自訂 `<MySlider />` 元件，分別控制紅、綠、藍三色的數值。
- **說明**：每個滑桿元件應該有對應的狀態管理（通常在父元件或 context），用來調整 RGB 色彩。

---

### 3. RGB 色彩面板

```jsx
<h2>第二個元件：RGB色彩面板</h2>
<MyPanel /> {/* 顯示目前 RGB 顏色 */}
```
- **用途**：顯示由三個滑桿控制的 RGB 顏色組合，讓使用者即時看到顏色變化。
- **說明**：`<MyPanel />` 會接收 RGB 數值並以色塊方式呈現。

---

### 4. 計算機元件

```jsx
<h2>第三個元件:計算機</h2>
<MyCalculator /> {/* 計算機功能 */}
```
- **用途**：自訂計算機元件，提供基本運算功能。
- **說明**：`<MyCalculator />` 內部應有數字輸入、運算符號與結果顯示。

---

### 5. 井字遊戲元件（註解中）

```jsx
<h2>第四個元件:井字遊戲</h2>
{/* <TicTacToe /> */}
```
- **用途**：預留井字遊戲元件，尚未啟用。
- **說明**：如需顯示，將註解移除即可。

---

### 6. 計數器按鈕

```jsx
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count} {/* 顯示目前 count 數值 */}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR {/* 提示訊息 */}
  </p>
</div>
```
- **用途**：簡單的計數器，點擊按鈕會讓 count 數值加一。
- **說明**：練習 React 的 useState 狀態管理。

---

### 7. 文件閱讀提示

```jsx
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
```
- **用途**：提示使用者可點擊 Logo 了解更多資訊。

---

## 重要設定檔

### package.json

```json
{
  "homepage": "https://avew0418.github.io/react-app",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "deploy": "gh-pages -d dist"
  },
  ...
}
```
- **homepage**：設定 GitHub Pages 部署路徑，確保資源路徑正確。
- **scripts**：包含本地開發、打包與部署指令。

### vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  base: '/react-app/', // 必須與 GitHub repo 名稱一致
});
```
- **base**：設定靜態資源的根路徑，部署到 GitHub Pages 時必須正確設定。

---

## 部署說明

1. **本地開發**：`npm run dev`
2. **打包**：`npm run build`
3. **部署到 GitHub Pages**：`npm run deploy`

---

## 小結

本專案結合了 React 基礎元件設計、狀態管理、Vite 打包與 GitHub Pages 部署，適合初學者練習與展示。每個元件都以模組化方式設計，方便維護與擴充。  
如需擴充功能，只需在 `component` 目錄下新增元件並在 `App.jsx` 引入即可。

---