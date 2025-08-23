import React, { useState, useEffect } from "react";

export default function UserInfoDebug() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        setUserInfo(parsedUserInfo);
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, []);

  const clearUserInfo = () => {
    localStorage.removeItem("userInfo");
    setUserInfo(null);
    alert("Đã xóa thông tin đăng nhập. Vui lòng đăng nhập lại.");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Thông tin đăng nhập hiện tại</h1>

      {userInfo ? (
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <strong>Tài khoản:</strong> {userInfo.taiKhoan}
            </div>
            <div>
              <strong>Họ tên:</strong> {userInfo.hoTen}
            </div>
            <div>
              <strong>Email:</strong> {userInfo.email}
            </div>
            <div>
              <strong>Loại người dùng:</strong> {userInfo.maLoaiNguoiDung}
            </div>
            <div>
              <strong>Nhóm:</strong> {userInfo.maNhom}
            </div>
            <div>
              <strong>Quyền admin:</strong>
              <span
                className={
                  userInfo.maLoaiNguoiDung === "QuanTri"
                    ? "text-green-600 font-bold"
                    : "text-red-600"
                }
              >
                {userInfo.maLoaiNguoiDung === "QuanTri"
                  ? " ✅ Có"
                  : " ❌ Không"}
              </span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded">
            <strong>Token:</strong>
            <div className="text-xs text-gray-600 break-all mt-1">
              {userInfo.accessToken
                ? `${userInfo.accessToken.substring(0, 50)}...`
                : "Không có token"}
            </div>
          </div>

          <button
            onClick={clearUserInfo}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Xóa thông tin đăng nhập
          </button>
        </div>
      ) : (
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">Không có thông tin đăng nhập</p>
          <p className="text-yellow-700 text-sm mt-2">
            Vui lòng đăng nhập để xem thông tin
          </p>
        </div>
      )}
    </div>
  );
}
