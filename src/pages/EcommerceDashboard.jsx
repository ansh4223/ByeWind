import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAppStore } from "../store";
import Dashboard from "./Dashboard";
import MetricCard from "../components/common/Cards/MetricCard";
import RevenueChart from "../components/common/Charts/RevenueChart";
import DonutChart from "../components/common/Charts/DonutChart";
import RevenueByLocationCard from "../components/common/Cards/RevenueByLocationCard";
import TopSellingProducts from "../components/features/products/components/TopSellingProducts";
import {
  dashboardMetrics,
  revenueChartData,
  totalSalesData,
  topSellingProducts,
  activitiesData,
  contactsData,
  revenueByLocation,
} from "../data/dummyData";
import ProjectionsVsActualsChart from "../components/common/Charts/ProjectionsVsActualsChart";

const EcommerceDashboard = () => {
  const [showOrdersDashboard, setShowOrdersDashboard] = useState(false);
  const { setMetrics, setProducts, setActivities, setContacts } = useAppStore();

  useEffect(() => {
    setMetrics(dashboardMetrics);
    setProducts(topSellingProducts);
    setActivities(activitiesData);
    setContacts(contactsData);
  }, [setMetrics, setProducts, setActivities, setContacts]);

  const handleOrdersClick = () => {
    setShowOrdersDashboard(!showOrdersDashboard);
  };
  
  return (
    <Box sx={{ p: 2 }}>
      {showOrdersDashboard ? (
        <>
          {/* Back Button */}
          <Box sx={{ mb: 0, display: 'flex', alignItems: 'center', gap: 0 }}>
            <Typography 
              variant="body1" 
              onClick={handleOrdersClick}
              sx={{ 
                cursor: 'pointer', 
                color: 'primary.main',
                // textDecoration: 'underline',
                '&:hover': { 
                  color: 'primary.dark' 
                }
              }}
            >
              ← 
            </Typography>
          </Box>
          <Dashboard />
        </>
      ) : (
        <>
          {/* Header */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 600 }}>
              eCommerce
            </Typography>
          </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 3, 
        mb: 4,
        flexWrap: 'nowrap'
      }}>
        <Box sx={{ 
          width: '50%',
          flex: 'none'
        }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2,
            height: '100%'
          }}>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: '140px' }}>
              <MetricCard
                title={dashboardMetrics.customers.title}
                value={dashboardMetrics.customers.value}
                change={dashboardMetrics.customers.change}
                changeType={dashboardMetrics.customers.changeType}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: '140px' }}>
              <MetricCard
                title={dashboardMetrics.orders.title}
                value={dashboardMetrics.orders.value}
                change={dashboardMetrics.orders.change}
                changeType={dashboardMetrics.orders.changeType}
                isClickable={true}
                onClick={handleOrdersClick}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: '140px' }}>
              <MetricCard
                title={dashboardMetrics.revenue.title}
                value={dashboardMetrics.revenue.value}
                change={dashboardMetrics.revenue.change}
                changeType={dashboardMetrics.revenue.changeType}
                currency={dashboardMetrics.revenue.currency}
              />
            </Box>
            <Box sx={{ flex: '1 1 calc(50% - 8px)', minWidth: '140px' }}>
              <MetricCard
                title={dashboardMetrics.growth.title}
                value={dashboardMetrics.growth.value}
                change={dashboardMetrics.growth.change}
                changeType={dashboardMetrics.growth.changeType}
                unit={dashboardMetrics.growth.unit}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{ 
          width: '50%',
        }}>
          <ProjectionsVsActualsChart />
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 3, 
        mb: 4,
        flexWrap: 'nowrap'
      }}>
        <Box sx={{ 
          flex: 1,
        }}>
          <RevenueChart data={revenueChartData} />
        </Box>
        
        <Box sx={{ 
          // flex: 1,
          minWidth: '300px'
        }}>
          <RevenueByLocationCard 
            data={revenueByLocation}
            title="Revenue by Location"
          />
        </Box>
      </Box>

      <Box sx={{ 
        display: 'flex', 
        gap: 3,
        flexWrap: 'nowrap'
      }}>
        <Box sx={{ 
          flex: 1,
          minWidth: '300px'
        }}>
          <TopSellingProducts products={topSellingProducts} />
        </Box>
        
        <Box sx={{ 
          minWidth: '300px'
        }}>
          <DonutChart
            data={totalSalesData}
            title="Total Sales"
            centerValue={totalSalesData.growth}
          />
        </Box>
      </Box>
        </>
      )}
    </Box>
  );
};

export default EcommerceDashboard;
