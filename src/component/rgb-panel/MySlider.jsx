import { useState } from "react"; // 匯入 useState Hook，讓元件可以有自己的狀態
import "./MySlider.css"; // 匯入滑桿的 CSS 樣式

// MySlider 元件：可作為受控或非受控滑桿
function MySlider({ value, onChange }) {
  // 宣告一個內部狀態 internalValue，預設值 128
  const [internalValue, setInternalValue] = useState(128);

  // 判斷是否為受控元件（有傳入 value 和 onChange）
  const isControlled = value !== undefined && onChange !== undefined;

  // 根據受控或非受控決定顯示的數值
  const displayValue = isControlled ? value : internalValue;

  // 處理滑桿變動事件
  const handleChange = (e) => {
    const newValue = Number(e.target.value); // 取得新的數值
    if (isControlled) {
      onChange(newValue); // 受控元件：呼叫父元件傳進來的 onChange
    } else {
      setInternalValue(newValue); // 非受控元件：自己改自己的 state
    }
  };

  // 回傳滑桿與數值顯示
  return (
    <>
      <input
        type="range"        // 滑桿類型
        min="0"             // 最小值
        max="255"           // 最大值
        value={displayValue} // 目前顯示的數值
        onChange={handleChange} // 當滑桿變動時呼叫 handleChange
      />
      <span>{displayValue}</span> {/* 直接顯示目前數值 */}
    </>
  );
}

export default MySlider; // 匯出 MySlider 元件，讓其他檔案可以使用
