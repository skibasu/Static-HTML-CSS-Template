# Zadanie — Etap 1: Header (pixel-perfect)

## 🎯 Cel zadania

Stworzyć nagłówek strony zgodnie z designem w Figma, używając dostarczonych ikon i czcionek (`assets.zip`). Header zawiera logo po lewej oraz menu po prawej.

---

## ✅ Wymagania

1. Odtwórz header **pixel perfect** zgodnie z Figma.
2. Użyj logo oraz wszystkich fontów i ikon z `assets.zip`.
3. Menu musi mieć strukturę:

    ```html
    <nav class="main-nav">
        <ul>
            <li><a>…</a></li>
        </ul>
    </nav>
    ```

4. **Tylko `<nav>` może mieć klasę (`main-nav`)** — `ul`, `li`, `a` stylowane przez **dziedziczenie** i selektory potomne (bez klas).
5. Każdy element menu ma mieć ikonę strzałki (z `assets.zip`).
6. Układ wykonany Flexboxem — logo po lewej, menu po prawej.
7. Odstępy, kolory, fonty, spacing — **pixel perfect** z Figma.

### ⭐ Opcjonalne (mile widziane)

-   Hover: zmiana stylu tekstu + obrót strzałki o 180° z animacją.

---

## 🎯 Acceptance Criteria

-   HTML zawiera: `<header>`, `<nav class="main-nav">`, `<ul>`, `<li>`, `<a>`.
-   Brak klas w elementach `ul`, `li`, `a` — stylowanie przez dziedziczenie.
-   Header idealnie odwzorowuje projekt.
-   Użyte są oryginalne fonty i ikony z `assets.zip`.
-   Strzałki widoczne przy każdym elemencie menu.
-   Flexbox wyrównuje logo oraz menu.

### ⭐ Opcjonalnie

-   Hover animuje tekst i obrót strzałki.
