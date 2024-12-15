# MarkPlus Charts Demo

```
bun install
bun src/index.ts
```

Output:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="235.2" height="75.2" viewBox="0 0 235.2 75.2"><defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto-start-reverse"><polygon points="0 0, 10 3.5, 0 7" fill="black"></polygon></marker></defs><rect x="13.0" y="13.0" width="71.6" height="49.2" fill="none" stroke="black" stroke-width="2"></rect><rect x="150.6" y="13.0" width="71.6" height="49.2" fill="none" stroke="black" stroke-width="2"></rect><text x="48.8" font-family="Courier New" font-size="16" text-anchor="middle"><tspan x="48.8" y="42.4">A</tspan></text><text x="186.4" font-family="Courier New" font-size="16" text-anchor="middle"><tspan x="186.4" y="42.4">B</tspan></text><path d="M 85.6 37.6 L 149.6 37.6" fill="none" stroke="black" marker-end="url(#arrowhead)"></path></svg>
```

Render:

![](./output.svg)

You cannot see if the page is dark theme since the chart foreground color is black.
