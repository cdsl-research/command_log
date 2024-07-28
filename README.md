# command_log

コマンドのログをスプレッドシートに追加するプログラムです．

## bash_hook.sh
コマンドの送信を検知する部分です．

## code.gs
bash_hook.shから呼び出され，内容をスプレッドシートに入力する部分です．

## 使い方

1. code.gsをスプレッドシートのGASとして登録する
2. GASからアプリケーションをデプロイし，URLをコピー．
3. コピーしたURLをbash_hook.sh内に書き込み．
4. bash_hook.shを自動的に起動するように設定(.bashrcなど)．
5. 一度ログアウトし再ログイン．

## 実行結果の例
コマンドを送信するたびに書き込まれればOKです．
![スクリーンショット 2024-07-28 135030](https://github.com/user-attachments/assets/d24a7a55-d355-4323-b0c6-4bc9e7f3cd45)
