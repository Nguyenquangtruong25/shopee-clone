import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <><div className="border-t border-orange-600 w-full" /><footer className="bg-gray-100 text-gray-600 ">
          <div className="container mx-auto px-4 py-8">
              {/* Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Column 1: Customer Service */}
                  <div>
                      <h3 className="font-semibold text-lg mb-4">Chăm sóc khách hàng</h3>
                      <ul className="space-y-2">
                          <li>
                              <Link to="/help" className="hover:text-orange-500">
                                  Trung tâm trợ giúp
                              </Link>
                          </li>
                          <li>
                              <Link to="/payment" className="hover:text-orange-500">
                                  Hướng dẫn thanh toán
                              </Link>
                          </li>
                          <li>
                              <Link to="/return" className="hover:text-orange-500">
                                  Chính sách đổi trả
                              </Link>
                          </li>
                          <li>
                              <Link to="/shipping" className="hover:text-orange-500">
                                  Vận chuyển
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Column 2: About Shopee */}
                  <div>
                      <h3 className="font-semibold text-lg mb-4">Về Shopee</h3>
                      <ul className="space-y-2">
                          <li>
                              <Link to="/about" className="hover:text-orange-500">
                                  Giới thiệu
                              </Link>
                          </li>
                          <li>
                              <Link to="/careers" className="hover:text-orange-500">
                                  Tuyển dụng
                              </Link>
                          </li>
                          <li>
                              <Link to="/privacy" className="hover:text-orange-500">
                                  Chính sách bảo mật
                              </Link>
                          </li>
                          <li>
                              <Link to="/terms" className="hover:text-orange-500">
                                  Điều khoản dịch vụ
                              </Link>
                          </li>
                      </ul>
                  </div>

                  {/* Column 3: Payment & Social Media */}
                  <div>
                      <h3 className="font-semibold text-lg mb-4">Thanh toán</h3>
                      <div className="flex space-x-2 mb-4">
                          <img
                              src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8"
                              alt="Visa"
                              className="h-8" />
                          <img
                              src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08"
                              alt="JCB"
                              className="h-8" />
                          <img
                              src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281"
                              alt="COD"
                              className="h-8" />
                      </div>
                      <h3 className="font-semibold text-lg mb-4">Theo dõi chúng tôi</h3>
                      <div className="flex space-x-4">
                          <a href="https://facebook.com/shopee" target="_blank" rel="noopener noreferrer">
                              <img
                                  src="https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5"
                                  alt="Facebook"
                                  className="h-6" />
                          </a>
                          <a href="https://instagram.com/shopee" target="_blank" rel="noopener noreferrer">
                              <img
                                  src="https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91"
                                  alt="Instagram"
                                  className="h-6" />
                          </a>
                          <a href="https://youtube.com/shopee" target="_blank" rel="noopener noreferrer">
                              <img
                                  src="https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a"
                                  alt="YouTube"
                                  className="h-6" />
                          </a>
                      </div>
                  </div>

                  {/* Column 4: Company Info */}
                  <div>
                      <h3 className="font-semibold text-lg mb-4">Công ty Shopee</h3>
                      <p className="text-sm">Công ty TNHH Shopee</p>
                      <p className="text-sm">Địa chỉ: Tòa nhà, Quận 2, TP.HCM</p>
                      <p className="text-sm">Email: support@shopee.vn</p>
                      <p className="text-sm mt-4">Đã đăng ký với Bộ Công Thương</p>
                      <img
                          src="https://tse4.mm.bing.net/th/id/OIP.KCfy7WKnTXvnUARUTNX_owHaCQ?pid=Api&P=0&h=220"
                          alt="Bộ Công Thương"
                          className="h-10 mt-2" />
                  </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm">
                  <p>© 2025 Shopee.vn. All rights reserved.</p>
              </div>
          </div>
      </footer></>
  );
};

export default Footer;