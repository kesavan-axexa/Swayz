import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll("path");

    // Make SVG visible
    gsap.set("#big-shape", { visibility: "visible" });

    // Initialize each path for the draw animation
    paths.forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1, // Ensure paths are visible
      });
    });

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none",
      },
    });

    // Add staggered animation for each path
    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 3.8,
      ease: "power2.out", // Replace with a custom ease if available
      stagger: 0.01,
    });

    // Cleanup on unmount
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden overflow-y-hidden">
      {/* Background Image with Black Overlay */}
     {/* Background Image */}
     <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/security_image.jpg')",
        }}
      />
      
      {/* Black Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Black with 70% opacity
        }}
      />
      
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 text-white">
        <svg
          id="big-shape"
          width="1440px"
          height="985px"
          viewBox="0 0 1440 985"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto top-[105px]"
          style={{ visibility: "hidden" }}
          ref={svgRef}
        >
          <defs>
            <rect id="path-1" x="0" y="0" width="1440" height="1038"></rect>
          </defs>
          <g
            id="Design-v2"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="Group-3-Copy" transform="translate(0.000000, -23.000000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <g id="Rectangle" fillRule="nonzero"></g>
              <g id="PATTERN" mask="url(#mask-2)">
              <g transform="translate(550.519370, 507.641112) scale(-1, 1) rotate(87.000000) translate(-550.519370, -507.641112) translate(-522.980630, -1070.858888)">
                  {/* Example Path */}
                  <path
                    d="M1201.9392,24.584949 C1201.9392,24.584949 976.202903,91.0304659 976.202903,467.511742 C976.202903,467.511742 994.162817,1744.62275 994.162817,1856.22132 C994.162817,2317.61485 1524.2029,2317.58495 1524.2029,2317.58495"
                    id="Stroke-1"
                    stroke="#31434A"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M1466.00162,2350.57567 C1466.00162,2350.57567 983.001616,2315.33321 983.001616,1871.72051 C983.001616,1764.4234 1015.65507,470.980534 1015.65507,470.980534 C1015.65507,412.21972 1027.15585,353.728001 1036.74301,309.676653 C1086.21174,82.3635964 1234.85778,24.5756694 1223.3405,24.5756694"
                    id="Stroke-3"
                    stroke="#36474E"
                    stroke-width="0.779"
                  ></path>
                  <path
                    d="M1406.19206,2382.83652 C1406.19206,2382.83652 971.192063,2312.38907 971.192063,1886.91249 C971.192063,1784.00219 1054.32821,475.339395 1054.32821,475.339395 C1054.32821,418.981207 1071.35069,354.999906 1080.53779,312.748212 C1127.94788,94.7294686 1266.54107,25.8365155 1243.54545,25.8365155"
                    id="Stroke-5"
                    stroke="#3B4C52"
                    stroke-width="0.808"
                  ></path>
                  <path
                    d="M1347.68346,2414.17693 C1347.68346,2414.17693 959.683458,2308.45188 959.683458,1900.55856 C959.683458,1801.90077 1093.41861,476.350616 1093.41861,476.350616 C1093.41861,422.321517 1115.99297,352.770645 1124.80168,312.264623 C1170.2584,103.255714 1299.11137,23.176931 1264.60153,23.176931"
                    id="Stroke-7"
                    stroke="#405157"
                    stroke-width="0.837"
                  ></path>
                  <path
                    d="M1289.66583,2445.44389 C1289.66583,2445.44389 947.648763,2304.4757 947.648763,1914.34229 C947.648763,1819.98003 1132.60533,478.098751 1132.60533,478.098751 C1132.60533,426.421143 1160.8232,351.328519 1169.28068,312.586978 C1212.91764,112.679013 1332.39205,21.4438892 1286.21364,21.4438892"
                    id="Stroke-9"
                    stroke="#45565B"
                    stroke-width="0.865"
                  ></path>
                  <path
                    d="M1231.46631,2478.11171 C1231.46631,2478.11171 937.242458,2301.9057 937.242458,1929.52885 C937.242458,1839.46131 1172.61011,481.247384 1172.61011,481.247384 C1172.61011,431.921974 1206.34221,351.28811 1214.40148,314.310716 C1255.99598,123.499686 1365.47255,21.1117096 1307.83191,21.1117096"
                    id="Stroke-11"
                    stroke="#4A5B5F"
                    stroke-width="0.894"
                  ></path>
                  <path
                    d="M1171.58119,2509.60791 C1171.58119,2509.60791 924.030137,2298.08334 924.030137,1943.31797 C924.030137,1857.51005 1210.80345,482.411857 1210.80345,482.411857 C1210.80345,435.419427 1250.19253,349.210309 1257.88926,313.981506 C1297.60435,132.195363 1397.5116,18.6079067 1328.16333,18.6079067"
                    id="Stroke-13"
                    stroke="#506064"
                    stroke-width="0.923"
                  ></path>
                  <path
                    d="M1113.63925,2543.4548 C1113.63925,2543.4548 914.551716,2296.58868 914.551716,1959.44854 C914.551716,1877.90615 1250.38279,485.923159 1250.38279,485.923159 C1250.38279,441.266832 1295.10841,349.479469 1302.38278,316.000736 C1339.91637,143.247117 1429.5057,18.4548042 1349.01884,18.4548042"
                    id="Stroke-15"
                    stroke="#566668"
                    stroke-width="0.952"
                  ></path>
                  <path
                    d="M1055.82497,2574.87754 C1055.82497,2574.87754 903.813307,2292.76049 903.813307,1973.38852 C903.813307,1896.13965 1290.46094,487.826564 1290.46094,487.826564 C1290.46094,445.522517 1340.76553,348.193314 1347.66103,316.478503 C1383.24532,152.828881 1463.08938,16.877544 1371.03905,16.877544"
                    id="Stroke-17"
                    stroke="#5C6B6D"
                    stroke-width="0.981"
                  ></path>
                  <path
                    d="M997.915925,2608.84631 C997.915925,2608.84631 893.327432,2291.35771 893.327432,1989.63323 C893.327432,1916.65587 1329.69824,491.458516 1329.69824,491.458516 C1329.69824,451.492068 1385.43794,348.580709 1391.93787,318.617951 C1425.48013,164.011085 1495.37872,16.8463108 1392.02391,16.8463108"
                    id="Stroke-19"
                    stroke="#617172"
                    stroke-width="1.01"
                  ></path>
                  <path
                    d="M937.555858,2640.64345 C937.555858,2640.64345 880.035542,2287.90276 880.035542,2003.9454 C880.035542,1935.26329 1367.37941,493.73604 1367.37941,493.73604 C1367.37941,456.123341 1428.71473,347.668521 1434.83877,319.469922 C1466.44055,173.967134 1526.61061,15.6434544 1411.65484,15.6434544"
                    id="Stroke-21"
                    stroke="#687677"
                    stroke-width="1.038"
                  ></path>
                  <path
                    d="M879.751687,2671.31739 C879.751687,2671.31739 869.404094,2283.32527 869.404094,2017.13424 C869.404094,1952.75008 1407.4422,494.889763 1407.4422,494.889763 C1407.4422,459.630403 1474.33856,345.632654 1480.08187,319.19791 C1509.71702,182.798771 1560.10436,13.3173868 1433.61336,13.3173868"
                    id="Stroke-23"
                    stroke="#6E7C7C"
                    stroke-width="1.067"
                  ></path>
                  <path
                    d="M820.923065,2703.20692 C820.923065,2703.20692 857.76658,2280.12511 857.76658,2031.78782 C857.76658,1971.72331 1446.37461,498.079909 1446.37461,498.079909 C1446.37461,465.18577 1518.81738,345.690172 1524.17704,321.029339 C1551.83818,193.778661 1592.42459,13.2069209 1454.42676,13.2069209"
                    id="Stroke-25"
                    stroke="#748381"
                    stroke-width="1.096"
                  ></path>
                  <path
                    d="M760.422098,2735.42245 C760.422098,2735.42245 844.60385,2277.10851 844.60385,2046.52557 C844.60385,1990.75354 1484.87535,500.777737 1484.87535,500.777737 C1484.87535,470.23405 1562.99381,345.199315 1567.9795,322.301033 C1593.71012,204.147278 1624.54575,12.4224467 1474.78847,12.4224467"
                    id="Stroke-27"
                    stroke="#7B8986"
                    stroke-width="1.125"
                  ></path>
                  <path
                    d="M701.352742,2768.25611 C701.352742,2768.25611 832.685252,2274.71455 832.685252,2061.87996 C832.685252,2010.40209 1522.94305,504.091906 1522.94305,504.091906 C1522.94305,475.900631 1606.53488,345.32489 1611.13294,324.190054 C1634.86125,215.130764 1655.85812,12.256115 1494.73207,12.256115"
                    id="Stroke-29"
                    stroke="#81908C"
                    stroke-width="1.154"
                  ></path>
                  <path
                    d="M642.951283,2799.8447 C642.951283,2799.8447 821.721524,2271.07892 821.721524,2075.99148 C821.721524,2028.80605 1563.43019,506.163574 1563.43019,506.163574 C1563.43019,480.322099 1652.67122,344.206963 1656.89123,324.834191 C1678.66795,224.869304 1689.86672,10.8447026 1517.03039,10.8447026"
                    id="Stroke-31"
                    stroke="#889691"
                    stroke-width="1.183"
                  ></path>
                  <path
                    d="M583.931681,2832.8649 C583.931681,2832.8649 810.02404,2268.67857 810.02404,2091.27207 C810.02404,2048.3645 1602.50468,508.842525 1602.50468,508.842525 C1602.50468,485.344534 1697.31392,343.640311 1701.15114,326.023141 C1720.95052,235.119326 1722.32567,9.86490182 1537.93861,9.86490182"
                    id="Stroke-33"
                    stroke="#8E9D97"
                    stroke-width="1.212"
                  ></path>
                  <path
                    d="M525.839964,2866.06418 C525.839964,2866.06418 799.316169,2266.64918 799.316169,2106.99464 C799.316169,2068.37896 1642.7287,512.524388 1642.7287,512.524388 C1642.7287,491.376531 1743.1225,344.133641 1746.57866,328.279934 C1764.4031,246.470664 1755.95386,10.0641781 1559.97644,10.0641781"
                    id="Stroke-35"
                    stroke="#95A49D"
                    stroke-width="1.24"
                  ></path>
                  <path
                    d="M469.545466,2896.90396 C469.545466,2896.90396 790.026655,2262.26335 790.026655,2120.35727 C790.026655,2086.03408 1683.26983,513.846079 1683.26983,513.846079 C1683.26983,495.049193 1789.12104,342.266877 1792.18818,328.175248 C1808.01879,255.460467 1789.75808,7.90395832 1582.44634,7.90395832"
                    id="Stroke-37"
                    stroke="#9DABA2"
                    stroke-width="1.269"
                  ></path>
                  <path
                    d="M408.972383,2930.29856 C408.972383,2930.29856 776.55131,2260.20859 776.55131,2136.00397 C776.55131,2105.96244 1719.98846,516.897195 1719.98846,516.897195 C1719.98846,500.445361 1831.33711,342.069867 1834.02234,329.735879 C1847.86703,266.091533 1819.80092,7.29856122 1601.07247,7.29856122"
                    id="Stroke-39"
                    stroke="#A4B2A8"
                    stroke-width="1.298"
                  ></path>
                  <path
                    d="M352.856962,2960.21046 C352.856962,2960.21046 767.412236,2254.65373 767.412236,2148.16263 C767.412236,2122.40656 1760.80933,516.46507 1760.80933,516.46507 C1760.80933,502.358583 1877.63208,338.389068 1879.93023,327.813803 C1891.78984,273.246633 1853.93441,3.2104569 1623.84324,3.2104569"
                    id="Stroke-41"
                    stroke="#ABBAAE"
                    stroke-width="1.327"
                  ></path>
                  <path
                    d="M293.464299,2995.33016 C293.464299,2995.33016 755.17019,2254.78655 755.17019,2166.07869 C755.17019,2144.62494 1799.00054,522.893124 1799.00054,522.893124 C1799.00054,511.142369 1921.35067,341.688893 1923.26702,332.879276 C1933.14791,287.425011 1885.48999,6.33016387 1643.92662,6.33016387"
                    id="Stroke-43"
                    stroke="#B3C1B4"
                    stroke-width="1.356"
                  ></path>
                  <path
                    d="M234.551658,3027.60156 C234.551658,3027.60156 743.928197,2251.58026 743.928197,2180.5952 C743.928197,2163.42427 1839.31654,524.819727 1839.31654,524.819727 C1839.31654,515.416545 1967.327,340.366234 1968.86072,333.316148 C1976.77162,296.943222 1919.25775,4.60155558 1665.95921,4.60155558"
                    id="Stroke-45"
                    stroke="#BBC9BB"
                    stroke-width="1.385"
                  ></path>
                  <path
                    d="M176.329276,3057.26226 C176.329276,3057.26226 732.444728,2246.27969 732.444728,2193.06117 C732.444728,2180.18967 1877.39166,525.790564 1877.39166,525.790564 C1877.39166,518.74205 2010.82738,338.211124 2011.97693,332.926176 C2017.90595,305.656442 1950.63739,2.26225872 1686.0676,2.26225872"
                    id="Stroke-47"
                    stroke="#C2D1C1"
                    stroke-width="1.413"
                  ></path>
                  <path
                    d="M118.222651,3090.70527 C118.222651,3090.70527 722.253844,2244.50731 722.253844,2209.02983 C722.253844,2200.44929 1919.16879,529.716233 1919.16879,529.716233 C1919.16879,525.016711 2058.3119,338.947587 2059.0796,335.425244 C2063.03608,317.246784 1985.87069,2.70527367 1709.47263,2.70527367"
                    id="Stroke-49"
                    stroke="#CADAC8"
                    stroke-width="1.442"
                  ></path>
                  <path
                    d="M57.3323722,3122.61106 C57.3323722,3122.61106 708.326993,2240.91693 708.326993,2223.17401 C708.326993,2218.8826 1955.28951,531.274877 1955.28951,531.274877 C1955.28951,528.924487 2099.91524,337.25615 2100.29955,335.494507 C2102.27688,326.402269 2015.33377,0.611057349 1727.55104,0.611057349"
                    id="Stroke-51"
                    stroke="#D2E2CE"
                    stroke-width="1.471"
                  ></path>
                  <path
                    d="M0.225747131,3156.05407 L2146.22575,337.994447 C2146.22575,337.994447 2049.46806,1.0540723 1750.17064,1.0540723"
                    id="Stroke-53"
                    stroke="#DAEAD5"
                    stroke-width="1.5"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-20 sm:py-24 lg:py-40">
          {/* Banner Title */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-2">
              Introduction for
            </h1>
            <h2 className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#DBF2D6] ml-0 sm:ml-10 lg:ml-20">
              Business Profile
            </h2>
          </div>

          {/* Banner Content */}
          <div className="max-w-xl text-center px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <p className="font-light text-base sm:text-lg md:text-xl text-justify leading-relaxed tracking-wide text-white">
                Swayz Security Services is a security provider with extensive
                experience in the industry. We have established a reputation for
                delivering high-quality security solutions. Our team of highly
                trained professionals is dedicated to ensuring the safety and
                protection of our clients' assets, personnel, and property.
              </p>
            </div>

            {/* Banner Link */}
            <a
              href="#"
              className="inline-flex items-center mt-4 sm:mt-6 lg:mt-8 group"
            >
              <span className="ml-2 uppercase text-xs sm:text-sm tracking-widest text-[#DBF2D6]">
                Psira No:4405628
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
