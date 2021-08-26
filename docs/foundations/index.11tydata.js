module.exports = {
  eleventyComputed: {
    tags ({ page }) {
      return page.outputPath.includes('foundations/index')
        ? ['top']
        : ['foundation']
    }
  }
}
