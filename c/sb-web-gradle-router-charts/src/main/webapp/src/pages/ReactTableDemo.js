import React, {Component} from 'react';
import styled from 'styled-components';
import Table from '../components/display/table/Table'


class ReactTableDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "score": 17.592657,
                    "show": {
                        "id": 44813,
                        "url": "http://www.tvmaze.com/shows/44813/the-snow-spider",
                        "name": "The Snow Spider",
                        "type": "Scripted",
                        "language": "English",
                        "genres": [
                            "Drama",
                            "Fantasy"
                        ],
                        "status": "In Development",
                        "runtime": 30,
                        "premiered": null,
                        "officialSite": null,
                        "schedule": {
                            "time": "",
                            "days": []
                        }
                    }
                }
            ],
            columns: [
                {
                    // first group - TV Show
                    Header: "TV Show",
                    // First group columns
                    columns: [
                        {
                            Header: "Name",
                            accessor: "show.name"
                        },
                        {
                            Header: "Type",
                            accessor: "show.type"
                        }
                    ]
                },
                {
                    // Second group - Details
                    Header: "Details",
                    // Second group columns
                    columns: [
                        {
                            Header: "Language",
                            accessor: "show.language"
                        },
                        {
                            Header: "Genre(s)",
                            accessor: "show.genres"
                        },
                        {
                            Header: "Runtime",
                            accessor: "show.runtime"
                        },
                        {
                            Header: "Status",
                            accessor: "show.status"
                        }
                    ]
                }
            ]
        }
        this.Styles = styled.div`
          padding: 1rem;
        
          table {
            border-spacing: 0;
            border: 1px solid black;
        
            tr {
              :last-child {
                td {
                  border-bottom: 0;
                }
              }
            }
        
            th,
            td {
              margin: 0;
              padding: 0.5rem;
              border-bottom: 1px solid black;
              border-right: 1px solid black;
        
              :last-child {
                border-right: 0;
              }
            }
          }
        `
    }

    render() {
        return (
            <div>
                <Table columns={this.state.columns} data={this.state.data}/>
            </div>
        );
    }
}

export default ReactTableDemo;