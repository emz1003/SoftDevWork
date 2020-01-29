#Duck Duck Goose: Emily Zhang and David Xiedeng
#SoftDev P1
#K17 No Trouble
#2019-10-07

import sqlite3  # enable control of an sqlite database
import csv  # facilitate CSV I/O

DB_FILE = "discobandit.db"

db = sqlite3.connect(DB_FILE)  # open if file exists, otherwise create
c = db.cursor()  # facilitate db ops

def CSVtoTable(csv_name):
    file = open(csv_name, newline='') # used for DictReader
    f = open(csv_name) # used to read in column names
    table_name = csv_name[:-4] # remove the .csv from the file name

    reader = csv.DictReader(file) # creates a OrderedDict

    lines = f.readlines()
    col = lines[0].strip().split(',') # list of column names

    command = "CREATE TABLE IF NOT EXISTS {} ( {} TEXT, {} INTEGER, {} INTEGER)".format(table_name, col[0], col[1], col[2]) #create table
    c.execute(command)  # run SQL statement
    for row in reader:
        command = 'INSERT OR REPLACE INTO {} ( {}, {}, {} ) VALUES (\"{}\", {}, {});\n'
        command = command.format(table_name, col[0], col[1], col[2], row[col[0]], row[col[1]], row[col[2]]) # inserts a row
        c.execute(command)
    file.close()
    f.close()

#==========================================================
CSVtoTable('students.csv')
CSVtoTable('courses.csv')
db.commit()  # save changes
db.close()  # close database
