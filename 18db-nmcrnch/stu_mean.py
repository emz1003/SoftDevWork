import sqlite3
import statistics

db = sqlite3.connect('discobandit.db')
c = db.cursor()
q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
data = c.execute(q).fetchall()

id_name = dict()
id_grades = dict()
for row in data:
    id_name.update({row[1]: row[0]})
    if id_grades.get(row[1]) == None :
        id_grades.update({row[1]: [row[2]]})
    else:
        id_grades.update({row[1]: id_grades.get(row[1]) + [row[2]]})

for key in id_name:
    print("student: {}\t ID: {}\t AVG: {}".format(id_name.get(key), key, statistics.mean(id_grades.get(key))))
