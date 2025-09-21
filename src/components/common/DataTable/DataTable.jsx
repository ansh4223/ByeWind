import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Checkbox,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { MoreVertical, ChevronLeft, ChevronRight, Plus, Filter, ArrowUpDown, Search } from "lucide-react";

const DataTable = ({
  data = [],
  columns = [],
  showPagination = true,
  defaultRowsPerPage = 10,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [page, setPage] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const rowsPerPage = defaultRowsPerPage;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  React.useEffect(() => {
    setPage(0);
  }, [searchTerm]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = paginatedData.map((row, index) => row.id || `row-${page * rowsPerPage + index}`);
      setSelectedRows(newSelected);
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const getStatusDotColor = (status) => {
    const statusColors = {
      Complete: "#4AA785", 
      "In Progress": "#8A8CD9",
      Pending: "#59A8D4",
      Approved: "#FFC555",
      Rejected: theme.palette.mode === 'dark' ? "#FFFFFF66" : "#1C1C1C66",
    };
    return statusColors[status] || "#6B7280";
  };

  const renderCellContent = (column, row) => {
    const value = row[column.field];

    switch (column.type) {
      case "user":
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src={value.avatar}
              alt={value.name}
              sx={{ width: 32, height: 32 }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
              {value.name}
            </Typography>
          </Box>
        );

      case "status":
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: getStatusDotColor(value),
              }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: "12px", color: getStatusDotColor(value) }}>
              {value}
            </Typography>
          </Box>
        );

      case "currency":
        return (
          <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
            ${value.toLocaleString()}
          </Typography>
        );

      case "actions":
        return (
          <IconButton size="small">
            <MoreVertical size={16} />
          </IconButton>
        );

      default:
        return <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>{value}</Typography>;
    }
  };

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aId = a.id || a.orderId || 0;
      const bId = b.id || b.orderId || 0;
      return sortOrder === "asc" ? aId - bId : bId - aId;
    });
  }, [filteredData, sortOrder]);

  const paginatedData = showPagination
    ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : sortedData;

  return (
    <Paper sx={{ 
      width: "100%", 
      overflow: "hidden", 
      border:"none !important", 
      boxShadow:"none !important",
      backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
    }}>
      {/* Toolbar Section */}
      <Box sx={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        p: 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
        borderRadius: '4px',
        backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f5f5f5',
      }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            startIcon={<Plus size={16} />}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f5f5f5',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? '#525252' : '#eeeeee',
              },
              textTransform: 'none',
              fontSize: '14px',
              minWidth: 'auto',
              px: 2
            }}
          >
            
          </Button>
          
          <IconButton 
            sx={{ 
              backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f5f5f5',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? '#525252' : '#eeeeee',
              }
            }}
          >
            <Filter size={16} />
          </IconButton>
          
          <IconButton 
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            sx={{ 
              backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#f5f5f5',
              color: theme.palette.text.primary,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? '#525252' : '#eeeeee',
              }
            }}
          >
            <ArrowUpDown size={16} />
          </IconButton>
        </Box>

        <TextField
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{
            width: 250,
            '& .MuiOutlinedInput-root': {
              backgroundColor: theme.palette.none,
              fontSize: '14px',
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={16} color={theme.palette.text.secondary} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <TableContainer sx={{ 
        maxHeight: isMobile ? 400 : 600, 
        border:"none !important",
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
      }}>
        <Table stickyHeader aria-label="data table" sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff' }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff' }}>
              <TableCell padding="checkbox" sx={{ 
                backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff', 
                py: 0.5 
              }}>
                <Checkbox
                  indeterminate={selectedRows.length > 0 && selectedRows.length < paginatedData.length}
                  checked={paginatedData.length > 0 && selectedRows.length === paginatedData.length}
                  onChange={handleSelectAllClick}
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#C6C7F8' : '#000000',
                    '&.Mui-checked': {
                      color: theme.palette.mode === 'dark' ? '#C6C7F8' : '#000000',
                    },
                  }}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align || "left"}
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                    minWidth: column.minWidth,
                    display:
                      column.hideOnMobile && isMobile ? "none" : "table-cell",
                    py: 0.5, // Reduced header padding
                  }}
                >
                  {column.headerName}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff' }}>
            {paginatedData.map((row, index) => {
              const rowId = row.id || `row-${page * rowsPerPage + index}`;
              const isItemSelected = isSelected(rowId);
              
              return (
                <TableRow
                  hover
                  key={rowId}
                  selected={isItemSelected}
                  sx={{ 
                    "&:last-child td, &:last-child th": { border: 0 },
                    height: 36, // Further reduced row height
                    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark' ? '#111111' : '#f9f9f9',
                    },
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.mode === 'dark' ? '#222222' : '#f0f0f0',
                    },
                  }}
                >
                  <TableCell padding="checkbox" sx={{ 
                    py: 0.25,
                    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
                  }}>
                    <Checkbox
                      checked={isItemSelected}
                      onChange={() => handleSelectRow(rowId)}
                      sx={{
                        color: theme.palette.mode === 'dark' ? '#C6C7F8' : '#000000',
                        '&.Mui-checked': {
                          color: theme.palette.mode === 'dark' ? '#C6C7F8' : '#000000',
                        },
                      }}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      align={column.align || "left"}
                      sx={{
                        display:
                          column.hideOnMobile && isMobile ? "none" : "table-cell",
                        py: 0.25, // Further reduced vertical padding
                        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
                      }}
                    >
                      {renderCellContent(column, row)}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {showPagination && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            p: 2,
            gap: 1,
            borderTop: "1px solid",
            borderColor: "divider",
            backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={() => handleChangePage(null, page - 1)}
            disabled={page === 0}
            size="small"
            sx={{ 
              minWidth: 32, 
              height: 32,
              color: page === 0 ? "text.disabled" : "text.primary"
            }}
          >
            <ChevronLeft size={16} />
          </IconButton>

          {/* Page Numbers */}
          {Array.from({ length: Math.ceil(sortedData.length / rowsPerPage) }, (_, index) => (
            <IconButton
              key={index}
              onClick={() => handleChangePage(null, index)}
              size="small"
              sx={{
                minWidth: 32,
                height: 32,
                backgroundColor: page === index 
                  ? (theme.palette.mode === 'dark' ? "#404040" : "#f5f5f5")
                  : "transparent",
                color: page === index 
                  ? (theme.palette.mode === 'dark' ? "#ffffff" : "#000000")
                  : "text.primary",
                "&:hover": {
                  backgroundColor: page === index 
                    ? (theme.palette.mode === 'dark' ? "#505050" : "#e0e0e0")
                    : "action.hover",
                },
                fontWeight: page === index ? 600 : 400,
                borderRadius: 1,
              }}
            >
              {index + 1}
            </IconButton>
          ))}

          {/* Next Button */}
          <IconButton
            onClick={() => handleChangePage(null, page + 1)}
            disabled={page >= Math.ceil(sortedData.length / rowsPerPage) - 1}
            size="small"
            sx={{ 
              minWidth: 32, 
              height: 32,
              color: page >= Math.ceil(sortedData.length / rowsPerPage) - 1 ? "text.disabled" : "text.primary"
            }}
          >
            <ChevronRight size={16} />
          </IconButton>
        </Box>
      )}
    </Paper>
  );
};

export default DataTable;
