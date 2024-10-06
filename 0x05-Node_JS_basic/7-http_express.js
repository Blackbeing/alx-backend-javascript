const express = require('express');

const app = express();
const database = process.argv[2];
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  return new Promise((resolve, reject) => {
    fs.readFile(database, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        res.write(`Number of students: ${students.length}`);

        const fields = {};
        students.forEach((line) => {
          const [firstname, , , field] = line.split(',');

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        });
        const output = [];
        for (const [field, names] of Object.entries(fields)) {
          output.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        res.write(output.join('\n'));
        res.end();
        resolve();
      }
    });
  });
});

app.listen(1245, () => {});

module.exports = app;
