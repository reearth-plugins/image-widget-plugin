# Image Widget Plugin

Re:Earth Visualizer上に画像（SVG・PNG・JPG）をオーバーレイ表示するウィジェットプラグイン。

---

## ファイル構成

```
image-widget-plugin/
├── reearth.yml       # プラグイン定義
└── image-widget.js   # ウィジェット本体
```

---

## インストール方法

1. `reearth.yml` と `image-widget.js` を同じフォルダに入れてzip圧縮する
2. Re:Earth Visualizer → プラグイン →「Upload Zip file from PC」でアップロード
3. ウィジェット一覧に「Image Widget」が表示されるので追加する
4. 更新時は一度アンインストールしてから再インストールする

---

## Inspector 設定項目

| 項目 | 型 | 説明 |
|---|---|---|
| Image URL | url | 表示する画像のURL。アップロードボタンからAssetを選択することも可能（SVG・PNG・JPG対応） |
| Width (px) | number | 表示幅（ピクセル）。高さは自動で縦横比を維持 |
| Enable Link | bool | ONにするとクリック時にリンク遷移が有効になる |
| Link URL | string | クリック時の遷移先URL（Enable Link が ON のときのみ動作） |
| Link Target | string | `New tab`（新タブ） / `Same tab`（同タブ） |

---

## 使用例

Re:Earthのロゴを右下に表示してクリックでサイトに遷移させる場合：

- Image URL: `https://example.com/reearth-logo.svg`
- Width (px): `120`
- Enable Link: ON
- Link URL: `https://reearth.io`
- Link Target: `New tab`

---

## 注意事項

- ウィジェットの表示位置はRe:EarthのWidget Align Systemで調整する
- フォールバック用のデフォルト画像URLは `image-widget.js` の `CONFIG` 内で変更可能
