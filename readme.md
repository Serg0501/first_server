Superheroes

Цель задания: база данных супергероев. Для этого нужно веб приложение для произведения CRUD операций над моделью супергероев.

Модель: 
nickname: Superman
real_name: Clark Kent
origin_description: he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...
superpowers: solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...
catch_phrase: “  Look, up in the sky, it's a bird, it's a plane, it's Superman!”
images: a set of images of the superhero

Функциональные требования:
Создание, редактирование и удаление героев
При создании, редактировании нужно иметь возможность добавлять картинки и суперспособности.
Получать список всех супергероев с пагинацией, показывая только 5 героев за один запрос

Технические требования:
Node.js
Express
Sequelize

Декомпозиция задачи:
Спроектировать БД. Сущности и связи.
Проинициализировать проект (sequelize init), предварительно установив все нужные пакеты.
Создать базу данных по конфигурации (sequelize db:create).
Написать sequelize-cli команду для создания моделей сущностей.
Отредактировать миграцию с учетом дополнительных ограничений.
Выполнить миграцию.
Отредактировать модели. Не забывайте про валидацию и стиль именования.
Разработать http-запросы, маршруты и контроллер для тестирования разработанных моделей.