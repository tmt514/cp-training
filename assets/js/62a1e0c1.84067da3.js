"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1734],{8141:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=a(5893),t=a(1151);const i={sidebar_position:2,title:"Colors and Timestamps",exercises:[]},l="frontMatter.title",c={id:"week7/node-colors",title:"Colors and Timestamps",description:'Node colors represent the "current state" during a depth first search.',source:"@site/docs/week7/01-node-colors.mdx",sourceDirName:"week7",slug:"/week7/node-colors",permalink:"/cp-training/docs/week7/node-colors",draft:!1,unlisted:!1,editUrl:"https://github.com/tmt514/cp-training/tree/main/docs/week7/01-node-colors.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Colors and Timestamps",exercises:[]},sidebar:"tutorialSidebar",previous:{title:"DFS on Graphs",permalink:"/cp-training/docs/week7/dfs-on-graphs"},next:{title:"Search Tree",permalink:"/cp-training/docs/week7/search-tree"}},r={},h=[{value:"Basic Application 1: Check Connectivity",id:"basic-application-1-check-connectivity",level:2},{value:"Basic Application 2: Find Cycle on a Graph",id:"basic-application-2-find-cycle-on-a-graph",level:2},{value:"Timestamps",id:"timestamps",level:2},{value:"Basic Application 3: Topological Sort",id:"basic-application-3-topological-sort",level:2},{value:"Application 4: Eulerian Circuit",id:"application-4-eulerian-circuit",level:2}];function m(s){const e={a:"a",admonition:"admonition",annotation:"annotation",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"frontmattertitle",children:i.title}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Node colors"}),' represent the "current state" during a depth first search.\nThe basic setting will be:']}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"0 (white): not visited yet."}),"\n",(0,n.jsx)(e.li,{children:"1 (gray): currently visiting but not finishing the search."}),"\n",(0,n.jsx)(e.li,{children:"2 (black): all searches about this node is done."}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"basic-application-1-check-connectivity",children:"Basic Application 1: Check Connectivity"}),"\n",(0,n.jsx)(e.admonition,{title:"The Task",type:"info",children:(0,n.jsxs)(e.p,{children:["You are given an undirected graph ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"G"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})})]})," and a vertex ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]}),".\nCheck if all vertices are connected with ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]}),"."]})}),"\n",(0,n.jsx)(e.h2,{id:"basic-application-2-find-cycle-on-a-graph",children:"Basic Application 2: Find Cycle on a Graph"}),"\n",(0,n.jsx)(e.admonition,{title:"The Task",type:"info",children:(0,n.jsxs)(e.p,{children:["You are given an undirected graph ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"G"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})})]}),".\nCheck if there are any cycle on ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"G"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})})]}),". If there exists a cycle, output any such cycle."]})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/longest-cycle-in-a-graph/description/",children:"https://leetcode.com/problems/longest-cycle-in-a-graph/description/"})}),"\n",(0,n.jsx)(e.h2,{id:"timestamps",children:"Timestamps"}),"\n",(0,n.jsxs)(e.p,{children:["Each vertex can have a ",(0,n.jsx)(e.strong,{children:"start time"})," and ",(0,n.jsx)(e.strong,{children:"finishing time"})," during the DFS."]}),"\n",(0,n.jsx)(e.h2,{id:"basic-application-3-topological-sort",children:"Basic Application 3: Topological Sort"}),"\n",(0,n.jsx)(e.admonition,{title:"The Task",type:"info",children:(0,n.jsxs)(e.p,{children:["There are ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"n"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," tasks to be done, but there are some dependency.\nIf performing task ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"u"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"})]})})]})," requires the task ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," to be done first, we write ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsx)(e.mi,{children:"v"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u\\to v"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})]})]}),".\nYou are given the ",(0,n.jsx)(e.strong,{children:"directed graph"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"G"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})})]})," that captures all such dependencies of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"(u, v)"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})})]})," pairs.\nDetermine the order of finishing all tasks so that no dependency is violated.\n(or report that it is impossible to finish all tasks without violating dependencies.)"]})}),"\n",(0,n.jsxs)(e.p,{children:["Lemma: if ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"u"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"})]})})]})," ",(0,n.jsx)(e.em,{children:"requires"})," ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"v"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"v"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})})]})," (i.e., ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{children:"\u2192"}),(0,n.jsx)(e.mi,{children:"v"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"u\\to v"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2192"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"})]})]})]}),"), then the finishing time ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"v"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(u) > f(v)"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"application-4-eulerian-circuit",children:"Application 4: Eulerian Circuit"}),"\n",(0,n.jsx)(e.admonition,{title:"The Task",type:"info",children:(0,n.jsxs)(e.p,{children:["You are given an undirected graph ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"G"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"G"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"G"})]})})]}),", whose all vertices are of ",(0,n.jsx)(e.strong,{children:"even degree"})," and the graph is connected.\nThe goal is to find a ",(0,n.jsx)(e.strong,{children:"trail"})," (a path but we allow visiting the same vertex multiple times) such that each edge appears exactly once in the trail."]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"The Fleury's approach (the concept is easy but implementation is hard.) [Fleury 1883]"}),"\n",(0,n.jsx)(e.li,{children:"The DFS approach (Hierholzer's algorithm) [Hierholzer 1873]"}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["Try this: ",(0,n.jsx)(e.a,{href:"https://leetcode.com/problems/reconstruct-itinerary/description/",children:"https://leetcode.com/problems/reconstruct-itinerary/description/"})]})]})}function d(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},1151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>l});var n=a(7294);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);