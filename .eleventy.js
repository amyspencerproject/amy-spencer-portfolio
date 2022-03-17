module.exports = function(eleventyConfig) {
    // call functions on eleventyConfig here
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("**/*.jpg");
  
    // return object options in the object starting on the line below
    return {};
  };