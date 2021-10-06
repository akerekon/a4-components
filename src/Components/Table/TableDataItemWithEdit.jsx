import { data } from 'jquery';
import React from 'react';

class TableDataItemWithEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.userUsername,
            index: this.props.index
         };
         this.deleteRow = this.deleteRow.bind(this);
        //console.log("Our data are " + props.data);
        console.log("Userusername is " + this.props.userUsername + " and datausername is " + this.props.dataUsername)
        //console.log("An example name is " + rowData.name);
    }

    render() {
        let rowData = this.props.data;
        if (this.props.dataUsername === this.props.userUsername) {
            return (<tr>
                <td>{this.state.username}</td>
                <td>{rowData.name}</td>
                <td>{rowData.studentYear}</td>
                <td>{rowData.yearsRemaining}</td>
                <td>{rowData.favoriteDorm}</td>
                <td>{rowData.favoriteDining}</td>
                <td>{rowData.favoriteSpot}</td>
                <td>{rowData.notes}</td>
                <td><button class="btn btn-dark" onClick={this.editRow}>Edit This Row</button></td>
                <td><button class="btn btn-dark" onClick={this.deleteRow}>Delete This Row</button></td>
            </tr>);
        } else {
            return <td></td>
        }
    }

    deleteRow() {
        let confirmDelete = confirm("Are you sure you'd like to delete this row?");
        if (confirmDelete) {
            const json = {
                username: this.state.username,
                deletingItem: this.state.index
            }
    
            console.log("Deleting row " + this.state.index);
            fetch('/deleteRow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(json)
            }).then(res => {
                return res.json();
            }).then(json => {
                console.log("Row deleted!!");
                setTimeout(function () {
                   window.location.reload();
                }, 1000);
            })
        }
    }

}

export default TableDataItemWithEdit;