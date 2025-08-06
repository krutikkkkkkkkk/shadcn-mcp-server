# shadcn MCP Server

A Model Context Protocol server for shadcn/ui components. Helps AI assistants discover, install, and generate code for shadcn/ui components.

## Installation

### Option 1: Use with Claude Desktop (Recommended)

Add to your Claude Desktop `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn-mcp-server"]
    }
  }
}
```

### Option 2: Clone and Run Locally

```bash
git clone https://github.com/krutikkkkkkkkk/shadcn-mcp-server.git
cd shadcn-mcp-server
npm install
npm run build
npm start
```

### Option 3: Use with Any MCP Client

Install globally:
```bash
npm install -g shadcn-mcp-server
```

Then configure your MCP client to connect to `shadcn-mcp-server`.

## Features

- List and search shadcn/ui components
- Get component details and dependencies  
- Generate installation commands
- Create usage examples with proper imports

## Available Tools

- `list_shadcn_components` - Browse available components
- `get_component_info` - Get component details
- `generate_component_usage` - Generate code examples
- `get_installation_steps` - Get installation instructions

## Usage

Once installed, you can ask your AI assistant:

- **"What shadcn components are available for forms?"**
- **"Show me how to use the button component"** 
- **"How do I install the card and dialog components?"**
- **"Generate a complete form example with shadcn components"**

The server will provide accurate information, installation commands, and code examples.

## Example Conversation

```
You: "I need a modal dialog for my React app"

AI: Let me help you with the shadcn dialog component.

[Uses get_component_info and generate_component_usage tools]

AI: Here's how to install and use the Dialog component:

Installation:
npm install shadcn@latest add dialog

Usage:
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Your dialog content here</p>
  </DialogContent>
</Dialog>
```

## Supported Components (37 total)

**Layout & Navigation**: Accordion, Breadcrumb, Card, Carousel, Collapsible, Navigation Menu, Pagination, Separator, Sheet, Tabs

**Forms & Input**: Button, Checkbox, Form, Input, Label, Radio Group, Select, Slider, Switch, Textarea, Toggle, Toggle Group

**Feedback & Overlays**: Alert, Alert Dialog, Dialog, HoverCard, Popover, Progress, Toast, Tooltip

**Data Display**: Avatar, Badge, Calendar, Command, Skeleton, Table

**Interaction**: Context Menu, Dropdown Menu, Menubar, Scroll Area

## For Developers

```bash
npm install
npm run dev
```

## Development

- `npm run build` - Build TypeScript
- `npm run dev` - Run in development mode
- `npm start` - Run built server

## Usage

Connect with any MCP client and ask:
- "What shadcn components are available?"
- "Show me how to use the button component"
- "How do I install the card and dialog components?"
