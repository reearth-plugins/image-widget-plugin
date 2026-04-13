# Image Widget Plugin

Re:Earth Visualizer上に画像をオーバーレイ表示できるウィジェットプラグインです。
ロゴやアイコンを地図の上に重ねて表示したり、クリックでリンクに飛ばすこともできます。

---

## スクリーンショット

<img width="400" alt="スクリーンショット 2026-04-13 18 05 19" src="https://github.com/user-attachments/assets/6a41448b-1282-4531-8945-62fcfd393c3e" />


---

## インストール

### A. GitHub URLから（かんたん）

1. Re:Earth Visualizer → プラグイン →「Public GitHub repository」
2. 以下のURLを入力してインストール

```
https://github.com/reearth-plugins/image-widget-plugin
```

### B. ZIPファイルから

1. [Releases](https://github.com/reearth-plugins/image-widget-plugin/releases) から最新の `image-widget-plugin.zip` をダウンロード
2. Re:Earth Visualizer → プラグイン →「Upload Zip file from PC」でアップロード

---

## 使い方

追加後、右パネルのInspectorから以下の項目を設定できます。

| 項目        | 説明                                                                                    |
| ----------- | --------------------------------------------------------------------------------------- |
| Image URL   | 表示する画像のURL。アップロードボタンからAssetを選ぶこともできます（SVG・PNG・JPG対応） |
| Width (px)  | 表示幅（ピクセル）。高さは自動で縦横比を維持します                                      |
| Enable Link | ONにするとクリック時にリンクに遷移します                                                |
| Link URL    | クリック時の遷移先URL（Enable Link が ON のときのみ動作）                               |
| Link Target | New tab（新タブ） / Same tab（同タブ）                                                  |

> ウィジェットの表示位置はRe:EarthのWidget Align Systemで調整できます。

---

## For Developers

### ファイル構成

```
image-widget-plugin/
├── reearth.yml       # プラグイン定義
└── image-widget.js   # ウィジェット本体
```

### カスタマイズ

`image-widget.js` の先頭にある `CONFIG` でフォールバック値を変更できます。

```js
var CONFIG = {
  imageUrlFallback: "https://example.com/logo.svg", // 画像未設定時のデフォルト
  widthFallback: 200, // 幅未設定時のデフォルト
};
```

### 更新時

同じIDのプラグインをアンインストールしてから再インストールしてください。
