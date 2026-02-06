import React, { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ltDataRaw from '../assets/files/LT.tsv?raw';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function BasicTable() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { headers, rows } = useMemo(() => {
        const lines = ltDataRaw.split('\n').map(line => line.trim()).filter(line => line);
        if (lines.length < 3) return { headers: [], rows: [] };

        // Line 1: Headers
        const allHeaders = lines[0].split('\t');

        // Line 2: Category (Skipped as per plan)

        // Line 3+: Data
        const allRows = lines.slice(2).map((line, index) => {
            const cells = line.split('\t');
            // Ensure row has same number of cells as headers (pad with empty strings if needed)
            // or just map based on cells.
            return { id: index, cells };
        });

        return { headers: allHeaders, rows: allRows };
    }, []);

    // Filter columns for mobile
    const visibleColumnIndices = useMemo(() => {
        if (!isMobile) {
            return headers.map((_, index) => index); // All columns
        }
        // Mobile: Show 'School' and 'Total'
        // Finding indices based on header names (case-insensitive mostly safe)
        return headers.reduce((indices, header, index) => {
            const h = header.toLowerCase();
            if (h.includes('rank') || h.includes('school') || h.includes('total')) {
                indices.push(index);
            }
            return indices;
        }, []);
    }, [headers, isMobile]);

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '100%', overflowX: 'auto', backgroundColor: '#121212', boxShadow: 'none' }}>
            <Table sx={{ minWidth: isMobile ? 300 : 650 }} aria-label="league table">
                <TableHead>
                    <TableRow>
                        {visibleColumnIndices.map((colIndex) => (
                            <TableCell key={colIndex} align={colIndex === 1 ? "left" : "center"} sx={{ fontWeight: 'bold', color: 'white', borderColor: '#444' }}>
                                {headers[colIndex]}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {visibleColumnIndices.map((colIndex) => (
                                <TableCell key={colIndex} align={colIndex === 1 ? "left" : "center"} sx={{ color: 'white', borderColor: '#333' }}>
                                    {row.cells[colIndex]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
