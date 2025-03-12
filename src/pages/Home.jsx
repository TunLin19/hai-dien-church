import { Link } from "react-router-dom";
import churchImage from "../assets/church.jpg"; // You'll need to add this image to your assets folder

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[640px]">
        <div className="absolute inset-0">
          <img
            src={churchImage}
            alt="Nhà thờ Hải Điền"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Giáo xứ Hải Điền</h1>
            <p className="text-xl mb-8 italic">
              Chào mừng quý ông bà và anh chị em đến với cộng đoàn Giáo xứ Hải
              Điền
            </p>
            <Link
              className="bg-holy-gold text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
              to="/about"
            >
              Tìm hiểu thêm {`>>`}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="container mx-auto py-12 px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold  mb-6">
            Chào mừng đến với Giáo xứ Hải Điền
          </h2>
          <p className="text-gray-700 mb-6">
            Chúng tôi vui mừng chào đón bạn đến với cộng đoàn đức tin của chúng
            tôi. Giáo xứ Hải Điền là nơi chúng ta cùng nhau thờ phượng, cầu
            nguyện và phục vụ trong tình yêu của Chúa Kitô.
          </p>
          <div className="w-16 h-1 bg-holy-gold mx-auto"></div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-800 mb-12">
            Thông Báo Mới
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Announcement Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Lịch Lễ Mùa Chay</h3>
              <p className="text-gray-600 mb-4">
                Thông báo lịch lễ và các hoạt động trong Mùa Chay năm 2025
              </p>
              <a href="#" className="text-cyan-600 hover:text-cyan-700">
                Xem chi tiết →
              </a>
            </div>
            {/* Add more announcement cards */}
          </div>
        </div>
      </section>

      {/* Mass Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-cyan-800 mb-12">
            Giờ Lễ
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ngày Thường</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Sáng</span>
                    <span>5:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chiều</span>
                    <span>17:30</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Chúa Nhật</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Sáng</span>
                    <span>5:00 - 7:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Chiều</span>
                    <span>16:30 - 18:30</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Sự kiện sắp tới</h2>
          <Link
            to="/events"
            className="text-holy-blue hover:text-holy-gold font-medium"
          >
            Xem tất cả →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-holy-gold">
            <h3 className="text-xl font-serif text-holy-blue">Lễ Chúa Nhật</h3>
            <p className="mt-2 text-gray-600">Thời gian: 7:00 AM</p>
            <p className="text-gray-600">Ngày: Mỗi Chủ nhật</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border border-holy-gold">
            <h3 className="text-xl font-serif text-holy-blue">
              Rửa tội tập thể
            </h3>
            <p className="mt-2 text-gray-600">Thời gian: 9:00 AM</p>
            <p className="text-gray-600">Ngày: 20/03/2025</p>
          </div>
        </div>
      </section>

      {/* Ministry/Activities */}
      <section className="bg-gray-100 w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-holy-blue text-center mb-8">
            Các Hoạt Động Mục Vụ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-holy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🙏</span>
              </div>
              <h3 className="text-xl font-medium text-holy-blue mb-2">
                Cầu Nguyện
              </h3>
              <p className="text-gray-700">
                Các nhóm cầu nguyện và thờ phượng hàng tuần
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-holy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-medium text-holy-blue mb-2">
                Bác Ái
              </h3>
              <p className="text-gray-700">
                Các hoạt động từ thiện và hỗ trợ cộng đồng
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-holy-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">📚</span>
              </div>
              <h3 className="text-xl font-medium text-holy-blue mb-2">
                Giáo Lý
              </h3>
              <p className="text-gray-700">Các lớp giáo lý cho mọi lứa tuổi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-holy-blue w-full py-10 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif mb-4">
            Liên hệ với Giáo xứ Hải Điền
          </h2>
          <p className="mb-6">Chúng tôi rất mong được kết nối với bạn</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div>
              <span className="font-medium">Địa chỉ:</span> [Thêm địa chỉ thật]
            </div>
            <div>
              <span className="font-medium">Điện thoại:</span> [Số điện thoại]
            </div>
            <div>
              <span className="font-medium">Email:</span>{" "}
              haidienchurch@example.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
