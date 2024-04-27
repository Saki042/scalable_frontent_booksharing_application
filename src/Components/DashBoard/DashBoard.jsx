import React, { Component } from 'react';
import './DashBoard.css'

import axios from 'axios'; 

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booktitle: '',
            bookauthor: '',
            bookgenre: '',
            bookcondition: '',
            errorMessage: '',
            searchname: '',
            searchMessage: '',
            removeMessage: '',
            removename: '',
        };
    }

    handlebookgenreChange = (event) => {
        this.setState({ bookgenre: event.target.value });
    }

    handlebookconditionChange = (event) => {
        this.setState({ bookcondition: event.target.value });
    }

    handlebookauthorChange = (event) => {
        this.setState({ bookauthor: event.target.value });
    }

    handleRemoveChange = (event) => {
        this.setState({ removename: event.target.value });
    }

    handleSearchnameChange = (event) => {
        this.setState({ searchname: event.target.value });
    }

    handlebooktitleChange = (event) => {
        this.setState({ booktitle: event.target.value });
    }

    handleBookAdd = (event) => {
        event.preventDefault();
        console.log("Submit button pressed");
        //const url = " http://127.0.0.1:5000/books";

        //const { bookgenre, booktitle, bookauthor, bookcondition } = this.state;

        /*if (bookgenre === "Test" && booktitle === "Test@123" && bookauthor === "Test@123" && ) {
            this.setState({ errorMessage: "Book added" });
        } else {
            this.setState({ errorMessage: "Failure" });
        }
        axios.post('http://127.0.0.1:5000/books', {
            "Title": "Book3",
            "Author": "Author22",
            "Genre":"History",
            "Condition":"good",
            "UserId":1
        })*/
        //console.log(event.target.elements.booktitle.value);
        axios.post('http://127.0.0.1:5000/books', {
            "Title": event.target.elements.booktitle.value, 
            "Author": event.target.elements.bookauthor.value,
            "Genre": event.target.elements.bookgenre.value,
            "Condition": event.target.elements.bookcondition.value,
            "UserId":1
        })
        .then(response => {
            // Handle successful response if needed
            console.log('Data sent successfully');
        })
        .catch(error => {
            // Handle error
            console.error('Error sending data:', error);
        });
    }
    handleSearchSubmit = (event) => {
        event.preventDefault();
        const { searchname } = this.state;
        if (searchname === "A Christmas Carol") {
            this.setState({ searchMessage: "Yes the book is present in Library" });
        } else {
            this.setState({ searchMessage: "No the book is not present in the Library" });
        }
    }

    handleRemoveSubmit = (event) => {
        event.preventDefault();
        const { removename } = this.state;
        if (removename === "ABC123") {
            this.setState({ removeMessage: "Object Deleted" });
        } else {
            this.setState({ removeMessage: "Book Id doesn't exist" });
        }
    }

    render() {
        const { bookgenre, searchname, booktitle, bookauthor, bookcondition, errorMessage, searchMessage, removename, removeMessage } = this.state;

        return (
            <div>
            <h1>Scalable Systems Assignment</h1>
            <h5>Gaganpreet Singh</h5>
                <h5>Sakshi Mishra</h5>
                <h5>Diptangshu Chattopadhyay</h5>
                <h5>Mukund Krishna</h5>
            <div className="dashboard">
            <h3>Books currently with me</h3>
            <form id="booklist-form" style={{ border: '1px solid black', borderRadius: '5px', marginBottom: '10px', padding: '5px' }}>
                    <div>
                        <label>Book Id :</label>
                        <input
                            style={{ border: 'none' }}
                            type="text"
                            id="listid"
                            name="listid"
                            value="ABC123"
                        />
                        <br/>
                        <label>Book Name :</label>
                        <input
                           style={{ border: 'none' }}
                            type="text"
                            id="listname"
                            name="listname"
                            value="A Christmas Carol"
        
                        />
                        <br/>
                        <label>Book Author :</label>
                        <input
                        style={{ border: 'none' }}
                            type="text"
                            id="listauthor"
                            name="listauthor"
                            value="Charles Dicken"
                        />
                    </div> 
                </form>
                <form id="booklist-form" style={{ border: '1px solid black', borderRadius: '5px', marginBottom: '10px', padding: '5px' }}>
                    <div>
                        <label>Book Id :</label>
                        <input
                            style={{ border: 'none' }}
                            type="text"
                            id="listid"
                            name="listid"
                            value="ABC123"
                        />
                        <br/>
                        <label>Book Name :</label>
                        <input
                           style={{ border: 'none' }}
                            type="text"
                            id="listname"
                            name="listname"
                            value="A Christmas Carol"
        
                        />
                        <br/>
                        <label>Book Author :</label>
                        <input
                        style={{ border: 'none' }}
                            type="text"
                            id="listauthor"
                            name="listauthor"
                            value="Charles Dicken"
                        />
                    </div>
                </form>
                <form id="booklist-form" style={{ border: '1px solid black', borderRadius: '5px', marginBottom: '10px', padding: '5px' }}>
                    <div>
                        <label>Book Id :</label>
                        <input
                            style={{ border: 'none' }}
                            type="text"
                            id="listid"
                            name="listid"
                            value="ABC123"
                        />
                        <br/>
                        <label>Book Name :</label>
                        <input
                           style={{ border: 'none' }}
                            type="text"
                            id="listname"
                            name="listname"
                            value="A Christmas Carol"
        
                        />
                        <br/>
                        <label>Book Author :</label>
                        <input
                        style={{ border: 'none' }}
                            type="text"
                            id="listauthor"
                            name="listauthor"
                            value="Charles Dicken"
                        />
                    </div>
                    
                </form>
            </div>
            <div className="dashboard">
                <form id="search-form" onSubmit={this.handleSearchSubmit}>
                    <h2>Search for a Book in library</h2> 
                    <div className="input-group">
                        <label htmlFor="searchname">Book Name :</label>
                        <input
                            type="text"
                            id="searchname"
                            name="searchname"
                            value={searchname}
                            onChange={this.handleSearchnameChange}
                            required
                        />
                    </div>
                    <button type="submit">SEARCH</button>
                </form>
                <p id="error-message">{searchMessage}</p>
            </div>
            <div className="dashboard">
                <form id="book-add-form" onSubmit={this.handleBookAdd}>
                    <h2>Add a Book</h2> 
                    <div className="input-group">
                        <label>Book Title :</label>
                        <input
                            type="text"
                            id="booktitle"
                            name="booktitle"
                            value={booktitle}
                            onChange={this.handlebooktitleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Author :</label>
                        <input
                            type="text"
                            id="bookauthor"
                            name="bookauthor"
                            value={bookauthor}
                            onChange={this.handlebookauthorChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Genre :</label>
                        <input
                            type="text"
                            id="bookgenre"
                            name="bookgenre"
                            value={bookgenre}
                            onChange={this.handlebookgenreChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Condition :</label>
                        <input
                            type="text"
                            id="bookcondition"
                            name="bookcondition"
                            value={bookcondition}
                            onChange={this.handlebookconditionChange}
                            required
                        />
                    </div>
                    <button type="submit">ADD</button>
                </form>
                <p id="error-message">{errorMessage}</p>
            </div>
            
            <div className="dashboard">
                <form id="login-form" onSubmit={this.handleRemoveSubmit}>
                    <h2>Remove a Book</h2> 
                    <div className="input-group">
                        <label htmlFor="removename">Book Id :</label>
                        <input
                            type="text"
                            id="removename"
                            name="removename"
                            value={removename}
                            onChange={this.handleRemoveChange}
                            required
                        />
                    </div>
                    <button type="submit">REMOVE</button>
                </form>
                <p id="error-message">{removeMessage}</p>
            </div>
            </div>
        );
    }
}

export default DashBoard;
