import{d as f}from"./chunk-PRHPRTXY.js";import{b as s}from"./chunk-AO6MUSOH.js";import{x}from"./chunk-SJIW4WAV.js";import{a as d,q as m}from"./chunk-RIJWHGTU.js";import{I as l,v as a}from"./chunk-K4MPEKC5.js";import{c as A}from"./chunk-XIGC6FD5.js";import{a as N}from"./chunk-CXUPEGDW.js";import{f as c,m as e,o as i}from"./chunk-ICCOEXX5.js";e();i();var n=c(N()),o=c(A());l();e();i();var r={root:"_root_wpiv5_1",title:"_title_wpiv5_4",header:"_header_wpiv5_8",icon:"_icon_wpiv5_12",content:"_content_wpiv5_16",textarea:"_textarea_wpiv5_19",errorTip:"_errorTip_wpiv5_22",errorBordered:"_errorBordered_wpiv5_29"};function E({className:t,value:w,onChange:h,error:p,titleClass:T,errorTipClass:v,headerClassName:I,contentClassName:g,...y}){return n.default.createElement(d,{className:(0,o.default)(r.root,t),titleClass:(0,o.default)(r.title,T),headerClassName:(0,o.default)(r.header,I),contentClassName:(0,o.default)(r.content,g),customHeaderIcon:_=>n.default.createElement(s,{icon:"okds-arrow-chevron-down-md",size:s.SIZE.xs,className:(0,o.default)({"okui-accordion-header-icon-expanded":_},r.icon)}),title:a("wallet_extension_inscription_text_hex_data_optional")},n.default.createElement(m.TextArea,{...y,inputClassName:r.textarea,errorType:m.TIP_TYPE.always,error:!!p,value:w,onChange:_=>{let C=_.target.value||"";h?.(C.trim())}}),!!p&&n.default.createElement(x.Text,{className:(0,o.default)(r.errorTip,v)},p))}var j=E;e();i();l();function M(t){return!!t&&(t.toLowerCase()==="0x"||!f(t)||t.length%2!==0)?a("wallet_extension_inscription_text_input_formatting_error"):null}export{j as a,M as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-QIJYKINJ.js.map
