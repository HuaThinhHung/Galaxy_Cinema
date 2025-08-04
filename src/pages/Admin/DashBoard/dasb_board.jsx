import React from "react";
import {
  Film,
  Users,
  MapPin,
  TrendingUp,
  Calendar,
  Star,
  Eye,
  Clock,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Phim đang chiếu",
      value: "120",
      icon: Film,
      gradient: "from-purple-600 to-purple-400",
      change: "+12%",
      trend: "up",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Người dùng",
      value: "3,500",
      icon: Users,
      gradient: "from-blue-600 to-blue-400",
      change: "+23%",
      trend: "up",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Rạp chiếu",
      value: "15",
      icon: MapPin,
      gradient: "from-emerald-600 to-emerald-400",
      change: "+2",
      trend: "up",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
  ];

  const quickMetrics = [
    {
      label: "Doanh thu hôm nay",
      value: "₫2.4M",
      icon: TrendingUp,
      color: "text-green-600",
    },
    { label: "Lượt xem", value: "12.5K", icon: Eye, color: "text-blue-600" },
    {
      label: "Thời gian TB",
      value: "2h 15m",
      icon: Clock,
      color: "text-purple-600",
    },
    {
      label: "Đánh giá TB",
      value: "4.8",
      icon: Star,
      color: "text-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dashboard Cinema
        </h1>
        <p className="text-gray-600">Tổng quan hoạt động hệ thống rạp chiếu</p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8 opacity-10">
                <div
                  className={`w-full h-full rounded-full bg-gradient-to-br ${stat.gradient}`}
                ></div>
              </div>

              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                    <IconComponent
                      className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-green-500">
                      {stat.change}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                </div>

                <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.gradient} w-3/4 rounded-full`}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {quickMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-500">{metric.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              Doanh thu theo tuần
            </h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                7 ngày
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                30 ngày
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end space-x-2">
            {[40, 65, 45, 80, 90, 75, 85].map((height, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Popular Movies */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Phim phổ biến
          </h3>
          <div className="space-y-4">
            {[
              { name: "Spider-Man: No Way Home", rating: 4.9, views: "2.1K" },
              { name: "The Batman", rating: 4.7, views: "1.8K" },
              { name: "Doctor Strange 2", rating: 4.6, views: "1.5K" },
              { name: "Top Gun: Maverick", rating: 4.8, views: "1.3K" },
            ].map((movie, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{movie.name}</p>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">
                        {movie.rating}
                      </span>
                      <span className="text-sm text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {movie.views} lượt xem
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
