"use strict";(self.webpackChunktemplate_utils=self.webpackChunktemplate_utils||[]).push([[583],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1369:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),l=["components"],s={id:"components",title:"Built-in components"},i=void 0,p={unversionedId:"documentation/components",id:"documentation/components",isDocsHomePage:!1,title:"Built-in components",description:"This section describes how to use, configure and extend the generator components.",source:"@site/docs/documentation/components.md",sourceDirName:"documentation",slug:"/documentation/components",permalink:"/template-utils/docs/documentation/components",editUrl:"https://github.com/videki/template-utils/docs/documentation/components.md",tags:[],version:"current",frontMatter:{id:"components",title:"Built-in components"},sidebar:"docs",previous:{title:"Architecture",permalink:"/template-utils/docs/documentation/architecture"},next:{title:"Features",permalink:"/template-utils/docs/documentation/features"}},u=[{value:"Template repositories",id:"template-repositories",children:[{value:"Filesystem repository",id:"filesystem-repository",children:[],level:3}],level:2},{value:"Document structure repositories",id:"document-structure-repositories",children:[{value:"Filesystem doc structure repository",id:"filesystem-doc-structure-repository",children:[],level:3}],level:2},{value:"Document structure builders",id:"document-structure-builders",children:[{value:"YAML document structure builder",id:"yaml-document-structure-builder",children:[],level:3}],level:2},{value:"Input processors",id:"input-processors",children:[{value:"Docx-stamper processor",id:"docx-stamper-processor",children:[{value:"Input format: .docx",id:"input-format-docx",children:[],level:4}],level:3},{value:"Noop processor",id:"noop-processor",children:[{value:"Input format: -",id:"input-format--",children:[],level:4}],level:3},{value:"Jxls processor",id:"jxls-processor",children:[{value:"Input format: .xlsx",id:"input-format-xlsx",children:[],level:4}],level:3}],level:2},{value:"Converters",id:"converters",children:[{value:"Pdfbox docx-pdf converter",id:"pdfbox-docx-pdf-converter",children:[],level:3}],level:2},{value:"Result stores",id:"result-stores",children:[],level:2},{value:"Registries",id:"registries",children:[],level:2},{value:"Input and output types",id:"input-and-output-types",children:[{value:"Document structures",id:"document-structures",children:[{value:"Template elements",id:"template-elements",children:[],level:4}],level:3},{value:"Value sets",id:"value-sets",children:[],level:3},{value:"Generation results",id:"generation-results",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section describes how to use, configure and extend the generator components."),(0,a.kt)("h2",{id:"template-repositories"},"Template repositories"),(0,a.kt)("p",null,"Template repositories maintain how the required templates are accessed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuration")),(0,a.kt)("p",null,"To bind a repository connector, the provider class and its provider-specific properties have to be specified.\nYou can find the latter at the provider description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Use filesystem folder as a template repository   \nrepository.template.provider=org.mycompany.templaterepo.ProviderClass\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repository connectors")),(0,a.kt)("h3",{id:"filesystem-repository"},"Filesystem repository"),(0,a.kt)("p",null,"Retrieves templates from a filesystem location, e.g. each template is stored as a file.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"repository.template.provider=net.videki.templateutils.template.core.provider.templaterepository.filesystem.FileSystemTemplateRepository\nrepository.template.provider.basedir=templates\n")),(0,a.kt)("p",null,"Configuration:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"repository.template.provider.basedir"),(0,a.kt)("td",{parentName:"tr",align:null},"Root folder location. Can be an absolute, or a relative path to app startup location.")))),(0,a.kt)("h2",{id:"document-structure-repositories"},"Document structure repositories"),(0,a.kt)("p",null,"Document structure repositories maintain how the document set descriptors are accessed.\nFor handling document structures two providers are required:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a repository for retrieving the structure descriptors (filesystem, git, postgres, mongodb, etc.)"),(0,a.kt)("li",{parentName:"ul"},"a builder for parsing the descriptors  (yaml, etc.)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuration")),(0,a.kt)("p",null,"To bind a repository connector, the provider class and its provider-specific properties have to be specified.\nYou can find the latter at the provider description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Use filesystem folder as a template repository   \nrepository.documentstructure.provider=org.mycompany.docstructurerepo.ProviderClass\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Repository connectors")),(0,a.kt)("h3",{id:"filesystem-doc-structure-repository"},"Filesystem doc structure repository"),(0,a.kt)("p",null,"Retrieves templates from a filesystem location, e.g. each template is stored as a file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"repository.documentstructure.provider=net.videki.templateutils.template.core.provider.documentstructure.repository.filesystem.FileSystemDocumentStructureRepository\nrepository.documentstructure.provider.filesystem.basedir=doc-structures\n")),(0,a.kt)("p",null,"Configuration:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"repository.documentstructure.provider.filesystem.basedir"),(0,a.kt)("td",{parentName:"tr",align:null},"Root folder location. Can be an absolute, or a relative path to app startup location.")))),(0,a.kt)("h2",{id:"document-structure-builders"},"Document structure builders"),(0,a.kt)("p",null,"Document structure builder control how the document set descriptors are built."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configuration")),(0,a.kt)("p",null,"To bind a document set builder connector, the provider class and its provider-specific properties have to be specified.\nYou can find the latter at the provider description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# Use filesystem folder as a template repository   \nrepository.documentstructure.provider=org.mycompany.structurebuilder.MyProviderClass\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Builder implementations")),(0,a.kt)("h3",{id:"yaml-document-structure-builder"},"YAML document structure builder"),(0,a.kt)("p",null,"Parses a document structure stored in YAML format.\n(The source repository )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"repository.documentstructure.builder=net.videki.templateutils.template.core.provider.documentstructure.builder.yaml.YmlDocStructureBuilder\n")),(0,a.kt)("h2",{id:"input-processors"},"Input processors"),(0,a.kt)("p",null,"An input processor is a template processor, which fills in a specific template format\nusing a given placeholder and control (for example .docx files with docx-stamper markup)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"processors.provider.<input-format>=org.mycompany.docstructurerepo.ProviderClass\n")),(0,a.kt)("p",null,"You can specify a list of input processors for the engine with ",(0,a.kt)("strong",{parentName:"p"},"exactly one")," processor per input format.\nThe built-in configuration for example is the setup below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"processors.docx=net.videki.templateutils.template.core.processor.input.docx.DocxStamperInputTemplateProcessor\nprocessors.xlsx=net.videki.templateutils.template.core.processor.input.xlsx.JxlsInputTemplateProcessor\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Template contexts")),(0,a.kt)("p",null,"The engine supports multiple values to be handed over to the processors. These are called template contexts.\nA context can either be "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"global\nWhen only one value object is used, you can simply pass it to the engine without building a context wrapper.\nWhen using this, it will be handled as a global context, and you will have to refer the values of this object\nwith ",(0,a.kt)("code",null,"model")," like ",(0,a.kt)("inlineCode",{parentName:"li"},"${model.myValue}"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"        context.addValueObject(orgUnit);\n")),(0,a.kt)("p",null,"  In this case this ",(0,a.kt)("code",null,"orgUnit")," object can be referred as ",(0,a.kt)("code",null,"model"),", and its fields\nwith ",(0,a.kt)("code",null,"model.fieldname"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"named\nIn case of multiple objects, you can put the DTOs into named contexts and refer them by their name:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        final Contract dto = ContractDataFactory.createContract();\n        final OrganizationUnit orgUnit = OrgUnitDataFactory.createOrgUnit();\n\n        final Officer officer = OfficerDataFactory.createOfficer();\n        final DocumentProperties documentProperties = DocDataFactory.createDocData(transactionId);\n\n        final TemplateContext context = new TemplateContext();\n        context.getCtx().put("org", orgUnit);\n        context.getCtx().put("officer", officer);\n        context.getCtx().put("contract", dto);\n        context.getCtx().put("doc", documentProperties);\n')),(0,a.kt)("p",null,"  This way you can refer the values by their context names like ",(0,a.kt)("code",null,"ctx","['contract']",".field"),"\ne.q. ",(0,a.kt)("inlineCode",{parentName:"p"},"${ctx['contextname'].myValue}"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementations")),(0,a.kt)("h3",{id:"docx-stamper-processor"},"Docx-stamper processor"),(0,a.kt)("h4",{id:"input-format-docx"},"Input format: .docx"),(0,a.kt)("p",null,"Processes .docx templates using comment markup implemented by the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/thombergs/docx-stamper"},"docx stamper")," tool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"processors.provider.docx=net.videki.templateutils.template.core.processor.input.docx.DocxStamperInputTemplateProcessor\n")),(0,a.kt)("h3",{id:"noop-processor"},"Noop processor"),(0,a.kt)("h4",{id:"input-format--"},"Input format: -"),(0,a.kt)("p",null,"Simple loopback processor for returning input templates untouched."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"processors.provider.noop=net.videki.templateutils.template.core.processor.input.noop.NoopTemplateProcessor\n")),(0,a.kt)("h3",{id:"jxls-processor"},"Jxls processor"),(0,a.kt)("h4",{id:"input-format-xlsx"},"Input format: .xlsx"),(0,a.kt)("p",null,".xlsx processor for processing ",(0,a.kt)("a",{parentName:"p",href:"http://jxls.sourceforge.net/"},"Jxls")," marked-up templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"processors.provider.xlsx=net.videki.templateutils.template.core.processor.input.xlsx.JxlsInputTemplateProcessor\n")),(0,a.kt)("h2",{id:"converters"},"Converters"),(0,a.kt)("p",null,"Converters - as you may guess from the name - are format converters from an input format into an output format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implementations")),(0,a.kt)("h3",{id:"pdfbox-docx-pdf-converter"},"Pdfbox docx-pdf converter"),(0,a.kt)("p",null,"Converts docx documents into pdf using ",(0,a.kt)("a",{parentName:"p",href:"https://pdfbox.apache.org/"},"PDF box"),"."),(0,a.kt)("h2",{id:"result-stores"},"Result stores"),(0,a.kt)("h2",{id:"registries"},"Registries"),(0,a.kt)("h2",{id:"input-and-output-types"},"Input and output types"),(0,a.kt)("h3",{id:"document-structures"},"Document structures"),(0,a.kt)("p",null,"Document structures are a set of templates, or template alternatives (we call these ",(0,a.kt)("code",null,"TemplateElement"),")\nwith a unique id describing the content that has to be generated."),(0,a.kt)("p",null,"It basically describes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the list of template elements"),(0,a.kt)("li",{parentName:"ul"},"how the result should look like: a singe, merged document is needed, or separate ones."),(0,a.kt)("li",{parentName:"ul"},"the number of copies of the whole result"),(0,a.kt)("li",{parentName:"ul"},"the output format into which the result has to converted (one of the output formats or unchanged)")),(0,a.kt)("h4",{id:"template-elements"},"Template elements"),(0,a.kt)("p",null,"A template element is a single template to be processed during generation identified by a given name\nlike ",(0,a.kt)("code",null,'"contract"'),", etc. with locale-based alternatives and a default locale."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# contract_v02.yml\n---\ndocumentStructureId: "109a562d-8290-407d-98e1-e5e31c9808b7"\nelements:\n  - templateElementId:\n      id: "cover"\n    templateNames:\n      hu_HU: "/covers/cover_v03.docx"\n    defaultLocale: "hu_HU"\n    count: 1\n  - templateElementId:\n      id: "contract"\n    templateNames:\n      en: "/contracts/vintage/contract_v09_en.docx"\n      hu: "/contracts/vintage/contract_v09_hu.docx"\n    defaultLocale: "hu_HU"\n    count: 1\n  - templateElementId:\n      id: "terms"\n    templateNames:\n      hu: "/term/terms_v02.docx"\n    defaultLocale: "hu_HU"\n    count: 1\n  - templateElementId:\n      id: "conditions"\n    templateNames:\n      hu: "/conditions/vintage/conditions_eco_v11.xlsx"\n    defaultLocale: "hu_HU"\n    count: 1\nresultMode: "SEPARATE_DOCUMENTS"\noutputFormat: "UNCHANGED"\ncopies: 1\n\n')),(0,a.kt)("h3",{id:"value-sets"},"Value sets"),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,"ValueSet")," is a one-time holder object, in which we collect data for a specific document structure."),(0,a.kt)("p",null,"The container can hold"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"global value contexts\nThese are used for all templates not having a specific context. Use this by adding the context\nwith ",(0,a.kt)("code",null,"TemplateElementId.getGlobalTemplateElementId()")),(0,a.kt)("li",{parentName:"ul"},"template-level contexts\nIf a template has to marked with a different object collection, than others, a template-level context can be added\nto the value set with the required template's ",(0,a.kt)("code",null,"templateElementId"),".")),(0,a.kt)("p",null,"You can instantiate a value set as shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    final ValueSet values = new ValueSet(structure.getDocumentStructureId(), tranId);\n    values.getValues().put(TemplateElementId.getGlobalTemplateElementId(), getContractTestData(tranId));\n")),(0,a.kt)("p",null,"The transaction can be bound to the surrounding business transaction."),(0,a.kt)("h3",{id:"generation-results"},"Generation results"),(0,a.kt)("p",null,"A generation result is another holder object containing the result document stream (when using streams\nwithout saving the result into the result store), or descriptors of the saved results."))}d.isMDXComponent=!0}}]);