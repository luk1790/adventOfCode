# file_path = 'test.txt' 
# file_path = 'test2.txt' 
file_path = 'data.txt'

def findFirstDigit(inputString):
    return next((char for char in inputString if char.isdigit()), None)

def parseString(inputString):
    digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    firstDigit = findFirstDigit(inputString)
    if firstDigit:
        firstDigitIndex = inputString.find(firstDigit)
    else:
        firstDigitIndex = None

    lastDigit = findFirstDigit(inputString[::-1])
    if lastDigit:
        lastDigitIndex = inputString.rfind(lastDigit)
    else:
        lastDigitIndex = None


    for digit in digits:
        if inputString.find(digit) != -1:
            if firstDigit is None:
                firstDigit = digits.index(digit)+1
                firstDigitIndex = inputString.find(digit)
            else:
                if inputString.find(digit) < firstDigitIndex:
                    firstDigit = digits.index(digit)+1
                    firstDigitIndex = inputString.find(digit)
            if lastDigit is None:  
                lastDigit = digits.index(digit)+1
                lastDigitIndex = inputString.rfind(digit)
            else:
                if inputString.rfind(digit) > lastDigitIndex:
                    lastDigit = digits.index(digit)+1
                    lastDigitIndex = inputString.rfind(digit)
           

    return int(firstDigit)*10+int(lastDigit)

try:
    with open(file_path, 'r') as file:
        sum = 0

        for line in file:
            print(line + ' - ' + str(parseString(line)))
            sum += parseString(line)
        #     newLine = parseString(line)
        #     reversedLine = newLine[::-1]
        #     print(int(firstDigit(newLine))*10+int(firstDigit(reversedLine)))
        #     sum += int(firstDigit(newLine))*10+int(firstDigit(reversedLine))

        print(sum)


except FileNotFoundError:
    print(f"File '{file_path}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
