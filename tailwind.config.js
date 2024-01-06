/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/BusinessPage/BusinessPage.js",
    "./src/components/Products/Products.js",
    "./src/components/AccessControl/AccessControl.js",
    "./src/components/RegisterForm/RegisterForm.js",
    "./src/components/Header/Header.js",
    "./src/components/BusinessProfile/BusinessProfile.js",
    "./src/components/ManageProducts/ManageProducts.js",
    "./src/components/ProductChip/ProductChip.js",
    "./src/components/AddProductForm/AddProductForm.js",
    "./src/components/SignInForm/SignInForm.js",
    "./src/components/Modal/Modal.js",
    "./src/components/DisplayCategory/DisplayCategory.js",
    "./src/components/DropDownCheckBox/DropdownCheckbox.js",
    "./src/components/CategoryDropDown/CategoryDropDown.js",
    "./src/App.js",
    "./src/components/FormSection2/FormSection2.js",
    "./src/components/FormSection1/FormSection1.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "96rem",
      },
      colors: {
        customProductbg: "#9BA4B5",
      },
      width: {
        '150': "48rem"
      },
      height: {
        '71': "16.75rem"
      }
    },
    screens: {
      xsm: "280px",
      mdsm: "320px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "860px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
