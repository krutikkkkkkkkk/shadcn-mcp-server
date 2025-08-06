#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

// shadcn/ui component registry data
const SHADCN_COMPONENTS = {
  "accordion": {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings that each reveal a section of content",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["components/ui/accordion.tsx"],
    installCommand: "npx shadcn@latest add accordion"
  },
  "alert": {
    name: "Alert",
    description: "Displays a callout for user attention",
    dependencies: ["lucide-react"],
    files: ["components/ui/alert.tsx"],
    installCommand: "npx shadcn@latest add alert"
  },
  "alert-dialog": {
    name: "AlertDialog",
    description: "A modal dialog that interrupts the user with important content and expects a response",
    dependencies: ["@radix-ui/react-alert-dialog"],
    files: ["components/ui/alert-dialog.tsx"],
    installCommand: "npx shadcn@latest add alert-dialog"
  },
  "avatar": {
    name: "Avatar",
    description: "An image element with a fallback for representing the user",
    dependencies: ["@radix-ui/react-avatar"],
    files: ["components/ui/avatar.tsx"],
    installCommand: "npx shadcn@latest add avatar"
  },
  "badge": {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge",
    dependencies: [],
    files: ["components/ui/badge.tsx"],
    installCommand: "npx shadcn@latest add badge"
  },
  "breadcrumb": {
    name: "Breadcrumb",
    description: "Displays the path to the current resource using a hierarchy of links",
    dependencies: ["@radix-ui/react-slot"],
    files: ["components/ui/breadcrumb.tsx"],
    installCommand: "npx shadcn@latest add breadcrumb"
  },
  "button": {
    name: "Button",
    description: "Displays a button or a component that looks like a button",
    dependencies: ["@radix-ui/react-slot"],
    files: ["components/ui/button.tsx"],
    installCommand: "npx shadcn@latest add button"
  },
  "calendar": {
    name: "Calendar",
    description: "A date field component that allows users to enter and edit date",
    dependencies: ["react-day-picker"],
    files: ["components/ui/calendar.tsx"],
    installCommand: "npx shadcn@latest add calendar"
  },
  "card": {
    name: "Card",
    description: "Displays a card with header, content, and footer",
    dependencies: [],
    files: ["components/ui/card.tsx"],
    installCommand: "npx shadcn@latest add card"
  },
  "carousel": {
    name: "Carousel",
    description: "A carousel with motion and swipe built using Embla",
    dependencies: ["embla-carousel-react"],
    files: ["components/ui/carousel.tsx"],
    installCommand: "npx shadcn@latest add carousel"
  },
  "checkbox": {
    name: "Checkbox",
    description: "A control that allows the user to toggle between checked and not checked",
    dependencies: ["@radix-ui/react-checkbox"],
    files: ["components/ui/checkbox.tsx"],
    installCommand: "npx shadcn@latest add checkbox"
  },
  "collapsible": {
    name: "Collapsible",
    description: "An interactive component which expands/collapses a panel",
    dependencies: ["@radix-ui/react-collapsible"],
    files: ["components/ui/collapsible.tsx"],
    installCommand: "npx shadcn@latest add collapsible"
  },
  "command": {
    name: "Command",
    description: "Fast, composable, unstyled command menu for React",
    dependencies: ["cmdk"],
    files: ["components/ui/command.tsx"],
    installCommand: "npx shadcn@latest add command"
  },
  "context-menu": {
    name: "ContextMenu",
    description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button",
    dependencies: ["@radix-ui/react-context-menu"],
    files: ["components/ui/context-menu.tsx"],
    installCommand: "npx shadcn@latest add context-menu"
  },
  "dialog": {
    name: "Dialog",
    description: "A window overlaid on either the primary window or another dialog window",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["components/ui/dialog.tsx"],
    installCommand: "npx shadcn@latest add dialog"
  },
  "dropdown-menu": {
    name: "Dropdown Menu",
    description: "Displays a menu to the user—such as a set of actions or functions—triggered by a button",
    dependencies: ["@radix-ui/react-dropdown-menu"],
    files: ["components/ui/dropdown-menu.tsx"],
    installCommand: "npx shadcn@latest add dropdown-menu"
  },
  "form": {
    name: "Form",
    description: "Building forms with validation and accessible form controls",
    dependencies: ["@hookform/resolvers", "react-hook-form"],
    files: ["components/ui/form.tsx"],
    installCommand: "npx shadcn@latest add form"
  },
  "hover-card": {
    name: "HoverCard",
    description: "For sighted users to preview content available behind a link",
    dependencies: ["@radix-ui/react-hover-card"],
    files: ["components/ui/hover-card.tsx"],
    installCommand: "npx shadcn@latest add hover-card"
  },
  "input": {
    name: "Input",
    description: "Displays a form input field or a component that looks like an input field",
    dependencies: [],
    files: ["components/ui/input.tsx"],
    installCommand: "npx shadcn@latest add input"
  },
  "label": {
    name: "Label",
    description: "Renders an accessible label associated with controls",
    dependencies: ["@radix-ui/react-label"],
    files: ["components/ui/label.tsx"],
    installCommand: "npx shadcn@latest add label"
  },
  "menubar": {
    name: "Menubar",
    description: "A visually persistent menu common in desktop applications",
    dependencies: ["@radix-ui/react-menubar"],
    files: ["components/ui/menubar.tsx"],
    installCommand: "npx shadcn@latest add menubar"
  },
  "navigation-menu": {
    name: "NavigationMenu",
    description: "A collection of links for navigating websites",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: ["components/ui/navigation-menu.tsx"],
    installCommand: "npx shadcn@latest add navigation-menu"
  },
  "pagination": {
    name: "Pagination",
    description: "Pagination with page navigation, next and previous links",
    dependencies: ["lucide-react"],
    files: ["components/ui/pagination.tsx"],
    installCommand: "npx shadcn@latest add pagination"
  },
  "popover": {
    name: "Popover",
    description: "Displays rich content in a portal, triggered by a button",
    dependencies: ["@radix-ui/react-popover"],
    files: ["components/ui/popover.tsx"],
    installCommand: "npx shadcn@latest add popover"
  },
  "progress": {
    name: "Progress",
    description: "Displays an indicator showing the completion progress of a task",
    dependencies: ["@radix-ui/react-progress"],
    files: ["components/ui/progress.tsx"],
    installCommand: "npx shadcn@latest add progress"
  },
  "radio-group": {
    name: "RadioGroup",
    description: "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time",
    dependencies: ["@radix-ui/react-radio-group"],
    files: ["components/ui/radio-group.tsx"],
    installCommand: "npx shadcn@latest add radio-group"
  },
  "scroll-area": {
    name: "ScrollArea",
    description: "Visually or semantically separates content",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["components/ui/scroll-area.tsx"],
    installCommand: "npx shadcn@latest add scroll-area"
  },
  "select": {
    name: "Select",
    description: "Displays a list of options for the user to pick from—triggered by a button",
    dependencies: ["@radix-ui/react-select"],
    files: ["components/ui/select.tsx"],
    installCommand: "npx shadcn@latest add select"
  },
  "separator": {
    name: "Separator",
    description: "Visually or semantically separates content",
    dependencies: ["@radix-ui/react-separator"],
    files: ["components/ui/separator.tsx"],
    installCommand: "npx shadcn@latest add separator"
  },
  "sheet": {
    name: "Sheet",
    description: "Extends the Dialog component to display content that complements the main content of the screen",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["components/ui/sheet.tsx"],
    installCommand: "npx shadcn@latest add sheet"
  },
  "skeleton": {
    name: "Skeleton",
    description: "Use to show a placeholder while content is loading",
    dependencies: [],
    files: ["components/ui/skeleton.tsx"],
    installCommand: "npx shadcn@latest add skeleton"
  },
  "slider": {
    name: "Slider",
    description: "An input where the user selects a value from within a given range",
    dependencies: ["@radix-ui/react-slider"],
    files: ["components/ui/slider.tsx"],
    installCommand: "npx shadcn@latest add slider"
  },
  "switch": {
    name: "Switch",
    description: "A control that allows the user to toggle between checked and not checked",
    dependencies: ["@radix-ui/react-switch"],
    files: ["components/ui/switch.tsx"],
    installCommand: "npx shadcn@latest add switch"
  },
  "table": {
    name: "Table",
    description: "A responsive table component",
    dependencies: [],
    files: ["components/ui/table.tsx"],
    installCommand: "npx shadcn@latest add table"
  },
  "tabs": {
    name: "Tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time",
    dependencies: ["@radix-ui/react-tabs"],
    files: ["components/ui/tabs.tsx"],
    installCommand: "npx shadcn@latest add tabs"
  },
  "textarea": {
    name: "Textarea",
    description: "Displays a form textarea or a component that looks like a textarea",
    dependencies: [],
    files: ["components/ui/textarea.tsx"],
    installCommand: "npx shadcn@latest add textarea"
  },
  "toast": {
    name: "Toast",
    description: "A succinct message that is displayed temporarily",
    dependencies: ["@radix-ui/react-toast"],
    files: ["components/ui/toast.tsx", "components/ui/toaster.tsx", "components/ui/use-toast.ts"],
    installCommand: "npx shadcn@latest add toast"
  },
  "toggle": {
    name: "Toggle",
    description: "A two-state button that can be either on or off",
    dependencies: ["@radix-ui/react-toggle"],
    files: ["components/ui/toggle.tsx"],
    installCommand: "npx shadcn@latest add toggle"
  },
  "toggle-group": {
    name: "ToggleGroup",
    description: "A set of two-state buttons that can be toggled on or off",
    dependencies: ["@radix-ui/react-toggle-group"],
    files: ["components/ui/toggle-group.tsx"],
    installCommand: "npx shadcn@latest add toggle-group"
  },
  "tooltip": {
    name: "Tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it",
    dependencies: ["@radix-ui/react-tooltip"],
    files: ["components/ui/tooltip.tsx"],
    installCommand: "npx shadcn@latest add tooltip"
  }
};

