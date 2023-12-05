# file_path = 'test.txt' 
file_path = 'data.txt'

def filterNumbers(numbers):
    for number in numbers:
        if number['haveNeighbor']:
            return number['number']

def checkNeighbor(line1, line2, line3):
    numbers = [{ 'number': '', 'haveNeighbor': False}]
    counter = 0


    for i in range(len(line2)):
        if len(line1) == 0:
            if line2[i].isdigit():
                numbers[counter]['number'] += line2[i]
                if i != 0 and i != len(line2)-1:
                    if line3[i-1] != '.' or line3[i] != '.' or line3[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i-1].isdigit() == False and line2[i-1] != '.'  or line2[i+1].isdigit() == False and line2[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == 0:
                    if line3[i] != '.' or line3[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i+1].isdigit() == False and line2[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == len(line2)-1:
                    if line3[i-1] != '.' or line3[i] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i-1].isdigit() == False and line2[i-1] != '.' :
                        numbers[counter]['haveNeighbor'] = True
                    
            else:
                counter += 1
                numbers.append({ 'number': '', 'haveNeighbor': False})
        elif len(line3) == 0:
            if line2[i].isdigit():
                numbers[counter]['number'] += line2[i]
                if i != 0 and i != len(line2)-1:
                    if line1[i-1] != '.' or line1[i] != '.' or line1[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == 0:
                    if line1[i] != '.' or line1[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == len(line2)-1:
                    if line1[i-1] != '.' or line1[i] != '.':
                        numbers[counter]['haveNeighbor'] = True
            else:
                counter += 1
                numbers.append({ 'number': '', 'haveNeighbor': False})
        else:
            if line2[i].isdigit():
                numbers[counter]['number'] += line2[i]
                if i != 0 and i != len(line2)-1:
                    if line1[i-1] != '.' or line1[i] != '.' or line1[i+1] != '.' or line3[i-1] != '.' or line3[i] != '.' or line3[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i-1].isdigit() == False and line2[i-1] != '.'  or line2[i+1].isdigit() == False and line2[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == 0:
                    if line1[i] != '.' or line1[i+1] != '.' or line3[i] != '.' or line3[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i+1].isdigit() == False and line2[i+1] != '.':
                        numbers[counter]['haveNeighbor'] = True
                elif i == len(line2)-1:
                    if line1[i-1] != '.' or line1[i] != '.' or line3[i-1] != '.' or line3[i] != '.':
                        numbers[counter]['haveNeighbor'] = True
                    elif line2[i-1].isdigit() == False and line2[i-1] != '.' :
                        numbers[counter]['haveNeighbor'] = True
                
            else:
                counter += 1
                numbers.append({ 'number': '', 'haveNeighbor': False})
    filtered_data = [item for item in numbers if item['haveNeighbor']  and item['number'] != '']
    return filtered_data

try:
    with open(file_path, 'r') as file:
        fileString = file.read().split('\n')
        result = []
        sum = 0
        for i in range(len(fileString)):
            if i == 0:
                result += checkNeighbor([], fileString[i], fileString[i+1])
            elif i == len(fileString)-1:
                result += checkNeighbor(fileString[i-1], fileString[i], [])
            else:
                result += checkNeighbor(fileString[i-1], fileString[i], fileString[i+1])
        # print(result)
           
        for number in result:
            sum += int(number['number'])
        print(sum)

except FileNotFoundError:
    print(f"File '{file_path}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
