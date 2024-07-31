#game croos
from tkinter import *
import random
# correct code
import tkinter as tk
from tkinter import messagebox
import random

def next_turn(row, column):
    global player

    if buttons[row][column]['text'] == "" and check_winner() is False:
        buttons[row][column]['text'] = player

        if check_winner() is False:
            player = players[1] if player == players[0] else players[0]
            label.config(text=player + " turn")
        elif check_winner() is True:
            label.config(text=players[1] + " wins")
        elif check_winner() == "tie":
            label.config(text="Tie!")

def check_winner():
    for row in range(3):
        if buttons[row][0]['text'] == buttons[row][1]['text'] == buttons[row][2]['text'] and buttons[row][0]['text'] != "":
            buttons[row][0].config(bg="green")
            buttons[row][1].config(bg="green")
            buttons[row][2].config(bg="green")
            return True

    for column in range(3):
        if buttons[0][column]['text'] == buttons[1][column]['text'] == buttons[2][column]['text'] and buttons[0][column]['text'] != "":
            buttons[0][column].config(bg="green")
            buttons[1][column].config(bg="green")
            buttons[2][column].config(bg="green")
            return True

    if buttons[0][0]['text'] == buttons[1][1]['text'] == buttons[2][2]['text'] and buttons[0][0]['text'] != "":
        buttons[0][0].config(bg="green")
        buttons[1][1].config(bg="green")
        buttons[2][2].config(bg="green")
        return True
    elif buttons[0][2]['text'] == buttons[1][1]['text'] == buttons[2][0]['text'] and buttons[0][2]['text'] != "":
        buttons[0][2].config(bg="green")
        buttons[1][1].config(bg="green")
        buttons[2][0].config(bg="green")
        return True

    if not empty_spaces():
        for row in range(3):
            for column in range(3):
                buttons[row][column].config(bg="yellow")
        return "tie"

    return False

def empty_spaces():
    for row in range(3):
        for column in range(3):
            if buttons[row][column]['text'] == "":
                return True
    return False

def new_game():
    global player
    player = random.choice(players)
    label.config(text=player + " turn")

    for row in range(3):
        for column in range(3):
            buttons[row][column].config(text="", bg="#F0F0F0")

window = tk.Tk()
window.title("Tic-Tac-Toe")

players = ["X", "O"]
player = random.choice(players)

buttons = [["", "", ""],
           ["", "", ""],
           ["", "", ""]]

label = tk.Label(text=player + " turn", font=('consolas', 40))
label.pack(side="top")

reset_button = tk.Button(text="Restart", font=('consolas', 20), command=new_game)
reset_button.pack(side="top")

frame = tk.Frame(window)
frame.pack()

for row in range(3):
    for column in range(3):
        buttons[row][column] = tk.Button(frame, text="", height=2, width=5, font=('consolas', 40),
                                         command=lambda row=row, column=column: next_turn(row, column))
        buttons[row][column].grid(row=row, column=column)

window.mainloop()
