# Railway-ga Joylash Bo'yicha Qo'llanma 🚀

Botni Railway platformasiga joylash uchun quyidagi qadamlarni bajaring.

## 1. Kodni GitHub-ga yuklash
Railway loyihangizni GitHub-dan olib ishlatadi.

1.  GitHub-da yangi **Repository** (ombor) yarating (nomini masalan `greenway-bot` qo'ying).
2.  Loyihangiz papkasida terminalni oching va quyidagi buyruqlarni bittalab yozing:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/SIZNING_USERNAME/greenway-bot.git
    git push -u origin main
    ```
    *(Eslatma: `SIZNING_USERNAME` o'rniga o'z GitHub nomingizni yozing)*

## 2. Railway-da proyekt ochish
1.  [railway.app](https://railway.app/) saytiga kiring va GitHub orqali kiring.
2.  **"New Project"** tugmasini bosing.
3.  **"Deploy from GitHub repo"** ni tanlang.
4.  Ro'yxatdan hozirgina yaratgan `greenway-bot` repozitoriyangizni tanlang.
5.  **"Deploy Now"** tugmasini bosing.

## 3. O'zgaruvchilarni sozlash (Environment Variables)
Bot ishlashi uchun TOKEN kerak. Buni Railway-ga kiritishimiz lozim.

1.  Railway-da loyihangiz ochilgandan so'ng, **"Variables"** bo'limiga o'ting.
2.  **"New Variable"** tugmasini bosing.
3.  Quyidagi ma'lumotlarni kiriting:
    *   **VARIABLE_NAME**: `BOT_TOKEN`
    *   **VALUE**: *(Sizning Telegram Bot Tokeningiz)*
4.  Agar `WEBAPP_URL` ham ishlatayotgan bo'lsangiz, uni ham qo'shing:
    *   **VARIABLE_NAME**: `WEBAPP_URL`
    *   **VALUE**: `https://greenway.app`
5.  O'zgaruvchilar qo'shilgandan so'ng, Railway avtomatik ravishda botni qayta ishga tushiradi (Redeploy).

## 4. Tekshirish
Loyihangizning **"Logs"** bo'limiga o'ting. Agar hammasi to'g'ri bo'lsa, quyidagi yozuvni ko'rasiz:
> `GreenWay Bot is running...`

Tabriklaymiz! Endi botingiz 24/7 ishlaydi. 🎉
