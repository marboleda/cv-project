(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),i=n.n(l),o=(n(14),n(2)),c=n(3),u=n(1),m=n(5),s=n(4),d=(n(15),function(e){return e.isEditing?r.a.createElement("div",{className:"generalInfo"},r.a.createElement("form",{onSubmit:e.submit,name:"general-info"},r.a.createElement("h2",null,"General Info"),r.a.createElement("div",null,r.a.createElement("label",{for:"name"},r.a.createElement("strong",null,"Name:")),r.a.createElement("input",{type:"text",name:"name",onChange:e.nameChange,value:e.name,required:!0})),r.a.createElement("div",null,r.a.createElement("label",{for:"email"},r.a.createElement("strong",null,"Email:")),r.a.createElement("input",{type:"text",name:"email",onChange:e.emailChange,value:e.email})),r.a.createElement("div",null,r.a.createElement("label",{for:"phone"},r.a.createElement("strong",null,"Phone Number:")),r.a.createElement("input",{type:"text",name:"phone",onChange:e.phoneChange,value:e.phone})),r.a.createElement("button",{type:"submit"},"Submit"))):r.a.createElement("div",null,r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.email),r.a.createElement("p",null,e.phone),r.a.createElement("button",{id:"edit-general-info-button",onClick:e.edit},"Edit"))}),E=n(6),p=(n(16),function(e){var t=e.index,n=e.changeInput,a=e.entryInfo,l=e.isEditing;return r.a.createElement("div",null,l?r.a.createElement("form",{className:"workExperienceForm","data-work-experience-form":t},r.a.createElement("span",null,r.a.createElement("label",{for:"role"},"Role:"),r.a.createElement("input",{type:"text",name:"role",onChange:function(e){return n(e,t,"role")},value:a.role})),r.a.createElement("span",null,r.a.createElement("label",{for:"company"},"Company:"),r.a.createElement("input",{type:"text",name:"company",onChange:function(e){return n(e,t,"company")},value:a.company})),r.a.createElement("span",null,r.a.createElement("label",{for:"start-date"},"Start Date:"),r.a.createElement("input",{type:"text",name:"start-date",onChange:function(e){return n(e,t,"start-date")},value:a.startDate})," ",r.a.createElement("label",{for:"end-date"},"End Date:"),r.a.createElement("input",{type:"text",name:"end-date",onChange:function(e){return n(e,t,"end-date")},value:a.endDate})," "),r.a.createElement("span",null,r.a.createElement("label",{for:"description"},"Responsibilities / Accomplishments:"),r.a.createElement("textarea",{name:"description",onChange:function(e){return n(e,t,"description")},value:a.description}))):r.a.createElement("div",{className:"workExperienceEntry"},r.a.createElement("span",{class:"role"},a.role),", ",a.company," ",r.a.createElement("span",{class:"work-dates"},a.startDate,"-",a.endDate),r.a.createElement("div",{className:"work-experience-description"},a.description)))}),g=(n(17),function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).addButtonHandler=function(){a.setState({workExperienceEntries:a.state.workExperienceEntries.concat({role:"",company:"",startDate:"",endDate:"",description:""})})},a.onChangeInput=function(e,t,n){var r=e.target.value,l=Object(E.a)(a.state.workExperienceEntries);switch(n){case"role":l[t].role=r;break;case"company":l[t].company=r;break;case"start-date":l[t].startDate=r;break;case"end-date":l[t].endDate=r;break;case"description":l[t].description=r}a.setState({workExperienceEntries:l})},a.submitButtonHandler=function(){a.setState({editingWorkExperience:!1})},a.state={workExperienceEntries:[],editingWorkExperience:!0},a.onChangeInput=a.onChangeInput.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.workExperienceEntries,a=t.editingWorkExperience;return r.a.createElement("div",{className:"workExperience"},r.a.createElement("h2",null,"Work Experience"),n.map((function(t,n){return r.a.createElement(p,{isEditing:a,index:n,changeInput:e.onChangeInput,entryInfo:t})})),a?r.a.createElement("button",{onClick:this.addButtonHandler},"Add"):null,r.a.createElement("button",{onClick:this.submitButtonHandler},"Submit"))}}]),n}(a.Component)),f=(n(18),function(e){var t=e.isEditing,n=e.index,a=e.changeInput,l=e.entryInfo;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"educationEntry"},r.a.createElement("span",null,r.a.createElement("label",{for:"title"},"Title of Study:"),r.a.createElement("input",{type:"text",name:"title",onChange:function(e){return a(e,n,"title")},value:l.title})),r.a.createElement("span",null,r.a.createElement("label",{for:"school"},"School:"),r.a.createElement("input",{type:"text",name:"school",onChange:function(e){return a(e,n,"school")},value:l.school})),r.a.createElement("span",null,r.a.createElement("label",{for:"start-date"},"Start Date:"),r.a.createElement("input",{type:"text",name:"start-date",onChange:function(e){return a(e,n,"start-date")},value:l.startDate})," "),r.a.createElement("span",null,r.a.createElement("label",{for:"end-date"},"End Date:"),r.a.createElement("input",{type:"text",name:"end-date",onChange:function(e){return a(e,n,"end-date")},value:l.endDate})," ")):r.a.createElement("div",{className:"educationEntry"},r.a.createElement("span",{className:"title"},l.title),r.a.createElement("span",{className:"school-and-dates"},l.school," (",l.startDate,"-",l.endDate,")")))}),h=(n(19),function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).addButtonHandler=function(){a.setState({educationEntries:a.state.educationEntries.concat({title:"",school:"",startDate:"",endDate:""})})},a.onChangeInput=function(e,t,n){e.target.value;var r=Object(E.a)(a.state.educationEntries);switch(n){case"title":r[t].title=e.target.value;break;case"school":r[t].school=e.target.value;break;case"start-date":r[t].startDate=e.target.value;break;case"end-date":r[t].endDate=e.target.value}a.setState({educationEntries:r})},a.submitButtonHandler=function(){a.setState({editingEducation:!1})},a.state={educationEntries:[],editingEducation:!0},a.onChangeInput=a.onChangeInput.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.educationEntries,a=t.editingEducation;return r.a.createElement("div",{className:"education"},r.a.createElement("h2",null,"Education"),n.map((function(t,n){return r.a.createElement(f,{isEditing:a,index:n,changeInput:e.onChangeInput,entryInfo:t})})),a?r.a.createElement("button",{onClick:this.addButtonHandler},"Add"):null,r.a.createElement("button",{onClick:this.submitButtonHandler},"Submit"))}}]),n}(a.Component)),b=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).generalInfoNameChangeHandler=function(e){a.setState({generalInfoName:e.target.value})},a.generalInfoEmailChangeHandler=function(e){a.setState({generalInfoEmail:e.target.value})},a.generalInfoPhoneNumberChangeHandler=function(e){a.setState({generalInfoPhoneNumber:e.target.value})},a.generalInfoSubmitHandler=function(){a.setState({editingGeneralInfo:!1})},a.generalInfoEditButtonHandler=function(){a.setState({editingGeneralInfo:!0})},a.state={editingGeneralInfo:!0,generalInfoName:"",generalInfoEmail:"",generalInfoPhoneNumber:""},a.generalInfoNameChangeHandler=a.generalInfoNameChangeHandler.bind(Object(u.a)(a)),a.generalInfoEmailChangeHandler=a.generalInfoEmailChangeHandler.bind(Object(u.a)(a)),a.generalInfoPhoneNumberChangeHandler=a.generalInfoPhoneNumberChangeHandler.bind(Object(u.a)(a)),a.generalInfoSubmitHandler=a.generalInfoSubmitHandler.bind(Object(u.a)(a)),a.generalInfoEditButtonHandler=a.generalInfoEditButtonHandler.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.editingGeneralInfo,n=e.generalInfoName,a=e.generalInfoEmail,l=e.generalInfoPhoneNumber;return r.a.createElement("div",{className:"App"},r.a.createElement(d,{submit:this.generalInfoSubmitHandler,edit:this.generalInfoEditButtonHandler,isEditing:t,name:n,email:a,phone:l,nameChange:this.generalInfoNameChangeHandler,phoneChange:this.generalInfoPhoneNumberChangeHandler,emailChange:this.generalInfoEmailChangeHandler}),r.a.createElement(g,null),r.a.createElement(h,null))}}]),n}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.de2946a9.chunk.js.map