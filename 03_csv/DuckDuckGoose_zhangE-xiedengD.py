file = open('occupations.csv','r')
lines = file.readlines()[1:]

for i in range(len(lines)):
    if lines[i].find('\"') == -1:
        lines[i] = lines[i].split(',')
    else:
        lines[i] = lines[i].strip('\"').split('\",')
out = dict()

for line in lines:
    out.update({line[0] : float(line[1].strip())})
print(out)