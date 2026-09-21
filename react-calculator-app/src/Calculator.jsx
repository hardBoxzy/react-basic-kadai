import React from 'react';// ボタンの配置を表す配列（記述順に表示）
import styles from './Calculator.module.css'; 

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', 'C', '=', '+'
];

// 「整数 演算子 整数」の形式のみ許可
const validExpression = /^(\d+)([+\-*/])(\d+)$/;

const calculate = (expression) => {
  // 有効な式であるかチェック
    const match = expression.match(validExpression);
    if (!match) {
      return "エラー";
    }else {
      const num1 = Number(match[1]);
      const operator = match[2];
      const num2 = Number(match[3]);
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 === 0 ? "エラー" : num1 / num2;
      default:
        return "エラー";
  }

    }

};


export function Calculator({ display, setDisplay }) {

    // 進捗率を10％進める関数
  const handleClick = (btn) => {
    if (btn === 'C') {
      setDisplay(' ');
    } else if (btn === '=') {
      const result = calculate(display);
      setDisplay(result);
    } else {
      setDisplay(display === '0' || display === 'エラー' ? btn : display + btn);
    }
  };
 return (
    <main className={styles.calculatorContainer}>
        <h2>電卓アプリ</h2>
        <input className={styles.display} type="text" value={display} readOnly />
        <div className={styles.buttonGrid}>
         {buttons.map((btn, index) => (
           <button className={styles.button} key={index} onClick={() => handleClick(btn)}>
             {btn}
           </button>
         ))}
        </div>
    </main>
  );
}