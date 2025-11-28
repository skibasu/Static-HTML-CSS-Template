# Static HTML + CSS Template

Prosty szablon do tworzenia stron statycznych w **HTML + CSS** z lokalnym live-serwerem oraz komendą build, która kopiuje wszystkie pliki do folderu `public/`. Nadaje się jako baza projektowa bez żadnego bundlera.

## 📁 Struktura projektu

```
project-root/
│
├── _info/
│   └── tasks/               # zadania
│       ├── HEADER_MOBILE.md
│       └── HEADER.md
│
├── .vscode/
│   ├── extensions.json
│   └── settings.json
│
├── node_modules/              # generowane po npm install
│
├── public/                    # generowane przez npm run build
│
├── src/
│   ├── css/
│   │   ├── style.css          # główny CSS (dev)
│   │   └── style.min.css      # wersja minifikowana (dev preview)
│   └── index.html
│
├── .editorconfig
├── .gitignore
├── .prettierrc
│
├── GITHUB.md                  # instrukcja GitHub
│
├── index.js                   # skrypt build: kopiowanie src → public
│
├── package.json
├── package-lock.json
│
├── postcss.config.js          # konfiguracja cssnano / postcss
│
└── README.md

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
