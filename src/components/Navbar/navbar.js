// import api from "./api.js";
// import { Layout, Menu, Drawer, Button } from "antd";
// import { Link } from "react-router-dom";
// import { MenuOutlined } from "@ant-design/icons";
// import { useEffect, useState } from "react";
// import { TailSpin } from "react-loader-spinner";
// import Logo from "../../Asset/hidaya_logo.png";
// import styles from "../Navbar/navbar.css";
// const { Header } = Layout;

// function Navbar() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [visible, setVisible] = useState(false);
//   const [activeMenuItem, setActiveMenuItem] = useState(null);

//   const fetchMenu = async () => {
//     try {
//       setLoading(true);
//       const response = await api().get("navbarmenus?populate=deep,10");
//       return response?.data || [];
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       setError("Failed to fetch data in api. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const fetchMenuAsync = async () => {
//       try {
//         const response = await fetchMenu();
//         console.log(response.data);
//         console.log("------------------------");
//         setItems(response.data || []);
//       } catch (error) {
//         console.error("Error in useEffect: ", error);
//         setError("Failed to fetch data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchMenuAsync();
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleDrawer = () => {
//     setVisible(!visible);
//   };

//   const handleMenuItemClick = (key) => {
//     setActiveMenuItem(key);
//   };

//   const menus = items.map((m) => {
//     console.log("Submenus:", m.attributes.navbar_menus.data); // Log the submenus array
//     const menuItemLink = `/${m.attributes.slug || ""}`;
//     console.log(menuItemLink, "==========================");
//     return {
//       key: m.id,
//       label: m.attributes.name, // Accessing name from attributes
//       link: menuItemLink,
//       children: m.attributes.navbar_menus.data.map((sm) => ({
//         label: sm.attributes.name, // Accessing name from attributes
//         key: `sm-${sm.id}`,
//         link: `/${m.attributes.slug}/${sm.attributes.slug || ""}`, // Accessing slug from attributes
//       })),
//     };
//   });

//   const menuItems = (
//     <Menu
//       theme="light"
//       mode="horizontal"
//       style={{
//         border: "none",
//         fontSize: "0.92rem",
//         gap: "3%",
//         marginLeft: "auto", // Adjusted margin
//         marginRight: "auto", // Adjusted margin
//       }}
//     >
//       {menus.map((item) => (
//         <Menu.SubMenu
//           key={item.key}
//           title={
//             <Link to={item.link} style={{ textDecoration: "none" }}>
//               {item.label}
//             </Link>
//           }
//         >
//           {item.children.map((subMenuItem) => (
//             <Menu.Item key={subMenuItem.key}>
//               <Link
//                 to={subMenuItem.link}
//                 style={{
//                   textDecoration:
//                     activeMenuItem === subMenuItem.key ? "underline" : "none",
//                 }}
//                 onClick={() => handleMenuItemClick(subMenuItem.key)}
//               >
//                 {subMenuItem.label}
//               </Link>
//             </Menu.Item>
//           ))}
//         </Menu.SubMenu>
//       ))}
//     </Menu>
//   );

//   return (
//     <Header className="flex bg-white sticky top-0 z-10 my-2">
//       <div className="bg-white" style={{ height: "20px" }}>
//         <div>
//           {" "}
//           <a href="https://hidayahsmart.solutions/home">
//             <img
//               src={Logo}
//               style={{
//                 padding: "0",
//                 minWidth: "6%",
//                 width: "0%",
//                 marginLeft: "10%",

//                 cursor: "pointer",
//               }}
//               alt="logo"
//             />
//           </a>
//         </div>
//       </div>
//       <div style={{ marginTop: "auto" }}>
//         {windowWidth > 900 ? (
//           <Menu
//             theme="none"
//             mode="horizontal"
//             className="flex-grow mx-0 px-0 flex justify-between"
//           >
//             {menuItems}
//           </Menu>
//         ) : (
//           <Button
//             onClick={toggleDrawer}
//             style={{ marginLeft: "auto", marginBlock: "auto" }}
//           >
//             <MenuOutlined style={{ fontSize: "24px" }} />
//           </Button>
//         )}
//         <Drawer
//           // placement="left"
//           closable={false}
//           onClose={toggleDrawer}
//           visible={visible}
//           width={200}
//           style={{ fontSize: "0.92rem" }}
//         >
//           {menuItems}
//         </Drawer>
//         {loading && (
//           <div
//             style={{ alignItems: "center", margin: "0", marginBlock: "1.5em" }}
//           >
//             <TailSpin
//               visible={true}
//               height="30"
//               width="30"
//               color="#000"
//               ariaLabel="tail-spin-loading"
//               radius="1.5"
//               wrapperStyle={{}}
//               wrapperClass=""
//             />
//           </div>
//         )}
//         {error && <p>Error: {error}</p>}
//       </div>
//     </Header>
//   );
// }

// export default Navbar;

import api from "./api.js";
import { Layout, Menu, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Logo from "../../Asset/hidaya_logo.png";
import styles from "../Navbar/navbar.css";
const { Header } = Layout;

function Navbar() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visible, setVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const response = await api().get("navbarmenus?populate=deep,10");
      return response?.data || [];
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError("Failed to fetch data in api. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMenuAsync = async () => {
      try {
        const response = await fetchMenu();
        console.log(response.data);
        console.log("------------------------");
        setItems(response.data || []);
      } catch (error) {
        console.error("Error in useEffect: ", error);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenuAsync();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const handleMenuItemClick = (key) => {
    setActiveMenuItem(key);
  };

  const menus = items.map((m) => {
    console.log("Submenus:", m.attributes.navbar_menus.data); // Log the submenus array
    const menuItemLink = `/${m.attributes.slug || ""}`;
    console.log(menuItemLink, "==========================");
    return {
      key: m.id,
      label: m.attributes.name, // Accessing name from attributes
      link: menuItemLink,
      children: m.attributes.navbar_menus.data.map((sm) => ({
        label: sm.attributes.name, // Accessing name from attributes
        key: `sm-${sm.id}`,
        link: `/${m.attributes.slug}/${sm.attributes.slug || ""}`, // Accessing slug from attributes
      })),
    };
  });

  const menuItems = (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        border: "none",
        fontSize: "0.92rem",
        gap: "3%",
        marginLeft: "auto", // Adjusted margin
        marginRight: "auto", // Adjusted margin
      }}
    >
      {menus.map((item) => (
        <Menu.SubMenu
          key={item.key}
          title={
            <Link to={item.link} style={{ textDecoration: "none" }}>
              {item.label}
            </Link>
          }
        >
          {item.children.map((subMenuItem) => (
            <Menu.Item key={subMenuItem.key}>
              <Link
                to={subMenuItem.link}
                style={{
                  textDecoration:
                    activeMenuItem === subMenuItem.key ? "underline" : "none",
                }}
                onClick={() => handleMenuItemClick(subMenuItem.key)}
              >
                {subMenuItem.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  );

  return (
    <Header className="flex bg-white sticky top-0 z-10 my-2">
      <div className="bg-white" style={{ height: "20px" }}>
        <div>
          {" "}
          <a href="https://hidayahsmart.solutions/home">
            <img
              src={Logo}
              style={{
                padding: "0",
                minWidth: "6%",
                width: "0%",
                marginLeft: "10%",

                cursor: "pointer",
              }}
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div style={{ marginTop: "auto" }}>
        {windowWidth > 900 ? (
          <Menu
            theme="none"
            mode="horizontal"
            className="flex-grow mx-0 px-0 flex justify-between"
          >
            {menuItems}
          </Menu>
        ) : (
          <Button
            onClick={toggleDrawer}
            style={{ marginLeft: "auto", marginBlock: "auto" }}
          >
            <MenuOutlined style={{ fontSize: "24px" }} />
          </Button>
        )}
        <Drawer
          // placement="left"
          closable={false}
          onClose={toggleDrawer}
          visible={visible}
          width={200}
          style={{ fontSize: "0.92rem" }}
        >
          {menuItems}
        </Drawer>
        {loading && (
          <div
            style={{ alignItems: "center", margin: "0", marginBlock: "1.5em" }}
          >
            <TailSpin
              visible={true}
              height="30"
              width="30"
              color="#000"
              ariaLabel="tail-spin-loading"
              radius="1.5"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    </Header>
  );
}

export default Navbar;
