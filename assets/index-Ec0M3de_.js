(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function u(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(s){if(s.ep)return;s.ep=!0;const t=u(s);fetch(s.href,t)}})();const e=document.querySelector.bind(document),f=e("#hamburger"),m=e("#crossMark"),c=e(".navlist-menu"),a=e("#footer-year");f.addEventListener("click",()=>{c.classList.toggle("v-resp-navmenu"),e(".hamburgerDiv").classList.add("hidden"),e(".crossMarkDiv").classList.remove("hidden")});m.addEventListener("click",()=>{c.classList.toggle("v-resp-navmenu"),e(".hamburgerDiv").classList.remove("hidden"),e(".crossMarkDiv").classList.add("hidden")});let o=document.getElementsByClassName("m-links");o=Array.from(o);o.forEach(r=>{r.addEventListener("click",()=>{c.classList.toggle("v-resp-navmenu")})});a.addEventListener("onload",h());function h(){a.innerText=new Date().getFullYear()}const L=document.querySelectorAll(".links"),v=document.querySelectorAll(".eachSection");let l="home";window.addEventListener("scroll",()=>{v.forEach(r=>{window.scrollY>=r.offsetTop-r.clientHeight/2&&(l=r.id)}),L.forEach(r=>{var n;r.href.includes(l)&&((n=e(".active-links"))==null||n.classList.remove("active-links"),r.classList.add("active-links"))})});e(".showMore-btn").addEventListener("click",()=>{e(".hidden-projects").classList.remove("hidden"),e(".showMore-btn").classList.add("hidden"),e(".showLess-btn").classList.remove("hidden")});e(".showLess-btn").addEventListener("click",()=>{e(".hidden-projects").classList.add("hidden"),e(".showLess-btn").classList.add("hidden"),e(".showMore-btn").classList.remove("hidden")});
