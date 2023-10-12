1. npm init - инициализация приложения
2. npm i -D webpack webpack-cli - сборка приложения
3. npm i -D typescript ts-loader - транспилятор и лоудер (преобразование одного типа файлов в другие)
4. tsc --init - инициализация ts-loader
//npm i -D html-webpack-plugin - Связка index.html и сгенерированного клиентского js бандла
5. npm i -D cross-env - для работы с переменными среды окружения
//npm i -D webpack-dev-server - Веб сервер для открытия страницы
6. npm i express - веб-сервер
7. npm i -D webpack-node-externals - Для исключения сторонних зависимостей
8. npm i nodemon  - запуск и перезапуск сервера при изменении
9. npm i -D webpack-dev-middleware webpack-hot-middleware react-hot-loader @hot-loader/react-dom - Применение изменений на горячую (не работет с 18 react-ом)
10. npm i -D clean-webpack-plugin - очистка чанков загруженных на горячую 
11. npm i -D style-loader css-loader - css модули
12. npm i -D less-loader less - css препроцессор
13. npm i -D jest ts-jest @types/jest - тесты
14. npx ts-jest config:init - инициализация тестов
15. npx jest - запуск тестов
16. npm i -D @types/react @types/react-dom
17. Генерация компонентов
    npm install -g yo
    npm install -g generator-react-ts-component-dir
    yo react-ts-component-dir SortBlock .\src\shared\Header  