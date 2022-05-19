const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addVariant, addUtilities, e }) => {
  addVariant("details", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      const suffix = e(separator) + className;
      return [
        `details[open].open${suffix}`,
        `details[open] > summary.open${suffix}`,
        `details[open] > summary .open${suffix}`,
      ].join(", ");
    });
  });
});
