// 季節の日付設定
const m = new Date(); //今日の日時を取得
const this_year = m.getFullYear(); //今年の年号（西暦）を取得
let n;
let x;

// 春 啓蟄
n = Date.parse(this_year + '/' + '3/6');
// 3月6日のミリ秒を取得
x = (m - n) / 1000 / 60 / 60 / 24;
// 今日のミリ秒から3月6日のミリ秒を引いてミリ秒を１日単位に変換
// xが0より大きければ過去の日付、0より小さければ未来の日付
const spr1 = Math.floor(x); 
// xを整数化して変数に代入

n = Date.parse(this_year + '/' + '5/1');
x = (m - n) / 1000 / 60 / 60 / 24;
const spr2 = Math.floor(x);

// 夏 八十八夜
n = Date.parse(this_year + '/' + '5/2');
x = (m - n) / 1000 / 60 / 60 / 24;
const sum1 = Math.floor(x);

n = Date.parse(this_year + '/' + '9/19');
x = (m - n) / 1000 / 60 / 60 / 24;
const sum2 = Math.floor(x);

// 秋 彼岸の入り
n = Date.parse(this_year + '/' + '9/20');
x = (m - n) / 1000 / 60 / 60 / 24;
const aut1 = Math.floor(x);

n = Date.parse(this_year + '/' + '11/6');
x = (m - n) / 1000 / 60 / 60 / 24;
const aut2 = Math.floor(x);

// 冬 
n = Date.parse(this_year + '/' + '11/7');
x = (m - n) / 1000 / 60 / 60 / 24;
const win1 = Math.floor(x);

n = Date.parse(this_year + '/' + '12/31');
x = (m - n) / 1000 / 60 / 60 / 24;
const win2 = Math.floor(x);

// 冬 （年またぎ）
n = Date.parse(this_year + '/' + '1/1');
x = (m - n) / 1000 / 60 / 60 / 24;
const win3 = Math.floor(x);

n = Date.parse(this_year + '/' + '3/5');
x = (m - n) / 1000 / 60 / 60 / 24;
const win4 = Math.floor(x);

// 季節ごとの処理
if ((spr1 >= 0) && (spr2 <= 0)){
	// 春の表示内容
	document.querySelector('body').classList.add('spring');

} else if ((sum1 >= 0) && (sum2 <= 0)){
	// 夏の表示内容
	document.querySelector('body').classList.add('summer');
  
} else if ((aut1 >= 0) && (aut2 <= 0)){
	// 秋の表示内容
	document.querySelector('body').classList.add('autumn');
  
} else if ((win1 >= 0) && (win2 <= 0)){
	// 冬の表示内容
	document.querySelector('body').classList.add('winter')
  
} else if ((win3 >= 0) && (win4 <= 0)){
	// 冬の表示内容
	document.querySelector('body').classList.add('winter');
}