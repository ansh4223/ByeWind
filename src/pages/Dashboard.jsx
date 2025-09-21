import React, { useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Plus, Filter, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store";
import DataTable from "../components/common/DataTable/DataTable";
import { ordersData } from "../data/dummyData";

const Dashboard = () => {
  const navigate = useNavigate();
  const { setOrders } = useAppStore();

  useEffect(() => {
    setOrders(ordersData);
  }, [setOrders]);

  const columns = [
    {
      field: "orderId",
      headerName: "Order ID",
      minWidth: 120,
      hideOnMobile: false,
    },
    {
      field: "user",
      headerName: "User",
      type: "user",
      minWidth: 200,
      hideOnMobile: false,
    },
    {
      field: "project",
      headerName: "Project",
      minWidth: 180,
      hideOnMobile: true,
    },
    {
      field: "address",
      headerName: "Address",
      minWidth: 200,
      hideOnMobile: true,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 150,
      hideOnMobile: true,
    },
    {
      field: "status",
      headerName: "Status",
      type: "status",
      minWidth: 120,
      hideOnMobile: false,
    },
    {
      field: "actions",
      headerName: "",
      type: "actions",
      minWidth: 50,
      hideOnMobile: false,
    },
  ];

  return (
    <Box mt={2}>
      <Box
        sx={{
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          Order List
        </Typography>
        
      </Box>

      {/* Orders Table */}
      <DataTable data={ordersData} columns={columns} showPagination={true} />
    </Box>
  );
};

export default Dashboard;
