import * as React from "react";
import {
  Sandpack,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import styles from "./styles2.module.css";
import InitialCodeBlock from "@theme-init/CodeBlock";
import { REACT_TEMPLATE } from "./templates/react";
import { TODO_STORE_CODE, TODO_STORE_CODE_BOXED, TODO_STORE_CODE_PLAIN } from "./templates/stores";
import { VUE_TEMPLATE } from "./templates/vue";

export default function CodeBlock(props: any) {
  if (!props.live) {
    return <InitialCodeBlock {...props} />;
  }
  // return <div>{JSON.stringify(props)}</div>;
  let template: "vue3" | "vanilla" = "vanilla" as "vanilla";
  let customTemplate: any;

  if (props.vue) {
    customTemplate = {
      ...VUE_TEMPLATE,
      files: {
        ...VUE_TEMPLATE.files,
        "/src/App.vue": props.children,
        "/src/store.ts": TODO_STORE_CODE,
      },
    };
    template = "vue3" as "vue3";
  } else if (props.plain) {
    customTemplate = {
      ...REACT_TEMPLATE,
      files: {
        ...REACT_TEMPLATE.files,
        "/main.js": props.children,
        "/App.tsx": {
          code: `import * as React from "react";
          
          const el = document.createElement("div");
          el.id = "app";

          export default function App() { 
            
            const cb = React.useCallback((ref) => {
              if (ref) {
                ref.appendChild(el);
                require("./main");
              }
            });
            return <div ref={cb} className="plainWrapper"></div>; 
          }
          `,
          hidden: true,
        },
        "/store.js": TODO_STORE_CODE_PLAIN,
      },
      main: "/main.js",
    };
  } else {
    customTemplate = {
      ...REACT_TEMPLATE,
      files: {
        ...REACT_TEMPLATE.files,
        "/App.tsx": props.children,
        "/store.ts": props.boxed ? TODO_STORE_CODE_BOXED : TODO_STORE_CODE,
      },
    };
  }
  debugger;
  return (
    <SandpackProvider
      //   environment="create-react-app-typescript"
      //   entry="/App.ts"
      template={template}
      customSetup={
        {
          ...customTemplate,
          dependencies: {
            ...customTemplate.dependencies,
            "@syncedstore/core": "latest",
            "@syncedstore/react": "latest",
            yjs: "latest",
            "y-webrtc": "latest",
            "react-inspector": "latest",
            mobx: "latest",
            "mobx-react-lite": "latest",
            "@tiptap/react": "latest",
            "@tiptap/starter-kit": "latest",
            "@tiptap/extension-collaboration": "latest",
            "@tiptap/extension-collaboration-cursor": "latest",
            "@tiptap/extension-placeholder": "latest",
          },
          files: {
            ...customTemplate.files,
          },
        } as any
      }
    >
      <SandpackLayout>
        <SandpackCodeEditor />
      </SandpackLayout>
      <div style={{ height: 10 }}></div>
      <SandpackLayout>
        <SandpackPreview />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
}
