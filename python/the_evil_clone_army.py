# Creating a list with three empty lists  
weird_list = [[]] * 3  
print(weird_list)  # Output: [[], [], []]  
# Looks normal… right? 🤔  

# Adding 10 to the first sublist  
weird_list[0].append(10)  
print(weird_list)  
# Output: [[10], [10], [10]]  
# WAIT, WHAT?! Why did all of them change?! 😵‍💫  

# 🤔 What’s happening?  
# - `weird_list = [[]] * 3` doesn’t create three separate lists.  
# - It creates **three references to the same list in memory**!  
# - So when we modify one, **all of them change** because they are literally the **same object**.  

# ✅ The Fix? Create separate lists!  
weird_list = [[] for _ in range(3)]  
print(weird_list)  # Output: [[], [], []]  

# Now modifying one doesn’t affect the others  
weird_list[0].append(10)  
print(weird_list)  # Output: [[10], [], []] 🎉  

# 🧠 Lesson:  
# Beware of list multiplication when dealing with **mutable objects**!  
# Otherwise, you’ll end up with an **army of evil clones** that all react together. 😆  