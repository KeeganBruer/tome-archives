# Tome Editor - Quick Start Guide

## 🚀 Get Running in 30 Seconds

```bash
cd TomeEditor
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🎯 First Time Using?

### Option 1: Create a New .tome File

1. **Click "Create New"** (in header or upload screen)
2. **Enter a filename** (e.g., "my-project")
3. **Edit the template** that appears
4. **Click "Save Changes"** (or press Ctrl/Cmd + S)
5. **Click "Download"** to get your new file

### Option 2: Edit an Existing .tome File

1. **Drag a `.tome` file** onto the upload area (or click "Choose File")
2. **Edit the JSON** in the Monaco editor
3. **Click "Save Changes"** (or press Ctrl/Cmd + S)
4. **Click "Download"** to get your modified file

That's it! 🎉

## 📁 What's a .tome File?

A `.tome` file is simply a **ZIP archive** with a `.tome` extension that contains a `tome.json` file at the root.

## ✨ Key Features

- ✅ **Create new .tome files** - Start from scratch with a template
- ✅ **No server uploads** - Everything happens in your browser
- ✅ **Monaco Editor** - Same editor as VS Code
- ✅ **Real-time validation** - Instant feedback on JSON errors
- ✅ **Keyboard shortcuts** - Ctrl/Cmd + S to save, etc.
- ✅ **Smart buttons** - Disabled when actions aren't available

## 🎹 Essential Shortcuts

| Key | Action |
|-----|--------|
| `Ctrl/Cmd + S` | Save |
| `Ctrl/Cmd + D` | Download |
| `Ctrl/Cmd + Shift + F` | Format JSON |

## ❓ Need Help?

- **Full documentation**: See `USAGE.md`
- **Feature list**: See `FEATURES.md`
- **Implementation plan**: See `PLAN.md`
- **Project info**: See `README.md`

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📦 Project Structure

```
TomeEditor/
├── app/              # Next.js pages
├── components/       # React components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
└── public/           # Static assets
```

## ⚡ Quick Tips

1. **Files stay local** - Your `.tome` file never leaves your computer
2. **Save often** - Use Ctrl/Cmd + S to save changes to the in-memory archive
3. **Format for readability** - Click Format to prettify your JSON
4. **Reset if needed** - Made a mistake? Click Reset to start over
5. **Check validation** - Green ✅ = valid, Red ❌ = invalid JSON

## 🐛 Common Issues

**"tome.json not found"**
→ Make sure `tome.json` is at the **root** of the archive, not in a folder

**Can't download**
→ Fix any JSON syntax errors first (must be valid JSON)

**Editor is blank**
→ Try refreshing the page and re-uploading your file

---

**Happy editing! 🎨**
