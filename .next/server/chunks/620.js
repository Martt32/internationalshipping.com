exports.id=620,exports.ids=[620],exports.modules={6132:(e,s,l)=>{Promise.resolve().then(l.t.bind(l,2994,23)),Promise.resolve().then(l.t.bind(l,6114,23)),Promise.resolve().then(l.t.bind(l,9727,23)),Promise.resolve().then(l.t.bind(l,9671,23)),Promise.resolve().then(l.t.bind(l,1868,23)),Promise.resolve().then(l.t.bind(l,4759,23))},4934:(e,s,l)=>{Promise.resolve().then(l.t.bind(l,9404,23))},434:(e,s,l)=>{"use strict";l.d(s,{default:()=>a.a});var t=l(9404),a=l.n(t)},5492:(e,s,l)=>{"use strict";l.d(s,{Z:()=>r});var t=l(326),a=l(7577);function r(){let[e,s]=a.useState({}),l=async()=>{document.querySelector(".popup").classList.toggle("active")};a.useEffect(()=>{e.name?l():console.log("no plan selected")},[e]);let[r,c]=a.useState(e.price),[i,n]=a.useState(!1);return(0,t.jsxs)("div",{className:"p-6 flex flex-col justify-center items-center",children:[t.jsx("div",{className:"popup",id:"popup-1",children:t.jsx("div",{className:"overlay",children:(0,t.jsxs)("div",{className:"content flex flex-col justify-center items-center p-4 shadow-md bg-white",children:[t.jsx("p",{className:"font-bold text-blue-800 text-4xl",children:"Transfer"}),t.jsx("p",{className:"font-bold text-blue-800 text-2xl",children:"Send to"}),(0,t.jsxs)("div",{className:"flex flex-col space-y-6 p-4 ",children:[t.jsx("p",{className:"font-bold text-blue-800",children:"Skrill Ltd."}),t.jsx("p",{className:"font-bold text-blue-800",children:"Account Number: 40068529"}),t.jsx("p",{className:"font-bold text-blue-800",children:"Bank: JP Morgan - Gb"}),t.jsx("p",{className:"font-bold text-blue-800",children:"Reference Number: 267907673"}),t.jsx("p",{className:"font-bold text-red-700 p-5",children:"Must include reference number listed above"})]})]})})}),t.jsx("p",{className:"font-bold text-4xl text-blue-500",children:"Pricing"}),t.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-8 p-8",children:[{name:"Starter Plan",price:500,discount:600,txt:"Starter Plan for personal use"},{name:"Basic Plan",price:750,discount:800,txt:"Basic plan for combined use"},{name:"Business Plan",price:1e3,discount:1250,txt:"Business Plan"},{name:"Premium Plan",price:2e3,discount:2500,txt:"Premium plan for multiple businesses"}].map((e,l)=>(0,t.jsxs)("div",{style:{border:"solid 2px purple"},className:(e.discount,"cursor-pointer p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8"),children:[t.jsx("p",{className:"font-bold text-3xl text-blue-700",children:e.name}),(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-4",children:[(0,t.jsxs)("p",{className:"font-bold text-3xl text-blue-600",children:["\xa3",e.price]}),(0,t.jsxs)("p",{className:"font-bold text-blue-500",children:["\xa3",e.price,"/month"]}),t.jsx("strike",{className:"text-gray-500",children:(0,t.jsxs)("p",{className:"font-bold text-gray-500",children:["\xa3",e.discount,"/month"]})}),t.jsx("p",{className:"font-bold text-gray-500",children:"Limited time special offer"}),t.jsx("p",{className:"font-bold text-gray-900",children:e.txt}),t.jsx("p",{onClick:()=>s(e),className:"font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700",children:"Get Started"})]})]},l))})]})}},5546:(e,s,l)=>{"use strict";l.d(s,{Z:()=>r});var t=l(326),a=l(434);function r(){return(0,t.jsxs)("div",{className:"bg-white p-8",children:[t.jsx("p",{className:"font-bold md:text-2xl text-blue-900",children:"Personal and Shipment data"}),(0,t.jsxs)("form",{className:"grid grid-cols-2 gap-4 p-6",children:[t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"fullname",type:"text",placeholder:"Full Name"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"email",type:"email",placeholder:"Email"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"phone",type:"text",placeholder:"Phone"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"text",placeholder:"Subject"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"delivercity",type:"text",placeholder:"Delivery City"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"citydepart",type:"text",placeholder:"City of Departure"}),(0,t.jsxs)("select",{style:{border:"1px solid gray"},className:"p-2 text-black",children:[t.jsx("option",{value:"Palm",children:"Freight Type"}),t.jsx("option",{value:"Pine",children:"Air Freight"}),t.jsx("option",{value:"Oak",children:"Ocean Freight"}),t.jsx("option",{value:"Palm",children:"Road Freight"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Weight"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Height"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Width"}),t.jsx("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Length"}),(0,t.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[t.jsx("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),t.jsx("p",{className:"text-black",children:"Fragile"})]}),(0,t.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[t.jsx("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),t.jsx("p",{className:"text-black",children:"Express Delivery"})]}),(0,t.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[t.jsx("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),t.jsx("p",{className:"text-black",children:"Insurance"})]}),(0,t.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[t.jsx("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),t.jsx("p",{className:"text-black",children:"Packaging"})]}),t.jsx(a.default,{href:"/about",children:t.jsx("button",{className:"bg-blue-800 p-3 rounded-lg font-bold hover:bg-blue-600",children:"Submit"})})]})]})}},31:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>i,metadata:()=>c});var t=l(9510);l(5023);var a=l(7371);let r=({children:e})=>(0,t.jsxs)("main",{children:[(0,t.jsxs)("div",{className:"flex justify-between p-5 shadow-md",children:[t.jsx("p",{className:"font-bold text-2xl text-blue-500",children:"Crystal Shipments"}),(0,t.jsxs)("div",{className:"justify-center items-center space-x-6 hidden md:flex",children:[t.jsx(a.default,{href:"/home",children:t.jsx("p",{className:"font-bold text-blue-500 hover:grey-300",children:"Home"})}),t.jsx(a.default,{href:"/services",children:t.jsx("p",{className:"font-bold text-blue-500 hover:grey-300",children:"Services"})}),t.jsx(a.default,{href:"/contact",children:t.jsx("p",{className:"font-bold text-blue-500 hover:grey-300",children:"Contact us"})})]})]}),t.jsx("main",{className:"flex min-h-screen w-full flex-col justify-between",children:e})]}),c={title:"Crystal Shipments",description:"Ship and track your cargo"};function i({children:e}){return t.jsx("html",{lang:"en",children:t.jsx("body",{children:t.jsx(r,{children:e})})})}},3881:(e,s,l)=>{"use strict";l.r(s),l.d(s,{default:()=>a});var t=l(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};