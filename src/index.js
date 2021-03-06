import {getUsers, deleteUser} from './api/userApi';
/*
import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this answer course!`);
console.warn("eita péste!");
console.error("agora lascou de vez");
*/

// Populate table of users via API call.
getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody+=`<tr>
        <td><a href="#" data-id="${user.id}>" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        </tr>`;
    });
    global.document.getElementById('users').innerHTML = usersBody;

    const deleteLinks = global.document.getElementsByClassName("deleteUser");

    // Must use array.from to create real array from a DOM collection
    // getElementByClassname only return an "array like" object
    Array.from(deleteLinks, link => {
        link.onClick = function(event) {
            const element = event.target;
            event.preventDefault();
            deleteUser(element.attributes["data-id"].value);
            const row = element.parentNode.parentNode;
            row.parentNode.removeChild(row);
        };
    });

});
