import React from "react";

export default function AppPromotion({ isDarkMode = false }) {
  return (
    <section className="py-16 transition-colors duration-300 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Mobile App Preview */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto w-64 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* App Screen */}
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
                    <h3 className="text-white font-bold text-lg">Tài Khoản</h3>
                  </div>

                  {/* G-Star Mobile Card */}
                  <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-sm mx-auto">
                    {/* Tiêu đề */}
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Đăng Ký Thành Viên Galaxy Cinema
                      </h4>
                      <p className="text-sm text-gray-600">Nhận Ngay Ưu Đãi!</p>
                    </div>

                    {/* Ưu điểm */}
                    <div className="space-y-3 mb-6">
                      {/* Tích điểm */}
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-800">Tích điểm</span>
                      </div>

                      {/* Đổi quà */}
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-800">Đổi quà</span>
                      </div>

                      {/* Ưu đãi */}
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-800">
                          Ưu đãi đặc biệt
                        </span>
                      </div>
                    </div>

                    {/* Nút hành động */}
                    <div className="space-y-2">
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                        Đăng Ký
                      </button>
                      <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                        Đăng Nhập
                      </button>
                    </div>

                    {/* Hotline */}
                    <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">
                        HOTLINE hỗ trợ: <strong>19002224</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Đặt Vé Online - Không Lo Trễ Nải
            </h2>
            <p className="text-lg mb-8 leading-relaxed text-gray-600">
              Ghét đông đúc ồn ào? Lười xếp hàng mua vé? Hãy quên đi cách mua vé
              giấy truyền thống tốn thời gian hay xếp hàng lấy vé online phiền
              toái.
            </p>

            {/* QR Code */}
            <div className="mb-8">
              <div className="bg-white p-4 rounded-lg inline-block">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="https://www.galaxycine.vn/_next/static/media/glx-qr-code-1.218ae7da.svg"
                      alt="QR Code"
                      className="w-24 h-24 mb-2 rounded-lg object-contain"
                    />
                    <p className="text-gray-600 text-xs">QR Code</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-row space-x-4 mt-6">
              <a
                href="https://apps.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.galaxycine.vn/_next/static/media/icon-ios-app-store.65ed00df.svg"
                  alt="App Store"
                  className="w-36 h-auto"
                />
              </a>

              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.galaxycine.vn/_next/static/media/icon-google-app-store.f4c38402.svg"
                  alt="Google Play"
                  className="w-39 h-auto"
                />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600">
                Tải ứng dụng Galaxy Cinema để đặt vé nhanh hơn, tiện lợi hơn!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Trang chủ thông tin */}
      <div class="max-w-4xl mx-auto px-4 py-8 text-justify leading-relaxed text-gray-800">
        <h2 class="text-2xl font-bold mb-4 border-l-4 border-red-600 pl-3 text-red-700 uppercase">
          Trang Chủ
        </h2>

        <p>
          <span class="font-bold text-red-600">Galaxy Cinema</span> là một trong
          những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003,
          đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí
          được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút
          hàng triệu lượt người đến xem,{" "}
          <span class="font-bold text-red-600">Galaxy Cinema</span> còn hấp dẫn
          khán giả bởi không khí thân thiện cùng như chất lượng dịch vụ hàng
          đầu.
        </p>

        <p class="mt-4">
          Đến website <span class="italic">galaxycine.vn</span>, khách hàng sẽ
          dễ dàng tham khảo các <strong>phim hay nhất, phim mới nhất</strong>{" "}
          đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên.{" "}
          <span class="font-semibold">Lịch chiếu</span> tại tất cả hệ thống rạp
          chiếu của <span class="font-bold text-red-600">Galaxy Cinema</span>{" "}
          cũng được cập nhật đầy đủ hằng ngày hàng giờ trên{" "}
          <span class="italic">trang chủ</span>.
        </p>

        <p class="mt-4">
          Giờ đây đặt vé tại{" "}
          <span class="font-bold text-red-600">Galaxy Cinema</span> càng thêm dễ
          dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua
          vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày.
          Sau đó, hoàn thành mua vé theo các bước hướng dẫn. Chỉ trong vài phút,
          quý khách sẽ nhận được tin nhắn và email phản hồi{" "}
          <strong>Đặt vé thành công của Galaxy Cinema</strong>. Quý khách có thể
          dùng tin nhắn lấy vé tại quầy vé của{" "}
          <span class="font-bold text-red-600">Galaxy Cinema</span> hoặc quét mã
          QR để mở bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.
        </p>

        <p class="mt-4">
          Nếu bạn đã chọn được <strong>phim hay</strong> để xem, hãy đặt vé cực
          nhanh bằng tab <strong>Mua Vé Nhanh</strong> ngay từ{" "}
          <span class="italic">Trang Chủ</span>. Chỉ cần một phút, tin nhắn và
          email phản hồi của{" "}
          <span class="font-bold text-red-600">Galaxy Cinema</span> sẽ gửi ngay
          vào điện thoại của bạn.
        </p>

        <p class="mt-4">
          Nếu chưa quyết định sẽ xem <strong>phim mới nào</strong>, hãy tham
          khảo thông tin các phim hay trong mục <strong>Phim Đang Chiếu</strong>{" "}
          cũng như <strong>Phim Sắp Chiếu</strong> tại rạp chiếu phim bằng cách
          vào mục <strong>Bình Luận Phim ở Góc Điện Ảnh</strong> để đọc những
          bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ việc
          đặt vé bằng box <strong>Mua Vé Nhanh</strong> ngay ở đầu trang để được
          suất chiếu và chỗ ngồi vừa ý nhất.
        </p>

        <p class="mt-4">
          <span class="font-bold text-red-600">Galaxy Cinema</span> luôn có
          những chương trình <strong>khuyến mãi, ưu đãi</strong> tặng vé vô cùng
          hấp dẫn như <strong>giảm giá vé</strong>, tặng vé xem phim miễn phí,
          tặng Combo, tặng quà phim… dành cho các khách hàng.
        </p>

        <p class="mt-4">
          Trang web <span class="italic">galaxycine.vn</span> còn có mục{" "}
          <strong>Góc Điện Ảnh</strong> – nơi lưu trữ dữ liệu về điện ảnh và đạo
          diễn, những bài viết chuyên sâu về điện ảnh, hỗ trợ người yêu phim dễ
          dàng hơn trong việc chọn phim và bổ sung thêm kiến thức về điện ảnh
          cho bản thân. Ngoài ra, vào mỗi tháng,{" "}
          <span class="font-bold text-red-600">Galaxy Cinema</span> cũng giới
          thiệu các{" "}
          <strong>phim sắp chiếu hot nhất trong mục Phim Hay Tháng</strong>.
        </p>

        <p class="mt-4">
          Hiện nay, <span class="font-bold text-red-600">Galaxy Cinema</span>{" "}
          đang ngày càng phát triển hơn nữa các chương trình đặc sắc, các khuyến
          mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới
          và Việt Nam nhanh chóng và sớm nhất.
        </p>
      </div>
    </section>
  );
}
