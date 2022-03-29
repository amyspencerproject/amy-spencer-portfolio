// module.exports = function(eleventyConfig) {
//     // call functions on eleventyConfig here
//     eleventyConfig.addPassthroughCopy("assets/css");
//     eleventyConfig.addPassthroughCopy("**/*.jpg");
//     eleventyConfig.addPassthroughCopy("**/*.png");

  
//     // return object options in the object starting on the line below
//     return {};
//   };

module.exports = config => {
    // Set directories to pass through to the site folder
    config.addPassthroughCopy('./src/assets');
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};