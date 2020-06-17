# sprint-12
NodeJS &amp; ExpressJS test

## Описание проекта

Создание сервера, который может раздавать статичные файлы, а также API, принимающего запросы пользователя


## Развертывание

- Установить [Node.JS](https://nodejs.org/en/)
- Скопировать себе ребозиторий: `git clone git@github.com:i386net/sprint-12.git`
- Установить зависимости `npm install`


## Запуск

- В режиме разработки: `npm run dev` запускает сервер на `localhost:3000` с `hot realod`
- В режиме сервера: `npm run start` запускает сервер на `localhost:3000`
- Размещение на `Github Pages`: `npm run deploy`

## Работа с API

| ЗАПРОС |	ОТВЕТ |
| : ---  |  :--- |
| GET `localhost:3000/users` |	JSON-список всех пользователей |
| GET `localhost:3000/cards` |	JSON-список всех карточек |
| GET `localhost:3000/users/8340d0ec33270a25f2413b69` |	JSON-пользователя с переданным после /users идентификатором. Если такого нет, API должно возвращать 404 статус ответа и JSON:`{ "message": "Нет пользователя с таким id" }` |
| Несуществующий адрес |	`{ "message": "Запрашиваемый ресурс не найден" }` |

----

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |