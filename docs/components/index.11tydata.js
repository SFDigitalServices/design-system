module.exports = {
  eleventyComputed: {
    tags ({ page }) {
      return page.outputPath.includes('components/index')
        ? ['top']
        : ['component']
    }
  }
}
