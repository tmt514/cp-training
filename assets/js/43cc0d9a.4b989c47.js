"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2440],{1141:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=i(5893),n=i(1151);const s={sidebar_position:3,exercises:["leetcode-spiral-matrix","leetcode-multiply-strings","kattis-imageprocessing"],title:"Basic Array Manipulations"},a="frontMatter.title",o={id:"week1/basic-array",title:"Basic Array Manipulations",description:"Two Dimensional Array",source:"@site/docs/week1/02-basic-array.mdx",sourceDirName:"week1",slug:"/week1/basic-array",permalink:"/cp-training/docs/week1/basic-array",draft:!1,unlisted:!1,editUrl:"https://github.com/tmt514/cp-training/tree/main/docs/week1/02-basic-array.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,exercises:["leetcode-spiral-matrix","leetcode-multiply-strings","kattis-imageprocessing"],title:"Basic Array Manipulations"},sidebar:"tutorialSidebar",previous:{title:"Basic String Manipulations",permalink:"/cp-training/docs/week1/basic-string"},next:{title:"Extra Discussion Questions",permalink:"/cp-training/docs/week1/extra-discussion"}},c={},l=[{value:"Two Dimensional Array",id:"two-dimensional-array",level:2},{value:"Exercises",id:"exercises",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{DisplayProgress:i,LocalButton:a,TabItem:o,Tabs:c}=t;return i||h("DisplayProgress",!0),a||h("LocalButton",!0),o||h("TabItem",!0),c||h("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{names:s.exercises}),"\n",(0,r.jsx)(t.h1,{id:"frontmattertitle",children:s.title}),"\n",(0,r.jsx)(t.h2,{id:"two-dimensional-array",children:"Two Dimensional Array"}),"\n",(0,r.jsxs)(c,{groupId:"programming-language",children:[(0,r.jsxs)(o,{value:"java",label:"Java",children:[(0,r.jsx)(t.p,{children:'Java\'s 2D array looks more like "array of 1D arrays".\nEach array can be initialized to different sizes.'}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public class array1 {\n  public static void main(String[] args) {\n    int[][] a;\n    a = new int[100][];\n    for (int i = 0; i < 100; i++) {\n      a[i] = new int[i];\n      for (int j = 0; j < i; j++) {\n        a[i][j] = i + j;\n      }\n      System.out.println(a[i].length);\n    }\n  }\n}\n"})})]}),(0,r.jsx)(o,{value:"py",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:"val = input()\nint(val)\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"exercises",children:"Exercises"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Problem"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(a,{name:"leetcode-spiral-matrix"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/spiral-matrix/description/",children:"Leetcode 54. Spiral Matrix"})}),(0,r.jsx)(t.td,{children:"Array traversal."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(a,{name:"leetcode-multiply-strings"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://leetcode.com/problems/multiply-strings/description/",children:"Leetcode 43. Multiplying Strings"})}),(0,r.jsx)(t.td,{children:"1D array convolution."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(a,{name:"kattis-imageprocessing"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"https://open.kattis.com/problems/imageprocessing",children:"Image Processing"})}),(0,r.jsx)(t.td,{children:"2D array convolution."})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var r=i(7294);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);