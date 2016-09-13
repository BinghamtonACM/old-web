count = int(input())

for c in range(count):   
    num, n = map(int,input().split())
    s1 = sum(range(n+1))
    s3 = 2*s1
    s2 = s3-n
    print(num, s1, s2, s3)