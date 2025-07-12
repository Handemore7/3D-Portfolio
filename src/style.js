/**
 * Global Style Definitions
 * 
 * Centralized Tailwind CSS class combinations for consistent styling
 * across the entire portfolio application.
 */

const styles = {
  // Responsive horizontal padding
  paddingX: "sm:px-16 px-6",
  
  // Responsive vertical padding
  paddingY: "sm:py-16 py-6",
  
  // Combined responsive padding for sections
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // Main hero section heading styles with responsive font sizes
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  
  // Hero section subtitle styles with responsive font sizes
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  // Section main heading styles with responsive font sizes
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  
  // Section subtitle/label styles with responsive font sizes
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
}

export { styles }