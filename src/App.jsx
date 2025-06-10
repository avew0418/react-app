import { useState } from "react"; // React 的 Hook，用來宣告狀態
import reactLogo from "./assets/react.svg"; // React 標誌圖片
import viteLogo from "/vite.svg"; // Vite 標誌圖片（根目錄路徑）
import "./App.css"; // 匯入 CSS 樣式
import MySlider from "./component/rgb-panel/MySlider"; // 自訂 Slider 元件
import MyPanel from "./component/rgb-panel/MyPanel"; // 自訂 RGB 色彩面板元件
import MyCalculator from "./component/calculator/MyCalculator"; // 自訂計算機元件
import TicTacToe from "./component/tic-tac-toe/TicTacToe"; // 自訂井字遊戲元件

function App() {
  // 宣告一個狀態變數 count，初始值為 0，setCount 用來更新 count
  const [count, setCount] = useState(0);

  // App 元件的回傳內容（JSX）
  return (
    <>
      {/* Logo 區塊，點擊可連到官方網站 */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* 標題 */}
      <h1>5b1g0001吳翎瑋</h1>
      {/* 第一個元件：三個 Slider 控制 R/G/B */}
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
      <br />
      {/* 第二個元件：RGB 色彩面板 */}
      <h2>第二個元件：RGB色彩面板</h2>
      <MyPanel /> {/* 顯示目前 RGB 顏色 */}
      {/* 第三個元件：計算機 */}
      <h2>第三個元件:計算機</h2>
      <MyCalculator /> {/* 計算機功能 */}
      {/* 第四個元件：井字遊戲（目前註解掉，未顯示） */}
      <h2>第四個元件:井字遊戲</h2>
      {/* <TicTacToe /> */}
      {/* 一個按鈕，點擊會讓 count +1 */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} {/* 顯示目前 count 數值 */}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR {/* 提示訊息 */}
        </p>
      </div>
      {/* 文件閱讀提示 */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App; // 匯出 App 元件，讓其他檔案可以使用
