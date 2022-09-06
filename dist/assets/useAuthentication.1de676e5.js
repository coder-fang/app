import{aa as l,ab as g,r as i}from"./index.090d1b34.js";import{b as o,c as r,d as u,e as s,g as _,o as c}from"./index.5e4b8f88.js";import{_ as f,t as h,d as m}from"./date.c25f3370.js";const k=async t=>await o.post("/user/login",t),A=async t=>await o.post("/user/register",t),y=async t=>await o.post("/mail/code/send/register",{email:t}),v=async()=>await o.post("/refresh/authorization"),C=async()=>await o.get("/user/detail"),p=async t=>await o.post("/user/update",t),w="https://gcloud-1303456836.cos.ap-chengdu.myqcloud.com/gcloud/avatars/",B=()=>{const t=f.random(1,30),e=`${w}${t}.png`;return r("avatar",e),e},d={token:r("token"),refresh_token:r("refresh_token")},S=l({id:"auth",state:()=>({auth:{},token:d.token||"",refresh_token:d.refresh_token||"",code:"",sign_status:!1,online_status:!1}),getters:{user_auth:t=>t.auth,user_token:t=>t.token,user_refresh_token:t=>t.refresh_token,user_status:t=>t.sign_status,user_online:t=>t.online_status},actions:{async onLoginAction(t){try{const e=await k(t);e.status===200&&e.data.msg==="\u7528\u6237\u767B\u5F55\u6210\u529F"?(this.token=e.data.token,this.refresh_token=e.data.refresh_token,await this.onGetUserDetailByTokenAction(),r("refresh_token",this.refresh_token)):e.data.msg==="\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF"?(this.sign_status=!1,u("\u4E0D\u8981\u8BA9\u6211\u77E5\u9053\u4F60\u5FD8\u8BB0\u5BC6\u7801\u4E86")):s(e.data.msg)}catch{this.sign_status=!1,s()}},onLogoutAction(){delete this.token,delete this.refresh_token,delete this.auth,this.sign_status=!1,this.online_status=!1,localStorage.removeItem("token"),localStorage.removeItem("refresh_token")},async onRegisterAction(t){try{const e=await A(t);return e.data.msg==="\u6CE8\u518C\u6210\u529F"?(this.auth={...this.auth,name:t.name,email:t.email},_("\u6CE8\u518C\u6210\u529F"),!0):(s(e.data.msg),!1)}catch{return s("\u51FA\u9519\u4E86"),!1}},async onMailCodeAction(t){try{return(await y(t)).data.msg==="registered"?(s("\u90AE\u7BB1\u5DF2\u6CE8\u518C"),!1):(c("\u8BF7\u6CE8\u610F\u67E5\u6536\u90AE\u7BB1"),!0)}catch{this.sign_status=!1,s("\u83B7\u53D6\u9A8C\u8BC1\u7801\u5931\u8D25")}},async onRefreshTokenAction(){try{const t=await v();return t.data.msg==="success"?(this.token=t.data.token,this.refresh_token=t.data.refresh_token,r("token",this.token),r("refresh_token",this.refresh_token),!0):(c(t.data.msg),!1)}catch{s("\u767B\u9646\u5DF2\u8FC7\u671F")}},async onGetUserDetailByTokenAction(){try{const t=await C();return t.data.msg==="success"?(t.data.avatar===""&&(t.data.avatar=B(),this.onUpdateUserInfoAction({avatar:t.data.avatar})),this.auth={name:t.data.name,email:t.data.email,identity:t.data.identity,avatar:t.data.avatar,created_at:h(t.data.created_at||"2022-05-20T10:14:46+08:00"),registration_days:m(h(t.data.created_at||"2022-08-22T10:14:46+08:00"))},this.sign_status=!0,this.online_status=!0,!0):(t.data.msg==="not found"&&(u("\u627E\u4E0D\u5230\u7528\u6237"),localStorage.removeItem("token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("sign_status"),this.sign_status=!1,this.online_status=!1),!1)}catch{return this.sign_status=!1,this.online_status=!1,!1}},onChangeAvatarAction(t){t!==""&&f.assign(this.auth,{avatar:t})},async onUpdateUserInfoAction(t){try{const e=await p(t);e.data.msg!=="success"&&u(e.data.msg)}catch{s("\u51FA\u9519\u4E86")}}}});function U(){return S(g)}const n=U(),x=()=>{const t=i(),e=i(null);return{token:t,onLogin:async a=>{a&&await n.onLoginAction(a)},onLogout:()=>{n.onLogoutAction()},onRegister:async a=>a?await n.onRegisterAction(a):!1,onGetCode:async a=>{if(a)return await n.onMailCodeAction(a)},onGetUserDetailAndCheckAuth:async()=>await n.onGetUserDetailByTokenAction(),onChangeAvatar:a=>{n.onChangeAvatarAction(a)},onUpdateUserInfo:async a=>{await n.onUpdateUserInfoAction(a)},error:e}};export{x as a,B as r,U as u};