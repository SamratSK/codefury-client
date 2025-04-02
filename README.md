# CodeFury 7.0 Client

This project was generated for CodeFury 7.0 and uses Angular as the templating language.

To export the build files: ```npm run build```

To serve it up on live server files (make sure backend is up and running): ```npm start```def roman_to_int(roman):
    roman_values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    total = 0
    prev_value = 0
    
    for char in reversed(roman):
        value = roman_values[char]
        if value < prev_value:
            total -= value
        else:
            total += value
        prev_value = value
    
    return total

def int_to_roman(num):
    roman_numerals = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]
    result = ""
    for value, symbol in roman_numerals:
        while num >= value:
            result += symbol
            num -= value
    return result

def add_roman_numerals(roman1, roman2):
    total = roman_to_int(roman1) + roman_to_int(roman2)
    return total, int_to_roman(total)

# Example usage
roman1 = "XIV"
roman2 = "XX"
result_int, result_roman = add_roman_numerals(roman1, roman2)
print(f"{roman1} + {roman2} = {result_int} ({result_roman})")
def roman_to_int(roman):
    roman_values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    total = 0
    prev_value = 0
    
    for char in reversed(roman):
        value = roman_values[char]
        if value < prev_value:
            total -= value
        else:
            total += value
        prev_value = value
    
    return total

def int_to_roman(num):
    roman_numerals = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]
    result = ""
    for value, symbol in roman_numerals:
        while num >= value:
            result += symbol
            num -= value
    return result

def add_roman_numerals(roman1, roman2):
    total = roman_to_int(roman1) + roman_to_int(roman2)
    return total, int_to_roman(total)

# Example usage
roman1 = "XIV"
roman2 = "XX"
result_int, result_roman = add_roman_numerals(roman1, roman2)
print(f"{roman1} + {roman2} = {result_int} ({result_roman})")
