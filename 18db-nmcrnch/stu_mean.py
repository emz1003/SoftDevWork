import sqlite3

db = sqlite3.connect('discobandit.db')
c = db.cursor()
q = "SELECT name, students.id, mark FROM students, courses WHERE students.id = courses.id;"
foo = c.execute(q)