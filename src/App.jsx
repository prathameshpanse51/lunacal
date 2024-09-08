import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");

  const tabs = [
    {
      id: "About Me",
      label: "About&nbsp;Me",
      content: `Hi there! I’m Dave, your sales representative at Salesforce. I’ve been with this fantastic company for 3 years, where I’ve had the pleasure of helping clients find tailored solutions to meet their needs. Originally from Albany, NY, I moved to Santa Carla a decade ago and have enjoyed every moment of it.
<br/><br/>
At home, I’m kept busy by my wonderful wife, Tiffany, and our energetic 4-year-old twin daughters, Emma and Ella. They’ve just started school, which has been a big milestone for us. Because of their new school schedule, I’m usually occupied between 9 and 10 AM. However, I’m flexible outside of those hours and would be happy to find a time that suits you best. Looking forward to connecting and exploring how we can work together!
<br/><br/>
Outside of work, I enjoy exploring the local community and spending quality time with my family. Santa Carla offers so much in terms of activities and events, and we love taking advantage of everything it has to offer. Whether it’s a family hike or a weekend festival, we’re always up for an adventure.
<br/><br/>
Because of the twins’ new school schedule, I’m usually occupied between 9 and 10 AM. However, I’m flexible outside of those hours and would be happy to find a time that suits you best. Looking forward to connecting and exploring how we can work together!`,
    },
    {
      id: "Experiences",
      label: "Experiences",
      content: `
      Hello! I’m Dave, a sales representative at Salesforce. For the past 3 years, I’ve been dedicated to helping our clients achieve their business goals with Salesforce’s innovative solutions. I hail from Albany, NY, but have made Santa Carla my home for the last 10 years, where I live with my lovely wife Tiffany and our 4-year-old twin daughters, Emma and Ella.
<br/><br/>
The twins have just embarked on their school journey, which has been both exciting and busy for our family. It’s incredible to see them start this new chapter, and we’re adjusting to their new routines with enthusiasm and a bit of chaos. This phase has brought a fresh sense of energy to our household.
<br/><br/>
When I’m not working, I enjoy immersing myself in the local community and exploring all the wonderful things Santa Carla has to offer. From local farmers’ markets to family-friendly events, there’s always something to do. I’m also a fan of outdoor activities and like to unwind with a good hike or bike ride.
<br/><br/>
My schedule is generally occupied between 9 and 10 AM due to their school drop-off and pick-up. However, I’m more than happy to adjust to a time that works best for you outside of those hours. Let’s find a time to chat and discuss how Salesforce can support your needs!`,
    },
    {
      id: "Recommended",
      label: "Recommended",
      content: `
      Greetings! I’m Dave, your dedicated sales rep at Salesforce. Over the past 3 years, I’ve had the opportunity to work with a diverse range of clients, helping them leverage Salesforce’s powerful tools to enhance their operations. I’m originally from Albany, NY, but have enjoyed the last 10 years living in Santa Carla with my wonderful wife Tiffany and our 4-year-old twin daughters, Emma and Ella.
<br/><br/>
Our daughters have just started school, marking a new chapter for our family. This has made our mornings quite busy, so my calendar is usually blocked between 9 and 10 AM. It’s a time of adjustment and excitement, as we navigate new schedules and routines with the kids.
<br/><br/>
Beyond work, I’m passionate about engaging with the local community and exploring new experiences. Santa Carla offers a vibrant cultural scene, and I love participating in community events and spending time outdoors. It’s a great way to balance work and family life while enjoying the rich experiences the city provides.
<br/><br/>
I’m available at other times and would love to set up a meeting that fits your schedule. I look forward to discussing how Salesforce can help you achieve your goals!`,
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [file, setFile] = useState();
  const [gallery, setGallery] = useState([
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
    "https://ik.imagekit.io/qz6ubt34n4/lunacal.png?updatedAt=1725757837779",
  ]);

  const [error, setError] = useState("");

  function handleChange(e) {
    const selectedFile = e.target.files[0];

    // File validations
    if (!selectedFile) {
      setError("Please select a file.");
      document.getElementById("toast-default").style.display = "flex";
      setTimeout(() => {
        document.getElementById("toast-default").style.display = "None";
      }, 2000);
      return;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(selectedFile.type)) {
      setError("Only JPEG and PNG files are allowed.");
      document.getElementById("toast-default").style.display = "flex";
      setTimeout(() => {
        document.getElementById("toast-default").style.display = "None";
      }, 2000);
      return;
    }

    // Validate file size (e.g., max 2MB)
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024; // 2MB in bytes
    if (selectedFile.size > maxSizeInBytes) {
      setError(`File size should be less than ${maxSizeInMB}MB.`);
      document.getElementById("toast-default").style.display = "flex";
      setTimeout(() => {
        document.getElementById("toast-default").style.display = "None";
      }, 2000);
      return;
    }

    // If validation passes, add the file to the gallery
    const fileUrl = URL.createObjectURL(selectedFile);
    setFile(fileUrl);
    setGallery((prevGallery) => [...prevGallery, fileUrl]);
    setError(""); // Clear any previous errors
  }

  const handleClose = () => {
    document.getElementById("toast-default").style.display = "None";
  };

  console.log(error);

  return (
    <>
      <div
        id="toast-default"
        class="hidden fixed top-5 right-5 flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="red"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
        </div>
        <div class="ms-3 text-sm font-normal">{error}</div>
        <button
          type="button"
          class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={handleClose}
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-row">
        <div className="w-1/2"></div>
        <main className="w-1/2 mr-6">
          <div className="rounded-[20px] mt-4 mb-6 bg-[#363C43] flex gap-4 p-6 h-[300px]">
            <div className="flex flex-col gap-20 mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
                  fill="url(#paint0_linear_2267_3329)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2267_3329"
                    x1="19.5"
                    y1="27.5"
                    x2="3.5"
                    y2="2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A4E54" />
                    <stop offset="1" stop-color="#A3ADBA" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="10.6879"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="10.6879"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="21.3756"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="21.3756"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
              </svg>
            </div>

            <div>
              {/* Tabs */}
              <ul
                id="tabs"
                className="rounded-3xl inline-flex py-2 w-full bg-[#171717] flex justify-around"
                style={{ boxShadow: "0px 4.96px 12.4px 2.48px #00000040" }}
              >
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`poppins-medium px-[45px] py-[10px] md:text-lg lg:text-base font-semibold py-2 ${
                      activeTab === tab.id
                        ? "text-white bg-[#28292F] rounded-2xl"
                        : "text-[#A3ADB2]"
                    }`}
                  >
                    <button
                      onClick={() => handleTabClick(tab.id)}
                      dangerouslySetInnerHTML={{ __html: tab.label }}
                    />
                  </li>
                ))}
              </ul>

              {/* Tab Contents */}
              <div
                id="tab-contents"
                className="plus-jakarta-sans-400 mt-4 h-[180px] overflow-y-scroll"
              >
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`p-4 text-[#969696] text-xl ${
                      activeTab === tab.id ? "" : "hidden"
                    }`}
                    dangerouslySetInnerHTML={{ __html: tab.content }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[20px] mt-4 bg-[#363C43] flex gap-4 p-6 h-fit mb-6">
            <div className="flex flex-col gap-20 mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3846 18C13.3846 18.2738 13.3034 18.5415 13.1513 18.7692C12.9991 18.9969 12.7829 19.1744 12.5299 19.2792C12.2769 19.384 11.9985 19.4114 11.7299 19.358C11.4613 19.3046 11.2146 19.1727 11.0209 18.9791C10.8273 18.7854 10.6954 18.5387 10.642 18.2701C10.5886 18.0015 10.616 17.7231 10.7208 17.4701C10.8256 17.2171 11.0031 17.0009 11.2308 16.8487C11.4585 16.6966 11.7262 16.6154 12 16.6154C12.3672 16.6154 12.7194 16.7613 12.9791 17.0209C13.2387 17.2806 13.3846 17.6328 13.3846 18ZM12 5.53846C9.45462 5.53846 7.38462 7.40192 7.38462 9.69231V10.1538C7.38462 10.3987 7.48187 10.6334 7.65498 10.8066C7.82809 10.9797 8.06288 11.0769 8.3077 11.0769C8.55251 11.0769 8.7873 10.9797 8.96041 10.8066C9.13352 10.6334 9.23077 10.3987 9.23077 10.1538V9.69231C9.23077 8.42308 10.4735 7.38461 12 7.38461C13.5265 7.38461 14.7692 8.42308 14.7692 9.69231C14.7692 10.9615 13.5265 12 12 12C11.7552 12 11.5204 12.0972 11.3473 12.2704C11.1742 12.4435 11.0769 12.6783 11.0769 12.9231V13.8462C11.0769 14.091 11.1742 14.3258 11.3473 14.4989C11.5204 14.672 11.7552 14.7692 12 14.7692C12.2448 14.7692 12.4796 14.672 12.6527 14.4989C12.8258 14.3258 12.9231 14.091 12.9231 13.8462V13.7631C15.0277 13.3765 16.6154 11.6977 16.6154 9.69231C16.6154 7.40192 14.5454 5.53846 12 5.53846ZM24 12C24 14.3734 23.2962 16.6934 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0865C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33115 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.807 0.693605 16.6689 0.230582 14.3411C-0.232441 12.0133 0.00519941 9.60051 0.913451 7.4078C1.8217 5.21508 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62663 0 12 0C15.1816 0.00335979 18.2319 1.26872 20.4816 3.51843C22.7313 5.76814 23.9966 8.81843 24 12ZM22.1538 12C22.1538 9.99176 21.5583 8.02861 20.4426 6.35882C19.3269 4.68903 17.7411 3.38759 15.8857 2.61907C14.0303 1.85055 11.9887 1.64947 10.0191 2.04126C8.04943 2.43305 6.24019 3.40011 4.82015 4.82015C3.40011 6.24019 2.43305 8.04943 2.04126 10.0191C1.64947 11.9887 1.85055 14.0303 2.61907 15.8857C3.38759 17.7411 4.68904 19.3269 6.35883 20.4426C8.02862 21.5583 9.99176 22.1538 12 22.1538C14.692 22.1508 17.2729 21.08 19.1765 19.1765C21.08 17.2729 22.1508 14.692 22.1538 12Z"
                  fill="url(#paint0_linear_2267_3329)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2267_3329"
                    x1="19.5"
                    y1="27.5"
                    x2="3.5"
                    y2="2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4A4E54" />
                    <stop offset="1" stop-color="#A3ADBA" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="10.6879"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="10.6879"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  y="21.3756"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
                <rect
                  x="10.6878"
                  y="21.3756"
                  width="9.31217"
                  height="9.31217"
                  rx="1.16402"
                  fill="#4A4E54"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-row gap-14 items-center justify-between w-full h-fit pr-8">
                <button
                  className="poppins-medium cursor-auto rounded-3xl text-white inline-flex px-10 py-4 text-xl bg-[#171717]"
                  style={{ boxShadow: "0px 4px 10px 2px #00000040 inset" }}
                >
                  Gallery
                </button>

                <div className="flex flex-row gap-12">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleChange}
                  />
                  <label
                    for="file-upload"
                    className="plus-jakarta-sans-800 addImage cursor-pointer inline-flex bg-[#40464d] font-bold text-white text-sm px-6 rounded-3xl flex flex-row items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="white"
                      className="w-4 h-4"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                    ADD IMAGE
                  </label>
                  <div className="flex flex-row gap-4">
                    <button
                      className="rounded-full p-4"
                      style={{
                        background:
                          "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                        boxShadow:
                          "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="fill-[#6f787c] w-4 h-4"
                      >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                      </svg>
                    </button>
                    <button
                      className="rounded-full p-4"
                      style={{
                        background:
                          "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                        boxShadow:
                          "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="fill-[#6f787c] w-4 h-4"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <main
                className="flex flex-row flex-wrap gap-8 h-[180px] overflow-y-scroll"
                data-carousel="slide"
              >
                {gallery.map((imgUrl, index) => (
                  <img
                    data-carousel-item
                    key={index}
                    src={imgUrl}
                    alt={`Gallery item ${index + 1}`}
                    style={{
                      borderRadius: "20px",
                    }}
                    className="w-[190px] h-[180px]"
                  />
                ))}
              </main>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
