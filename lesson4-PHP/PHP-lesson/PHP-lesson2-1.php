<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP2-1</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="m-5">
<button onclick="history.back()">chapter4メニュー画面に戻る</button>


    <?php
    /*
      課題：
        - 以下のコメントに従いコードを記述してください！
            ※各設問の回答の最後には改行を入れましょう。
            <br>タグをHTMLとして出力することで改行ができます。
        - このファイルをWebブラウザで開き、問題が無ければ保存して、このファイルを提出してください。
        dockerのlesoon4-phpコンテナを起動　→　http://localhost:8000/　にアクセス　→　該当のリンクをクリック　→　結果を確認
    */
    /*  
        以下のような1900年から現在の年までのうるう年を判定するプログラムを作成してください。
        うるう年なら"◯◯◯◯年はうるう年です。"
        うるう年でないなら"◯◯◯◯年はうるう年ではありません。"
        と表示してください。
        判定は関数に記述し、関数を呼び出して結果表示すること

        うるう年の定義
        - 4で割り切れる年は、うるう年
        - 100で割り切れる年は、うるう年ではない
        - 400で割り切れる年は、うるう年
        現在の年はdate()関数を用いて取得します。

        表示例）

        1900年はうるう年ではありません。
        1901年はうるう年ではありません。
        1902年はうるう年ではありません。
        1903年はうるう年ではありません。
        1904年はうるう年です。
        1905年はうるう年ではありません。
        1906年はうるう年ではありません。
        1907年はうるう年ではありません。
        1908年はうるう年です。
        1909年はうるう年ではありません。
        1910年はうるう年ではありません。
        1911年はうるう年ではありません。
        1912年はうるう年です。
        1913年はうるう年ではありません。
        1914年はうるう年ではありません。
        1915年はうるう年ではありません。
        1916年はうるう年です。
        1917年はうるう年ではありません。
        1918年はうるう年ではありません。
        1919年はうるう年ではありません。
        1920年はうるう年です。
    */

    //この下に記述してください

    function leapYear($year) {
        if ($year % 400 == 0) {
            return true;
        } elseif ($year % 100 == 0) {
            return false;
        } elseif ($year % 4 == 0) {
            return true;
        } else {
            return false;
        }
    }


    $currentYear = date("year");

    for ($year = 1900; $year <= $currentYear; $year++) {
        if (isLeapYear($year)) {
            echo "{$year}年はうるう年です。";
            echo "<br>";
        } else {
            echo "{$year}年はうるう年ではありません。";
            echo "<br>";
        }
    }



?>
<div>
</body>
</html>