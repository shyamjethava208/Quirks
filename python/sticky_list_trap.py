# Mutable Default Arguments in Python 🐍  

# Defining a function with a mutable default argument (a list)
def add_item(item, items=[]):
    items.append(item)
    return items

# Calling the function multiple times
print(add_item(1))  # Output: [1]
print(add_item(2))  # Output: [1, 2]
print(add_item(3))  # Output: [1, 2, 3]

# 🤯 What’s happening?  
# Python evaluates default arguments **once** when the function is defined,  
# so the same list is reused in every function call!  
# - First call: `[1]` ✅  
# - Second call: `[1, 2]` (Wait… why is `1` still there?) 🤨  
# - Third call: `[1, 2, 3]` (Uh-oh, it's accumulating!) 🚨  

# 🔍 Notice that we are **not using a class or object** here—this is just a **normal function call**!  
# Yet, the function "remembers" previous calls due to Python's mutable default argument behavior.

# ✅ Fix: Use `None` as the default value and initialize inside the function
def add_item_fixed(item, items=None):
    if items is None:
        items = []  # Now a new list is created each time
    items.append(item)
    return items

# Now it behaves correctly:
print(add_item_fixed(1))  # Output: [1]
print(add_item_fixed(2))  # Output: [2]
print(add_item_fixed(3))  # Output: [3]

# ✅ Moral of the story: Always be careful with **mutable** default arguments in Python!  
