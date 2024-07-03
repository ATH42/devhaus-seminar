/**
 * Accordion item child component
 *
 * @param _props - Record<string, any>
 * @param _props.header - `<h3>` header text content
 * @param _props.children - Any HTML elements. Parent element: `<div>`
 */
export type AccordionItem =
  typeof import("../src/components/index.js").AccordionItem;

/**
 * Accordion parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more AccordionItem components. Parent element: `<ul>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Accordion = typeof import("../src/components/index.js").Accordion;

/**
 * Breadcrumbs item child component
 *
 * @param _props - Record<string, any>
 * @param _props.href - `<a href={href}>` Breadcrumb route string such as "/" or "/blog" - default: "#"
 * @param _props.label - `<a>` text content for descriptive route name
 * @param _props.currentPage - Boolean: isCurrentPage?
 */
export type BreadcrumbsItem =
  typeof import("../src/components/index.js").BreadcrumbsItem;

/**
 * Breadcrumbs parent component
 *
 * @param _props - Record<string, any>
 * @param _props.children -
 *  - Expects one or more BreadcrumbsItem components. Parent element: `<ol>`
 *  - WARNING: Astro cannot currently enforce the type of children in a `<slot>`
 */
type Breadcrumbs = typeof import("../src/components/index.js").Breadcrumbs;