// Define the tools
const tools: Tool[] = [
  {
    name: "list_shadcn_components",
    description: "List all available shadcn/ui components with their descriptions and installation commands",
    inputSchema: {
      type: "object",
      properties: {
        search: {
          type: "string",
          description: "Optional search term to filter components"
        }
      }
    }
  },
  {
    name: "get_component_info",
    description: "Get detailed information about a specific shadcn/ui component including dependencies and usage examples",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "The component name (e.g., 'button', 'card', 'dialog')"
        }
      },
      required: ["component"]
    }
  },
  {
    name: "generate_component_usage",
    description: "Generate example code showing how to use a shadcn/ui component",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "The component name to generate usage for"
        },
        variant: {
          type: "string",
          description: "Optional variant or style to demonstrate"
        },
        includeImports: {
          type: "boolean",
          description: "Whether to include import statements",
          default: true
        }
      },
      required: ["component"]
    }
  },
  {
    name: "get_installation_steps",
    description: "Get step-by-step installation instructions for shadcn/ui components",
    inputSchema: {
      type: "object",
      properties: {
        components: {
          type: "array",
          items: {
            type: "string"
          },
          description: "List of component names to install"
        },
        includeInit: {
          type: "boolean",
          description: "Whether to include shadcn/ui project initialization steps",
          default: false
        }
      },
      required: ["components"]
    }
  }
];

