#  Authority_ng Hs 後台管理系統
**企業內部的權限管理系統**，以 **RBAC（角色權限控制）** 設計，確保員工在企業內部系統擁有適當的權限，並提供簡潔、直覺的管理介面。

---

## 📌 **功能介紹**
- 透過 **角色權限管理 (RBAC)** 設定使用者權限
- 提供 **簡單明瞭的 UI**，讓後台管理員更容易操作
- 可設定 **部門主管擁有不同的核准與讀取權限**
- 採用 **Angular + PrimeNG** 開發，確保效能與可擴展性

---

##  **畫面預覽**
### **登入畫面**
![image](https://user-images.githubusercontent.com/69799370/236853650-5d1d8fc8-da34-4cae-b92e-626f4da0dca3.png)

### **首頁**
![image](https://user-images.githubusercontent.com/69799370/236853780-fa32563b-59b9-4451-a9c0-4a001442c660.png)

<details>
<summary><b style="font-size:18px;">使用者管理頁面</b>（點擊展開）</summary>
  
  - **使用者管理**
  
    ![User Management](https://user-images.githubusercontent.com/69799370/236853859-28b17d90-7688-461c-a8b9-76365f131111.png)

  - **使用者修改**
  
    ![Edit User](https://user-images.githubusercontent.com/69799370/236854623-bb5f9070-8c45-4cc3-acbb-e2dadf55d96c.png)

</details>

---

##  **技術架構**
| 前端 | 後端 | UI 設計 |
|------|------|--------|
| Angular | TypeScript | PrimeNG |
| HTML/CSS | Node.js | 自定義 SCSS |

---
### 系統使用框架、工具與執行方式
本系統基於 **Angular** 網頁框架，並搭配 **PrimeNG UI** 元件設計，後端則採用 **TypeScript**。  

#### **安裝與執行步驟**
1. **安裝相依套件**
   在專案目錄下執行：
   ```sh
   npm install
   ```
2. **啟動開發伺服器** 
   使用以下指令啟動 Angular 開發環境：
   ```sh
   ng serve -o
   ```
3. **開啟瀏覽器** 
   啟動後，可在瀏覽器中輸入以下網址以預覽系統：
   ```sh
   http://localhost:4200
   ```
