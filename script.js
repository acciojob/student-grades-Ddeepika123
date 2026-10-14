//your JS code here. If required.
[
  {
    "name": "Rahul",
    "grades": [80, 90, 85]
  },
  {
    "name": "Priya",
    "grades": [70, 75, 80]
  },
  {
    "name": "Amit",
    "grades": [90, 95, 100]
  }
]


const fs = await import('node:fs/promises');

fs.readFile('students.json', 'utf8')
    .then(data => {
        const students = JSON.parse(data);

        const result = students.map(student => {
            const total = student.grades.reduce((sum, grade) => sum + grade, 0);
            const average = total / student.grades.length;

            return {
                name: student.name,
                average: average
            };
        });

        console.log(result);
    })
    .catch(error => {
        console.error('Error reading student data:', error);
    });

