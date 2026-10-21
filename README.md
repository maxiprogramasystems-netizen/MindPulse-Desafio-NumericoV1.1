# 🧠 MindPulse: Desafío Numérico

Juego de memoria numérica: memoriza la secuencia de dígitos y reprodúcela antes de que se acabe el oxígeno.

## Modos
| Modo | Dígitos iniciales | Regla |
|------|------------------|-------|
| 🟢 Fácil | 3 | Digita en el mismo orden |
| 🟡 Medio | 4 | Digita al revés |
| 🔴 Difícil | 5 | Ordena de menor a mayor |

La longitud de la serie aumenta y la velocidad sube a medida que avanzas (10 niveles, 3 aciertos por nivel, 3 vidas).

## Controles
Teclado en pantalla, o en PC: números, `Backspace` (borrar) y `Enter` (listo).

## Archivos (súbelos todos a la raíz del repositorio)
`index.html`, `manifest.json`, `sw.js`, `README.md`, `favicon-32.png`, `icon-192.png`, `icon-512.png`, `icon-1024.png`, `icon-maskable-192.png`, `icon-maskable-512.png`, `apple-touch-icon.png`

## Publicar en GitHub Pages
1. Sube todos los archivos a la raíz del repositorio (reemplaza los anteriores).
2. *Settings → Pages → Deploy from a branch → main / (root)*.
3. Abre `https://TU_USUARIO.github.io/NOMBRE_REPO/`. Se puede instalar como app desde el navegador del móvil.

## Si ya tenías la app instalada
Abre la app una vez con internet (y ciérrala y ábrela de nuevo): el service worker `mindpulse-v3` actualiza la versión solo. Si el ícono viejo sigue, desinstala la app y vuelve a instalarla.
