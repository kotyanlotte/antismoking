# antismoking
喫煙を抑制するアプリです。  
吸ったタバコの本数を入力するとどのくらい健康を害するか数値化されます。  
レスポンシブ対応しているのでスマホからでも確認できます。  
https://antismoking.app/about
![image](https://user-images.githubusercontent.com/76690516/140735953-fcb6fc43-836c-4d61-b6f3-70be1dbcc344.png)

# 仕様技術
- PHP 7.4.21 
- Laravel 8.65.0
- MySQL 8.0.23
- Apache
- AWS
  - VPC
  - EC2
  - RDS
  - Route53
  - ELB
  - Certificate Manager
- React 17.0.2
- TypeScript 4.3.5
- TailwindCSS 2.2.7
- CircleCi CI/CD 

# AWS構成図
![Untitled Diagram drawio](https://user-images.githubusercontent.com/76690516/140856000-6fdfd288-0d8f-4b62-b9f0-ac8d54eb04bd.png)

## CircleCi CI/CD
- mainブランチへpushすると、EC2への自動デプロイが実行されます。

# 機能一覧
- アカウント登録機能
- アカウント削除機能
- ログイン機能
- ログアウト機能
- ゲストログイン機能
- パスワードリセット機能
- アカウント情報編集機能
  - メールアドレス編集
  - ユーザー名編集
- 吸ったタバコの本数を管理する機能
- 減少した健康値の確認機能
- 減少した寿命の確認機能
- タバコの知識を得られる機能
