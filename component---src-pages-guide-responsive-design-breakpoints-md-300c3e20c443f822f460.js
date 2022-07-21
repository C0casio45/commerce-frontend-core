"use strict";(self.webpackChunkcommerce_frontend_core=self.webpackChunkcommerce_frontend_core||[]).push([[5460],{5482:function(e,n,i){i.r(n),i.d(n,{_frontmatter:function(){return m},default:function(){return u}});var a,t=i(87462),r=i(63366),o=(i(15007),i(64983)),l=i(91515),d=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),p={_frontmatter:m},h=l.Z;function u(e){var n=e.components,i=(0,r.Z)(e,d);return(0,o.mdx)(h,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-a-custom-breakpoint"},"Add a custom breakpoint"),(0,o.mdx)("p",null,"Breakpoints are used in stylesheets to set up the screen width at which the design changes, for example, from the mobile to the desktop version. Themes provided with the application implement a list of ",(0,o.mdx)("a",{parentName:"p",href:"css.md#breakpoints"},"default breakpoints"),". This topic describes how to add a custom breakpoint in your theme."),(0,o.mdx)("p",null,"To add a custom breakpoint in your theme, you need to do the following:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Define a variable for the new breakpoint."),(0,o.mdx)("li",{parentName:"ol"},"Override the library ",(0,o.mdx)("inlineCode",{parentName:"li"},"_responsive.less")," file, and add the new rule for the new breakpoint."),(0,o.mdx)("li",{parentName:"ol"},"Implement the screen changes for the new breakpoint.")),(0,o.mdx)("h2",{id:"add-a-breakpoint-variable"},"Add a breakpoint variable"),(0,o.mdx)("p",null,"In your custom theme directory, add a ",(0,o.mdx)("inlineCode",{parentName:"p"},"/web/css/source/_variables.less")," in one of the following ways:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"if your theme ",(0,o.mdx)("a",{parentName:"li",href:"../themes/inheritance.md"},"inherits")," from the other, then copy the parent's ",(0,o.mdx)("inlineCode",{parentName:"li"},"_variables.less"),"."),(0,o.mdx)("li",{parentName:"ul"},"if your theme is a standalone one, add a new empty file.")),(0,o.mdx)("p",null,"In your file ",(0,o.mdx)("inlineCode",{parentName:"p"},"_variables.less")," in custom theme, add the variable for your new breakpoint."),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-less"},"@screen__xl: 1280px;\n@screen__lg: 1600px;\n")),(0,o.mdx)("p",null,"For variables' naming rules see ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/coding-standards/less/#variables"},"Less coding standards"),"."),(0,o.mdx)("h2",{id:"override-_responsiveless-from-the-library"},"Override ",(0,o.mdx)("inlineCode",{parentName:"h2"},"_responsive.less")," from the library"),(0,o.mdx)("p",null,"According to the approach, implemented in the UI library, the ",(0,o.mdx)("inlineCode",{parentName:"p"},".media-width()")," mixin calls are defined in many places, but invoked in one place, in ",(0,o.mdx)("inlineCode",{parentName:"p"},"lib/web/css/source/lib/_responsive.less"),"."),(0,o.mdx)("p",null,"To implement a new breakpoint, you need to edit the ",(0,o.mdx)("inlineCode",{parentName:"p"},".media-width()")," mixin by adding the appropriate rule there. So you need to override the library ",(0,o.mdx)("inlineCode",{parentName:"p"},"_responsive.less")," in your theme, and add the customizations there."),(0,o.mdx)("p",null,"To do this, take the following steps:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Copy the ",(0,o.mdx)("inlineCode",{parentName:"li"},"_responsive.less")," file to your ",(0,o.mdx)("inlineCode",{parentName:"li"},"<your_theme_dir>/web/css/source/lib/")," directory from one of the following locations:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<your_parent_theme_dir>/web/css/source/lib/_responsive.less"),": overriding ",(0,o.mdx)("inlineCode",{parentName:"li"},"_responsive.less")," in the parent theme. If there's no such file or no parent theme, use the other option."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"<your_theme_dir>/web/css/source/lib/_responsive.less"),": the library file."))),(0,o.mdx)("li",{parentName:"ol"},"In your ",(0,o.mdx)("inlineCode",{parentName:"li"},"_responsive.less")," file, add the ",(0,o.mdx)("inlineCode",{parentName:"li"},".media-width")," ",(0,o.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/mixin"},"mixin")," rule for your breakpoint in the corresponding section (desktop or mobile, depending on the type of breakpoint you add).")),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"@media-target")," option may have one of the following values: ",(0,o.mdx)("inlineCode",{parentName:"p"},"all"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"desktop")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"mobile"),"."),(0,o.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Use single quotes when specifying media-targets. Double quotes may cause unexpected issues with the scripts."),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-less"},"& when (@media-target = 'desktop'), (@media-target = 'all') {\n\n    @media all and (min-width: @screen__xl) {\n        .media-width('min', @screen__xl);\n    }\n}\n")),(0,o.mdx)("h2",{id:"add-media-width-calls"},"Add ",(0,o.mdx)("inlineCode",{parentName:"h2"},".media-width()")," calls"),(0,o.mdx)("p",null,"Now you can add a new ",(0,o.mdx)("inlineCode",{parentName:"p"},".media-width()")," mixin call where necessary in your theme ",(0,o.mdx)("inlineCode",{parentName:"p"},".less")," files."),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-less"},".media-width(@extremum, @break) when (@extremum = 'min') and (@break = @screen__xl) {\n    //  Customization for @screen__xl breakpoint\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guide-responsive-design-breakpoints-md-300c3e20c443f822f460.js.map