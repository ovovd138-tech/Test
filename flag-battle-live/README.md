# FLAG BATTLE LIVE — предварительный сервер

Этот каталог содержит бесплатную предварительную версию игры с флагами и endpoint для проверки здоровья. Она работает как обычный сайт с ручным вводом ответа; **подключения к TikTok LIVE, автоматического стрима и приёма подарков пока нет**.

## Render Free
- Repository: ovovd138-tech/Test
- Branch: flag-battle-live
- Runtime: Node
- Build command: echo "No dependencies"
- Start command: node flag-battle-live/server.js
- Region: Frankfurt
- Plan: Free
- /healthz — возвращает HTTP 200 и JSON status=ok
- /api/status — возвращает режим demo

Node.js использует встроенный HTTP-модуль без внешних зависимостей. Переменная PORT предоставляется Render.

Render Free может уходить в сон после бездействия, перезапускаться, терять локальные файлы и не является бесплатным видеосервером 24/7. Для постоянного рейтинга потребуется внешняя база. Не добавляйте секреты TikTok в GitHub.
