import turtle

turtle.bgcolor('black')
turtle.color('#21eb21')
turtle.shape('triangle')


def goup():
    turtle.fd(100)

def godown():
    turtle.bk(100)

def gort():
    turtle.rt(90)

def golt():
    turtle.lt(90)

def penu():
    turtle.penup()

def pend():
    turtle.pendown()

def home():
    turtle.goto(0,0)
    


turtle.onkeypress(goup,"Up")
turtle.onkeypress(godown,"Down")
turtle.onkeypress(gort,"Right")
turtle.onkeypress(golt,"Left")
turtle.onkeypress(penu,"p")
turtle.onkeypress(pend,"d")
turtle.onkeypress(home,"h")

turtle.listen()
turtle.mainloop()