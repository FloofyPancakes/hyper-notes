# Main file for now, will contain everything until further organization
import os

if not os.path.exists('filedata'):
    os.makedirs('filedata')
os.chdir('filedata')

def cut_bubble(bubble: str, line: int):
    # Function takes file name and where it will get split, then splits the file into 2 halves based on the integer provided

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
    
    numExt = ''
    for x in bubbleName[::-1]:
        if ord(x) >= ord('0') and ord(x) <= ord('9'):
            numExt = numExt + x
            bubbleName = bubbleName[:-1]
    numExt = int(numExt[::-1])
    file2 = open(bubbleName+str(numExt+1)+bubbleExt, 'w')
    for x in range(line, len(data)):
        file2.write(data[x]+'\n')
    file2.close()


def add_to_workspace(workspace: str, bubble: str):
    # Adds a file to a workspace's list
    wksp = open(workspace, 'a')
    wksp.write(bubble)

def link(linkfile: str, bubble1: str, bubble2: str):
    # Writes that two files are linked in the links file designated by the '/' because it is an illegal character in file names for all OS
    links = open(linkfile, 'a')
    links.write(bubble1 + ' / ' + bubble2)

def links_to_dict(linkfile: str) -> dict:
    # Turns the edgelist into a dict of every item and the set of links it's connected to for easy navigation
    file = open(linkfile, 'r')
    dtc = {}

    line = file.readline()
    while not line == '':
        line = ''.join(line.split('\n'))
        currentLink = line.split(' / ') 
        if not currentLink[0] in dtc:
            dtc[currentLink[0]] = set()
        dtc[currentLink[0]].add(currentLink[1])
        line = file.readline()
        file.close()
    return dtc

def delete_item(linkfile: str, filename: str):
    # Will delete a file by name and remove all references from the edgelist
    if os.path.isfile(filename):
        os.remove(filename)
    file = open(linkfile, 'r')
    lines = file.readlines()
    file.close()
    file = open(linkfile, 'w')
    for line in lines:
        if not filename in line:
            file.write(line)
    file.close()
