---
# 与 html 元数据相关的 frontmatter 有:
# title, titleTemplate, description, head,均有全局设置

# 与默认主题相关的 frontmatter 有:
# 布局默认为 doc, 其他类型 home, page, false 需要在各页面明文设置 
layout: home
# 还有: navbar, sidebar, aside, outline, editLink, footer, pageClass



hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: The origin point, the first milestone.
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---