import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


const GeneralTable = ({ columns, data }) => {

    const [alignment, setAlignment] = React.useState('');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const isStatusColumn = (columnName) => {
        return columnName === 'STATUS';
    };

    const isFunctionColumn = (columnName) => {
        return columnName === 'FUNCTION';
    };

    const isNameColumn = (columnName) => {
        return columnName === 'FUNCTION';
    };

    return (
        <><div style={{
            display: 'flex',
            borderRadius: '7px',
            background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
            boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.22)',
            color: '#FFFFFF',
            paddingRight: '20px',
            paddingLeft: '20px',
            width: '97%',
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            zIndex: 1,
        }}>
            <h3>Users</h3>
            <AddCircleIcon sx={{
                marginLeft: 'auto',
                marginTop: 'auto',
                marginBottom: 'auto',
                color: '#FFFFFF',
                fontSize: '30px',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
                cursor: 'pointer',
                transition: '0.3s',
                ":hover": {
                    transform: 'rotate(90deg)'
                }
            }} />
        </div>
        
        <TableContainer component={Paper} sx={{
            backgroundColor: '#FFFFFF',
            position: 'relative',
            top: -40,
            zIndex: 0,
            paddingTop: 8,
        }}>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{
                        color: "#343A40",
                        backgroundColor: "#DEE2E6",
                        filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
                        borderRadius: 1,
                        height: 30,
                        float: 'right',
                        marginRight: 2.5,
                    }}
                >
                    <ToggleButton value="Online" sx={{ 
                        border: 'none', 
                        fontSize: 10,
                        color: '#343A40',
                        fontFamily: 'Inter',
                        borderRight: '1px solid rgba(0, 0, 0, 0.1)',
                        transition: '0.3s',
                        }}>
                            Online
                    </ToggleButton>
                    <ToggleButton value="Offline" sx={{ 
                        border: 'none', 
                        fontSize: 10,
                        color: '#343A40',
                        fontFamily: 'Inter',
                        transition: '0.3s',
                        }}>
                            Offline
                    </ToggleButton>
                </ToggleButtonGroup>

                <Table sx={{
                    '# .MuiTable-roots': {
                        
                    }
                }}>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column} sx={{
                                    color: '#CCC9C9',
                                    fontFamily: 'Roboto',
                                    fontSize: '10px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    paddingTop: 4,
                                    paddingLeft: 3
                                }}>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <TableCell key={`${rowIndex}-${colIndex}`}
                                    sx={{
                                        paddingLeft: 3,
                                        color: '#7B809A',
                                        fontFamily: 'Roboto',
                                        fontSize: '12px',
                                        fontWeight: '700'
                                    }}>
                                        {isStatusColumn(column) ? (
                                            <div style={{ 
                                                background: 'linear-gradient(180deg, #66BB6A 0%, #43A047 100%)',
                                                borderRadius: 50,
                                                color: '#FFF',
                                                width: 80,
                                                fontFamily : 'Roboto',
                                                fontSize: '12px',
                                                fontWeight: '900',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>{row[column]}</div>
                                        ) : isFunctionColumn(column) ? (
                                            <div>
                                                <span>{row[column]}</span><br />
                                                    <span style={{
                                                        color: '#555', 
                                                        fontSize: '9px', 
                                                        fontWeight: '400'
                                                    }}>UCSC</span>
                                            </div>
                                            ) : isNameColumn(column) ? (
                                                <div>
                                                    <span>{row[column]}</span><br />
                                                    <span style={{
                                                        color: '#555',
                                                        fontSize: '9px',
                                                        fontWeight: '400'
                                                    }}>UCSC</span>
                                                </div>
                                            ) : (
                                                row[column]
                                            )
                                        }
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer></>
    );
};


export default GeneralTable;