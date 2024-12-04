# file_path = 'test.txt' 
file_path = 'data2.txt' 
# file_path = 'data1.txt'

def calculateDistance(list1, list2):
    totalDistance = 0
    while list1 and list2:
        # Get the smallest number from each list
        smallest1 = min(list1)
        smallest2 = min(list2)
        
        totalDistance += abs(smallest1-smallest2) 
        # Remove the smallest numbers from the lists
        list1.remove(smallest1)
        list2.remove(smallest2)
    return totalDistance


def countRepeatNumbers(list1, list2):
    count = 0
    for number in list1:
       count += number * list2.count(number)
    return count
try:
   with open(file_path, "r") as file:
        lines = file.readlines()
        list1 = [int(line.split()[0]) for line in lines]
        list2 = [int(line.split()[1]) for line in lines]
       


        print("total distance: ",calculateDistance(list1, list2))
        print("countNumber: ",countRepeatNumbers(list1, list2))



except FileNotFoundError:
    print(f"File '{file_path}' not found.")
except Exception as e:
    print(f"An error occurred: {e}")
