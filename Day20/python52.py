# listbox: container which have the multiple choice too fill
from tkinter import *
def submit():
 #order the multiple items
 food=[]
 for index in listbox.curselection():
    food.insert(index,listbox.get(index))
    
    print("you are ordere!")
    for index in food:
        print(index)

    #1st methode for submit the item
    # selection=listbox.curselection()
    # if selection:
    #     print(listbox.get(selection[0]))
    
    # print(listbox.get(listbox.curselection()))
def add():
    new_item=entryBox.get()
    if new_item:
        listbox.insert(END,new_item)
        listbox.config(height=listbox.size())
    
    # listbox.insert(listbox.size(),entryBox.get())
    # print("")
def delete():
    #for the single deleted 
    # listbox.delete(listbox.curselection())
    # listbox.config(height=listbox.size())

    # multiple item deleted
    for index in listbox.curselection():
      listbox.delete(index)
window = Tk()

listbox=Listbox(window,
                bg="gray",
                font=("Constantia",35),
                width=12,
                selectmode=MULTIPLE
                )
listbox.pack()

listbox.insert(1,"pazza")
listbox.insert(2,"samosa")
listbox.insert(3,"dhosa")
listbox.insert(4,"parotha")
listbox.insert(5,"ideli")

listbox.config(height=listbox.size()) #using for the adjesting the squire size

entryBox=Entry(window)
entryBox.pack()

submitButton=Button(window,text="submit",command=submit)
submitButton.pack()

addButton=Button(window,text="add",command=add)
addButton.pack()

deleteButton=Button(window,text="delete",command=delete)
deleteButton.pack()

window.mainloop()