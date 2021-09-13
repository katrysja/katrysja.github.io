# Hillel
## Hometask #1

Создать валидный HTML файл

В нем с помощью тега <script> вставить код, котрый делает следующее:
Спросить у юзера с помощью prompt() какое-то слово
Вывести c помощью alert() эхо - введенное слово, повторенное три раза, слова разделяет троеточие и пробел.

Пример:
```
ввод юзера:  "Эгегей"
вывод:      "Эгегей... Эгегей.. Эгегей..."
```

## Hometask #2

Создать валидный HTML файл

В нем с помощью тега <script> вставить код, котрый делает следующее:
- запрашивает с помощью prompt():
  - начальный взнос
  - проценты прироста депозита в год,
  - процент налога на прибыль
  - на сколько месцев депозит
- вывести сколько денег будет на счету по окончанию срока
- вывести сколько денег будет на счету через 50 лет

## Hometask #3

Игра "Угадай число"

Написать игру "Угадай число", где игрок угадывает загаданное число, пока не победит.
Task:
- Программа загадывает случайное число 0..N
- C помощью prompt() спрашивавает у игрока число
- Если игрок угадал число - поздравляем и пишем сколько это заняло ходов
- Если не угадал - говорим ему, "Загаданное число больше" / "Загаданное число меньше" в зависимости от числа и повторяем п.2

## Hometask #4

MOUNTAIN VIEW ALFA
Написать программу-генератор "горного ландшафта", которая будет выводить в консоль N штук гор, высота которых
растёт от 1 до N, N задаётся пользователем.

MOUNTAIN VIEW PRO
Добавим чуть вариативности! Выводим в консоль N гор со случайной высотой от H1 до H2. Иногда, c вероятностью X
на каждой ступеньке, гора может заканчиваться обрывом(заканчиваем рисовать гору)N, Н1, H2, X задаются пользователем,
либо хардкодятся. Для удобства пусть X будет целым 0..100

MOUNTAIN VIEW X
Добавим еще больше рандома! Выводим в консоль N гор со случайной высотой от H1 до H2, Иногда, c вероятностью X
на каждой ступеньке,гора может заканчиваться обрывом. Также, на каждой ступеньке горы случайным образом могут быть
применены такие модификаторы:

- ступенька может быть на один блок выше или ниже чем должна
- сверху может расти трава: = или -*
- сверху может расти дерево (разной длинны): ===@
  
- на вершине иногда может быть могилка путника: ]-+
- в глубине гор иногда могут быть алмазы: ◆
Все вероятности хардкодятся.

## Hometask #5 Categories Search

Imagine we have e-commerce grocery. There are a bunch of categories and sub-categories, which are organised in a tree-like structure.
Task
Create 3 functions, which work with categories tree.

1.Function that returns category by id.
2.Function that returns array of { name, id } of not disabled category’s first-level children’s.
3.Function that returns array of { name, id } of not disabled categories where name contains given substring. Use case insensitive comparision for a search


