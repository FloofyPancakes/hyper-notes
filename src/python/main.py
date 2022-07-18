# Main file for now, will contain everything until further organization
import os

def cut_bubble(bubble: str, line: int):
    #Function takes file name and where it will get split, then splits the file into 2 halves based on the integer provided

    bubbleName = bubble[:bubble.rfind('.')]
    bubbleExt = bubble[bubble.rfind('.'):]
    
    file = open(bubble, 'r')
    stuff = file.read()
    data = stuff.split('\n')
    
    file.close()
    os.remove(bubble)

    file = open(bubble, 'w')
    for x in range(0, line): 
        file.write(data[x]+'\n')
    file.close()
    
    file2 = open(bubbleName+'2'+bubbleExt, 'w')
    for x in range(line, len(data)):
        file2.write(data[x]+'\n')
    file2.close()


