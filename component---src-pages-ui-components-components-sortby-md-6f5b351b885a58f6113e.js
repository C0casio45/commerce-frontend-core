"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[6406],{45345:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return s}});var a=n(87462),r=n(63366),m=(n(15007),n(64983)),i=n(91515),d=["components"],l={},o={_frontmatter:l},p=i.Z;function s(e){var t=e.components,n=(0,r.Z)(e,d);return(0,m.mdx)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"sortby-component"},"Sortby component"),(0,m.mdx)("p",null,"The Sortby component allows you to sort the column in ascending or descending order."),(0,m.mdx)("h2",{id:"options"},"Options"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Option"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Default Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"template")),(0,m.mdx)("td",{parentName:"tr",align:null},"Path to the component .html template."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ui/grid/sortBy"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"options")),(0,m.mdx)("td",{parentName:"tr",align:null},"List of options available for sorting."),(0,m.mdx)("td",{parentName:"tr",align:null},"Array"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"[]"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"applied")),(0,m.mdx)("td",{parentName:"tr",align:null},"Currently applied sorting."),(0,m.mdx)("td",{parentName:"tr",align:null},"Object"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"{}"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"sorting")),(0,m.mdx)("td",{parentName:"tr",align:null},"Specify ascending (",(0,m.mdx)("inlineCode",{parentName:"td"},"asc"),") or descending (",(0,m.mdx)("inlineCode",{parentName:"td"},"desc"),") sorting order for the column."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"asc"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"selectedOption")),(0,m.mdx)("td",{parentName:"tr",align:null},"Currently selected option for sorting."),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"-")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"isVisible")),(0,m.mdx)("td",{parentName:"tr",align:null},"Check if component is visible or not."),(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"true"))))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<listing>\n    ...\n    <container name="sorting"\n               provider="dataProvider"\n               displayArea="sorting"\n               sortOrder="20"\n               component="Magento_Ui/js/grid/sortBy">\n               <argument name="data" xsi:type="array">\n                   <item name="config" xsi:type="array">\n                       <item name="deps" xsi:type="array">\n                           <item name="0" xsi:type="string">\n                               columnProvider\n                           </item>\n                       </item>\n                   </item>\n               </argument>\n    </container>\n    ...\n    <columns name="columnProvider">\n        <column name="name">\n            <settings>\n                <label translate="true">Name</label>\n                <visible>false</visible>\n                <sortable>true</sortable>\n            </settings>\n        </column>\n        <column name="directory">\n            <settings>\n                <label translate="true">Directory</label>\n                <visible>false</visible>\n                <sortable>true</sortable>\n            </settings>\n        </column>\n    </columns>\n</listing>\n\n')),(0,m.mdx)("h2",{id:"source-files"},"Source files"),(0,m.mdx)("p",null,"Extends ",(0,m.mdx)("a",{parentName:"p",href:"../concepts/element.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"UiElement")),":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/js/grid/sortBy.js"},"app\\code\\Magento\\Ui\\view\\base\\web\\js\\grid\\sortBy.js")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Ui/view/base/web/templates/grid/sortBy.html"},"app\\code\\Magento\\Ui\\view\\base\\web\\templates\\grid\\sortBy.html"))),(0,m.mdx)("h2",{id:"result"},"Result"),(0,m.mdx)("p",null,(0,m.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,m.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,m.mdx)("picture",{parentName:"span"},"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/cb523/ui-sortby-result.webp 320w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/797b9/ui-sortby-result.webp 640w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/4b075/ui-sortby-result.webp 1280w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/9defe/ui-sortby-result.webp 1742w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,m.mdx)("source",{parentName:"picture",srcSet:["/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/72799/ui-sortby-result.png 320w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/6af66/ui-sortby-result.png 640w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/21b4d/ui-sortby-result.png 1280w","/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/76435/ui-sortby-result.png 1742w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,m.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-frontend-core/static/eb218fd7b7159b94401acfee2cad74f0/21b4d/ui-sortby-result.png",alt:"Sortby Component",title:"Sortby Component",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ui-components-components-sortby-md-6f5b351b885a58f6113e.js.map