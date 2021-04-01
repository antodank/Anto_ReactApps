import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { forwardRef } from 'react';

import Avatar from 'react-avatar';
import Grid from '@material-ui/core/Grid'
import MaterialTable from "material-table";

import Alert from '@material-ui/lab/Alert';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

export default function TableComponent() {

    const [data, setdata] = useState([]);
    const [iserror, setIserror] = useState(false);
    const [ErrorMessages, setErrorMessages] = useState([]);

    const apiURL = 'https://reqres.in/api/';

    var columns = [
        {title: "id", field: "id", hidden: true},
        {title: "Avatar", render: rowData => <Avatar maxInitials={1} size={40} round={true} name={rowData === undefined ? " " : rowData.first_name} />  },
        {title: "First name", field: "first_name"},
        {title: "Last name", field: "last_name"},
        {title: "email", field: "email"}
      ]

    const fetchList = () =>{
        const headers = {
            "content-type": "application/json"
        };
        axios.get(`${apiURL}users`,headers)
        .then((response) => {
            setdata(response.data.data);
            console.log(response.data.data);
        })
        .catch((error) => {
            setErrorMessages(["Server unreachable"]);
            setIserror(true);
        })

    }

    useEffect(() => {
        fetchList();
    }, [])

    const pageValidation = (data) =>{

        let errorList = []
        if(data.first_name === ""){
          errorList.push("Please enter first name")
        }
        if(data.last_name === ""){
          errorList.push("Please enter last name")
        }
        if(data.email === "" ){
          errorList.push("Please enter a valid email")
        }

        return errorList;
    }

    const validateEmail = (email)=>{
        const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
        return re.test(String(email).toLowerCase());
      }

    const  handleRowUpdate = (newData,oldData,resolve) => {
        let errorStack = pageValidation(newData);
        if(errorStack.length < 1)
        {
            console.log(newData.id);
            const headers = {
                    "content-type": "application/json"
                };
            axios.post(`${apiURL}users/${newData.id}`,newData,headers)
            .then((response) => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setdata([...dataUpdate]);
                console.log(response.data.data);
                resolve();
                setIserror(false);
                setErrorMessages([]);

            })
            .catch((error) => {
                setErrorMessages(["Update failed! Server error"]);
                setIserror(true);
                resolve();
            })
        }
        else{
                setErrorMessages(errorStack);
                setIserror(true);
                resolve();
        }

    }

    const handleRowAdd = (newData, resolve) => {
        let errorStack = pageValidation(newData);
        if(errorStack.length < 1)
        {
            console.log(newData.first_name);
            console.log(newData.last_name);

            const headers = {
                "content-type": "application/json"
            };
            axios.post(`${apiURL}users/`,newData,headers)
            .then((response) => {
                const addedData = [...data,newData];
                setdata(addedData);
                resolve();
                setIserror(false);
                setErrorMessages([]);

            })
            .catch((error) => {
                setErrorMessages(["Update failed! Server error"]);
                setIserror(true);
                resolve();
            })
        }
        else{
            setErrorMessages(errorStack);
            setIserror(true);
            resolve();
        }
    }

    const handleRowDelete = (oldData, resolve) => {
        console.log(oldData.id);
        console.log(oldData.tableData);
        if(oldData.id !== undefined){
            console.log(oldData.tableData.id);
        axios.post(`${apiURL}users/${oldData.id}`,oldData)
            .then((response) => {
                const dataDelete = [...data];
                dataDelete.splice(oldData.tableData.id, 1);
                setdata([...dataDelete]);
                resolve();
                setIserror(false);
                setErrorMessages([]);

            })
            .catch((error) => {
                setErrorMessages(["Update failed! Server error"]);
                setIserror(true);
                resolve();
            })
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <div> { iserror && <Alert severity="error">
                {ErrorMessages.map((msg,index) => {
                    return <div key={index}>{msg}</div>
                }) }
                </Alert>
                    } </div>
                <div>
                    <MaterialTable
                    title="User data from remote source"
                    columns={columns}
                    data={data}
                    icons={tableIcons}
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                              handleRowUpdate(newData, oldData, resolve);
                          }),
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                            handleRowAdd(newData, resolve);
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            handleRowDelete(oldData, resolve);
                          }),
                      }}
                    >
                    </MaterialTable>
                </div>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
    )
}

