#  GraphQL

### Описание курса:
В данном видео-курсе мы с вами разберём библиотек **GraphQL**. **GraphQL** – фактически это язык запросов или синтаксис, который описывает как запрашивать данные. Он позволяет клиенту запросить лишь желаемые данные. За все отвечает именно клиент. Т.е. **GraphQL** можно использовать не только на серверной, но и на клиентской стороне.

**GraphQL** имеет три основные характеристики:
- Он позволяет клиенту точно указать, какие данные ему нужны.
- Облегчает агрегацию данных из нескольких источников.
- Использует систему типов для описания данных.

## Используемые ресурсы и инструменты:
- [Atom (Редактор кода)](https://atom.io/)
- [Create React App (Рабочее окружение)](https://github.com/facebook/create-react-app)
- [mLab (База данных)](https://mlab.com)
- [Material-UI (Интерфейс приложения)](https://material-ui.com)
- [Apollo Client](https://www.apollographql.com/docs/react/)

## Полезные ссылки:
- [Graphql (Документация)](https://graphql.org/learn/)

## Установка зависимостей:
- Для сервера: `npm i express nodemon graphql express-graphql mongoose cors --save`
- Для приложения (UI): `yarn add apollo-boost react-apollo graphql @material-ui/core @material-ui/icons react-swipeable-views recompose`

## Быстрый старт серверной части (уроки с 1 по 9):
- Клонируйте репозиторий: `git clone https://github.com/YauhenKavalchuk/graphql-tutorial.git`
- Перейдите в папку **server** и установите зависимости: `npm install`
- Перейдите в нужную ветку соответствующую уроку: `git checkout lesson_01` или `git lesson_02` и т.д.
- Запустите проект: `npm run dev`

## Быстрый старт приложения (уроки с 10 по 16):
- Клонируйте репозиторий: `git clone https://github.com/YauhenKavalchuk/graphql-tutorial.git`
-  Перейдите в нужную ветку соответствующую уроку: `git checkout lesson_10` или `git lesson_11` и т.д.
- Перейдите в папку **server** и установите зависимости: `npm install`
	- Запустите сервер: `npm run dev`
- Перейдите в папку **application** и установите зависимости: `yarn install`
	- Запустите проект: `yarn start`

## Список уроков:
- [#0 Введение (Introduction)](https://youtu.be/kZs7CXrtT-s)
- [#1 Установка окружения (Setup Environment)](https://youtu.be/5h7-LVDoR6s)
- [#2 Схема и корневой запрос (GraphQL Schema & Root Query)](https://youtu.be/L9F_UWf14Ls)
- [#3 Функция Resolve и тест запроса (The Resolve Function & Testing Query)](https://youtu.be/8KmJ_RzJrp8)
- [#4 Новый тип и связь между типами (Different Type & Type Relations)](https://youtu.be/fRRWz92Xgzc)
- [#5 Списки (GraphQL Lists)](https://youtu.be/feI6-RrLlKI)
- [#6 Мигрируем данные на mLab (Migration to mLab)](https://youtu.be/Ks95WahxQd8)
- [#7 Добавляем Mongoose и обновляем Resolve (Adding Mongoose Models & Updating Resolve)](https://youtu.be/VWJf4snWKI4)
- [#8 Создаём первую мутацию (Create First Mutation)](https://youtu.be/3kUE0FKkGxc)
- [#9 Мутации для удаления и обновления (Remove & Update Mutations)](https://youtu.be/PO9Ytyj0xqI)
- [#10 Структура React приложения (Structure of React Application​)](https://youtu.be/4uz9Y4tLpPI)
- [#11 Объединяем Front-end и Back-end (Connecting Front-end & Back-end​)](https://youtu.be/Sl6lpXQZvzI)
- [#12 Отображаем реальные данный с БД (Display Real Data from DB)](https://youtu.be/h8Ujd1v7-n4)
- [#13 Добавление элементов в БД (Adding Elements to DB)](https://youtu.be/R_Virr32ZjU)
- [#14 Удаление элементов из БД (Removing Elements from DB)](https://youtu.be/RwSIsfsCzLI)
- [#15 Редактирование элементов в БД (Edit Elements in DB)](https://youtu.be/UqPPvKOgvbM)
- [#16 Поиск элементов в БД (Search Elements in DB)](https://youtu.be/vK7AIcl9h6k)

## Автор курса в социальных сетях:

[<img align="left" alt="webDev | YouTube" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/youtube.svg" />][youtube]
[<img align="left" alt="webDev | Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />][instagram]
[<img align="left" alt="webDev | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin]
[<img align="left" alt="webDev | VK" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/vk.svg" />][vk]
[<img align="left" alt="webDev | Twitter" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />][twitter]&nbsp;

## Поддержать канал:

<a href="https://www.patreon.com/YauhenKavalchuk" target="_blank">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

[youtube]: https://youtube.com/YauhenKavalchuk
[instagram]: https://instagram.com/YauhenKavalchuk
[linkedin]: https://linkedin.com/in/YauhenKavalchuk
[vk]: https://vk.com/YauhenKavalchuk
[twitter]: https://twitter.com/YauhenKavalchuk
