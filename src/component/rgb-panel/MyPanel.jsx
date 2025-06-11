import { useState } from "react"; // 匯入 React 的 useState Hook，用來宣告狀態
import MySlider from "./MySlider"; // 匯入自訂的滑桿元件

// MyPanel 元件：一個可以即時調整並顯示 RGB 顏色的面板
function MyPanel() {
  // 宣告三個 state，分別代表紅、綠、藍三色的數值，初始值都設為 128（中間值）
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  // 回傳 JSX 畫面
  return (
    <div
      style={{
        border: "2px solid #888",        // 外框顏色
        borderRadius: "16px",             // 圓角
        padding: "24px",                  // 內距
        maxWidth: "320px",                // 最大寬度
        margin: "32px auto",              // 垂直間距、水平置中
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)", // 陰影
        textAlign: "center"               // 內容置中
      }}
    >
      {/* 紅色滑桿區塊 */}
      <div style={{ marginBottom: "20px" }}>
        R: <MySlider value={r} onChange={setR} /> {/* 傳入目前 r 值與更新函式 */}
      </div>
      {/* 綠色滑桿區塊 */}   
      <div style={{ marginBottom: "20px" }}>
        G: <MySlider value={g} onChange={setG} /> {/* 傳入目前 g 值與更新函式 */}
      </div>
      {/* 藍色滑桿區塊 */}
      <div style={{ marginBottom: "20px" }}>
        B: <MySlider value={b} onChange={setB} /> {/* 傳入目前 b 值與更新函式 */}
      </div>
      {/* 顏色顯示區塊，背景色根據 r/g/b 動態變化 */}
      <div
        style={{
          width: "200px",                       // 色塊寬度
          height: "100px",                      // 色塊高度
          backgroundColor: `rgb(${r},${g},${b})`, // 動態設定背景色
          border: "2px solid #333",             // 色塊外框
          margin: "16px auto",                  // 垂直間距、水平置中
          borderRadius: "12px"                  // 色塊圓角
        }}
      />
      {/* 顯示目前 RGB 數值 */}
      <div>RGB({r}, {g}, {b})</div>
    </div>
  );
}

export default MyPanel; // 匯出 MyPanel 元件，讓其他檔案可以使用
