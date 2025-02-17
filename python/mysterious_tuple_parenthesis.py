# Creating a tuple with and without parentheses  
x = (1, 2, 3)  
y = 1, 2, 3  

print(x == y)  # Output: True  
print(x is y)  # Output: True or False? 🤔  

# 🤔 What’s happening?  
# - `x = (1, 2, 3)` and `y = 1, 2, 3` **both create tuples**. The parentheses are **optional**.
# - Python sometimes **optimizes memory** by making identical small tuples the **same object** in memory.  
# - This means `x` and `y` could sometimes **point to the same memory location**, especially for simple tuples.  

# ✅ The Fix? If you want to guarantee different memory addresses, create them separately!  
x = (1, 2, 3)  
y = (1, 2, 3)  

print(x == y)  # Output: True  
print(x is y)  # Output: False (in most cases)  

# 🧠 Lesson:  
# Python might **reuse memory** for small immutable objects like tuples, even if you don't use parentheses.  
# Be careful when using `is` with tuples; **identical twins might still have different memories!** 😆
