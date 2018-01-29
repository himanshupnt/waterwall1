### sample data

input = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2]  
output = [3, 8, 11]

### strategy

For each wall, find highest left wall and highest right wall and store their indexes.
for the walls with same boundaries, add their water amount and return the boundary indexes with the heighest water amount.

### constraints

minimum 3 walls are required.

### transformation

for the above input, loop through input from idx 1 till idx = length-2  
left highest walls - 5 5 7 7 7 7 7 9  
left highest wall idxs - 0 0 2 2 2 2 2 7

right highest walls - 9 9 9 9 9 9 2 2  
right highest wall idxs - 7 7 7 7 7 7 9 9

boundary with highest total - idx 2 - 7  
total amt of water in above range - 11

### pseudo

loop over the input to get left heighest wall  
height and idx, for each wall in the input

loop over the input to get right heighest wall  
height and idx, for each wall in the input

set range idx and range total

--- set current range idx  
--- set current range total
loop over the input,  
--- check if the left and right heighest wall range for current wall is same as previous wall  
------ if yes, add to current range total += min(rheighestwallheight)-current wall height  
------ if not  
---------- check if range total < current range total  
-------------- range total = current range total  
current range total = min(rheighestwallheight)-current wall height

check if range total < current range total  
set range total = current range total  
set range idx = current range idx

return [current range idxs, range total]

##Big O
O(n)
