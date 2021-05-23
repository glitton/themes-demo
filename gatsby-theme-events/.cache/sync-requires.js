
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/glitton/Demos/themes-demo/gatsby-theme-events/.cache/dev-404-page.js")),
  "component---src-templates-event-js": preferDefault(require("/Users/glitton/Demos/themes-demo/gatsby-theme-events/src/templates/event.js")),
  "component---src-templates-events-js": preferDefault(require("/Users/glitton/Demos/themes-demo/gatsby-theme-events/src/templates/events.js"))
}

