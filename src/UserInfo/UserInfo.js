import React from 'react';

function UserInfo() {
    return (
        <div>
            <input type='text' name="name" placeholder="Nome" /><br/>
            <input type='text' name="surname" placeholder="Cognome" /><br/>
            <input type='text' name="email" placeholder="Email" /><br/>
            <input type='text' name="code" placeholder="Codice" /><br/>
        </div>
    )
};

export default UserInfo;
