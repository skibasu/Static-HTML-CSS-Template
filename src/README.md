# Static HTML + CSS Template

Prosty szablon do tworzenia stron statycznych w **HTML + CSS** z lokalnym live-serwerem oraz komendą build, która kopiuje wszystkie pliki do folderu `public/`. Nadaje się jako baza projektowa bez żadnego bundlera.

## 📁 Struktura projektu

```
project/
├─ src/
│  ├─ index.html
│  ├─ about.html
│  └─ css/
│     └─ style.css
├─ public/              # generowane przez build
├─ index.js             # kopiowanie plików src → public
├─ package.json
├─ postcss.config.js
└─ .gitignore
```

## 🚀 Komendy

### Start — live server

```
npm start
```

Uruchamia BrowserSync oraz tryb watch dla CSS (PostCSS). Zmiany w HTML lub CSS odświeżają stronę automatycznie.

### Build — przygotowanie finalnej wersji

```
npm run build
```

Tworzy folder `public/` zawierający:

-   wszystkie skopiowane pliki `.html`,
-   `public/css/style.min.css` — zminifikowany CSS generowany przez PostCSS + cssnano.

Folder `public/` jest gotowy do wysyłki na hosting lub jako output w CI/CD.

---

## ⚙️ Jak to działa?

### 1. Minifikacja CSS – PostCSS + cssnano

Plik źródłowy:

```
src/css/style.css
```

Podczas developmentu generowany jest także:

```
src/css/style.min.css
```

Podczas build:

```
public/css/style.min.css
```

### 2. Kopiowanie plików — `index.js`

Skrypt Node usuwa poprzedni folder `public/` i kopiuje całą zawartość `src/`.

---

## 🔧 Instalacja

```
npm install
```

---

## 🔄 Workflow pracy

1. Edytujesz pliki w `src/`
2. Uruchamiasz serwer dev:

    ```
    npm start
    ```

3. Kiedy chcesz finalną wersję:

    ```
    npm run build
    ```

4. Gotowe pliki masz w `public/`
