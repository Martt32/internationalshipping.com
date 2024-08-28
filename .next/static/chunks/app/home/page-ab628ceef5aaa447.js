(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{1619:function(e,s,t){Promise.resolve().then(t.bind(t,4890))},7138:function(e,s,t){"use strict";t.d(s,{default:function(){return r.a}});var l=t(231),r=t.n(l)},948:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var l=t(7437),r=t(2265);function a(){let[e,s]=r.useState({}),t=async()=>{document.querySelector(".popup").classList.toggle("active")};r.useEffect(()=>{e.name?t():console.log("no plan selected")},[e]);let[a,c]=r.useState(e.price),[i,n]=r.useState(!1);return(0,l.jsxs)("div",{className:"p-6 flex flex-col justify-center items-center",children:[(0,l.jsx)("div",{className:"popup",id:"popup-1",children:(0,l.jsx)("div",{className:"overlay",children:(0,l.jsxs)("div",{className:"content flex flex-col justify-center items-center p-4 shadow-md bg-white",children:[(0,l.jsx)("p",{className:"font-bold text-blue-800 text-4xl",children:"Transfer"}),(0,l.jsx)("p",{className:"font-bold text-blue-800 text-2xl",children:"Send to"}),(0,l.jsxs)("div",{className:"flex flex-col space-y-6 p-4 ",children:[(0,l.jsx)("p",{className:"font-bold text-blue-800",children:"Skrill Ltd."}),(0,l.jsx)("p",{className:"font-bold text-blue-800",children:"Account Number: 40068529"}),(0,l.jsx)("p",{className:"font-bold text-blue-800",children:"Bank: JP Morgan - Gb"}),(0,l.jsx)("p",{className:"font-bold text-blue-800",children:"Reference Number: 267907673"}),(0,l.jsx)("p",{className:"font-bold text-red-700 p-5",children:"Must include reference number listed above"})]})]})})}),(0,l.jsx)("p",{className:"font-bold text-4xl text-blue-500",children:"Pricing"}),(0,l.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 md:gap-8 p-8",children:[{name:"Starter Plan",price:500,discount:600,txt:"Starter Plan for personal use"},{name:"Basic Plan",price:750,discount:800,txt:"Basic plan for combined use"},{name:"Business Plan",price:1e3,discount:1250,txt:"Business Plan"},{name:"Premium Plan",price:2e3,discount:2500,txt:"Premium plan for multiple businesses"}].map((e,t)=>(0,l.jsxs)("div",{style:{border:"solid 2px purple"},className:(e.discount,"cursor-pointer p-6 shadow-md justify-center items-center flex flex-col rounded-lg space-y-8"),children:[(0,l.jsx)("p",{className:"font-bold text-3xl text-blue-700",children:e.name}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center space-y-4",children:[(0,l.jsxs)("p",{className:"font-bold text-3xl text-blue-600",children:["\xa3",e.price]}),(0,l.jsxs)("p",{className:"font-bold text-blue-500",children:["\xa3",e.price,"/month"]}),(0,l.jsx)("strike",{className:"text-gray-500",children:(0,l.jsxs)("p",{className:"font-bold text-gray-500",children:["\xa3",e.discount,"/month"]})}),(0,l.jsx)("p",{className:"font-bold text-gray-500",children:"Limited time special offer"}),(0,l.jsx)("p",{className:"font-bold text-gray-900",children:e.txt}),(0,l.jsx)("p",{onClick:()=>s(e),className:"font-bold text-white bg-blue-900 p-3 rounded-lg cursor-pointer hover:bg-blue-700",children:"Get Started"})]})]},t))})]})}},587:function(e,s,t){"use strict";t.d(s,{Z:function(){return a}});var l=t(7437),r=t(7138);function a(){return(0,l.jsxs)("div",{className:"bg-white p-8",children:[(0,l.jsx)("p",{className:"font-bold md:text-2xl text-blue-900",children:"Personal and Shipment data"}),(0,l.jsxs)("form",{className:"grid grid-cols-2 gap-4 p-6",children:[(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"fullname",type:"text",placeholder:"Full Name"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"email",type:"email",placeholder:"Email"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"phone",type:"text",placeholder:"Phone"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"text",placeholder:"Subject"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"delivercity",type:"text",placeholder:"Delivery City"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"citydepart",type:"text",placeholder:"City of Departure"}),(0,l.jsxs)("select",{style:{border:"1px solid gray"},className:"p-2 text-black",children:[(0,l.jsx)("option",{value:"Palm",children:"Freight Type"}),(0,l.jsx)("option",{value:"Pine",children:"Air Freight"}),(0,l.jsx)("option",{value:"Oak",children:"Ocean Freight"}),(0,l.jsx)("option",{value:"Palm",children:"Road Freight"})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Weight"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Height"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Width"}),(0,l.jsx)("input",{style:{border:"1px solid gray"},className:"p-2 text-blue-500",name:"subject",type:"number",placeholder:"Length"}),(0,l.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[(0,l.jsx)("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),(0,l.jsx)("p",{className:"text-black",children:"Fragile"})]}),(0,l.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[(0,l.jsx)("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),(0,l.jsx)("p",{className:"text-black",children:"Express Delivery"})]}),(0,l.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[(0,l.jsx)("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),(0,l.jsx)("p",{className:"text-black",children:"Insurance"})]}),(0,l.jsxs)("label",{className:"flex space-x-2 cursor-pointer",children:[(0,l.jsx)("input",{style:{},className:"cursor-pointer",name:"fragile",type:"checkbox"}),(0,l.jsx)("p",{className:"text-black",children:"Packaging"})]}),(0,l.jsx)(r.default,{href:"/about",children:(0,l.jsx)("button",{className:"bg-blue-800 p-3 rounded-lg font-bold hover:bg-blue-600",children:"Submit"})})]})]})}},4890:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return n}});var l=t(7437),r=t(587),a=t(948),c=t(7138),i=t(2265);function n(){let[e,s]=i.useState({}),t=async()=>{document.querySelector(".popup").classList.toggle("active")};i.useEffect(()=>{e.name?t():console.log("no plan selected")},[e]);let[n,o]=i.useState(e.price),[d,x]=i.useState(!1);return(0,l.jsxs)("main",{className:"",children:[(0,l.jsxs)("div",{className:"hero flex justify-between items-center p-4",children:[(0,l.jsxs)("div",{className:"flex flex-col ",children:[(0,l.jsxs)("p",{className:"p-2 font-bold text-3xl md:text-8xl md:w-1/2 text-blue-500",children:["Best ",(0,l.jsx)("span",{className:"text-red-500",children:"Logistics"})," Everywhere"]}),(0,l.jsx)("p",{className:"p-2 font-bold text-2xl text-blue-900",children:"We are commited to providing our customers with exceptional services"}),(0,l.jsx)("div",{children:(0,l.jsx)(c.default,{href:"about",children:(0,l.jsx)("button",{className:" cursor-pointer hover:bg-blue-400 p-4 text-2xl bg-blue-500 rounded-lg",children:"Track It ->"})})})]}),(0,l.jsx)(c.default,{href:"/about",children:(0,l.jsx)("button",{className:"w-auto hidden md:flex cursor-pointer hover:bg-red-400 p-4 text-2xl bg-red-500 rounded-lg",children:"Track It ->"})})]}),(0,l.jsxs)("div",{className:"p-20 flex flex-col md:flex-row justify-between",children:[(0,l.jsx)("img",{src:"./cargo2.jpg",alt:"cargo",className:"h-1/2"}),(0,l.jsxs)("div",{className:"flex flex-col justify-center p-10",children:[(0,l.jsxs)("p",{className:"p-2 font-bold text-3xl md:text-6xl w-1/2 text-blue-500",children:["Company ",(0,l.jsx)("span",{className:"text-red-500",children:"Overview"})]}),(0,l.jsx)("p",{className:"text-gray-500 text-sm md:text-2xl",children:"Crystalshipments is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.Crystalshipments is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport. Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress."})]})]}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-center p-4 bg-blue-900 min-h-50",children:[(0,l.jsx)("p",{className:"text-5xl text-red-500 font-bold p-2",children:"Services"}),(0,l.jsx)("p",{className:" p-2 text-2xl text-blue-500 font-bold",children:"Services we provide"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-4",children:[(0,l.jsxs)("div",{className:"servicet flex flex-col ",children:[(0,l.jsx)("img",{src:"./cargo2.jpg",alt:"cargo",className:"h-1/2"}),(0,l.jsx)("p",{className:"font-bold text-2xl text-white p-4",children:"Air Freight"}),(0,l.jsx)("p",{className:" text-white p-4",children:"Swift and secure air freight solutions, ensuring your goods reach their destination in the fastest time possible."})]}),(0,l.jsxs)("div",{className:"servicet flex flex-col ",children:[(0,l.jsx)("img",{src:"./cargo.webp",alt:"cargo",className:"h-1/2"}),(0,l.jsx)("p",{className:"font-bold text-2xl text-white p-4",children:"Ocean Freight"}),(0,l.jsx)("p",{className:" text-white p-4",children:"Reliable ocean freight services, offering cost-effective and comprehensive shipping for all your global needs."})]}),(0,l.jsxs)("div",{className:"servicet flex flex-col ",children:[(0,l.jsx)("img",{src:"./car.webp",alt:"cargo",className:"h-1/2"}),(0,l.jsx)("p",{className:"font-bold text-2xl text-white p-4",children:"Road Freight"}),(0,l.jsx)("p",{className:"text-white p-4",children:"Efficient road freight services, delivering your cargo safely and on time across local and regional destinations."})]})]})]}),(0,l.jsxs)("div",{className:"quote p-6 flex flex-col md:flex-row my-10",children:[(0,l.jsxs)("div",{className:"p-4",children:[(0,l.jsxs)("p",{className:"font-bold text-6xl p-4 text-blue-500",children:["Cost ",(0,l.jsx)("span",{className:"text-red-600",children:"Calculator"})]}),(0,l.jsx)("p",{className:"font-bold p-4",children:"Get instant, accurate delivery quotes with our easy-to-use calculator. Plan your shipment with confidence."})]}),(0,l.jsx)(r.Z,{})]}),(0,l.jsx)("div",{id:"pricing",children:(0,l.jsx)(a.Z,{})}),(0,l.jsxs)("div",{className:"flex flex-col space-y-10 justify-center items-center p-6 bg-gray-500",children:[(0,l.jsxs)("p",{className:"font-bold text-5xl text-blue-700 flex flex-col justify-center items-center",children:["Leading delivery service ",(0,l.jsx)("span",{className:"text-white",children:"and"})," ",(0,l.jsx)("span",{className:"text-red-700",children:"Logistic provider"})]}),(0,l.jsx)(c.default,{href:"/about",children:(0,l.jsx)("button",{className:"w-auto hidden md:flex cursor-pointer hover:bg-red-400 p-4 text-2xl bg-red-500 rounded-lg",children:"Track It ->"})})]})]})}}},function(e){e.O(0,[231,971,23,744],function(){return e(e.s=1619)}),_N_E=e.O()}]);