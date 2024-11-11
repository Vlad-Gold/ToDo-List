# Список задач (Тестовое) 

Стек приложения: Vite, TS, React, RTK, module css.

Приложение представляет собой список задач. 
На главной странице можно "Создать ", "Фильтровать" " Редактировать", "Удалить" задачу, 
а также перейти в корзину, для просмотра удаленных задач.
Создание и редактирование задач происходит на отдельных страницах.
Сама задача, после создания, состоит из заголовка, описания, даты начала, дата конца задач,
статуса выполнена/не выполнена и действий, состоящих из кнопок удалить и редактировать. 
Пагинация присутствует всегда, даже если страница 1 (для демонстрации).
На главной странице отображатеся 15 задач (можно изменить при желании),
при завершении списка задач появляется надпись Конец списка задач.
Пагинация также присутствует в корзине, 10 задач отображается на главной.

При создании задачи, в полях присутствует валидаци, ограничения по 
некорреткной дате, ограничения по длине описания и заголовка, с выведением 
того, что нужно чтобы создать задачу корреткно. 

Имеется возможность очистить задачи в корзине, а также восстановить нужную обратно
в наш список.

Все созданные и удаленные задачи сохраняются в локальном хранилище, с имитацией ошибки
в 50 процентах случаев, в таком случае появляется кнопка Повторить синхронизацию.
Статус синхронизации отображается на всех страницах. 

Филтрация происходит по названию, по дате начала задачи (вводим точную дату),
конца задачи (вводим также точную дату), статус выполнения. Фильтрацию можно 
сбросить нажав на кнопку Сбросить Фильтрацию.


Адаптивная верстка компонентов с использованием флексом.
В рамках архитектуры FSD, структура проекта будет разделена по фичам, страницам, компонентам.

Примечания: Требуется немного доработать адаптивность и архитектуру приложения.
TaskFormPage отключены типы, требуется донастроить типизацию.
После ручного тестирования багов не обнаружено.

