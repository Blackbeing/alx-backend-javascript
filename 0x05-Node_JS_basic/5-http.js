import http from 'http';
import url from 'url';

import fs from 'fs';

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  const reqUrl = url.parse(req.url, true);

  if (reqUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading students.csv:', err);
        res.end('Error reading students.csv');
      } else {
        // Split the CSV data into lines and filter out empty lines

        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((line) => line.trim() !== '');
        res.write(`Number of students: ${students.length}\n`);

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
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
app.listen(1245);
