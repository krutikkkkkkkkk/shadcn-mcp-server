# Publishing to GitHub & NPM

## Step 1: Publish to GitHub

1. **Create a new repository on GitHub** named `shadcn-mcp-server`

2. **Update package.json URLs** (replace `krutikkkkkkkkk` with your GitHub username):
   ```json
   "repository": {
     "type": "git", 
     "url": "git+https://github.com/krutikkkkkkkkk/shadcn-mcp-server.git"
   },
   "bugs": {
     "url": "https://github.com/krutikkkkkkkkk/shadcn-mcp-server/issues"
   },
   "homepage": "https://github.com/krutikkkkkkkkk/shadcn-mcp-server#readme"
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: shadcn MCP server"
   git branch -M main
   git remote add origin https://github.com/krutikkkkkkkkk/shadcn-mcp-server.git
   git push -u origin main
   ```

## Step 2: Publish to NPM (Optional)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Login to NPM**:
   ```bash
   npm login
   ```

3. **Publish**:
   ```bash
   npm publish
   ```

## Step 3: Update README

Update the README.md installation section with your actual GitHub username.

## How Users Will Install

### Via NPM (if published):
```bash
npm install -g shadcn-mcp-server
```

### Via GitHub:
```bash
git clone https://github.com/krutikkkkkkkkk/shadcn-mcp-server.git
cd shadcn-mcp-server
npm install
npm run build
npm start
```

### With Claude Desktop:
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
