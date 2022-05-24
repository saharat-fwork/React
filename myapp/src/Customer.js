import "./Customer.css";

function Customer() {
  return (
    <div className="w-full h-full bg-gray-50">
      <div className="flex flex-col w-full h-full p-2 sm:p-6 bg-gray-100">
        {/* <div className=" w-full p-4 sm:p-6 rounded-md shadow-sm bg-white mb-2 sm:mb-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-blue-800 mb-1">
            Students
          </h2>
          <h1 className="sm:text-2xl text-xl font-medium title-font mb-1 text-gray-900">
            จัดการข้อมูลนักเรียน และแก้ไขข้อมูล
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-sm sm:text-base font-light text-gray-400 mb-0">
            ค้นหาข้อมูลนักเรียนด้วยห้องและวิชาเรียน
          </p>
        </div> */}

        <div class="flex flex-col lg:flex-row gap-0 lg:gap-6">
          <div class="w-full p-4 sm:p-6 rounded-md shadow-sm bg-white mb-2 sm:mb-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-primary mb-1">
              Students
            </h2>
            <h1 class="sm:text-2xl text-xl font-medium title-font mb-1 text-gray-900">
              จัดการข้อมูลนักเรียน และแก้ไขข้อมูล
            </h1>
            <p class="lg:w-2/3 leading-relaxed text-sm sm:text-base font-light text-gray-400 mb-0">
              ค้นหาข้อมูลนักเรียนด้วยห้องและวิชาเรียน
            </p>
          </div>
          <div class="w-full lg:w-2/6 mb-6 p-6 bg-white border-2 border-gray-200 border-opacity-60 rounded-md shadow-sm flex flex-col justify-between">
            <div>
              <p class="font-medium text-sm sm:text-sm m-0">
                เพิ่ม / แก้ไข ข้อมูลนักเรียน
              </p>
              <p class="font-medium text-xs sm:text-xs opacity-50">add, edit, delete</p>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <button
                class="btn-add py-2 w-1/5 text-xs sm:text-xs "
                type="button"
              >
                เพิ่ม
              </button>
              <button
                class="btn-edit py-2 w-1/5 text-xs sm:text-xs"
                type="button"
              >
                แก้ไข
              </button>
              <button
                class="btn-delete py-2 w-1/5 text-xs sm:text-xs"
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
                รายชื่อนักเรียนทั้งหมด (8)
              </h2>

              <section className="mx-auto max-w-2xl flex flex-col sm:flex-row gap-1 justify-between items-start">
                <div className="w-full flex flex-col gap-1 mb-1">
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full py-1 pr-10 pl-4 text-gray-700 bg-white border-2 text-xs sm:text-sm border-gray-200 rounded-md hover:border-primary focus:outline-none focus:border-primary transition-colors"
                      placeholder="ค้นหาเบอร์โทรศัพท์..."
                      id="mobile_number"
                      name="mobile_number"
                      value=""
                    ></input>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="ant-picker ant-picker-middle">
                      <div className="ant-picker-input">
                        <input
                          id="from"
                          readOnly=""
                          placeholder="Select date"
                          title="24/05/2022"
                          size="12"
                          name="from"
                          autoComplete="off"
                          value="24/05/2022"
                        ></input>
                        <span className="ant-picker-suffix">
                          <span
                            role="img"
                            aria-label="calendar"
                            className="anticon anticon-calendar"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="calendar"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </span>
                        </span>
                        <span className="ant-picker-clear">
                          <span
                            role="img"
                            aria-label="close-circle"
                            className="anticon anticon-close-circle"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="close-circle"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                    <div className="ant-picker ant-picker-middle">
                      <div className="ant-picker-input">
                        <input
                          id="to"
                          readOnly=""
                          placeholder="Select date"
                          title="24/05/2022"
                          size="12"
                          name="to"
                          autoComplete="off"
                          value="24/05/2022"
                        ></input>
                        <span className="ant-picker-suffix">
                          <span
                            role="img"
                            aria-label="calendar"
                            className="anticon anticon-calendar"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="calendar"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"></path>
                            </svg>
                          </span>
                        </span>
                        <span className="ant-picker-clear">
                          <span
                            role="img"
                            aria-label="close-circle"
                            className="anticon anticon-close-circle"
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="close-circle"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path>
                            </svg>
                          </span>
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
              </section>
            </div>
            <section className="bg-gray-100 m-4 sm:m-6 p-0.5 sm:p-4 rounded-md gap-2 flex flex-col">
              <div className="bg-white relative rounded-md gap-1 hidden sm:grid sm:grid-cols-11 px-6 py-2">
                <span className="font-normal items-center gap-2 col-span-2">
                  {" "}
                  วันที่ทำรายการ
                </span>
                <span className=" text-center col-span-2">
                  สถานะการชำระเงิน
                </span>
                <span className=" text-left sm:text-center col-span-2">
                  ประเภทการชำระเงิน
                </span>
                <span className=" text-left lg:text-center col-span-2">
                  ราคาสุทธิ
                </span>
                <span className=" text-left lg:text-center col-span-2">
                  เบอร์โทรศัพท์
                </span>
              </div>
              <div className="overflow-x-auto">
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:17{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    100 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    084-714-1576
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:17{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    100 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    084-714-1576
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:14{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Truemoney Wallet
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    100 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    090-974-2946
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:10{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    200 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    092-474-7859
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:08{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    100 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    086-361-0263
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:06{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    60 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    063-650-4173
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
                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:05{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Shopee
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    100 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    087-518-3213
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

                <article className="bg-white relative rounded-md gap-1 grid grid-cols-1 sm:grid-cols-11 px-6 py-2 mb-3 sm:mb-1">
                  <span className="flex text-gray-400 font-normal justify-center sm:justify-start items-center gap-2 col-span-2 text-center">
                    {" "}
                    May 24, 2022 14:03{" "}
                  </span>
                  <div className="flex items-center justify-center col-span-2">
                    <span className="px-2 inline-flex text-center text-xs leading-5 font-semibold rounded-full col-span-1 bg-green-100 text-green-800">
                      Success
                    </span>
                  </div>
                  <span className="flex items-center justify-center text-center col-span-2">
                    Kbank
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center font-bold text-blue-800 col-span-2">
                    200 ฿
                  </span>
                  <span className="flex items-center justify-center text-left lg:text-center col-span-2">
                    086-500-5144
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
              </div>
              <div className="notice">
                <button
                  className="btn-ghost border-2 border-gray-300 text-gray-500 rounded-full"
                  type="button"
                >
                  {" "}
                  ดูเพิ่มเติม
                </button>
              </div>
            </section>
          </section>
        </div>
        <button
          id="scroll-top"
          type="button"
          className="fixed z-50 bottom-2 right-2 bg-opacity-75 grid place-items-center w-8 h-8 bg-white rounded-full hover:bg-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
        >
          <span
            role="img"
            aria-label="caret-up"
            className="anticon anticon-caret-up w-5 h-5 -mb-1 text-black"
          >
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="caret-up"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
            </svg>
          </span>
          <span className="sr-only">Scroll to Top</span>
        </button>
      </div>
    </div>
  );
}

export default Customer;
