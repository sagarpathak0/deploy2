"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { BsBell } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaRegCommentDots, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Link from "next/link";
import LogoutButton from "../../components/buttons/LogoutButton"; // Adjust the import path as needed
// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  // Top Stats
  const topStats = [
    { label: "Total Transactions", value: "80,012" },
    { label: "Active Fraud Detected", value: "1,023", percent: "35.5%" },
    { label: "Valid Transactions", value: "78,989", percent: "40.4%" },
    { label: "Amount", value: "₹9,115M+" },
  ];

  // Overview (Line Chart)
  const overviewData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Fraudulent Transactions",
        data: [40, 65, 45, 80, 70, 90, 100],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Chargeback Cases",
        data: [20, 30, 25, 40, 35, 50, 60],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // This Week Statistics (Bar Chart)
  const weeklyStatsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Transactions",
        data: [80, 90, 70, 100, 120, 110, 95],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  // Small line chart (Suspicious Expense Ratio)
  const smallLineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Suspicious Expense Ratio",
        data: [2.3, 3.1, 5.2, 4.8, 5.3],
        borderColor: "rgba(255, 206, 86, 1)",
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Report (Bar Chart)
  const reportData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [1200, 1500, 900, 1800, 2200, 2000],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
      {
        label: "Cost",
        data: [800, 900, 700, 1200, 1500, 1300],
        backgroundColor: "rgba(255,99,132,0.6)",
      },
    ],
  };

  // Suspicious Transactions Table
  const suspiciousTransactions = [
    {
      id: "7890243",
      company: "ABC Digital Solutions",
      status: "Valid Transaction",
      amount: "₹49,000",
    },
    {
      id: "7890244",
      company: "XYZ eCommerce Pvt Ltd",
      status: "Need Manual Review",
      amount: "₹51,000",
    },
    {
      id: "7890245",
      company: "QuickLoans Finance",
      status: "Valid Transaction",
      amount: "₹10,500",
    },
    {
      id: "7890246",
      company: "SecurePay Online",
      status: "Fraud Detected",
      amount: "₹6,500",
    },
    {
      id: "7890247",
      company: "FinTech Investments",
      status: "Valid Transaction",
      amount: "₹32,000",
    },
    {
      id: "7890248",
      company: "TrustBank Credit Services",
      status: "Need Manual review",
      amount: "₹26,000",
    },
  ];

  // Transaction History
  const transactionHistory = [
    {
      id: "#102843",
      date: "Oct 24, 2023",
      status: "Fraud Detected",
      amount: "₹4,500",
    },
    {
      id: "#102844",
      date: "Oct 25, 2023",
      status: "Valid Transaction",
      amount: "₹2,100",
    },
    {
      id: "#102845",
      date: "Oct 25, 2023",
      status: "Need Manual review",
      amount: "₹5,000",
    },
  ];

  // Chart Options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" as const },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-200 space-x-2">
          <Image src={Logo} alt="Saas Logo" height={40} width={40} />
          {/* Company logo placeholder to the left */}
          {/* <div className="w-8 h-8 bg-gray-200 rounded-full" /> */}

          <h1 className="text-xl font-bold text-blue-600">FinSafe</h1>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-sm font-medium text-white bg-blue-600 rounded-md"
              >
                <span>Dashboard</span>
              </a>
            </li>
            <LogoutButton />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none focus:ring-0 text-sm"
            />
          </div>
          <div className="flex items-center space-x-4">
            <BsBell className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <FaUserCircle size={30} className="w-8 h-8 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 space-y-6 overflow-auto">
          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow flex flex-col space-y-2"
              >
                <div className="text-gray-500 text-sm">{stat.label}</div>
                <div className="text-2xl font-semibold text-gray-800">
                  {stat.value}
                  {stat.percent && (
                    <span className="ml-2 text-sm font-normal text-blue-600">
                      {stat.percent}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overview (Line Chart) */}
            <div className="col-span-2 bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-gray-800">Overview</h2>
              </div>
              <div className="h-64">
                <Line data={overviewData} options={chartOptions} />
              </div>
            </div>

            {/* This Week Statistics (Bar Chart) */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                This Week Statistics
              </h2>
              <div className="h-64">
                <Bar data={weeklyStatsData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Middle Row: Suspicious Transactions & Small Line Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Suspicious Transactions Table */}
            <div className="col-span-2 bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Suspicious Transactions
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 font-semibold text-gray-600">
                        ID
                      </th>
                      <th className="py-2 px-4 font-semibold text-gray-600">
                        Company
                      </th>
                      <th className="py-2 px-4 font-semibold text-gray-600">
                        Status
                      </th>
                      <th className="py-2 px-4 font-semibold text-gray-600">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {suspiciousTransactions.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{item.id}</td>
                        <td className="py-2 px-4">{item.company}</td>
                        <td className="py-2 px-4">{item.status}</td>
                        <td className="py-2 px-4">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Small Line Chart (Suspicious Expense Ratio) */}
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Suspicious Expense Ratio
              </h2>
              <div className="h-48">
                <Line data={smallLineData} options={chartOptions} />
              </div>
              <div className="mt-4 text-sm text-gray-600">
                High-Risk Accounts:{" "}
                <span className="font-medium text-red-500">5.2%</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Report (Bar Chart), Transaction History & Help & Support */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Report (Bar Chart) */}
            <div className="col-span-2 bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Report</h2>
              <div className="h-64">
                <Bar data={reportData} options={chartOptions} />
              </div>
            </div>

            {/* Right Column: Transaction History & Help & Support */}
            <div className="flex flex-col space-y-6">
              {/* Transaction History */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Transaction History
                </h2>
                <ul className="space-y-2 text-sm">
                  {transactionHistory.map((tx) => (
                    <li
                      key={tx.id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <span className="font-medium">{tx.id}</span> - {tx.date}
                      </div>
                      <div className="font-medium text-gray-700">
                        {tx.amount}
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          tx.status === "Fraud Detected"
                            ? "bg-red-100 text-red-600"
                            : tx.status === "Valid Transaction"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {tx.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">
                  Help & Support
                </h2>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <FaRegCommentDots className="text-blue-500" />
                  <span>Live Chat Available</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Need assistance with a suspicious case? Our support team is
                  here to help you 24/7.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
