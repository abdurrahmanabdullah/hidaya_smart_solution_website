"use strict";(self.webpackChunktmc=self.webpackChunktmc||[]).push([[8306],{18306:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>W});var a=_(92132),o=_(84192),n=_(75453),A=_(21272),C=_(24952),R=_(5409),l=_(74157),U=_(15126),v=_(63299),B=_(67014),t=_(59080),i=_(79275),L=_(14718),d=_(82437),I=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),m=_(48940),P=_(41286),h=_(51187),r=_(56336),f=_(39404),g=_(58692),S=_(54257),y=_(501),N=_(57646),j=_(23120),x=_(44414),F=_(25962),V=_(14664),H=_(42588),$=_(90325),c=_(62785),G=_(87443),z=_(41032),X=_(22957),Y=_(93179),J=_(73055),Q=_(15747),Z=_(85306),e=_(77965),u=_(26509),p=_(84624),k=_(71210),w=_(32058),b=_(81185),q=_(82261),__=_(62482),E_=_(36224),t_=_(20296),s_=_(97987),O_=_(72810),M_=_(18022),D_=_(67031);const W=()=>((0,n.u)(),(0,a.jsx)(o.e,{}))},75453:(K,s,_)=>{_.d(s,{u:()=>B});var a=_(21272),o=_(24952),n=_(67031),A=_(54894),C=_(17703),R=_(74157);const l="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:d}=(0,R.m)(),I=(0,o.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=i??{};a.useEffect(()=>{if(L||d)return;const m=!n(M)&&!window.sessionStorage.getItem(`${l}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),m&&I({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${O}`,"true")}})},[I,i,O,t,d,M,E,T,D,L])}}}]);
