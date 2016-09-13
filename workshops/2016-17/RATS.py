import re

def isCreeper(n):
	p1 = "^123[3]+4444$"
	p2 = "^556[6]+7777$"
	return re.match(p1, n) or re.match(p2, n)
	
def nextRat(n):
	rev = n[::-1]
	res = str(int(n) + int(rev))
	return "".join(sorted(res)).lstrip("0")
	
def solve(seed, times):
	if isCreeper(seed):
		return "C 1"
	his = set()
	his.add(seed)
	ctr = 1
	for t in range(times-1):
		seed = nextRat(seed)
		ctr+=1
		if isCreeper(seed):
			return "C " + str(ctr)
		if seed in his:
			return "R " + str(ctr)
		his.add(seed)
	return seed
		
cases = int(raw_input())
for c in range(cases):
	num, m, seed = map(int, raw_input().split())
	print num, solve(str(seed), m)