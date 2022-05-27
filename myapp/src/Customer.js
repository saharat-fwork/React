import React, { useEffect, useState } from "react";

import "./Customer.css";

function Customer() {
  useEffect(() => {
    fetchItems();
  }, []);

 

  const [items, setItems] = useState([]);
  const [lenStudents, setlenStudents] = useState([]);

  const fetchItems = async () => {
    console.log("112");
    // const data = await fetch("http://localhost:4000/getstudents");

    // const items = await data.json();
    // console.log(items);

    try {
      const response = await fetch("http://localhost:4000/getstudents", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const items = await response.json();
      // console.log(items);
      setlenStudents(items.length);
      setItems(items);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="flex flex-col w-full h-full p-2 sm:p-6 bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6">
          <div className="w-full p-4 sm:p-6 rounded-md shadow-sm bg-white mb-2 sm:mb-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-primary mb-1">
              Students
            </h2>
            <h1 className="sm:text-2xl text-xl font-medium title-font mb-1 text-gray-900">
              จัดการข้อมูลนักเรียน และแก้ไขข้อมูล
            </h1>
            <p className="lg:w-2/3 leading-relaxed text-sm sm:text-base font-light text-gray-400 mb-0">
              ค้นหาข้อมูลนักเรียนด้วยห้องและวิชาเรียน
            </p>
          </div>
          <div className="w-full lg:w-2/6 mb-6 p-6 bg-white border-2 border-gray-200 border-opacity-60 rounded-md shadow-sm flex flex-col justify-between">
            <div>
              <p className="font-medium text-sm sm:text-sm m-0">
                เพิ่ม / แก้ไข ข้อมูลนักเรียน
              </p>
              <p className="font-medium text-xs sm:text-xs opacity-50">
                add, edit, delete
              </p>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <button
                className="btn-add py-2 w-1/5 text-xs sm:text-xs "
                type="button"
              >
                เพิ่ม
              </button>
              <button
                className="btn-edit py-2 w-1/5 text-xs sm:text-xs"
                type="button"
              >
                แก้ไข
              </button>
              <button
                className="btn-delete py-2 w-1/5 text-xs sm:text-xs"
                type="button"
              >
                ลบ
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <section className=" w-full bg-white rounded-md shadow-sm border border-gray-200">
            <div className="flex flex-col gap-6 justify-between items-baseline px-5 py-4 border-b border-gray-100">
              <h2 className="font-medium mb-0 text-base sm:text-lg text-gray-800  ">
                รายชื่อนักเรียนทั้งหมด ({lenStudents})
              </h2>

              <section className="mx-auto max-w-2xl flex flex-col sm:flex-row gap-1 justify-between items-start">
                <div className="w-full flex flex-col gap-1 mb-1">
                  <div className="flex flex-row gap-2">
                    <div className="inline-block text-left">
                      <button
                        type="button"
                        className="z-10 inline-flex justify-between w-full h-8 px-4 py-1 border-2 border-gray-200 rounded-md hover:border-primary focus:outline-none focus:border-primary transition-colors"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        <input
                          className="capitalize pointer-events-none outline-none"
                          type="text"
                          // readOnly=""
                          placeholder="select class"
                          id="store_type"
                          name="store_type"
                          // value=""
                        ></input>
                        <svg
                          className="-mr-2 ml-2 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div className="dropdown_dropdown-menu__2Tcv5  opacity-0 invisible transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div
                          className="undefined null origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          tabIndex="0"
                          aria-labelledby="menu-button"
                        >
                          <div className="py-1" role="none">
                            <span
                              tabIndex="-2"
                              className="undefined hover:text-primary text-gray-700 block px-4 py-2 text-sm"
                              role="menuitem"
                              id="menu-item-1"
                            >
                              Class 1
                            </span>
                            <span
                              tabIndex="-1"
                              className="undefined hover:text-primary text-gray-700 block px-4 py-2 text-sm"
                              role="menuitem"
                              id="menu-item-0"
                            >
                              Class 2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-block text-left">
                      <button
                        type="button"
                        className="z-10 inline-flex justify-between w-full h-8 px-4 py-1 border-2 border-gray-200 rounded-md hover:border-primary focus:outline-none focus:border-primary transition-colors"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        <input
                          className="capitalize pointer-events-none outline-none"
                          type="text"
                          // readOnly=""
                          placeholder="select subject"
                          id="store_type"
                          name="store_type"
                          // value=""
                        ></input>
                        <svg
                          className="-mr-2 ml-2 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <div className="dropdown_dropdown-menu__2Tcv5  opacity-0 invisible transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div
                          className="undefined null origin-top-right absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          tabIndex="0"
                          aria-labelledby="menu-button"
                        >
                          <div className="py-1" role="none">
                            <span
                              tabIndex="-2"
                              className="undefined hover:text-primary text-gray-700 block px-4 py-2 text-sm"
                              role="menuitem"
                              id="menu-item-1"
                            >
                              Class 1
                            </span>
                            <span
                              tabIndex="-1"
                              className="undefined hover:text-primary text-gray-700 block px-4 py-2 text-sm"
                              role="menuitem"
                              id="menu-item-0"
                            >
                              Class 2
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn-primary flex justify-center items-center h-8 "
                      type="submit"
                    >
                      ค้นหา
                    </button>
                    <button
                      className="btn-secondary  flex justify-center items-center  h-8 gap-2 "
                      type="button"
                    >
                      รีเซ็ต
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <section className="bg-gray-100 m-4 sm:m-6 p-0.5 sm:p-4 rounded-md gap-2 flex flex-col">
              <div className="bg-white relative rounded-md gap-1 hidden sm:grid sm:grid-cols-11 px-6 py-2">
                <span className="font-normal font-bold  text-center gap-2 col-span-1">
                  {" "}
                  ID
                </span>
                <span className=" text-center font-bold col-span-1">Class</span>
                <span className=" text-left font-bold sm:text-center col-span-2">
                  First Name
                </span>
                <span className=" text-left font-bold lg:text-center col-span-2">
                  Last Name
                </span>
                <span className=" text-left font-bold lg:text-center col-span-1">
                  Math
                </span>
                <span className=" text-left font-bold lg:text-center col-span-1">
                  English
                </span>
                <span className=" text-left font-bold lg:text-center col-span-1">
                  Science
                </span>
              </div>

              <div className="overflow-x-auto">
                {items.map((item) => (
                  <article
                    className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1"
                    key={item.id}
                  >
                    <span className="flex text-gray-400 font-normal justify-center sm:justify-center items-center gap-2 col-span-1 text-center">
                      {item.id}
                    </span>
                    <div className="flex items-center justify-center col-span-1">
                      <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-blue-100 text-blue-800">
                        {"Class " + item.id_class}
                      </span>
                    </div>
                    <span className="flex items-center justify-center text-center col-span-2">
                      {item.first_name}
                    </span>
                    <span className="flex items-center justify-center text-left lg:text-center   col-span-2">
                      {item.last_name}
                    </span>
                    <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-1">
                      80/100
                    </span>
                    <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-1">
                      90/100
                    </span>
                    <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-1">
                      70/100
                    </span>
                    <button
                      type="button"
                      className="flex items-center justify-center col-span-1"
                    >
                      <span
                        role="img"
                        aria-label="info-circle"
                        className="anticon anticon-info-circle"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="info-circle"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                          <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                      </span>
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Customer;
