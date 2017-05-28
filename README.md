# js_ru_20_04_19_30

## HT1 Создать список комментариев для статьи, который можно открывать/закрывать по клику на соответствующую ссылку(текст ссылкы должен меняться)

## HT2.1 Написать propTypes для всех компонентов
## HT2.2 Вынести функционал "аккордеон" в декоратор + при повторном клике на открытую статью она должна закрываться

## HT3.1 Сделать форму добавления комментария(текст и юзер) в Коммент-листе, с валидацией(красная подсветка если меньше 5 символов и не разрешать больше 20)
## HT3.2 добавить календарь(https://github.com/gpbl/react-day-picker) с возможностью выбора диапазона дат и отображать этот диапазон
## HT3.3 начать знакомиться с https://facebook.github.io/immutable-js/docs/#/

## HT4.1 Вынести значения фильтров в стор + логика изменения этих значений
## HT4.2 Реализовать логику фильтрации(в ArticleList показывать отфильтрованные статьи, если фильтр не выбран - он не активен)

## HT5.1 Написать мидлвару для генерации случайного id
## HT5.2 Переписать articles редюсер аналогично comments(хранить в виде объекта)
## HT5.3 Реализовать функционал добавления коммента к статье

## HT6.1 Переписать comments редюсер по аналогии с articles
## HT6.2 Реализовать фетчинг комментов при открытии списка(api: /api/comment?article=56c782f17b4e0ba78c7ad717). Запрашивать коменты один раз

## HT7.1 Завести роут comments/:page для пагинации комментов
## HT7.2 Реализовать пагинацию всех комментов, по 5 на страницу(/api/comment?limit=5&offset=10), загружать каждую страницу только 1 раз, показівать лоадер
