module.exports = function (eleventyConfig){
  eleventyConfig.addPassthroughCopy("code/img");
  eleventyConfig.addPassthroughCopy("code/css");
  eleventyConfig.addPassthroughCopy("code/js");

  return{
    dir: {
      input: "code",
      output: "docs"
    }
  }
}