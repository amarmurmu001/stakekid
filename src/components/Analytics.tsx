'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface AnalyticsProps {
  postId?: string; // Optional: if not provided, show overall blog analytics
}

interface AnalyticsData {
  views: number;
  comments: number;
  likes: number;
  shares: number;
}

interface TimeSeriesData {
  labels: string[];
  views: number[];
  comments: number[];
}

export default function Analytics({ postId }: AnalyticsProps) {
  const [currentStats, setCurrentStats] = useState<AnalyticsData>({
    views: 0,
    comments: 0,
    likes: 0,
    shares: 0,
  });
  const [timeSeriesData, setTimeSeriesData] = useState<TimeSeriesData>({
    labels: [],
    views: [],
    comments: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchAnalytics();
  }, [postId]);

  const fetchAnalytics = async () => {
    try {
      // Fetch current stats
      const statsResponse = await fetch(`/api/analytics/stats${postId ? `?postId=${postId}` : ''}`);
      if (!statsResponse.ok) throw new Error('Failed to fetch analytics stats');
      const statsData = await statsResponse.json();
      setCurrentStats(statsData);

      // Fetch time series data (last 7 days)
      const timeSeriesResponse = await fetch(
        `/api/analytics/timeseries${postId ? `?postId=${postId}` : ''}`
      );
      if (!timeSeriesResponse.ok) throw new Error('Failed to fetch time series data');
      const timeSeriesData = await timeSeriesResponse.json();
      setTimeSeriesData(timeSeriesData);
    } catch (err) {
      setError('Failed to load analytics data');
    } finally {
      setLoading(false);
    }
  };

  const chartData: ChartData<'line'> = {
    labels: timeSeriesData.labels,
    datasets: [
      {
        label: 'Views',
        data: timeSeriesData.views,
        borderColor: 'rgb(234, 179, 8)',
        backgroundColor: 'rgba(234, 179, 8, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Comments',
        data: timeSeriesData.comments,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-32 bg-slate-800 rounded-lg"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-slate-800 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-500 text-red-400 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400">Total Views</h3>
          <p className="text-2xl font-bold text-yellow-500">{currentStats.views}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400">Comments</h3>
          <p className="text-2xl font-bold text-blue-500">{currentStats.comments}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400">Likes</h3>
          <p className="text-2xl font-bold text-green-500">{currentStats.likes}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-slate-400">Shares</h3>
          <p className="text-2xl font-bold text-purple-500">{currentStats.shares}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-slate-800 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Engagement Over Time</h3>
        <div className="h-64">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: 'rgba(148, 163, 184, 0.1)',
                  },
                  ticks: {
                    color: '#94a3b8',
                  },
                },
                x: {
                  grid: {
                    color: 'rgba(148, 163, 184, 0.1)',
                  },
                  ticks: {
                    color: '#94a3b8',
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    color: '#94a3b8',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}