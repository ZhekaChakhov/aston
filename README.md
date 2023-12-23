# Rick&Morty APP

Приложение для поиска информации о персонажах мультивселенной **Rick&Morty**.

**Использованное API**: в приложении используется [Rick & Morty API](https://rickandmortyapi.com/).

## Для запуска приложения локально нужно сделать следующее:

- Зарегистрироваться [Firebase](https://firebase.google.com).
- Получить необходимые ключи и записать их в файл .env

```javascript
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
API_KEY=
```

- Ввести необходимые комманды в консоль

```javascript
npm install
npm run dev
```

**Основной функционал**:

> - **Регистрация и авторизация:** пользователи могут создать учетную запись и авторизоваться в приложении.
> - **Поиск персонажей:** приложение предоставляет возможность поиска персонажей по имени.
> - **Избранные персонажи:** пользователи могут добавлять персонажей в избранное, чтобы собрать свою коллекцию.
> - **История поиска:** приложение сохраняет историю поиска.

## Реализованные требования:

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности**

- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **Firebase**

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [ ] ~~Есть разделение на **умные и глупые компоненты**~~

- [x] Есть **рендеринг списков** |
      [CharacterContainer](https://github.com/ZhekaChakhov/aston/blob/main/src/widgets/CharacterContainer/ui/CharacterContainer.tsx),
      [Search](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Search/ui/Search/Search.tsx),
      [History](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Search/ui/History/History.tsx),
      [Favorites](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Favorites/ui/Favorites/Favorites.tsx)

- [x] Реализована хотя бы одна **форма** |
      [Form](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/ui/Form/Form.tsx)

- [ ] ~~Есть применение Контекст API~~

- [x] Есть применение **предохранителя** |
      [ErrorBoundary](https://github.com/ZhekaChakhov/aston/blob/main/src/app/providers/ErrorBoundary/ui/ErrorBoundary.tsx)

- [x] Есть хотя бы один **кастомный хук** |
      [useAuth](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/lib/useAuth.ts),
      [useAuthCheck](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/lib/useAuthCheck.ts),
      [useDebounce](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/lib/useDebounce.ts)

- [x] Хотя бы несколько компонентов используют **PropTypes** |
      [ProtectedRoute](https://github.com/ZhekaChakhov/aston/blob/main/src/widgets/ProtectedRoute/ui/ProtectedRoute.tsx),
      [Suggest](https://github.com/ZhekaChakhov/aston/blob/main/src/widgets/Suggest/ui/Suggest.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) |
      Хук [useDebounce](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/lib/useDebounce.ts) использован в компоненте [SearchBar](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Search/ui/SearchBar/SearchBar.tsx).

- [x] Есть применение lazy + Suspense:
      [Suspense](https://github.com/ZhekaChakhov/aston/blob/main/src/app/providers/router/ui/AppRouter.tsx),
      [Lazy](https://github.com/ZhekaChakhov/aston/blob/main/src/pages/MainPage/ui/MainLazy.tsx)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**
- [x] Используем **слайсы** |
      [auth slice](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/model/slices/authSlice.ts),
      [search slice](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Search/model/slices/searchSlice.ts),

- [x] Есть хотя бы одна **кастомная мидлвара** или **createListenerMiddleware** |
      [Auth middleware](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/model/services/authMiddleWare.ts)

- [x] Используется **RTK Query** |
      [characterApi](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/charactersApi.ts),
      [favoritesApi](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/favoritesApi.ts),
      [historyApi](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/historyApi.ts)

- [x] Используется **Transforming Responses** |
      [favoritesApi](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/favoritesApi.ts),
      [historyApi](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/historyApi.ts)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**
- [x] Подключен **storybook** и созданы два, три сториса ~~с knobs~~, которые показывают разные состояния компонента |
      [Button](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/ui/Button/Button.stories.tsx),
      [Loader](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/ui/Loader/Loader.stories.ts),

- [x] Использование Firebase для учетных записей:
      [AuthThunk](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/model/actions/authThunk.ts), для обращение к базе данных избранного и истории поиска используется база firebase: [Base](https://github.com/ZhekaChakhov/aston/blob/main/src/shared/api/config/baseApi.ts).

- [x] **Низная связанность клиентского кода**, использующего апи кода, работающего с внешним стором

- [x] Настроен CI: [CI](https://github.com/ZhekaChakhov/aston/blob/main/.github/workflows/github-actions.yml)

- [ ] ~~Реализована **виртуализация списков**~~

- [x] Используются **мемоизированные селекторы** (createSelector) |
      [get user](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/model/selector/getUser.ts),
      [set User](https://github.com/ZhekaChakhov/aston/blob/main/src/features/Auth/model/selector/setUser.ts)
- [ ] ~~Используется **нормализованная структура стейта** (createEntityAdapter)~~
- [ ] ~~Проведена **оптимизация приложения**~~

- [ ] ~~Feature Flags. Реализовать фичу “Поделиться в телеграм”, закрытую под фича флагом.~~

- [x] Добавить **тесты** через jest, react-testing-library или Playwright |
      [wdio] (e2e test) (https://github.com/ZhekaChakhov/aston/blob/main/test/specs/user.e2e.ts)

- [x] Связь UI и бизнес-логики построена не через команды, а через **события**

- [ ] ~~**Project Console API**~~

## **Дополнительно**

- Приложение построено согласно архитектуре [Feature-Sliced Design](https://feature-sliced.design/ru/)
- Работа с формами организована с помощью [React-Hook-Form](https://react-hook-form.com/)
- Для стилизации использован [tailwindCSS] (https://tailwindcss.com/)
