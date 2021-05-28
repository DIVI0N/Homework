const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "hw",
    password: "root",
    port: "3306"
});

const query = 'SELECT * FROM Person';
connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 1. Вывести общее число жителей

const Persons = 'SELECT COUNT(*) as number FROM Person';
connection.query(Persons, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 2. Вывести средний возраст жителей

const avgAge = 'SELECT ROUND(AVG(AGE)) as avg FROM Person';
connection.query(avgAge, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 3. Вывести отсортированный по алфавиту список фамилий без повторений

const sortLastName = 'SELECT DISTINCT LASTNAME FROM Person ORDER BY LASTNAME';
connection.query(sortLastName, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 4. Вывести список фамилий, с указанием количества повторений этих фамилий в общем списке

const iterateLastName = 'SELECT LASTNAME, COUNT(LASTNAME) FROM Person GROUP BY LASTNAME';
connection.query(iterateLastName, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 5. Вывести фамилии, которые содержат в середине букву «б»

const containsLastName = 'SELECT LASTNAME FROM Person WHERE LASTNAME LIKE "%b%"';
connection.query(containsLastName, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 6. Вывести список «бездомных»

const homeless = 'SELECT * FROM Person WHERE ID_Street IS NULL';
connection.query(homeless, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 7. Вывести список несовершеннолетних, проживающих на проспекте Правды

const minorsPravdu = 'SELECT FIRSTNAME,LASTNAME,AGE FROM Person INNER JOIN Street ON Person.ID_Street = Street.ID WHERE AGE < 18 AND NAME like "Правды"';
connection.query(minorsPravdu, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 8. Вывести упорядоченный по алфавиту список всех улиц с указанием, сколько жильцов живёт на улице

const sortStreets = 'SELECT Name, count(*) as number FROM Person INNER JOIN Street ON Person.ID_street = Street.ID GROUP BY Name ORDER BY Name';
connection.query(sortStreets, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 9. Вывести список улиц, название которых состоит из 6-ти букв

const streetsSix = 'SELECT NAME FROM Street WHERE NAME LIKE "______"';
connection.query(streetsSix, (err, result) => {
    if (err) throw err;
    console.log(result);
});

// 10. Вывести список улиц с количеством жильцов на них меньше 3

const lessThanTenants = 'SELECT NAME,count(Person.ID) as NUMBER_NAME FROM Person INNER JOIN Street ON Person.ID_Street = Street.ID GROUP BY NAME HAVING count(Person.ID) < 3';
connection.query(lessThanTenants, (err, result) => {
    if (err) throw err;
    console.log(result);
});