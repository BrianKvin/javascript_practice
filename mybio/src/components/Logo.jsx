import Image from "next/image";
import Link from "next/link";
import React from "react";
// import logo from "../../public/images/KB.png";
// import logo from "../../public/images/BK.png";
// import logo from "../../public/images/vin.png";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        className="flex items-center justify-center hover:scale-125"
      >
        <Image src={logo} alt="logo" className="w-16 h-16" />
      </Link>
    </div>
  );
};

export default Logo;

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useTheme } from "next-themes";
// import logo from "../../public/images/KB.png";

// // Option 1: Using two different images
// const Logo = () => {
//   const { resolvedTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // Prevent hydration mismatch
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     // Return a placeholder or the default logo while mounting
//     return (
//       <div className="w-16 h-16">
//         <Image src={logo} alt="logo" className="w-16 h-16" />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Link href="/">
//         <Image
//           src={logo}
//           alt="logo"
//           className={`w-16 h-16 transition-all duration-200 ${
//             resolvedTheme === "dark" ? "invert" : ""
//           }`}
//         />
//       </Link>
//     </div>
//   );
// };

// export default Logo;
