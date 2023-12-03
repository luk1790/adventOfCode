# file_path = 'test.txt' 
# file_path = 'test2.txt' 
file_path = 'data.txt'

RULES = {'red': 12, "green": 13, "blue": 14}

def parseLine(line):
    result = {}
    idGame, sets = line.split(':')
    result['game'] = int(idGame.replace('Game ', ''))
    result['data'] = []

    for index, set in enumerate(sets.split(';')):
        result['data'].append({})
        for game in set.split(','):
            value, key = game.strip().split(' ')
            result['data'][index][key] = int(value)
            
    return result

def isPossibleGame(game):
    for set in game['data']:
        # print(set['green'])
        if set.get("green") is  None:
            set['green'] = 0
        if set.get("red") is  None:
            set['red'] = 0
        if set.get("blue") is  None:
            set['blue'] = 0

        if set['blue']> RULES['blue'] or set['green']> RULES['green'] or set['red']> RULES['red']:
            return False

    return True

try:
    with open(file_path, 'r') as file:
        sum = 0
        for line in file:
            parsedLine = parseLine(line)
            if(isPossibleGame(parsedLine)):
                sum += parsedLine['game']
        print(sum)

except FileNotFoundError:
    print(f"File '{file_path}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
