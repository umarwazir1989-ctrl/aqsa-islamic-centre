# اقصیٰ اسلامک سنٹر — مکمل ویب سائٹ

## VS Code میں چلائیں
1. ZIP کو Extract All کریں۔
2. VS Code میں وہ `aqsa-islamic-centre` فولڈر کھولیں جس میں `package.json` ہے۔
3. Terminal میں چلائیں:

```powershell
npm.cmd run dev
```

پھر براؤزر میں `http://localhost:3000` کھولیں۔

## اہم فائلیں
- `dist/index.html` — صفحۂ اول
- `dist/education.html` — تعلیمی شعبے
- `dist/welfare.html` — رفاہی منصوبے
- `dist/about.html` — تعارف و انتظامیہ
- `dist/donate.html` — عطیات
- `dist/contact.html` — رابطہ
- `dist/assets/premium.css` — مرکزی پریمیم ڈیزائن
- `dist/assets/photos/` — ویب سائٹ کی تصاویر
- `build.py` — HTML صفحات کا بنیادی جنریٹر

اگر `build.py` چلائیں گے تو چھ HTML صفحات دوبارہ بنیں گے، اس لیے مستقل متن کی تبدیلی `build.py` میں بھی کریں۔

## GitHub
```powershell
git init
git add .
git commit -m "Aqsa Islamic Centre website"
git branch -M main
git remote add origin https://github.com/umarwazir1989-ctrl/aqsa-islamic-centre.git
git push -u origin main
```

اگر `origin already exists` آئے تو:
```powershell
git remote set-url origin https://github.com/umarwazir1989-ctrl/aqsa-islamic-centre.git
git push -u origin main
```

## Vercel
```powershell
npx.cmd vercel@latest login
npx.cmd vercel@latest --prod
```
