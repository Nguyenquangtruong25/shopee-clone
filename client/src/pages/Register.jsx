import React, { useState } from 'react';
import axiosClient from '../api/axios';
// import axios from 'axios'; // Bỏ import axios trực tiếp
import '../assets/css/style.css';
import bgImage from '../assets/images/bgr-login-register.jpg';
import { useAuth } from '../context/AuthContext';
import HeaderLogin  from "../components/HeaderLogin";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from 'react-toastify'; // <-- Import toast từ react-toastify

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const { setUser } = useAuth(); // lấy hàm setUser
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      toast.error('Mật khẩu phải có ít nhất 8 ký tự'); // <-- Thay alert bằng toast.error
      return;
    }

    if (form.password !== form.password_confirmation) {
      toast.error('Mật khẩu xác nhận không khớp'); // <-- Thay alert bằng toast.error
      return;
    }

    try {
      // KHÔNG CẦN GỌI /sanctum/csrf-cookie NỮA
      // await axios.get('/sanctum/csrf-cookie', { withCredentials: true });

      const res = await axiosClient.post('/register', form);
      console.log('Success:', res.data);

      // LƯU TOKEN VÀO LOCALSTORAGE
      localStorage.setItem('access_token', res.data.access_token);
      setUser(res.data.user); // lưu user vào context

      // Thay thế alert bằng toast.success
      toast.success("Đăng ký thành công!", {
        position: "top-right", // Vị trí hiển thị
        autoClose: 2000, // Tự động đóng sau 2 giây
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Chuyển hướng sau một khoảng thời gian ngắn để người dùng kịp thấy thông báo
      setTimeout(() => {
        navigate("/"); // Chuyển hướng sau khi đăng ký thành công
      }, 2000); // Chuyển hướng sau 2 giây (phù hợp với autoClose của toast)

    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      let errorMessage = 'Đăng ký thất bại: Có lỗi xảy ra.';
      if (error.response && error.response.data && error.response.data.errors) {
         const errors = error.response.data.errors;
         let validationErrors = '';
         for (const key in errors) {
             validationErrors += errors[key].join('\n') + '\n';
         }
         errorMessage = 'Lỗi xác thực:\n' + validationErrors;
      } else if (error.response && error.response.data && error.response.data.message) {
          errorMessage = 'Đăng ký thất bại: ' + error.response.data.message;
      }
      // Thay thế alert bằng toast.error
      toast.error(errorMessage, { // <-- Thay alert bằng toast.error
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}>
              <HeaderLogin /> {/* Thêm HeaderLogin */}
      <div className="bg-[#ffffff] min-h-4">
      </div>
      <div className="font-sans">
        <div className="banner-bg">
          <div className="login-form">
            <h2 className="text-xl font-bold mb-4 text-center">Đăng ký</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  className="w-full p-2 border rounded"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                Đăng Ký
              </button>
            </form>
            <div className="mt-4 text-center">
              <span className="text-gray-500">OR</span>
            </div>
            <div id="button_bottom" className="social-buttons mt-4">
              <button className="bg-blue-600 text-white p-2 rounded flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 
  12.42-50.06 52.24-50.06h40.42V6.26S293.3 
  0 262.36 0c-73.22 0-121.08 44.38-121.08 
  124.72v70.62H89.09V288h52.19v224h100.2V288z"/>
                </svg>
                Facebook
              </button>
              <button className="bg-red-600 text-white p-2 rounded flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M488 261.8c0-17.8-1.6-35.1-4.7-51.8H249v98h135.6c-5.9 
  31.6-23.7 58.4-50.3 76.3v63h81.3c47.6-43.9 
  74.4-108.5 74.4-185.5zM249 492c67.2 0 
  123.7-22.4 164.9-60.7l-81.3-63c-22.6 
  15.2-51.4 24.1-83.6 24.1-64.3 0-118.8-43.4-138.4-101.7H28.1v64.2C69.4 
  438.1 152.4 492 249 492zM110.6 302.6c-4.8-14.2-7.5-29.4-7.5-45s2.7-30.8 
  7.5-45v-64.2H28.1C10.1 180.2 0 213.4 0 
  257.6s10.1 77.4 28.1 109.2l82.5-64.2zM249 
  100.4c35.7 0 67.7 12.3 92.9 36.3l69.6-69.6C372.6 
  27.5 316.1 0 249 0 152.4 0 69.4 53.9 28.1 
  132.2l82.5 64.2c19.6-58.3 74.1-101.7 
  138.4-101.7z"/>
                </svg>
                Google
              </button>
            </div>
            <div className="mt-4 text-center">
              <span className="text-gray-500 mr-2">Đăng nhập với mã QR</span>
              <span className="qr-code"></span>
            </div>
            <p className="text-center mt-2 text-sm text-gray-500">
              Bạn mới biết Shopee? <a href="/login" className="text-black-500">Đăng nhập</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}