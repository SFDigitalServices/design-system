module.exports = function eleventyNav (config) {
  config.addFilter('node', getPageNode)
  config.addFilter('parent', getParentNode)
  config.addFilter('children', getChildNodes)
  config.addFilter('tree', getNodeTree)
  config.addFilter('ancestors', getAncestors)
}

function getPath (pageOrUrl) {
  const url = typeof pageOrUrl === 'string' ? pageOrUrl : pageOrUrl?.url
  return url === '/' ? url : url?.replace(/\/$/, '')
}

function getPageNode (page, nodes) {
  const path = getPath(page)
  return nodes.find(node => getPath(node.data?.page) === path)
}

function isParentPath (parentPath, childPath) {
  return childPath.startsWith(parentPath) &&
    childPath.length > parentPath.length &&
    !childPath.substr(parentPath.length + 1).includes('/')
}

function getParentNode (page, nodes) {
  const pagePath = getPath(page)
  return nodes.find(node => {
    return isParentPath(getPath(node.data.page), pagePath)
  })
}

function getChildNodes (page, nodes) {
  const pagePath = getPath(page)
  return nodes
    .filter(node => {
      return isParentPath(pagePath, getPath(node.data.page))
    })
    .sort((a, b) => {
      return (a.data?.order - b.data?.order) ||
        a.data.title?.localeCompare(b.data.title)
    })
}

function getAncestors (page, nodes, stop) {
  const ancestors = []
  let parent = getParentNode(page, nodes)
  while (parent && parent.data?.page?.url !== stop) {
    ancestors.push(parent)
    parent = getParentNode(parent, nodes)
  }
  return ancestors
}

function getNodeTree (page, nodes, maxDepth, depth = 0) {
  const children = depth < maxDepth
    ? getChildNodes(page, nodes)
      .map(node => node.data.page)
      .map(child => getNodeTree(child, nodes, maxDepth, depth + 1))
    : []
  return {
    node: getPageNode(page),
    depth,
    children
  }
}
