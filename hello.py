# Простая программа на Python: приветствие и игра в угадай число.
import random

print("Привет! Это моя первая программа на Python 🚀")
name = input("Как тебя зовут? ").strip() or "друг"
print(f"Рад знакомству, {name}!")

secret = random.randint(1, 10)
print("Я загадал число от 1 до 10. Попробуй угадать!")

while True:
    answer = input("Твой вариант (или 'выход'): ").strip()
    if answer.lower() == "выход":
        print(f"До встречи! Я загадал число {secret}.")
        break
    try:
        guess = int(answer)
    except ValueError:
        print("Введи целое число, пожалуйста.")
        continue

    if guess == secret:
        print(f"Ура, {name}! Ты угадал! 🎉")
        break
    elif guess < secret:
        print("Моё число больше.")
    else:
        print("Моё число меньше.")
