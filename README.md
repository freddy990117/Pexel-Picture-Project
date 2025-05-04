# 📸 Pexel Picture Search

這是一款使用 React 開發的圖片搜尋應用程式，透過 Pexels API 即時取得高品質的免費圖片，並提供簡潔的搜尋與瀏覽介面。

## 🔍 Demo

![Image](https://github.com/user-attachments/assets/c36b3301-488c-4314-b74a-95bfb8fa6b61)

## 🚀 功能特色

* 使用 `axios` 串接 Pexels API 並解析圖片資料。
* 提供即時搜尋功能，使用者可輸入關鍵字搜尋相關圖片。
* 採用 React Router 架構，實現首頁與結果頁的頁面切換。
* 使用 React Hooks 管理狀態與效能，提升用戶體驗與開發效率。
* 響應式設計，適應各種裝置尺寸，提供良好的使用體驗。

## 🛠️ 技術與技能

本專案以 React 為核心，搭配多種 Hooks 與前端實務技術，實作圖片搜尋平台：

* **React Router（BrowserRouter）**：實作多頁式應用，包含首頁與搜尋結果頁，讓使用者能夠透過路由切換頁面。
* **Hooks 使用**

  * `useState`：管理搜尋欄位與 API 回傳的圖片資料。
  * `useEffect`：控制元件初始載入與依賴變化時的資料請求。
  * `useLayoutEffect`：確保畫面更新前即完成必要資料渲染，避免閃爍。
  * `useMemo`：優化重複渲染效能，例如緩存圖片列表。
* **Props 傳遞**：元件間透過 props 傳遞搜尋資料與事件處理，保持組件解耦。
* **Axios**：透過 axios 向 Pexels API 發送圖片請求並處理非同步資料。
* **模組化設計**：頁面與元件分離，提升可維護性與擴充性。

## 📂 專案結構

本專案採用 BrowserRouter 為核心路由系統，實現多頁切換與資料共用架構：

```
Pexel-Picture-Project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchBar.js        
│   │   ├── Picture.js          
│   │   └── Footer.js           
│   ├── pages/
│   │   ├── Homepage.jsx       
│   ├── App.jsx                  # 路由配置（BrowserRouter）
│   ├── index.js
│   └── App.css
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ 安裝與使用

1. **下載或複製此專案：**

   ```bash
   git clone https://github.com/freddy990117/Pexel-Picture-Project.git
   ```

2. **安裝相依套件：**

   ```bash
   cd Pexel-Picture-Project
   npm install
   ```

3. **取得 Pexels API 金鑰：**

   前往 [Pexels 官方網站](https://www.pexels.com/api/) 註冊並取得 API 金鑰。

4. **設定 API 金鑰：**

   在 `src/api/index.js` 或 `Homepage.jsx` 中，將 `YOUR_API_KEY` 替換為你的實際 API 金鑰。

5. **啟動應用程式：**

   ```bash
   npm start
   ```

   使用瀏覽器開啟 `http://localhost:3000`，即可開始使用圖片搜尋功能。

## 🙏 特別感謝

本專案靈感與技術實作參考了 [Udemy Teacher](Wilson Ren)，感謝他詳細的講解與範例，讓我順利完成這個圖片搜尋應用程式 🙏

## 📄 授權

本專案採用 MIT 授權條款，詳情請參閱 [LICENSE](LICENSE) 檔案。
