import React from 'react'
import './tablestyle.scss'

export default function UserTable(props) {
    return (
        <>
            <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0  ?
                   ( props.users.map(rec => (
                    <tr key = {rec.id}>
                        <td>{rec.firstname}</td>
                        <td>{rec.lastname}</td>
                        <td>{rec.email}</td>
                        <td><a href="/">Edit</a></td>
                        <td><a href="/">Delete</a></td>
                    </tr>)) 
                    ):( 
                <tr>
                    <td colSpan="4">No Data</td>
                </tr>
                )}
            </tbody>
            </table>
            
            <blockquote> Responsive Table </blockquote>
            
        </>
    )
}
