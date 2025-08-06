#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("@modelcontextprotocol/sdk/server/index.js");
var stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
var types_js_1 = require("@modelcontextprotocol/sdk/types.js");
// shadcn/ui component registry data
var SHADCN_COMPONENTS = {
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
    "checkbox": {
        name: "Checkbox",
        description: "A control that allows the user to toggle between checked and not checked",
        dependencies: ["@radix-ui/react-checkbox"],
        files: ["components/ui/checkbox.tsx"],
        installCommand: "npx shadcn@latest add checkbox"
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
    "popover": {
        name: "Popover",
        description: "Displays rich content in a portal, triggered by a button",
        dependencies: ["@radix-ui/react-popover"],
        files: ["components/ui/popover.tsx"],
        installCommand: "npx shadcn@latest add popover"
    },
    "select": {
        name: "Select",
        description: "Displays a list of options for the user to pick from—triggered by a button",
        dependencies: ["@radix-ui/react-select"],
        files: ["components/ui/select.tsx"],
        installCommand: "npx shadcn@latest add select"
    },
    "sheet": {
        name: "Sheet",
        description: "Extends the Dialog component to display content that complements the main content of the screen",
        dependencies: ["@radix-ui/react-dialog"],
        files: ["components/ui/sheet.tsx"],
        installCommand: "npx shadcn@latest add sheet"
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
    "tooltip": {
        name: "Tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it",
        dependencies: ["@radix-ui/react-tooltip"],
        files: ["components/ui/tooltip.tsx"],
        installCommand: "npx shadcn@latest add tooltip"
    }
};
// Define the tools
var tools = [
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
var server = new index_js_1.Server({
    name: "shadcn-mcp-server",
    version: "1.0.0",
}, {
    capabilities: {
        tools: {},
    },
});
// Tool handlers
server.setRequestHandler(types_js_1.ListToolsRequestSchema, function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, { tools: tools }];
    });
}); });
server.setRequestHandler(types_js_1.CallToolRequestSchema, function (request) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, args, search_1, components, componentId, component, componentId, variant, includeImports, component, example, components, includeInit, steps_1;
    return __generator(this, function (_b) {
        _a = request.params, name = _a.name, args = _a.arguments;
        switch (name) {
            case "list_shadcn_components": {
                search_1 = typeof (args === null || args === void 0 ? void 0 : args.search) === 'string' ? args.search.toLowerCase() : "";
                components = Object.entries(SHADCN_COMPONENTS)
                    .filter(function (_a) {
                    var key = _a[0], comp = _a[1];
                    return !search_1 ||
                        key.includes(search_1) ||
                        comp.name.toLowerCase().includes(search_1) ||
                        comp.description.toLowerCase().includes(search_1);
                })
                    .map(function (_a) {
                    var key = _a[0], comp = _a[1];
                    return ({
                        id: key,
                        name: comp.name,
                        description: comp.description,
                        installCommand: comp.installCommand
                    });
                });
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: JSON.stringify({
                                    components: components,
                                    total: components.length,
                                    searchTerm: search_1 || "all"
                                }, null, 2)
                            }
                        ]
                    }];
            }
            case "get_component_info": {
                componentId = typeof (args === null || args === void 0 ? void 0 : args.component) === 'string' ? args.component.toLowerCase() : "";
                component = SHADCN_COMPONENTS[componentId];
                if (!component) {
                    return [2 /*return*/, {
                            content: [
                                {
                                    type: "text",
                                    text: "Component \"".concat(componentId, "\" not found. Available components: ").concat(Object.keys(SHADCN_COMPONENTS).join(", "))
                                }
                            ]
                        }];
                }
                return [2 /*return*/, {
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
                    }];
            }
            case "generate_component_usage": {
                componentId = typeof (args === null || args === void 0 ? void 0 : args.component) === 'string' ? args.component.toLowerCase() : "";
                variant = typeof (args === null || args === void 0 ? void 0 : args.variant) === 'string' ? args.variant : "default";
                includeImports = (args === null || args === void 0 ? void 0 : args.includeImports) !== false;
                component = SHADCN_COMPONENTS[componentId];
                if (!component) {
                    return [2 /*return*/, {
                            content: [
                                {
                                    type: "text",
                                    text: "Component \"".concat(componentId, "\" not found. Available components: ").concat(Object.keys(SHADCN_COMPONENTS).join(", "))
                                }
                            ]
                        }];
                }
                example = "";
                if (includeImports) {
                    example += "import { ".concat(component.name, " } from \"@/components/ui/").concat(componentId, "\"\n\n");
                }
                // Generate basic usage examples based on component type
                switch (componentId) {
                    case "button":
                        example += "<Button variant=\"".concat(variant, "\">Click me</Button>");
                        break;
                    case "card":
                        example += "<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>Card content goes here.</p>\n  </CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>";
                        break;
                    case "dialog":
                        example += "<Dialog>\n  <DialogTrigger asChild>\n    <Button variant=\"outline\">Open Dialog</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Dialog Title</DialogTitle>\n      <DialogDescription>\n        Dialog description goes here.\n      </DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <Button>Save changes</Button>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>";
                        break;
                    case "input":
                        example += "<Input placeholder=\"Enter text here...\" />";
                        break;
                    case "alert":
                        example += "<Alert>\n  <AlertCircle className=\"h-4 w-4\" />\n  <AlertTitle>Heads up!</AlertTitle>\n  <AlertDescription>\n    You can add components to your app using the cli.\n  </AlertDescription>\n</Alert>";
                        break;
                    default:
                        example += "<".concat(component.name, ">\n  {/* ").concat(component.description, " */}\n</").concat(component.name, ">");
                }
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: example
                            }
                        ]
                    }];
            }
            case "get_installation_steps": {
                components = Array.isArray(args === null || args === void 0 ? void 0 : args.components) ? args.components : [];
                includeInit = (args === null || args === void 0 ? void 0 : args.includeInit) || false;
                steps_1 = [];
                if (includeInit) {
                    steps_1.push("1. Initialize shadcn/ui in your project:", "   npx shadcn@latest init", "");
                }
                steps_1.push("Installation commands:");
                components.forEach(function (comp, index) {
                    var compName = typeof comp === 'string' ? comp : '';
                    var component = SHADCN_COMPONENTS[compName.toLowerCase()];
                    if (component) {
                        steps_1.push("".concat(index + 1, ". ").concat(component.name, ":"));
                        steps_1.push("   ".concat(component.installCommand));
                        if (component.dependencies.length > 0) {
                            steps_1.push("   Dependencies: ".concat(component.dependencies.join(", ")));
                        }
                        steps_1.push("");
                    }
                });
                if (components.length > 1) {
                    steps_1.push("Or install all at once:");
                    steps_1.push("npx shadcn@latest add ".concat(components.join(" ")));
                }
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: steps_1.join("\n")
                            }
                        ]
                    }];
            }
            default:
                return [2 /*return*/, {
                        content: [
                            {
                                type: "text",
                                text: "Unknown tool: ".concat(name)
                            }
                        ]
                    }];
        }
        return [2 /*return*/];
    });
}); });
// Start the server
function runServer() {
    return __awaiter(this, void 0, void 0, function () {
        var transport;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    transport = new stdio_js_1.StdioServerTransport();
                    return [4 /*yield*/, server.connect(transport)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
runServer().catch(function (error) {
    console.error("Server error:", error);
    process.exit(1);
});