// Create the server
const server = new Server(
  {
    name: "shadcn-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tool handlers
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "list_shadcn_components": {
      const search = typeof args?.search === 'string' ? args.search.toLowerCase() : "";
      const components = Object.entries(SHADCN_COMPONENTS)
        .filter(([key, comp]) => 
          !search || 
          key.includes(search) || 
          comp.name.toLowerCase().includes(search) ||
          comp.description.toLowerCase().includes(search)
        )
        .map(([key, comp]) => ({
          id: key,
          name: comp.name,
          description: comp.description,
          installCommand: comp.installCommand
        }));

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              components,
              total: components.length,
              searchTerm: search || "all"
            }, null, 2)
          }
        ]
      };
    }

    case "get_component_info": {
      const componentId = typeof args?.component === 'string' ? args.component.toLowerCase() : "";
      const component = SHADCN_COMPONENTS[componentId as keyof typeof SHADCN_COMPONENTS];
      
      if (!component) {
        return {
          content: [
            {
              type: "text",
              text: `Component "${componentId}" not found. Available components: ${Object.keys(SHADCN_COMPONENTS).join(", ")}`
            }
          ]
        };
      }

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              name: component.name,
              description: component.description,
              dependencies: component.dependencies,
              files: component.files,
              installCommand: component.installCommand
            }, null, 2)
          }
        ]
      };
    }

    case "generate_component_usage": {
      const componentId = typeof args?.component === 'string' ? args.component.toLowerCase() : "";
      const variant = typeof args?.variant === 'string' ? args.variant : "default";
      const includeImports = args?.includeImports !== false;
      
      const component = SHADCN_COMPONENTS[componentId as keyof typeof SHADCN_COMPONENTS];
      
      if (!component) {
        return {
          content: [
            {
              type: "text",
              text: `Component "${componentId}" not found. Available components: ${Object.keys(SHADCN_COMPONENTS).join(", ")}`
            }
          ]
        };
      }

      let example = "";
      
      if (includeImports) {
        example += `import { ${component.name} } from "@/components/ui/${componentId}"\n\n`;
      }

      // Generate basic usage examples based on component type
      switch (componentId) {
        case "button":
          example += `<Button variant="${variant}">Click me</Button>`;
          break;
        case "card":
          example += `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`;
          break;
        case "dialog":
          example += `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description goes here.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;
          break;
        case "input":
          example += `<Input placeholder="Enter text here..." />`;
          break;
        case "alert":
          example += `<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`;
          break;
        default:
          example += `<${component.name}>\n  {/* ${component.description} */}\n</${component.name}>`;
      }

      return {
        content: [
          {
            type: "text",
            text: example
          }
        ]
      };
    }

    case "get_installation_steps": {
      const components = Array.isArray(args?.components) ? args.components : [];
      const includeInit = args?.includeInit || false;
      
      let steps = [];
      
      if (includeInit) {
        steps.push(
          "1. Initialize shadcn/ui in your project:",
          "   npx shadcn@latest init",
          ""
        );
      }
      
      steps.push("Installation commands:");
      
      components.forEach((comp: unknown, index: number) => {
        const compName = typeof comp === 'string' ? comp : '';
        const component = SHADCN_COMPONENTS[compName.toLowerCase() as keyof typeof SHADCN_COMPONENTS];
        if (component) {
          steps.push(`${index + 1}. ${component.name}:`);
          steps.push(`   ${component.installCommand}`);
          if (component.dependencies.length > 0) {
            steps.push(`   Dependencies: ${component.dependencies.join(", ")}`);
          }
          steps.push("");
        }
      });
      
      if (components.length > 1) {
        steps.push("Or install all at once:");
        steps.push(`npx shadcn@latest add ${components.join(" ")}`);
      }

      return {
        content: [
          {
            type: "text",
            text: steps.join("\n")
          }
        ]
      };
    }

    default:
      return {
        content: [
          {
            type: "text",
            text: `Unknown tool: ${name}`
          }
        ]
      };
  }
});

// Start the server
async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

runServer().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
